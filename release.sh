#!/bin/sh

#utils
function throwErrNoVersion {
  case $1 in
    noVersion)
      echo "ERR: version params are requried and must be provided"
      ;;
    noMessage)
      echo "ERR:  message params are requried and must be provided"
      ;;
  esac
  exit 1
}


#main
for i in "$@"; do 
  case $i in
    -m)
      message=$2
      shift 2;
      ;;
    major)
      shift;
      mode="major"
      ;;
    minor)
      shift;
      mode="minor"
      ;;
    patch)
      shift;
      mode="patch"
      ;;
  esac
done


if [[ -z $message ]] ; then
  throwErrNoVersion "noMessage"
fi

if [[ -z $mode ]] ; then
  throwErrNoVersion "noVersion"
fi

echo "bumping $mode version with release message: $message"

npm version $mode -m "v%s $message"
