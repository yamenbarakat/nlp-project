const results = document.getElementById('results');

function handleSubmit(event) {
    event.preventDefault()

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

    const getText = () => {
        fetch('/textSummarize')
        .then(data => data.json())
        .then(data => {
            for(let sentence of data) {
                let newPara = document.createElement('p');
                newPara.textContent = sentence;
                results.append(newPara)
            }
        })
    }

}

export { handleSubmit }
