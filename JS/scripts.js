//BUSINESS LOGIC
function List(Name,Thing1,Thing2,Thing3,Thing4,Thing5) {
  this.Name = Name;
  this.Thing1 = Thing1;
  this.Thing2 = Thing2;
  this.Thing3 = Thing3;
  this.Thing4 = Thing4;
  this.Thing5 = Thing5;
}

//USER INTERFACE
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var fullName = $("input#name").val();
    var firstThing = $("input#thing1").val();
    var secondThing = $("input#thing2").val();
    var thirdThing = $("input#thing3").val();
    var fourthThing = $("input#thing4").val();
    var fifthThing = $("input#thing5").val();

    var list = new List(fullName, firstThing, secondThing, thirdThing, fourthThing, fifthThing)

    $("h3.yourname").text(list.Name);
    $("h3.yourname").last().click(function() {
      $("#results").show();
      $("ul#todolist").append("<li>" + list.Thing1 + "</li>")
      $("ul#todolist").append("<li>" + list.Thing2 + "</li>")
      $("ul#todolist").append("<li>" + list.Thing3 + "</li>")
      $("ul#todolist").append("<li>" + list.Thing4 + "</li>")
      $("ul#todolist").append("<li>" + list.Thing5 + "</li>")
      $("li").click(function() {$(this).toggleClass("cross")});
    });
  });
});
