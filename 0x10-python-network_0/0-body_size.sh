#!/bin/bash/env bash 
curl -so /dev/null -w '%{size_download}\n' $1
