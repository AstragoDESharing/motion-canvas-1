cd ./output/project
ffmpeg -r 60 -i "%%"06d.png -pix_fmt yuv420p !render.mp4 -y