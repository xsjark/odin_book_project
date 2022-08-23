let myLibrary = [
  {
    id: 1,
    name: "Harry Potter",
    author: "J.K. Rowling",
    pages: 420,
    read: true,
  }
];

const checkName = () => {
  document.getElementById('name').value.length > 0 && addBookToLibrary()
}

const addBookToLibrary = () => {
  myLibrary.push({
    id: myLibrary.length+1,
    name: document.getElementById('name').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
    read: document.getElementById('read').value,
  });
  container.innerHTML = ''
  renderBooks(myLibrary);
  console.log(JSON.stringify(myLibrary))
}

const deleteById = (id) => {
  myLibrary = myLibrary.filter( obj => obj.id !== id)
  container.innerHTML = ''
  renderBooks(myLibrary);
};

const container = document.querySelector("#container");

const renderBooks = (array) => {
  array.forEach((element) => {
    let book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `
      <p>${element.id}</p>
      <p>${element.name}</p>
      <p>${element.author}</p>
      <p>${element.pages}</p>
      <p>${element.read == "on" ? "no" : "yes"}</p>
      <div><button type="button" onClick="deleteById(${element.id})">Delete</button</div>
    `; 
    container.appendChild(book);
    console.log("render")
  });
};

renderBooks(myLibrary);
