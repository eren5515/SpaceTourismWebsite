$(".circles").click(function(){
    if ($(this).attr("id")=="circle1") {
        window.location.href = "crew-commander.html";
    }

    if ($(this).attr("id")=="circle2") {
        window.location.href = "crew-specialist.html";
    }
    if ($(this).attr("id")=="circle3") {
        window.location.href = "crew-pilot.html";
    }
    if ($(this).attr("id")=="circle4") {
        window.location.href = "crew-engineer.html";
    }
});


 $("body").keydown(function(event){
     if (event.which=="39"){
         if ($(".selectedcircle").attr("id")=="circle1") {
            window.location.href = "crew-specialist.html";
         }

         if ($(".selectedcircle").attr("id")=="circle2") {
            window.location.href = "crew-pilot.html";
         }
         if ($(".selectedcircle").attr("id")=="circle3") {
            window.location.href = "crew-engineer.html";
         }
         if ($(".selectedcircle").attr("id")=="circle4") {
            window.location.href = "crew-commander.html";
         }
     }

     if (event.which=="37"){
        if ($(".selectedcircle").attr("id")=="circle1") {
            window.location.href = "crew-engineer.html";
        }

        if ($(".selectedcircle").attr("id")=="circle2") {
            window.location.href = "crew-commander.html";
        }
        if ($(".selectedcircle").attr("id")=="circle3") {
            window.location.href = "crew-specialist.html";
        }
        if ($(".selectedcircle").attr("id")=="circle4") {
            window.location.href = "crew-pilot.html";
        }
    }


 });