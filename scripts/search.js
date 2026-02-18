const url = 'https://openlibrary.org/search.json?q=heidi'; 
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

async function search(url) {

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
        console.log(data.docs);
        bookCard.textContent = data.docs
    }
    catch (error) {
        console.error('Error fetching book:', error);
    };

}

searchTitle.addEventListener('click', () => {
    search(url);
})
    

searchAuthor.addEventListener('click', () => {
    search(url)
});

async function findBook() {
    
}