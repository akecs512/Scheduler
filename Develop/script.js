
$("#currentDay").html(dayjs().format("dddd MM/DD/YYYY hh:mm a"))
var currentHour = dayjs().hour()
var startHour = 9
var endHour = 23
var timeArray = []



for (let index = startHour; index < endHour; index++) {
  let color = "past"
  let hour = index
  if (hour === currentHour) {
    color = "present"
  } else if (hour > currentHour) {
    color = "future"
  }

  let timeBlockEl = `
<div id="hour-9" class="row time-block ${color}">
<div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div>`

  timeArray.push(timeBlockEl)

}


$(".container-fluid").html(timeArray)