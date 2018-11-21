default: all open ;

open:
	open index.html

all:
	npx tsc

clean:
	-rm -rf thisguy.js 
