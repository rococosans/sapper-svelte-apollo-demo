# Sapper Svelte Apollo Demo

A really nice way to query GraphQL APIs in Sapper.

## Status:

I have been unable to successfully implement 

## Questions:

1. Is `_layout.svelte` the only option for a global wrapping component?

* I can see a need for more than one layout. This can be achieved currently with spliting `location.href` or using the value of `segment` & conditional rendering.

1. What is the magic behind `segment` 

* It's a prop that is getting passed to layout from ... ?

* It's the first level slash route of the url

1. On the page that uses GraphQL, there is a flash of 500 error on initial page load or refresh. Routing back to the `index.svelte` page (in the example where our Apollo client is in that file) shows `loading...` as expected.

* This relates to the global fetch variable being passed to Apollo Clients HTTP link.

Self note: Understand more about where the set client is being set to.

1. `Function called outside component initialization` seems to be a common error. Where should my head go when I get this?

* ex. about page

1. How are `onMount` & `onDestroy` affected by Sapper's SSR?

## Summary

To many things to parse right now. What am I missing?

## Further discovery

https://github.com/joshleblanc/sapper-apollo-example

https://github.com/sveltejs/sapper/issues/647

