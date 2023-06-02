new Vue({
    el: '#app',
    data: {
      showSignIn: true,
      signInEmail: '',
      signInPassword: '',
      signUpName: '',
      signUpSurname: '',
      signUpEmail: '',
      signUpPassword: '',
      signInError: '',
      signUpError: ''
    },
    methods: {
      signIn: function() {
        // Perform sign-in logic
        const formData = {
          email: this.signInEmail,
          password: this.signInPassword
        };
  
        fetch('/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            this.signInError = data.error;
          } else {
            // Redirect to the user account page or perform any other actions
            console.log('Sign in successful');
            console.log('User:', data.user);
          }
        })
        .catch(error => {
          console.error('Error during sign in:', error);
        });
      },
      signUp: function() {
        // Perform sign-up logic
        const formData = {
          name: this.signUpName,
          surname: this.signUpSurname,
          email: this.signUpEmail,
          password: this.signUpPassword
        };
  
        fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            this.signUpError = data.error;
          } else {
            // Redirect to the user account page or perform any other actions
            console.log('Sign up successful');
            console.log('User:', data.user);
          }
        })
        .catch(error => {
          console.error('Error during sign up:', error);
        });
      }
    }
  });
  