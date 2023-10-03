const itms = document.querySelector("#itms");
const toDoBox = document.querySelector("#to-do_box");

itms.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addtoDO(this.value);
    this.value = "";
  }
});
const addtoDO = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      ${item}
     <i class="fa-regular fa-circle-xmark fa-rotate-90 fa-xl"></i>
                    
    
    `;

  listItem.addEventListener(
    "click",

    function () {
      this.classList.toggle("done");
    }
  );
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  toDoBox.appendChild(listItem);
};
