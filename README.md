# Nesting list app

## Setup manual

1. Clone repository
2. Open project directory 
```sh
$ cd ./path-to-project/test-task
```
3. Install dependencies 
```sh
$ npm install
```
4. Run gulp connect
```sh
$ gulp
```
5. Go to http://localhost:3000

## Run tests

1. Install Karma
```sh
$ npm install -dev
```
2. Run karma/jasmine
```sh
$ karma start karma.conf.js
```
3. Open in a browser [http://localhost:9876/]

## Notes

About first item in test task. I suppose, in this task we can use only iteration or only recursion method. Because infinite loop can't realized in AngularJS or etc. (Probably it can, but it's not a right way). So I realized this nested list with angular directives. Something like iteration-recursion in one.
