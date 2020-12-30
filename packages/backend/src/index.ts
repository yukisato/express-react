import express, { Router } from "express";
import path from "path";

const app = express();
const docRoot = path.resolve(__dirname, "../../frontend/build");

// Serve static files
app.use(express.static(docRoot));

// Routings for API requests
// This router sould be separated in other files in actual projects
const apiRouter = Router();
apiRouter.get("/hello", (req, res) => {
  res.send(
    JSON.stringify({
      message: `Hello World! (time: ${Date.now()})`,
    })
  );
});
app.use("/api", apiRouter);

// Always return index.html for SPA routes except the specific routes above
app.get("*", (_, res) => {
  res.sendFile(`${docRoot}/index.html`);
});

const port = process.env.PORT ?? 8000;
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
