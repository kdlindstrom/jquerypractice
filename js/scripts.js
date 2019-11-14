
$(document).ready(function() {
  $("button#greetings").click(function(){
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#webpage").prepend("<li>Hi there</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
      $("ul#webpage").children("li").first().click(function(){
        $(this).remove();
      });
    });
  });
  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>goodbye</li>");
    $("ul#webpage").prepend("<li>see you later</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
      $("ul#webpage").children("li").first().click(function(){
        $(this).remove();
      });
    });
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>stop copying me</li>");
    $("ul#webpage").prepend("<li>i never copied you.</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
      $("ul#webpage").children("li").first().click(function(){
        $(this).remove();
      });
    });
  });


});
