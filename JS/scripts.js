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

Task.prototype.addToList = function() {
 toDoList.push(this);
}

function createList() {
  for (var index = 0; index < toDoList.length; index++) {
  console.log(toDoList[index])
  $("#results").append("<h2>" + toDoList[index].fullname + "</h2>")
  $("#results").append("<li>" + toDoList[index].priority + "</li>")
  $("#results").append("<li>" + toDoList[index].due + "</li>")
  $("#results").append("<li>" + toDoList[index].assigned + "</li>");
  return true }
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
    $("#results").show();

    individualTask.addToList();
    createList();

  });
});
