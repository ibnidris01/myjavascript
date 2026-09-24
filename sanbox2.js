function getUsers() {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

      let list = document.getElementById("userList");
      list.innerHTML = ""; // clear old data

      users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li);
      });

    })
    .catch(error => {
      console.log("Error:", error);
    });

}
