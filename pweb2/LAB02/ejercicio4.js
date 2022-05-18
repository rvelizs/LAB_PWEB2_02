let url = "https://meet.google.com/khp-pozo-vos";

// Usando substring
let newUrl1 = url.substring(0, 27);
let parte2 = url.substring(28, 32);
let parte3 = url.substring(33)


// Usando replace
let newUrl2 = url.replace(/-/g, " ");

console.log(newUrl1 + parte2 + parte3);
