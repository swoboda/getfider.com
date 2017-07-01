build:
	rm -rf ./docs
	hugo
	cp CNAME docs

server:
	hugo server

.DEFAULT_GOAL := build
