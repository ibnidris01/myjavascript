// function greetBasedOnTime() {
//     const hour = new Date().getHours();
//     let greeting;

//     if (hour < 12) {
//         greeting = "Good morning!";
//     } else if (hour < 17) {
//         greeting = "Good afternoon!";
//     } else if (hour < 21) {
//         greeting = "Good evening!";
//     } else {
//         greeting = "Good night!";
//     }

//     console.log(greeting + " Have a great day!");
//     return greeting;
// }

// greetBasedOnTime();

  function showGreeting() {
            const now = new Date();
            const hour = now.getHours();
            const minutes = now.getMinutes();
            
            // Format time
            const timeString = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            // Determine greeting
            let greeting;
            if (hour < 12) {
                greeting = " Good Morning!";
            } else if (hour < 17) {
                greeting = " Good Afternoon!";
            } else if (hour < 21) {
                greeting = "Good Evening!";
            } else {
                greeting = "Good Night!";
            }
            
            // Update HTML
            document.getElementById('greeting').textContent = greeting;
            document.getElementById('time').textContent = `Current time: ${timeString}`;
        }
        
        showGreeting();




        