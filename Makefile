mocha 			= ./node_modules/.bin/mocha
karma 			= ./node_modules/karma/bin/karma
jshint			= ./node_modules/.bin/jshint
browserify 	= ./node_modules/.bin/browserify
lintspaces 	= ./node_modules/.bin/lintspaces

srcFiles = $(shell find ./src -type f -name '*.js' | xargs)

.PHONY : test

default: formatting

# Run tests, then build the hype JavaScript bundle
build:
	@make formatting
	$(browserify) -s hypejs -e ./src/index.js -o ./dist/hype.js
	@echo "Build succeeded!\n"

# Test files for formatting and errors, then run tests
test:
	@make build
	$(browserify) -e ./test/index.js -o ./test/test-bundle.js
	$(karma) start

# Test file formatting and for errors
formatting:
	$(lintspaces) -nt -i js-comments -d spaces -s 2 $(srcFiles)
	@echo "lintspaces pass!\n"
	$(jshint) $(srcFiles)
	@echo "JSHint pass!\n"
