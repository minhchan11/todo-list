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

Task.prototype.crossOut = function() {
  $(this).toggleClass("cross")
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

    individualTask.addToList();

    $("h3.taskName").text(individualTask.fullname);
    $("#results").show();
    $("ul#priority-toDo").append("<li>" + individualTask.priority + "</li>")
    $("ul#dueDate-toDo").append("<li>" + individualTask.due + "</li>")
    $("ul#assigned-toDo").append("<li>" + individualTask.assigned + "</li>")
      // $("li").click(function() {$(this).toggleClass("cross")});
  });
});
