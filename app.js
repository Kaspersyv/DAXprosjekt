   let myStorage = window.sessionStorage;

   let userInput = JSON.stringify(document.querySelector("#userInput"))

   function welcome() {
       sessionStorage.setItem("name", userInput)
       console.log(userInput)
       const userName = sessionStorage.getItem("name")
       $("#nameField").innerText = "Velkommen " + userName;
   }


   const userName = myStorage.getItem("name")

   let current = new Date();

   let firstRandom = Math.floor(Math.random() * 8) + 1;

   let lastMinute = new Date().getMinutes();

   const checkMinute = () => {
       let randomNumber = Math.floor(Math.random() * 8) + 1;
       thisMinute = new Date().getMinutes();
       if (thisMinute !== lastMinute) {
           lastMinute = thisMinute
           document.querySelector("#clockField").innerText = "Ditt lykketall er: " + randomNumber
       }




   }




   window.setInterval(checkMinute, 1000);
   document.getElementById("clockField").innerText = "Your lucky number is: " + firstRandom


