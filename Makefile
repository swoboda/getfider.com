build:
	rm -rf ./docs
	hugo
	cp CNAME docs

watch:
	hugo server

.DEFAULT_GOAL := build
