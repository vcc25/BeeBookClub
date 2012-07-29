    window.onload = initAll;
    function initAll() {
      document.getElementById('form_join_submit').onclick = validate_form_join
    }

    function validate_form_join() {

        if(document.form_join.name.value.length == 0)
        {
          window.alert("Please Enter your Firstname");
          document.getElementById("name").focus();
          return false;
        }
                   
        if(document.form_join.email.value.length == 0)
        {
          window.alert("Please Enter your Email Address");
          document.getElementById("email").focus();
          return false;
        }

        if(document.form_join.password.value.length == 0)
        {
          window.alert("Please Enter Your Password");
          document.getElementById("password").focus();
          return false;
        }

		if(document.form_join.confpwd.value.length == 0)
        {
          window.alert("Please Confirm Your password");
          document.getElementById("confpwd").focus();
          return false;
        }
		
		
        if(document.form_join.password.value != document.form_join.confpwd.value)
        {
          window.alert("Your Passwords doesn't Match. Please check Passwords Entered");
          document.getElementById("password").focus();
          return false;
        }

        return true;
    }
