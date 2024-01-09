enum MotorShaftDirection {
    //% block="clockwise"
    Clockwise,
    //% block="counter-clockwise"
    CounterClockwise
}

//% color="170"
namespace samplew {
    // Use inlineInputMode=inline to force inputs to appear
    // on a single line

    //% block="map $value|from low $fromLow|high $fromHigh|to low $toLow|high $toHigh"
    export function mapBig(value: number,
        fromLow: number, fromHigh: number,
        toLow: number, toHigh: number): number {

        return ((value - fromLow) * (toHigh - toLow))
            / (fromHigh - fromLow) + toLow;
    }

    //% block="map $value|from low $fromLow|high $fromHigh|to low $toLow|high $toHigh"
    //% inlineInputMode=inline
    export function map(value: number,
        fromLow: number, fromHigh: number,
        toLow: number, toHigh: number): number {

        return ((value - fromLow) * (toHigh - toLow))
            / (fromHigh - fromLow) + toLow;
    }

    // Use inlineInputMode=external to force inputs to wrap
    // across several lines

    //% block="magnitude of 3d vector | at x $x and y $y and z $z"
    //% inlineInputMode=external
    export function mag3d(x: number, y: number, z: number): number {
        return Math.sqrt(x * x + y * y + z * z);
    }

    // Use expandableArgumentMode=toggle to collapse or
    // expand input parameters

    /**
     * Run a motor
     * @param directon to turn the motor shaft in
     * @param duration in milliseconds to run the
     *      motor the alarm sound
     */
    //% block="run the motor || $direction for $duration ms"
    //% duration.shadow=timePicker
    //% expandableArgumentMode="toggle"
    //% direction.defl=MotorShaftDirection.CounterClockwise
    //% duration.defl=200
    export function runMotor(
        direction?: MotorShaftDirection,
        duration?: number) {

    }

    // Use expandableArgumentMode=enabled to collapse or
    // expand EACH input parameter

    /**
     * Set the motor speed and direction
     * @param directon to turn the motor shaft in
     * @param speed of the motor in RPM
     * @param duration in milliseconds to run the
     *      motor the alarm sound
     */
    //% block="set the motor to run || $direction|at $speed|for $duration ms"
    //% duration.shadow=timePicker
    //% speed.min=0 speed.max=60
    //% expandableArgumentMode="enabled"
    //% direction.defl=MotorShaftDirection.Clockwise
    //% speed.defl=30
    //% duration.defl=2000
    export function setMotorSpeed(
        direction?: MotorShaftDirection,
        speed?: number,
        duration?: number) {

    }

}




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
    //% group="type of blocks"
    export function randomBoolean(): boolean{
        return false;
    }

    //% block="on event ke"
    //% group="type of blocks"
    export function onEvent(handler: () => void) {
        
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
