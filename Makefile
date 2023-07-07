BUILD=./build

FAT=./temp/thisguy.js
MIN=$(BUILD)/thisguy.min.js
TRASH=$(FAT) $(MIN)

default: build minify site open ;

open:
	open $(BUILD)/index.html

build:
	npx tsc ./src/thisguy.ts --target es6 --outDir ./temp

minify:
	npx uglify-es $(FAT) -o $(MIN)

clean:
	-rm -rf $(TRASH)

site: index weatherapp favicon styles

styles:
	cp ./src/styles.css $(BUILD)

favicon: 
	cp ./src/favicon.ico $(BUILD)

index:
	cp ./src/index.html $(BUILD)

weatherapp:
	cp ./src/weatherapp.html $(BUILD)