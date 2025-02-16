var nickname = "Ron";
var height = 67;
var weight = 50;

height = parseInt(67 / 12) + "'" + parseInt(67 % 12) + "\"";
weight = weight * 2.20462;

var con = 
    confirm("Do you want to share your personal information with the site?");

if (con == true) {
    console.log("Name: " + nickname + 
          "\nHeight: " + 
          height + 
          "\nWeight: " + 
          weight + "kg");
} else {
    console.log("User does not wish to share his/her information.");
}