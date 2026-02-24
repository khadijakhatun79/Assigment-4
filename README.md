1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer 1: 
getElementById("id") → ekta element return kore by ID.

getElementsByClassName("class") → HTMLCollection return kore, multiple elements by class.

querySelector("selector") → first matching element return kore (any selector).

querySelectorAll("selector") → NodeList return kore, all matching elements.


2. How do you create and insert a new element into the DOM?
Answer 2: 
const div = document.createElement('div'); 
div.innerText = "Hello";
document.body.appendChild(div);


3. What is Event Bubbling? And how does it work?
Answer 3: 
Event starts from the element clicked → then parent → then top (body/html).

Example: Click on a button inside a div → first button, then div, then body handles the event.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer 4:
Instead of adding event to many elements, we add one listener on parent.

Useful for dynamically added elements or better performance.

 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer 5: 

preventDefault() → stops default browser behavior (like link click or form submit).

stopPropagation() → stops event from bubbling up to parent elements.
