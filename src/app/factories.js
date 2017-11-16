// When creating factories you create an arrow function that returns a
// named function declaration. This also helps with debugger as you
// do not have to analyze the operator to undertsand what it is doing
export const setLoadingApp = isLoading => function setLoadingApp ({ module }) {
  module.set('isLoading', isLoading)
}
