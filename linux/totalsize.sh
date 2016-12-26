#!/bin/bash

#===============
# Description :
#===============

# Script used to show the total size of the current directory (files + sub-directories)
# Don't forget to do chmod +x totalsize.sh, before using it
#

echo 'The total size of the directory is ' `du -h | tail -1`