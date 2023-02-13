let str = "Hello";

str.test = 5;

alert(str.test);

/*
Result may be: undefined (no strict mode) or An error (strict mode).
Because this example clearly shows that primitives are not objects. They can’t store additional data.
 */