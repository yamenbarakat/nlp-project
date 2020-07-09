const results = document.getElementById('results');
const urlInput = document.querySelector('input[type="url"]');


// check the submitted form if it's link, then fetch the data from the link and post it, then get it to update the UI
const handleSubmit = (event) => {

    // prevent the default behavior of submit
    event.preventDefault()

    // store the url value and then check it if it's link
    const urlVal = urlInput.value;

    if (!urlVal.startsWith('http')) {
        return false
    }

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    // post the data of formText
    fetch('/postText', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: formText })
    })
    .then(data => {
        console.log(data);
        getText();
    })
}

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

