# vue-facebook-pixel

[![npm](https://img.shields.io/npm/v/vue-analytics-facebook-pixel.svg)](https://www.npmjs.com/package/vue-facebook-pixel)

A small wrapper around fbq. This package integrates Facebook pixel into your `Vue` app.

## Installation

```bash
npm install vue-facebook-pixel
```

Also, this library requires installing [Facebook Pixel API](https://developers.facebook.com/docs/ads-for-websites/tag-api/).

## Usage

### Preparations

```javascript
import Vue from 'Vue'
import VueFacebookPixel from 'vue-facebook-pixel'

Vue.use(VueFacebookPixel)
```

### Calling API

To start using this script you will have to call `init(...)` first.

```javascript
/**
 * Init facebook tracking pixel
 * @param  {String} appId
 * @param  {object} [data={}]
 */
Vue.analytics.fbq.init('YOUR_FACEBOOK_CODE', {
  em: 'user@mail.com'
})
```

Make sure `init(...)` is called only once.

Then you will have full access to the `event(...)` method.

```javascript
/**
 * Event tracking
 * @param  {String} name
 * @param  {object} [data={}]
 */
Vue.analytics.fbq.event('ViewContent', {
  content_name: 'Really Fast Running Shoes'
})
```

#### Inside component

All `component` instances can call `this.$analytics.fbq`

## Naming convention

All `vue-analytics-*` share the same `analytics` object, where all the providers are stored.

## Facebook script

[Facebook Pixel API](https://developers.facebook.com/docs/ads-for-websites/tag-api/) is required to be installed. You can skip the default `window.fbq('init', 'KEY')` part and use `Vue.analytics.fbq.init(...)` which will do the same.
