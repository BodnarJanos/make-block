/**
 * Organize your blocks in groups
 */

//% color="#AA278D"
//% icon="\uf0a9"
//% groups="['type of blocks' , 'ordering', 'plant', 'hello', 'formatting', 'default', 'namspacecolor']"
namespace wjano {
 
    //% block
    //% group="type of blocks"
    export function show(){

    }

    //% block
    //% group="type of blocks"
    export function move(steps: number){

    }

    //% block
    //% groups="type of blocks"
    export function randomNumber(): number{
        return 0;
    }

    //% block
    //% groups="type of blocks"
    export function randomBoolean(): boolean{
        return false;
    }

    //block="on event"
    //% group="type of blocks"
    export function onEvent(handler:()=>void){
        
    }




    //% block
    //% group="ordering"
    //% weight = 50
    export function second(){

    }
 
    //% block
    //% group="ordering"
    //% wight=100
    export function first() {

    }



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

    //% block
    //% group="hello"
    export function foo() {
    }

    //% block
    //% group="hello"
    export function foo1() {
    }

    //% block
    //% group="hello"
    export function foo2() {
    }



    /**
     * Use the VARIABLE.defl=VALUE notation to specify
     * default argument values.
     */

    //% block
    //% x.defl=42
    //% group="test"
    export function foo4(x: number) {

    }

    //% block
    //% s.defl="hi!"
    //% group="test"
    export function bar(s: string) {

    }

    /**
     * For better readability, you should rewrite the function
     * signature in a "natural language" way. You can refer to
     * each variable in any order using the $VARIABLE syntax.
     */

    //% block="fooooooo"
    //% group = "formatting"
    export function foo5() {

    }

    //% block="bar x = $x text = $text"
    //% group="formatting"
    export function bar1(x: number, text: string) {

    }

    //% block="shuffled text = $text x = $x"
    //% group="formatting"
    export function shuffled(x: number, text: string) {

    }


    /**
     * Functions are mapped to blocks using various macros
     * in comments starting with %. The most important macro
     * is "block", and it specifies that a block should be
     * generated for an **exported** function.
     */
    
    //% block
    //% group="hello"
    export function helloWorld() {

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    //% group="hello"
    export function camlCaseTwo() {

    }
}


