function fetchdata(identity){
    //fetch the data from database
    firebase.database().ref("personal_details_table").once('value',function(snapshot){
        //fetch individual data and compare with identity
        snapshot.forEach(function(childsnapshot){
            //compare the identity 
            var dbidentity = childsnapshot.val().identity;
            if (dbidentity==identity){
                //user is present 
                document.getElementById("personal_details_con").style.display="none";
                //display the info container 
                document.getElementById("displayprofile_con").style.display="block";
                //set the data inside the paragraph tag of display profile container
                document.getElementById("name_info").innerHTML="NAME: "+childsnapshot.val().name;
                document.getElementById("title_info").innerHTML="TITLE : "+childsnapshot.val().title;
                document.getElementById("contact_info").innerHTML="CONTACT : "+childsnapshot.val().Contact;
                document.getElementById("gender_info").innerHTML="GENDER: "+childsnapshot.val().Gender;
                document.getElementById("alter_info").innerHTML="ALTERNATE_EMAIL: "+childsnapshot.val().Alternate_Email;
                document.getElementById("des_info").innerHTML="DESIGNATION : "+childsnapshot.val().Designation;
                document.getElementById("DOB_info").innerHTML="DOB : "+childsnapshot.val().DOB;
                
                //set the data inside the input tag for updating the information
                document.getElementById("updatename_info").value=childsnapshot.val().name;
                document.getElementById("updatetitle_info").value=childsnapshot.val().title;
                document.getElementById("updatecontact_info").value=childsnapshot.val().Contact;
                document.getElementById("updategender_info").value=childsnapshot.val().Gender;
                document.getElementById("updatealter_info").value=childsnapshot.val().Alternate_Email;
                document.getElementById("updatedes_info").value=childsnapshot.val().Designation;
                document.getElementById("updateDOB_info").value=childsnapshot.val().DOB;
            }
        });
    });
}