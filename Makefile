convert-mp4-to-hls:
	sh convert-file.sh

s3-create-bucket:
	aws s3 mb --endpoint-url=http://localhost:4566 s3://s3-videos-local

s3-put-object:
	aws s3 cp --endpoint-url=http://localhost:4566 tests/manual/videos/joker/resolutions s3://s3-videos-local/joker/resolutions --recursive

aws-stack:
	make s3-create-bucket \
	&& make s3-put-object
