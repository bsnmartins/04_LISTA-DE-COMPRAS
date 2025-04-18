const button = document.querySelector('.buttonSubmit')
const input = document.querySelector('.inputProduct')
const list = document.querySelector(".list")
const footer = document.querySelector('footer'); // Seleciona o elemento footer
const removeDiv = document.querySelector('.remove'); // Seleciona a div dentro do footer

let myList = [] //cria array vazio



function addProduct(){
  myList.push(input.value) //propriedade push no array para adicionar valores

  input.value = ''

  showProducts()
}


function showProducts(){

  let newProduct = ''
  myList.forEach((item, position) => {
    newProduct = newProduct + `
      <li class="item">
          <input type="checkbox" onchange="toggleDeleteButton(this, ${position})">
          <span>${item}</span>
          <img class="delete" src="./assets/trash.svg" alt="" onclick="deleteItem(${position})" style="display:none;">
      </li>
    `
  }) 

  list.innerHTML = newProduct

  const checkboxes = list.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {
    const deleteButton = checkbox.parentNode.querySelector('.delete');
    if (checkbox.checked) {
      deleteButton.style.display = 'inline';
    } else {
      deleteButton.style.display = 'none';
    }
  });
}

function toggleDeleteButton(checkbox, position) {
  const listItem = checkbox.parentNode;
  const deleteButton = listItem.querySelector('.delete');
  if (checkbox.checked) {
    deleteButton.style.display = 'inline';
  } else {
    deleteButton.style.display = 'none';
  }

}

function deleteItem(position) {
  myList.splice(position, 1)
  console.log(position)

  showProducts()
  showFooterNotification(); // Chama a função para exibir o footer

}

function showFooterNotification() {
  removeDiv.style.display = 'flex'; // Exibe o footer (use 'block' se preferir)
  setTimeout(() => {
    removeDiv.style.display = 'none'; // Oculta o footer após 3 segundos (3000 milissegundos)
  }, 3000);
}


button.addEventListener('click', addProduct) //observa a function getProduct dentro do button com o click