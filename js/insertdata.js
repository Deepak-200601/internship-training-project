//define all the table in global format 
firebase.initializeApp(firebaseConfig);
var personal_table = firebase.database().ref("personal_details_table");
function insert_details()
{
    //1. create the table
    //2. push data to the database
    var pddata = personal_table.push();
    //3. define the data
    //fetch the data 
    var full_name = document.getElementById("fname").value;
    var Contactno  = document.getElementById("Contactno").value;
    var title  = document.getElementById("title").value;
    var Alternate_Email  = document.getElementById("alter").value;
    var DOB  = document.getElementById("DOB").value;
    var Gender  = document.getElementById("Gender").value;
    var Designation  = document.getElementById("Des").value;
    var identity = document.getElementById("hidden_input").value;

    pddata.set({
        "name":full_name,
        "Contact": Contactno,
        "title": title,
        "Alternate_Email":Alternate_Email,
        "DOB": DOB,
        "Gender": Gender,
        "Designation":Designation,
        "identity": identity
    });

    alert("data inserted successfully");
}