function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    // check if the formText has letters value
    if (!formText || typeof(formText) === 'number') {
        alert('only letters acceptable') 
        return false
    }

    // post the data of formText
    fetch('/postText', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formText })
    })
    .then(data => {
        data.json()
    })
    .then(data => {
        console.log(data)
    })

}

export { handleSubmit }
