// const leoName = 'Leo'
// const leoSurname = 'Musvaire     '
// const leoBalance = '-9394'

// const sarahName = 'Sarah    '
// const sarahSurname = 'Kleinhans'
// const sarahBalance = '-4582.2'

// const divider = '----------------------------------'

// // Only change below this line

// const owed = parseInt('R' + leoBalance + sarahBalance)
// const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
// const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

// console.log(result)

// solution

const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = ((parseInt(leoBalance)*-1) + (parseFloat(sarahBalance)*-1))
const leo = `${leoName} ${leoSurname.trim()} (Owed R${parseInt(leoBalance)*-1})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed R${parseFloat(sarahBalance)*-1})`
const total = "Total amount owed: "
const result = leo + "\n" + sarah + "\n" + divider + "\n" +"  " + total + 'R'+owed.toFixed(2) + "  "+ "\n" + divider

console.log(result)