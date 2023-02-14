let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more
/*
ANSWER: Because map.keys() returns an iterable, but not an array.
We can convert it into an array using Array.from    
 */