    window.onload = initAll;
    function initAll() {
      document.getElementById('submit').onclick = validate
    }

    function validate() {

        if(document.form.message.value.length == 0)
        {
          window.alert("Please Enter your Message");
          document.getElementById("message").focus();
          return false;
        }

        if(document.form.name.value.length == 0)
        {
          window.alert("Please Enter your Firstname");
          document.getElementById("name").focus();
          return false;
        }
                   
        if(document.form.email.value.length == 0)
        {
          window.alert("Please Enter your Email Address");
          document.getElementById("email").focus();
          return false;
        }

        if(document.form.confemail.value.length == 0)
        {
          window.alert("Please renter a valid Email Addres");
          document.getElementById("password").focus();
          return false;
        }

        if(document.form.email.value.length != document.form.confemail.value.length)
        {
          window.alert("Your Email Addresses don't Match. Please check Email Addresses Entered");
          document.getElementById("email").focus();
          return false;
        }

        return true;
    }
