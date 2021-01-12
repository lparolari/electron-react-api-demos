MAINFILE=README
ARGS=--rm --volume "`pwd`:/data" --user `id -u`:`id -g`
ARGS_EXTRA=--variable urlcolor=blue

${MAINFILE}.pdf:
	docker run ${ARGS} pandoc/latex -o ${MAINFILE}.pdf ${MAINFILE}.md ${ARGS_EXTRA}

clean: clear
clear:
	rm -f ${MAINFILE}.pdf

.PHONY: clean clear
