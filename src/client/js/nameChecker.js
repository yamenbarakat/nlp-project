function checkForName(inputText) {
    
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        return inputText
    }
}

export { checkForName }
