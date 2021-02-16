MAINFILE=README
ATTACHMENTS=demo images
ARGS=--rm --volume "`pwd`:/data" --user `id -u`:`id -g`
ARGS_EXTRA=--variable urlcolor=blue

pdf: ${MAINFILE}.pdf
all: ${MAINFILE}.pdf ${MAINFILE}.zip ${MAINFILE}.tgz
.PHONY: pdf all

# main recipes

${MAINFILE}.pdf:
	docker run ${ARGS} pandoc/latex -o ${MAINFILE}.pdf ${MAINFILE}.md ${ARGS_EXTRA}

${MAINFILE}.zip: ${MAINFILE}.pdf
	zip -r ${MAINFILE}.zip ${ATTACHMENTS} ${MAINFILE}.pdf

${MAINFILE}.tgz: ${MAINFILE}.pdf
	tar -cvzf ${MAINFILE}.tgz ${ATTACHMENTS} ${MAINFILE}.pdf

# utils

clean: clear
clear:
	rm -f ${MAINFILE}.pdf
	rm -f ${MAINFILE}.zip
	rm -f ${MAINFILE}.tgz

.PHONY: clean clear
