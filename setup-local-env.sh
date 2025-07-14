#!/bin/bash
# Setup all .env for local development (safe for Mac/Linux)

set -e

cp -n backend/.env.example backend/.env || echo "backend/.env already exists, skipped."
cp -n web/.env.example web/.env || echo "web/.env already exists, skipped."
cp -n backend/.env.postgres.example backend/.env.postgres || echo "backend/.env.postgres already exists, skipped."

echo "All .env files are ready. You can now run: docker compose up --build"
