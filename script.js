// Form Validation
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
  } else {
    alert("Form submitted successfully!");
    // You can reset the form if needed
    document.getElementById("form").reset();
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Dynamic To-Do List
function addTask() {
  let input = document.getElementById("taskInput");
  let newTask = input.value.trim();

  if (newTask === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = newTask;

  li.onclick = function() {
    this.remove();
  };

  document.getElementById("taskList").appendChild(li);

  input.value = ""; // Clear input box
}