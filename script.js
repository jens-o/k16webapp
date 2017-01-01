// Function to control LEDs
function buttonClick(clicked_id){

    if (clicked_id == "1"){
        $.get( "curl.php", {
        command: "SwicthOn", device: "0"} );  
    } 

    if (clicked_id == "2"){
        $.get( "curl.php", {
        command: "SwicthOff", device: "0"} );  
    } 

    if (clicked_id == "3"){
        $.get( "curl.php", {
        command: "SwicthOn", device: "1"} );  
    } 

    if (clicked_id == "4"){
        $.get( "curl.php", {
        command: "SwicthOff", device: "1"} ); 
    }

    if (clicked_id == "5"){
        $.get( "curl.php", {
        command: "SwicthOn", device: "2"} );  
    } 

    if (clicked_id == "6"){
        $.get( "curl.php", {
        command: "SwicthOff", device: "2"} ); 
    } 

}