   function simulateAsyncOperation() {
       return new Promise((resolve) => {
           setTimeout(() => {
               const code = Math.random() > 0.5 ? 0 : 1; // Randomly succeed or fail
               resolve(code);
           }, 1000);
       });
   }

   simulateAsyncOperation().then((code) => {
       console.log("exited with code", code);
   });
   