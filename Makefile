FAT=thisguy.js
MIN=thisguy.min.js
TRASH=$(FAT) $(MIN)

default: build minify open ;

open:
	open index.html

build:
	npx tsc

minify:
	npx uglify-es $(FAT) -o $(MIN)

clean:
	-rm -rf $(TRASH)
