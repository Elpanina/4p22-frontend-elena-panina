'use strict'

const fibonacci = function() {
    let current = 1;
    let previos = 0;
    return function() {
        const next = previos + current;
        const old = previos;
        previos = current;
        current = next;
        console.log(old);
    }
} ();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();