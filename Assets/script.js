var bookTitles = 
	[
	"The Last Lecture", 
	"Autonomous", 
	"Astrophysics for People in a Hurry", 
	"Anna Karenina", 
	"The Expanse", 
	"The Time Machine", 
	"Devil in a Blue Dress",
	"The Red and the Black",
	"Elon Musk",
	"Digital Fortress",
	"The Lost Symbol",
	"Origin",
	"Permanent Record",
	"The Trial",
	"The Metamorphosis",
	"A Pattern Language",
	"Sapiens/Homo Deus",
	"An Elementary Introduction to the Wolfram Language",
	"Mathematics for the Nonmathematician", 
	"Kubernetes: A Step-by-Step Guide to Learn and Master Kubernetes",
	"Computer Science Distilled"
	];

var bookAuthors = 
	[
	"Randy Pausch, and Jeffrey Zaslow",
	"Annalee Newitz, and Alexander Páez",
	"Neil deGrasse Tyson",
	"Leo Tolstoy",
	"James S.A. Corey",
	"H.G. Wells",
	"Walter Mosley",
	"Stendhal",
	"Ashlee Vance", 
	"Dan Brown",
	"Dan Brown",
	"Dan Brown",
	"Edward Snowden",
	"Franz Kafka", 
	"Franz Kafka", 
	"Christopher Alexander",
	"Yuval Noah Harari",
	"Stephen Wolfram", 
	"Morris Kline",	
	"Brayden Smith",
	"Wladston Ferreira Filho"

	];
var favoriteBooks = {};

// bookAuthors.forEach((bookAuthors, i) => favoriteBooks[bookAuthors] = bookTitles[i]);
// // console.log(favoriteBooks);

var bookList = document.querySelector("#book-list");
var bookElement = document.querySelector('#books');

function addBooksToList(){
	var listOfBooks = favoriteBooks;
	var titles = bookTitles;
	var authors = bookAuthors;

	for(let i = 0; i<bookAuthors.length;i++) {
		console.log(bookTitles[i] + " by " + bookAuthors[i])
		var li = document.createElement("li");
		li.id = i;
		li.innerText = bookTitles[i] + " by " + bookAuthors[i];
			if(bookElement) {
				bookElement.append(li);
			}
	}
}
addBooksToList(); 



