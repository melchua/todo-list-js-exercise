// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW


const task1 = newTask("Clean cat litter", "Take all the crap out of the box");
const task2 = newTask("Do laundry", "Take clothes to laundromat, wash and dry");
const tasks = [task1, task2];


task1.logState();
task1.markCompleted();
task1.logState();
console.log(task1.title);
console.log(task1.complete);
// console.log(tasks);
