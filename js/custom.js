$(document).ready(function(){
  $("#remove1").click(function(){
    $(".remove1").hide();
  });
});
$(document).ready(function(){
  $("#remove2").click(function(){
    $(".remove2").hide();
  });
});
$(document).ready(function(){
  $("#remove3").click(function(){
    $(".remove3").hide();
  });
});

// nn
$(document).ready(function(){
  $("#remove4").click(function(){
    $(".remove4").hide();
  });
});
$(document).ready(function(){
  $("#remove5").click(function(){
    $(".remove5").hide();
  });
});
$(document).ready(function(){
  $("#remove6").click(function(){
    $(".remove6").hide();
});
});
$(document).ready(function(){
  $("#remove7").click(function(){
    $(".remove7").hide();
  });
  $("#update").click(function(){
     var first = $("#first").val();
     var second = $("#second").val();
     var third = $("#third").val();
     var result1= first * 30 ;
     var result2= second * 15 ;
     var result3= third * 30 ;
     var result4= (result1 + result2 + result3);
     var result5= ((result1 + result2 + result3) * 0.16)/3 ;
     var result6 = result4 + result5;

     $("#total1").html("JD " +result1 );
     $("#total2").html("JD " +result2);
     $("#total3").html("JD " +result3);
     $("#carttotal").html("JD " +result4);
     $("#tax").html("JD " + result5);
     $("#grand").html("JD " + result6);


  });
});
    // $(document).ready(function(){
    //       $(".change").on({

    //         "click", "href" function(){
    //           $(this).attr("class", "wish");
    //           // $(this).css("font-size", "24px");
    //           // $(this).css("color", "yellow");
    //           // $(this).css("font-family", "arial");
    //         }  
    //       });
    //     });
