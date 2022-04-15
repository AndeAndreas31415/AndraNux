#!/bin/bash

while IFS= read -r line; do
    if [[ "$line" == "Cyber-"* ]];then
        echo "1"
    else
        echo "0"
    fi
done < cyber.txt