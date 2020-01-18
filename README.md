# SANDBOX i18nized React App with WordPress tools

A boilerplate to internationalize CRA (Create React App) Application with WordPress i18n tools.

## Prerequisite

- GNU gettext

## start

```shell
$ git clone git@github.com:kamataryo/sandbox-i18nized-react-app-with-wp-tools.git
$ cd sandbox-i18nized-react-app-with-wp-tools
$ npm install # or yarn
$ npm start
```

## Available scripts

```shell
$ npm run makepot  # Creates a new pot files as `lang.pot`
$ npm run msgmerge # Merges your `ja.po` with `lang.pot`
$ npm run po2json  # Creates a new JED file as `ja.json`
```
