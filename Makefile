build:
	rm -rf ./public
	hugo
	cp CNAME public/

watch:
	hugo server

.DEFAULT_GOAL := build
