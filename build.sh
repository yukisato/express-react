#!/bin/sh

CURRENT_DIR=$(pwd)

# Install monorepo packages
npm install --only-dev && npm install

# Build the backend project
cd ${CURRENT_DIR}/packages/backend
npx yarn build

# Build the frontend project
cd ${CURRENT_DIR}/packages/frontend
npx yarn build
