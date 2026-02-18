const url = 'https://openlibrary.org/search.json?q=heidi'; 
const headers = new Headers({
    'User-Agent': "https://finalproject-jt9r.onrender.com/ (arcarver25@gmail.com) Annie Carver"
});
const searchText = document.querySelector('#search');
const searchAuthor = document.querySelector('#author');
const searchTitle = document.querySelector('#title');

let bookInfo = document.querySelector('#bookCard');
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
        bookInfo = data;
        return data;

    }
    catch (error) {
        console.error('Error fetching book:', error);
    };
    let data_local = await getData();
    console.log(data_local);

}

searchTitle.addEventListener('click', () => {
    search(url);
})
    

searchAuthor.addEventListener('click', () => {
    search(url)
});

async function findBook() {
    
}
async function makeCard() {

    const response = await fetch(data);
    const jsonData = await response.text();
    const bookInfo = JSON.parse(jsonData);
    const cards = document.getElementById('bookCard');

    /*
   <section>
   <h3> book name
   <p> description
   <h4> author
   <img> book cover
   <h4> first published year
   */
    bookInfo.bookInfo.forEach(book => {
        const sectionElement = document.createElement('section');
        sectionElement.className = 'bookCard';
        cards.appendChild(sectionElement);

        const nameElement = document.createElement('h3');
        nameElement.textContent = book.title;
        sectionElement.appendChild(nameElement);

        // we will come back to this one when we figure out where a book description is. it might be in a different api
        // const descriptionElement = document.createElement('p');
        // descriptionElement.textContent = book.description;
        // sectionElement.appendChild(descriptionElement);

        const authorElement = document.createElement('h4');
        authorElement.textContent = book.author_name;
        sectionElement.appendChild(authorElement);

        // image I will add this whem I find where the data is
        // const coverElement = document.createElement('img');
        // coverElement.textContent = book.img;
        // sectionElement.appendChild(costElement);

        const publishYear = document.createElement('h4');
        publishYear.textContent = book.first_publish_year;
        sectionElement.appendChild(publishYear);
    })
}

makeCard(bookInfo);