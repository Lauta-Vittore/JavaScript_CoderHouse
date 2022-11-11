const apiUrl = 'https://jsonplaceholder.typicode.com'

const HTMLResponse = document.querySelector('#api')

    fetch(`${apiUrl}/comments`)
        .then((response) => response.json())
        .then((comments) => {
        const tpl = comments.map((comments) => `<li> ${comments.name}</li><li> ${comments.email}</li><li> ${comments.body}</li>`)
        HTMLResponse.innerHTML = `<ul class="comentarios">${tpl}</ul>`
             
    });
