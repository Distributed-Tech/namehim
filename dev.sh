#!/usr/bin/env bash
# dev.sh — start local dev server with a clean database
# Usage: ./dev.sh [--keep]   (--keep skips deleting local.db)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [[ "${1:-}" != "--keep" ]]; then
  rm -f local.db
  echo "♻️  Wiped local.db — starting fresh"
else
  echo "📦  Keeping existing local.db"
fi

exec node local-server.js
