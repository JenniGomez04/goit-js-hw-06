const forms = document.querySelector(".login-form");
console.log(forms)



forms.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();  // Hace que la pagina no se recargue
    const {
        elements: { email, password } // defino mis objetos
      } = event.currentTarget;  // el elemento actual que ejecuta el manejador
    
      if (email.value === "" || password.value === "") {  // ningun campo vacio o genera alerta 
        alert ("Por favor llene todos los campos");
      }
    
      console.log(`Email: ${email.value}, Password: ${password.value}`);
      event.currentTarget.reset();   // borra los campos pero por consola se almacenan no recarga el console
    
;}

    



