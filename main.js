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
    read: document.getElementById('read').checked,
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
      <div>${element.id}</div>
      <div>${element.name}</div>
      <div>${element.author || "unknown"}</div>
      <div>${element.pages || "unknown"}</div>
      <div>${element.read}</div>
      <div><button type="button" onClick="deleteById(${element.id})">Delete</button</div>
    `; 
    container.appendChild(book);
    console.log("render")
  });
};

renderBooks(myLibrary);
