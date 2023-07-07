BUILD=./build
ARCHIVE=./build.zip

FAT=./temp/thisguy.js
MIN=$(BUILD)/thisguy.min.js
TRASH=$(FAT) $(MIN) $(BUILD)/** $(ARCHIVE)

default: build site open ;

open:
	open $(BUILD)/index.html

build:
	npx tsc ./src/thisguy.ts --target es6 --outDir ./temp
	npx uglify-es $(FAT) -o $(MIN)

clean:
	-rm -rf $(TRASH)

site: index weatherapp favicon styles notfound

styles:
	cp ./src/styles.css $(BUILD)

favicon: 
	cp ./src/favicon.ico $(BUILD)

index:
	cp ./src/index.html $(BUILD)

weatherapp:
	cp ./src/weatherapp.html $(BUILD)

notfound:
	cp ./src/notfound.html $(BUILD)

archive: build site
	zip -vr $(ARCHIVE) $(BUILD) -x "*.DS_Store"
