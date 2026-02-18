const url = 'https://openlibrary.org/search.json'; 
const headers = new Headers({
    'User-Agent': "https://finalproject-jt9r.onrender.com/ (arcarver25@gmail.com) Annie Carver"
});
const searchText = document.querySelector('#search');
const searchAuthor = document.querySelector('#author');
const searchTitle = document.querySelector('#title');

const bookInfo = document.querySelector('#librayCards');
const options = {
    method: 'GET',
    headers: headers
};

async function search(url, searchText, searchType) {

    try {
        const response = await fetch(url, {
        headers,
        }

        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.title);
        libraryCards.textContent = data.title
    }
    catch (error) {
        console.error('Error fetching book:', error);
    };

}

searchTitle.addEventListener('click', () => {
    search(`${url}?title=${searchText}`);
})
    

searchAuthor.addEventListener('click', () => {
    search(url)
});

async function findBook() {
    
}