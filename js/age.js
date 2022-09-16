const ageVariable = 9

const printAgeCategory = () => {
    if (ageVariable < 2) {
        console.log('infant')
    } else if (ageVariable < 4) {
        console.log('toddler')
    } else if (ageVariable < 13) {
        console.log('preteen')
    } else if (ageVariable < 18) {
        console.log('teen')
    } else {
        console.log ('young adult')
    }
}

printAgeCategory(ageVariable)