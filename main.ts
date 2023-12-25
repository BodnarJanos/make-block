/**
 * Use the VARIABLE.defl=VALUE notation to specify
 * default argument values.
 */

//% color="#BB288D"
namespace test {
    //% block
    //% x.defl=42
    export function foo(x: number) {

    }

    //% block
    //% s.defl="hi!"
    export function bar(s: string) {

    }
}


/**
 * For better readability, you should rewrite the function
 * signature in a "natural language" way. You can refer to
 * each variable in any order using the $VARIABLE syntax.
 */

//% color="#AA278D" wight=100
namespace formatting {

    //% block="fooooooo"
    export function foo() {

    }

    //% block="bar x = $x text = $text"
    export function bar(x: number, text: string) {

    }

    //% block="shuffled text = $text x = $x"
    export function shuffled(x: number, text: string) {

    }
}

/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#800000" weight=100
namespace hello {
    //% block
    export function helloWorld() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {

    }
}

