
$.get("https://jsonplaceholder.typicode.com/todos", function(data) {
  $(data).each(function(idx) {
  cz = data[idx]

    jCz = $("<li class='red'></li>").text("Id Użytkownika: " + cz.userId + "  -----  Id: " + cz.id + " " +"  -----  Tytuł: "+ cz.title + "   -----  UKOŃCZONE: " + cz.completed);
  if (cz.completed) {
    jCz.addClass("green")
  }
  $(".result ul").append(jCz)
  
  })
})

  