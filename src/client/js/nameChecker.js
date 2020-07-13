function checkForName(inputText) {
    
    let names = [
        "Picard",
        "Janeway",
        "Kirks",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert(`welcome ${inputText}`)
        return inputText
    }
}

export { checkForName }
