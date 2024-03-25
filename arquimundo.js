
    
   // Configuración de Firebase, reemplaza con mi  configuracion
   const firebaseConfig = {
     apiKey: "TU_API_KEY",
     authDomain: "TU_AUTH_DOMAIN",
     projectId: "TU_PROJECT_ID",
     storageBucket: "TU_STORAGE_BUCKET",
     messagingSenderId: "TU_MESSAGING_SENDER_ID",
     appId: "TU_APP_ID"
   };

   firebase.initializeApp(firebaseConfig);

   // Referencia a la autenticacion de Firebase
   const auth = firebase.auth();

   // Funciones de registro e inicio de sesion
   function register() {
     const registerEmailInput = document.getElementById('register-email');
     const registerPasswordInput = document.getElementById('register-password');
     const registerNombreInput = document.getElementById('register-nombre');

     auth.createUserWithEmailAndPassword(registerEmailInput.value, registerPasswordInput.value)
       .then((userCredential) => {
         closeRegisterModal();
         alert('Cuenta creada exitosamente. Inicia sesión para continuar.');
       })
       .catch((error) => {
         alert(error.message);
       });
   }

   function login() {
     const loginEmailInput = document.getElementById('login-email');
     const loginPasswordInput = document.getElementById('login-password');

     auth.signInWithEmailAndPassword(loginEmailInput.value, loginPasswordInput.value)
       .then((userCredential) => {
         closeRegisterModal();
         alert('Inicio de sesión exitoso.');
         // Redirige  al usuario a realizar otras acciones despues del inicio de sesion
       })
       .catch((error) => {
         alert(error.message);
       });
   }

   function googleSignIn() {
     const provider = new firebase.auth.GoogleAuthProvider();

     auth.signInWithPopup(provider)
       .then((result) => {
         closeRegisterModal();
         alert('Inicio de sesión con Google exitoso. Redirigiendo...');
       })
       .catch((error) => {
         alert(error.message);
       });
   }

   function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    auth.signInWithPopup(provider)
      .then((result) => {
        closeRegisterModal();
        alert('Inicio de sesión con Google exitoso. Redirigiendo...');
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }

   // Funciones para mostrar/ocultar el modal de registro
   function openRegisterModal() {
     closeLoginModal(); // Cierra el modal de inicio de sesion si esta abierto
     document.getElementById('register-modal').style.display = 'block';
   }

   function closeRegisterModal() {
     document.getElementById('register-modal').style.display = 'none';
   }

   function closeLoginModal() {
     //  función para un modal de inicio de sesión
     // Cierre del modal de inicio de sesión
   }

