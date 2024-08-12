// const sum = (x,y)=> x + y;

// const curriedSum = x => y => x + y;

// console.log(sum(10,20));
// console.log(curriedSum(10));
// console.log(curriedSum(10)(20));

const makeFood = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, and ${ingredient3}`
        }
    }
}

const hamburger = makeFood("bread")("ham")("tomato");
console.log(hamburger);

const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 => `${ingredient1} ${ingredient2} ${ingredient3}`;

const newHamburger = cleanMakeFood("bread")("ham")("tomato");
console.log(newHamburger);