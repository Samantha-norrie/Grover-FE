export const WELCOME_TEXT = "Hello! Welcome to QGrover";
export const STEP_ONE_TEXT = "QGrover is a visual tool that helps learners explore how Grover's algorithm works.\
    The following instructions explain how to use the application.";
export const WHAT_IS_GROVER = "What does Grover's algorithm do?";
export const STEP_TWO_TEXT =  "Imagine that you are trying to find a ball in a bag of n trinkets. \
In the worst-case scenario, you would have to check n trinkets before you find the ball. This\
can be quite tedious with huge bags of trinkets! Grover's algorithm helps us solve this problem. With Grover's algorithm, at most \
root(n) trinkets need to be checked before you will find your ball.";
export const HOW_DOES_GROVER_WORK = "How does Grover's algorithm work?"
export const STEP_THREE_TEXT = <p>Grover's algorithm is an <a href="">Amplitude Amplification algorithm</a>. It works by using an iterator on qubits that are in superposition.\
The iterator is made up of two parts: an oracle and a diffuser.</p>

export const HOW_TO_USE_QGROVER = <h3>How do I use QGrover?</h3>;
export const STEP_FOUR_TEXT = <p>QGrover allows you to explore how different parameters affect Grover's algorithm. These parameters include
    number of qubits, number of iterations, and number of solution values. QGrover uses a two-level system. When using QGrover's first
    level, Grover's algorithm will always be ran under ideal conditions. When using QGrover's second level, grover's algorithm will not always be ran in ideal conditions 
    and more customization features can be used.
    <br/>After inputting values into each of QGrover's inputs and running the application, try clicking through the circuit presented to you. Did you expect to see the amplitudes
    that you see?
</p>;

export function generateRandomValues(numValues, upperLimit) {
    let randomValues = [];
    let i = 0;
    while (i < numValues) {
        let randomValue = Math.random()*upperLimit;
        if (!randomValues.includes(randomValue)) {
            randomValues.push(randomValue);
            i++;
        }
    }

    return randomValues;
}
