#!/bin/bash

cd directory

if [[ "$#" -eq 1 ]];then
    var=$1
else
    echo -e "./draw-directory-script.sh string \nstring on directory"
    exit 1
fi

if [[ ${#var} -lt 9 ]];then
    ps=30
else
    ps=20
fi

convert -size 150x150 xc:none \
        -draw "fill #00bf00 roundrectangle 10,15 95,135 15,20" \
        -draw "fill #00bf00 roundrectangle 10,30 140,135 15,10" \
        -strokewidth 2 -draw "fill #fff stroke #000 rotate 5 rectangle 50,10 120,110 line 60,22 110,22 line 60,34 110,34" \
        -draw "fill #ff0 roundrectangle 10,35 140,135 15,10" \
        -font Open-Sans-Light -pointsize $ps -gravity center -strokewidth 1 -draw "fill #000 stroke #000 text 0,0 $var" \
        $var-.png
convert $var-.png -resize 100x100 $var-directory.png
rm $var-.png
exit 0