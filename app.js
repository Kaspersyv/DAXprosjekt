       sessionStorage.setItem("name", document.getElementById("userInput".value));
        let userName = sessionStorage.getItem("name")
        function welcome() {
            document.getElementById("nameField").innerHTML = "Velkommen " + userName ;
        }

        const d = new Date();
        let minutes = d.getMinutes();

        let current = new Date();

        let firstRandom = Math.floor(Math.random() * 8) + 1;

        const lastMinute = current.getMinutes();

        window.setInterval('checkMinute()', 1000); 
        document.getElementById("clockField").innerHTML = firstRandom

        function checkMinute() {
            let randomNumber = Math.floor(Math.random() * 8) + 1;
            thisMinute = current.getMinutes();
           if (thisMinute == lastMinute) {
            return;
           }
           else {
            document.getElementById("clockField").innerHTML = randomNumber
           }
        }

       





