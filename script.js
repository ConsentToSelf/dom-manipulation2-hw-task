// first
/*
Найти в коде список ul и добавить класс “list”
*/
const ul = document.querySelector("ul");
ul.classList.add("list");

// second
/*
Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
*/
ul.nextElementSibling.nextElementSibling.setAttribute("id", "link");

// third
/*
На li через один (начиная с самого первого) установить класс “item”
*/
let ulList = ul.children;
function getItem([...args]) {
  for (let i = 0; i < args.length; i++) {
    const elem = args[i];
    if (i % 2 !== 0) {
      elem.classList.add("item");
    }
  }
  return args;
}
getItem(ulList);

// fourth
/*
На все ссылки в примере установить класс “custom-link”
*/

const link = document.querySelectorAll("a");
link.classList.add("custom-link");
