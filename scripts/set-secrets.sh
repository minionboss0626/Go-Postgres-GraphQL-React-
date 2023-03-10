#!/usr/bin/env bash
set -e

# when sourcing, cd will change directory for the session. we use this var to go back
local_CALLER_DIR=$(pwd)

local_PROJ_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")"/.. >/dev/null 2>&1 && pwd)"
cd "$local_PROJ_DIR"

main(){
  echo "Revealing secrets..."
  git secret reveal -f 1> /dev/null # ignore stdout
  reveal_return=$?

  if [ $reveal_return -eq 127 ]; then
    echo "git-secret could not be found. Go to https://git-secret.io/installation for installation instructions."
  elif [ $reveal_return -ne 0 ]; then
    echo "Could not reveal all secret files."
  else
    local secrets_dir="$local_PROJ_DIR"/secrets

    for secret in $(find "$secrets_dir" -maxdepth 1 -type f -not -name '*.secret')
    do
      local name=$(basename -- "$secret")
      local value=$(cat "$secret")
      local cmd="$name=$value"

      export "${cmd?}"
      echo "  Exported $name"

      rm "$secret" # delete revealed file
    done
  fi
}
main;

# go back to the original caller dir
cd "$local_CALLER_DIR"

# avoid exporting unnecessary envs
unset local_CALLER_DIR
unset local_PROJ_DIR

# reset non-zero exit because this script gets sourced
set +e
