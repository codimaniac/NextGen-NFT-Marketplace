const generateID = () => {
    const min = 100000000000000000
    const max = 999999999999999999

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return randomNum
}