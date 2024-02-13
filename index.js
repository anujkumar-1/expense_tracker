const ul = document.querySelector("ul");

function handleFormSumit(event) {
  event.preventDefault();

  const expense = document.getElementById("num").value;
  const description = document.getElementById("description").value;
  var category;
  function ss() {
    category = document.getElementById("cateogory").value;
  }

  ss();

  let userDetail = {
    num: expense,
    description: description,
    category: category,
  };
  localStorage.setItem(description, JSON.stringify(userDetail));
  const newLi = document.createElement("li");
  const newLiTxt = document.createTextNode(`${expense} - ${description} - ${category}`);
  console.log(newLiTxt);

  newLi.appendChild(newLiTxt);
  ul.appendChild(newLi);

//   creating delete button
  const  delBtn = document.createElement("button");
  const  delBtnTxt=document.createTextNode("Delete Expense") ;
  delBtn.className="del-btn"
  delBtn.appendChild(delBtnTxt)

  newLi.appendChild(delBtn)

//   creating edit button
  const editBtn = document.createElement('button');
  const  editBtnTxt = document.createTextNode('Edit Expense')
  editBtn.className='edit-btn'
  editBtn.appendChild(editBtnTxt)
  newLi.appendChild(editBtn)


    ul.addEventListener("click", function(event){
    const listnerOnButton = document.getElementsByClassName("del-btn")
        if(event.target.classList.contains("del-btn")){
            const liToDelete = event.target.parentElement
            ul.removeChild(liToDelete)       
        
        }
    });

    ul.addEventListener("click", function(event){
        const listnerOnEditButton = document.getElementsByClassName("edit-btn")
            if(event.target.classList.contains("edit-btn")){
                const editliToDelete = event.target.parentElement
                ul.removeChild(editliToDelete)       
                document.getElementById("num").value = expense
                document.getElementById("description").value = description
            }
        });
}
