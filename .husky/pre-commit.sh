#!/bin/sh

. "$(dirname "$0")/_/husky.sh"

./node_modules/.bin/pretty-quick --staged
