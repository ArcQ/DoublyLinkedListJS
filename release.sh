#!/bin/sh
echo "What release is this?"
select mode in "patch" "minor" "major"; do
  break;
done

while true; do
    read -p "What message would you like to attach?" message
    break;
  done


echo "bumping $mode version with release message: $message"

npm version $mode -m "v%s $message"
