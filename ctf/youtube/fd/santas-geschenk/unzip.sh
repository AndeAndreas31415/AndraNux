#!/bin/bash

for i in {0..2020}
do
    zif=$(/bin/ls *.zip)

    unzip $zif
    rm $zif
done
