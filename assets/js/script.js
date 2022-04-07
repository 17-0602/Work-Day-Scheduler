var timeDisplayEl = $('#time-display');
var descrInput = document.querySelector("#task");
var saveBtn = document.querySelector("#saveBtn");

renderTaskRegistered();

function renderTaskRegistered() {
  var task = localStorage.getItem("task");

  if (!task) {
    return;
  }

  descrInput.textContent = task;
}

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var task = document.querySelector("#task").value;

  localStorage.setItem("task", task);
  renderTaskRegistered();
})


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  })

  //var interval = setInterval(hourUpdater, 15000);

  $("#9oClock .description").val(localStorage.getItem("9oClock"))
})
setInterval(displayTime, 1000);