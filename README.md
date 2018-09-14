### Hugo with Webpack 📦 and Gulp 🥤

#### Install

```shell
$ npm install      # 🎉

$ npm run start      # start the dev server
$ npm run build      # build for production
```

#### Analyze bundle

If you would like to analyze the generated webpack bundle with [`webpack-bundle-analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer), you can do so with the following command:

```shell
$ npm run analyze
```

This will start a server on [`127.0.0.1:8888`](http://127.0.0.1:8888/).

#### Todo

- [ ] Refactor long list of groups in the `LogoAnimation` class.
- [ ] Move typograhpy to a different `.scss` file.
- [ ] Add `srcset` for images.
- [ ] Reduce/concat the amount of media queries.
- [ ] Set up a coherent margin/padding/grid system with variables (refactor styles).
- [ ] Check if links/tap targets are of a correct size on smaller devices
