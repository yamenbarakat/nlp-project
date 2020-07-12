function checkForName(inputText) {
    
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert('welcome')
        return inputText
    } else {
        alert('please enter a valid name')
    }
}

export { checkForName }
