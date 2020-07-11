const results = document.getElementById('results');
const urlInput = document.getElementById('url');


// check the submitted form if it's link, then fetch the data from the link and post it, then get it to update the UI
const handleSubmit = (event) => {

    // prevent the default behavior of submit
    event.preventDefault()

    // store the url value
    const urlVal = urlInput.value;

    // post the retreived data of urlVal
    fetch('/postText', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlVal })
    })
    .then(data => {
        console.log(data);
        getText();
    })
}

// get the data to update UI
const getText = () => {
    fetch('/textSummarize')
    .then(data => data.json())
    .then(data => {
        for(let sentence of data) {
            let newPara = document.createElement('p');
            newPara.textContent = sentence;
            results.append(newPara)
        }
        urlInput.value = '';
        return data
    })
}

export { handleSubmit }

