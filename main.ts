/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=1000
namespace hello {  // ez jelenik meg a menüben
    //% block
    export function helloWorld() {  // ez lesz ez első blokk utasítás

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {  // ez lesz ez második utasítás

    }
}