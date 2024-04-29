
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * logs data to the console
     * @param s what to log to the console, eg: "Hello"
     * 
     */
    //% block
    export function foo(s: any): void {
        // Add code here
        console.log(s)
    }

    /**
     * Computes the famous Fibonacci number sequence!
     * @param value the number to compute, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
