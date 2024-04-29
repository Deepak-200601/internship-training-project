function def()
    {
        //hide the signup container 
        //alert ("testing");
        document.getElementById("signup_con").style.display="none";
        document.getElementById("verification_con").style.display="none";
            
    }
    function open_signup()
    {
        document.getElementById("login_con").style.display="none";
        document.getElementById("signup_con").style.display="block";
    }

    function create_account()
    {
        //fetch the data from interface 
        var emailid = document.getElementById("signup_emailid").value;
        var password = document.getElementById("signup_password").value;
        console.log(emailid,password);

        // perform the user verification 
        var pwdstatus = validite_password(password);
        console.log(pwdstatus);
        if(pwdstatus == true)
        {
            //ready to create account
            document.getElementById("signup_notification").innerHTML="processing please wait";
            document.getElementById("signup_notification").style.color="green";
            //creating an account has 3 steps 
            // 1. connect to the server
            // 2. perform the operation
            // create account in an application
            firebase.auth().createUserWithEmailAndPassword(emailid,password).then((success)=>{
                //execute the code for success scenario
                alert("account created successfully");
            }).catch((error)=>{
                //execute the code for negative scenario
                alert("Account Creation Failed");
            });
            // 3. handle the response
        }
        else
        {
            //not ready to create account
            // set the message inside signup_notification tag
            document.getElementById("signup_notification").innerHTML="invalid input please try again";
            document.getElementById("signup_notification").style.color="red";
        }
    }

    function login()
    {
        var emailid = document.getElementById("login_emailid").value;
        var password = document.getElementById("login_password").value;
        console.log(emailid,password);

        var pwdstatus = validite_password(password);
        console.log(pwdstatus);
        if(pwdstatus == true)
        {
            //ready to login
            document.getElementById("login_notification").innerHTML="logging in";
            document.getElementById("login_notification").style.color="green";
            firebase.auth().signInWithEmailAndPassword(emailid,password).then((success)=>{
                //execute the code for success scenario
                alert("Login successful");
            }).catch((error)=>{
                //execute the code for negative scenario
                alert("Login Failed");
            });
        }
        else
        {
            //not ready to login
            // set the message inside signup_notification tag
            document.getElementById("login_notification").innerHTML="invalid input please try again";
            document.getElementById("login_notification").style.color="red";
        }
    }
    function logout_details()
    {
        firebase.auth().signOut(); 
        alert("logged out successfully");
        
        //redirect the page to index page 
        window.location.reload();
    }
    function send_email()
    {
        //send email to active user
        var user=firebase.auth().currentUser;
        user.sendEmailVerification().then(function(){
            alert("mail Sent Successfully");

        }).catch(function(){
            alert("something went wrong");
        })
    }
    function update_details(){
        document.getElementById("displayprofile_con").style.display="none";
        document.getElementById("updateprofile_con").style.display="block";
    }