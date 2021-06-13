const authors = document.getElementById('authors');
authors.addEventListener('click', event => {
	if (event.target.className === 'btn-delete') {
		fetch(
			`https://fakerestapi.azurewebsites.net/api/v1/Authors/${event.target.parentElement.id}`,
			{method: 'DELETE'}
		).then(response => {
			if (response.status == 200) {
				event.target.parentElement.remove();
			}
		});
	}
});
document.getElementById('btn-get-authors').addEventListener('click', () => {
	fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors')
		.then(response => response.json())
		.then(result => {
			console.log(result.length);
			for (let i = 0; i < 1; i++) {
				const author = result[i];
				authors.insertAdjacentHTML('beforeend', `<div id="${author.id}" class="author">
					<button>Do nothing</button>
					<h3>
					 ${author.firstName} ${author.lastName}
					</h3>
					<h4>
						Book ID: ${author.idBook}
					</h4>
					<button class="btn-delete">Delete Author</button>
				</div>`);
			}
		});
});

const headers= new Headers();
headers.append('Content-type','application/json');
const options={
method:'POST',
headers,
body:JSON.stringify({

 firstName:'',
 
 idBook:0,
 lastName:'',
 
}
)
};

document.getElementById('add-add-author').addEventListener('click', event => {
	event.preventDefault();
	let newFetch = fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors',options).then(response=>{
return response.json()
}
).then(data=> {
	let inputValue1 = document.getElementById("first-name").value;
  let inputValue2 = document.getElementById("last-name").value;
 let inputValue3 = document.getElementById("book-id").value;
   document.getElementById("authors").insertAdjacentHTML ('beforeend',`<div  class="author">
					   <button>Do nothing</button>
					   <h3>
						${inputValue1} ${inputValue2}
					   </h3>
					   <h4>
						   Book ID: ${inputValue3}
					   </h4>
					   <button class="btn-delete">Delete Author</button>
				   </div>`);
})});