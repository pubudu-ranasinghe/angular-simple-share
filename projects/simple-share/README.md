# Angular Simple Share - Social Links Component

Simple Share is an angular component to embed social links. This was developed as a proof of concept module using Angular library generation in v6. Not to be used in production apps.

## Installation

Install `simple-share` from `npm`

```npm i @pubudu/simple-share --save```

Import the SimpleShareModule in `app.module.ts`

```
import { SimpleShareModule } from '@pubudu/simple-share';

@NgModule({
  ...
  imports: [SimpleShareModule]
  ...
});
```

Add the component to you page

```
<lib-simple-share [links]="links"></lib-simple-share>
```

Add the links object in the relevent component

```
links = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com'
};
```