let url = "https://meet.google.com/khp-pozo-vos";

// Usando substring
let newUrl1 = url.substring(27, 28);
let parte2 = url.substring(32, 33);


// Usando replace
let newUrl2 = url.replace(/-/g, " ");

console.log(newUrl1 + parte2);
