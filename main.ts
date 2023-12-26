/**
 * Organize your blocks in groups
 */

//% color="#AA278D"
//% groups="['plant', 'Veggies']"
namespace wjano {
    //% block
    //% group="plant"
    export function potato() {

    }

    //% block
    //% group="plant"
    export function bean() {

    }

    //% block
    //% group="plant"
    export function apple() {

    }

    //% block
    //% group="plant"
    export function banana() {

    }


/**
 * Set the color of a namespace (block category) by setting
 * the color attribute annotation on the namespace. Icons
 * are drawn from https://semantic-ui.com/elements/icon.html
 * To find the Unicode representation of an icon, inspect
 * the element using the browser's debugger
 */

//% color="#ff0000" icon="\uf0a9"
namespace color {

    //% block
    export function foo() {

    }

    //% block
    export function foo1() {

    }

    //% block
    export function foo2() {

    }
}


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

}
