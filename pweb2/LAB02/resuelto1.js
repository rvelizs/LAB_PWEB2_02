function arrayGenerator(min, max) {
    let a = [];
    a.map(Math.ceil(Math.random() * (max - min) + min));
    return a;
}
