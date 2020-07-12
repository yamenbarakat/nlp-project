const results = document.getElementById('results');
const textInput = document.getElementById('text');


// check the submitted form if it's link, then fetch the data from the link and post it, then get it to update the UI
const handleSubmit = (event) => {

    // prevent the default behavior of submit
    event.preventDefault()

    // validate the text input 
    

    // post the retreived data of urlVal
    fetch('http://localhost:8088/postText', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text: textInput.value})
    })
    .then(data => {
        console.log(data);
        getText();
    })
}

// get the data to update UI
const getText = () => {
    fetch('http://localhost:8088/getText')
    .then(data => data.json())
    .then(data => {
        for (const key in data) {
            const p = document.createElement('p');
            p.textContent = key + ': ' + data[key];
            console.log(data.key)
            results.append(p)
        }
        textInput.value = '';
        return data
    })
}

export { handleSubmit }

