// Code your solution here

function findMatching(drivers, string) {
    const newarr = []
    drivers.forEach((driver)=> {
        (driver.toLowerCase() === string.toLowerCase()) ? newarr.push(driver) : undefined
    })
    return newarr
}

function fuzzyMatch(drivers, string) {
    const newarr = []
    drivers.forEach((driver)=> {
        driver.startsWith(string) ? newarr.push(driver) : undefined
    })
    return newarr
}

function matchName(drivers, string) {
    const newarr = []
    drivers.forEach((driver)=> {
        driver.name === string ? newarr.push(driver) : undefined
        //(driver.name.toLowerCase() === string.toLowerCase()) ? newarr.push(driver.name) : undefined
        // WHY DOESNT THIS WORK??? ^^
    })
    return newarr
}
