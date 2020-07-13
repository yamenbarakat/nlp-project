const results = document.getElementById('results');
const textInput = document.getElementById('text');


// check the submitted form if it's link, then fetch the data from the link and post it, then get it to update the UI
const handleSubmit = (event) => {

    // prevent the default behavior of submit
    event.preventDefault()

    // store text input value
    const textVal = textInput.value;

    // check if the textVal has an accpetable name
    Client.checkForName(textVal)

    // validate the text input for sentiment api
    if (textVal.match(/\d/) || textVal.length <= 5) {
        alert('Sorry you cannot enter any digits, and you must enter at least 5 letters')
        return false
    }

    // post the retreived data of urlVal
    fetch('http://localhost:8081/postText', {
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
    fetch('http://localhost:8081/getText')
    .then(data => data.json())
    .then(data => {
        // clear the children of results element if it has
        if (results.childElementCount > 0) {
            results.innerHTML = '';
        }

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const p = document.createElement('p');
                p.textContent = key + ': ' + data[key];
                console.log(data.key);
                results.append(p);
            }
        }
        textInput.value = '';
        return data
    })
}

export { handleSubmit }

