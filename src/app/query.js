    $(".main-buttons button").click(function(){
	    $("#output").addClass( "on-select" ).empty().append("<p class='output-content'>AI content goes here</p>");
	  });
	    $("#adamtab").hover(function(){
	        $("#adamtab").toggleClass("adamhover");
	        $(".tab-head div").toggleClass("bring-in");
	        $(".tab-desc div").toggleClass("bring-in");
	          $(".title").toggleClass("fade-out");
	    });
