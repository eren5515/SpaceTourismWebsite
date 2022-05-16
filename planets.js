$("body").keydown(function(event){
    if (event.which=="39"){
        if ($("h1").text()=="MOON") {
           window.location.href = "destination-mars.html";
        }

        if ($("h1").text()=="MARS") {
            window.location.href = "destination-europa.html";
         }
         if ($("h1").text()=="EUROPA") {
            window.location.href = "destination-titan.html";
        } 
        if ($("h1").text()=="TITAN") {
            window.location.href = "destination-moon.html";
         }
        
    }

    if (event.which=="37"){
        if ($("h1").text()=="MOON") {
            
            window.location.href = "destination-titan.html";
         }
 
         if ($("h1").text()=="MARS") {
             
             window.location.href = "destination-moon.html";
          }
          if ($("h1").text()=="EUROPA") {
            window.location.href = "destination-mars.html";
             
         } 
         if ($("h1").text()=="TITAN") {
            window.location.href = "destination-europa.html";
             
          }
         
   }


});




  
   if ($("#moon").attr("class") != "aplanet  aplanetcselected") {
      $('#moon').hover(function() {
         $('.planetmoon').css('display', 'inline');
       }, function() {
         // on mouseout, reset the background colour
            $('.planetmoon').css('display', 'none');
      
       });

   }

   if ($("#mars").attr("class") != "aplanet  aplanetcselected") {
      $('#mars').hover(function() {
         $('.planetmars').css('display', 'inline');
       }, function() {
         // on mouseout, reset the background colour
            $('.planetmars').css('display', 'none');
      
       });

   }

   if ($("#europa").attr("class") != "aplanet  aplanetcselected") {
      $('#europa').hover(function() {
         $('.planeteuropa').css('display', 'inline');
       }, function() {
         // on mouseout, reset the background colour
            $('.planeteuropa').css('display', 'none');
      
       });

   }


   if ($("#titan").attr("class") != "aplanet  aplanetcselected") {
      $('#titan').hover(function() {
         $('.planettitan').css('display', 'inline');
       }, function() {
         // on mouseout, reset the background colour
            $('.planettitan').css('display', 'none');
      
       });

   }

    

  