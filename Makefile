build:
	rm -rf ./public
	hugo

watch:
	hugo server

.DEFAULT_GOAL := build
