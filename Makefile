build:
	rm -rf ./public
	hugo
	cp CNAME public/

watch:
	hugo server --disableFastRender

.DEFAULT_GOAL := build
