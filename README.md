# Vue Dadata

![Publish](https://github.com/topninja/vue-dadata/workflows/Publish/badge.svg)


It's a vue component for hinting addresses using [DaData.ru](https://dadata.ru).

[Link to RU documentation](https://github.com/topninja/vue-dadata/tree/master/ru/README.md)

## Install

[npm package](https://www.npmjs.com/package/@fivestarsmobi/vue-dadata)

```bash
$ npm install @fivestarsmobi/vue-dadata --save
```

## Usage

### Global

```js
import VueDadata from '@fivestarsmobi/vue-dadata'

Vue.use(VueDadata)
```

### Local

```html
<template>
  <div id="app">
    <vue-dadata token="dadata_api_key"></vue-dadata>
  </div>
</template>

<script>
import VueDadata from 'vue-dadata'

export default {
  name: 'VueDadataTest',
  components: {
    'vue-dadata': VueDadata
  }
}
</script>
```

### Properties

| Prop  | Required | Type | Description |
| ------------- | ------------- | ------------- | ------------- |
| token  | Yes  | string  | Auth token DaData.ru  |
| placeholder  | No  | string  | Text placeholder  |
| query  | No  | string  | Initial state input field  |
| autoload  | No  | boolean  | If `true`, then a request for tips will be initialed in the background in the created hook  |
| onChange  | No  | function(suggestion: DadataSuggestion) -> void  | Function called when selecting a tooltip  |
| autocomplete  | No  |  string  |  Autocomplete field |
| defaultClass  | No  |  string  |  Default class ofr component, default value - `vue-dadata` |
| classes  | No  |  string  |  Extra classes |
| inputName  | No  |  string  |  Input name attribute |
| fromBound  | No  |  string  |  Dadata bound type FROM |
| toBound  | No  |  string  |  Dadata bound type TO |
| highlightClassName  | No  |  string  |  CSS class name applied to highlighted text |
| unhighlightClassName  | No  |  string  |  CSS class name applied to unhighlighted text |
| highlightTag  | No  |  string  |  Type of tag to wrap around highlighted matches; defaults to `mark` but can also be a component |
| locationOptions  | No  |  object  |  Location options for choosing cities or countries |
| metro  | No  |  boolean  |  Metro display or not |


## Dependencies

- [axios](https://github.com/axios/axios)
- [core-js](https://github.com/zloirock/core-js)
- [vue](https://github.com/vuejs/vue)
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
- [vue-highlight-words](https://github.com/Astray-git/vue-highlight-words)
- [vue-debounce-decorator](https://github.com/trepz/vue-debounce-decorator)

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository [issues section](https://github.com/topninja/vue-dadata/issues).


## Contributors

- [Valery Roshett](https://github.com/Roshett)
- [Ilya Kiselev](https://github.com/kiselev-webdev)
- [Lyu Jin](https://github.com/topninja)

Licensed under the [MIT license](https://github.com/topninja/vue-dadata/blob/master/LICENSE).
