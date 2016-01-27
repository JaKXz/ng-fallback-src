# ng-fallback-src [![npm version](https://badge.fury.io/js/ng-fallback-src.svg)](https://badge.fury.io/js/ng-fallback-src)

> replace 404s with some default asset, for better [empty] states.

## Install

```bash
npm install --save ng-fallback-src

bower install --save ng-fallback-src
```

## Example Usage

This was originally meant for `img` tags only, but theoretically it could work for any element with a `src` tag. This theory is untested so _use at your own risk_.

```html
<img ng-src="{{someFlakyVar}}" fallback-src="{{someReliableUrl}}" />
```

Note: if `someFlakyVar` can be falsy, you'll need to account for it separately, e.g.

```html
<img ng-src="{{someFlakyVar || someReliableUrl}}" 
  fallback-src="{{someReliableUrl}}" />
```

since most browsers won't actually fire the error event if the `src` is empty.

## Contributing

The most obvious things right now are
- [ ] tests 
- [ ] adding files so this can be published to other package managers.


1. [**Fork**](https://github.com/JaKXz/ng-fallback-src/fork)

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am 'Add some feature'`

4. Push to the branch: `git push origin my-new-feature`

5. Create a new Pull Request

## Credits

- @concertcoder [Chris Gosselin]: version `0.x` and helping correct a potential memory leak
- @nexus-uw [Simon Ramsay]: pointing out that @concertcoder wrote this once upon a time
