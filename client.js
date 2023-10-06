const myList = ["Pizza", "Burger", "Pasta", "Fried Chicken"]
const nextList = ["Noodles" , "Sushi"]
console.log(myList)
console.log(nextList)

/* add to back of the list*/
myList.push("Hotdog")
console.log(myList)

/*remove item from back of list*/
myList.pop(myList)
console.log(myList)

/*combine the two lists*/
const combineList = myList.concat(nextList)
console.log(combineList)

const pizza = {size:"large", sauce:"tomato", topping:"pepperoni"}
console.log(pizza)

/*values in array*/
const valueList = Object.values(pizza)
console.log(valueList)

/*keys in array*/
const keyList = Object.keys(pizza)
console.log(keyList)

/*nested array*/
const nestArray = Object.entries(pizza)
console.log(nestArray)

