const container = document.querySelector("#container");

class Library {
  constructor() {
    this.libraryArray = [
      {
        id: 1,
        name: "Harry Potter",
        author: "J.K. Rowling",
        pages: 420,
        read: true,
      },
    ];
  }

  renderBooks() {
    this.libraryArray.forEach((element) => {
      let book = document.createElement("div");
      book.classList.add("book");
      book.innerHTML = `
        <div>${element.id}</div>
        <div>${element.name}</div>
        <div>${element.author || "unknown"}</div>
        <div>${element.pages || "unknown"}</div>
        <div>${element.read}</div>
        <div>
          <button type="button" onClick="library.deleteById(${
            element.id
          })">Delete</button>
          <button type="button" onClick="library.toggleRead(${
            element.id
          })">Read</button>
        </div>
      `;
      container.appendChild(book);
    });
  }
  toggleRead(id) {
    this.libraryArray[id - 1].read = !this.libraryArray[id - 1].read;
    container.innerHTML = "";
    this.renderBooks();
  }

  addBookToLibrary() {
    this.libraryArray.push({
      id: this.libraryArray.length + 1,
      name: document.getElementById("name").value,
      author: document.getElementById("author").value,
      pages: document.getElementById("pages").value,
      read: document.getElementById("read").checked,
    });
    container.innerHTML = "";
    this.renderBooks();
  }
  checkName() {
    document.getElementById("name").value.length > 0 && this.addBookToLibrary();
  }
  deleteById(id) {
    this.libraryArray = this.libraryArray.filter((obj) => obj.id !== id);
    container.innerHTML = "";
    this.renderBooks();
    console.log("deleted");
  }
}

const library = new Library();
library.renderBooks();
