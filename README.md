# new-api-pattern-demo
Just a repo to show off next API and pattern

### Summary
This repo shows of the new API surface of Cerebral and a pattern without **operators**. Operators
are certainly great, but they are not as declarative as function referenced.

```js
[
  setUser, // <- This is more declarative...
  set(state`app.auth.user`, props`user`) // <- ...than this
]
```

This is of course opinionated, but we wanted to explore a pattern where operators er not necessary
and you are not forced to drown in file creation because not using them :-)
