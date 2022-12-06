INPUT_FOLDER=tests/manual/videos/joker

OUTPUT360p=$INPUT_FOLDER/resolutions/360
OUTPUT480p=$INPUT_FOLDER/resolutions/480
OUTPUT720p=$INPUT_FOLDER/resolutions/720
OUTPUT1080p=$INPUT_FOLDER/resolutions/1080

echo 'rendering in 360p'
mkdir -p $OUTPUT360p
ffmpeg -y -i $INPUT_FOLDER/joker.mp4 \
  -v quiet -vf scale=w=640:h=360:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod  -b:v 800k -maxrate 856k -bufsize 1200k -b:a 96k\
  -hls_segment_filename $OUTPUT360p/360p_%03d.ts $OUTPUT360p/360p.m3u8

echo 'rendering in 480p'
mkdir -p $OUTPUT480p
ffmpeg -y -i $INPUT_FOLDER/joker.mp4 \
  -v quiet -vf scale=w=842:h=480:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 1400k -maxrate 1498k -bufsize 2100k -b:a 128k \
  -hls_segment_filename $OUTPUT480p/480p_%03d.ts $OUTPUT480p/480p.m3u8

echo 'rendering in 720p'
mkdir -p $OUTPUT720p
ffmpeg -y -i $INPUT_FOLDER/joker.mp4 \
  -v quiet -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k \
  -hls_segment_filename $OUTPUT720p/720p_%03d.ts $OUTPUT720p/720p.m3u8

echo 'rendering in 1080p'
mkdir -p $OUTPUT1080p
ffmpeg -y -i $INPUT_FOLDER/joker.mp4 \
  -v quiet -vf scale=w=1920:h=1080:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_playlist_type vod -b:v 5000k -maxrate 5350k -bufsize 7500k -b:a 192k \
  -hls_segment_filename $OUTPUT1080p/1080p_%03d.ts $OUTPUT1080p/1080p.m3u8
