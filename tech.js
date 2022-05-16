$(".circles").hover(function() {

    $(this).css("border-color","white");


}, function() {
    $(this).css("border-color","rgb(104, 101, 101)");

}

);


//38 yukarı 40 aşağı//

$("body").keydown(function(event) {
    if(event.which=="40") {
        if($("h1").text()=="LAUNCH VEHICLE") {
            window.location.href = "technology-spaceport.html";
        }
        if($("h1").text()=="SPACEPORT") {
            window.location.href = "technology-capsule.html";
        }
        if($("h1").text()=="SPACE CAPSULE") {
            window.location.href = "technology-vehicle.html";
        }
    }
    if(event.which=="38") {
        if($("h1").text()=="LAUNCH VEHICLE") {
            
            window.location.href = "technology-capsule.html";
        }
        if($("h1").text()=="SPACEPORT") {
            window.location.href = "technology-vehicle.html";
        }
        if($("h1").text()=="SPACE CAPSULE") {
            window.location.href = "technology-spaceport.html";
            
        }
    }


});