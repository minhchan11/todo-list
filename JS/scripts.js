//BUSINESS LOGIC

//this is our actual list
var toDoList = []

//this defines each of our tasks
function Task(name, priority, due, assigned) {
  this.fullname = name;
  this.priority = priority;
  this.due = due;
  this.assigned = assigned;
}

//this adds to our toDoList array
Task.prototype.addToList = function() {
  toDoList.push(this);
}

//
function createList(individualTask) {
  $("#results").append("<h2 class='title'>" + individualTask.fullname + "</h2>");
  $("#results").append("<li> Priority: " + individualTask.priority + "</li>");
  $("#results").append("<li> Due date: " + individualTask.due + "</li>");
  $("#results").append("<li> Assigned by: " + individualTask.assigned + "</li>");
}


//USER INTERFACE
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var Name = $("input#name").val();
    var Priority = $("input#priority").val();
    var Due = $("input#due").val();
    var Assigned = $("input#assigned").val();

    var individualTask = new Task(Name, Priority, Due, Assigned);
    $("#results").val("")
    $("#results").show();

    individualTask.addToList();
    createList(individualTask);
    $(".title").last().click(function(){
      $(this).toggleClass("crossOut");
      $(this).nextUntil(".title").toggle();
    });
  });
});
