let inMessage = document.querySelector("#inbox");
let divCreated = false;
let input;
let saveButton = document.querySelector("#button")
let inputBox = document.querySelector("#input"); 
// let upComing = document.querySelector("#upcoming");
let selectedDate = new Date(document.querySelector("#dateInput").value);
let tomorrowDate = new Date();
let upComingDate = new Date();


function inbox() {
    inMessage.addEventListener("click", list);
}
function list() {
    if (!divCreated) {
        inMessage.style.color = "pink";

        let add = document.createElement("p");
        // let button = document.createElement("button");

        // button.innerHTML = `<span class="button">Done</span>`;
        add.innerHTML = `<span class=" button font-bold cursor-pointer ">Add Task</span>`;

        let content = document.getElementById("dropList");
        content.appendChild(add);
        // content.appendChild(button);

        add.addEventListener("click", handleClick);
        // button.addEventListener("click", buttonClick);

        divCreated = true;
    }
}

function handleClick() {
    if (this){
        let cover = document.querySelector("#task");
        cover.style.display = "block";
        this.remove();
    }else{
        this.add();
    }
  
}



function save() {
    if (inputBox.value.trim() !== '') {
        let inputText = inputBox.value.trim();
        let inputDate = new Date(document.querySelector("#dateInput").value);

        // Calculate the difference in days between the selected date and tomorrow
        let timeDiff = inputDate.getTime() - tomorrowDate.getTime();
        let dayDiff = timeDiff / (1000 * 3600 * 24);

        // If the difference is less than 1 day, move to tomorrow container
        if (dayDiff < 1) {
            // Code to move the task to tomorrow container
            let tomorrowContainer = document.querySelector("#tomorrow");
            moveTaskToContainer(inputText, inputDate, tomorrowContainer);
        } else {
            // Code to move the task to upcoming container
            let upcomingContainer = document.querySelector("#upcoming");
            moveTaskToContainer(inputText, inputDate, upcomingContainer);
        }
    }
}

function moveTaskToContainer(taskText, taskDate, container) {
    // Create elements for the task
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = taskText;

    // Append the task to the container
    container.appendChild(taskElement);
}

// function saveItems(){
//     nextDay.addEventListener("click", save);
//  }

 
// function save(){
//     if(inputBox!== ''){
//         let inputText = inputBox.value.trim();
//     }
   
//     tomorrowDate.setDate(tomorrowDate.getDate() + 1);
//      upComingDate.setDate(upComingDate.getDate() + 2);

//      let selectedYear = selectedDate.getFullYear();
//      let selectedMonth = selectedDate.getMonth();
//      let selectedDay = selectedDate.getDate();

//      let tomorrowYear = tomorrowDate.getFullYear();
//      let tomorrowMonth = tomorrowDate.getMonth();
//      let tomorrowDay = tomorrowDate.getDate();

//      let upComingYear = upComingDate.getFullYear();
//      let upComingMonth = upComingDate.getMonth();
//      let upComingDay = upComingDate.getDate();

//      if (selectedYear === tomorrowYear &&
//         selectedMonth === tomorrowMonth &&
//         selectedDay === tomorrowDay) {
       
//         }else if(selectedYear === upComingYear &&
//                 selectedMonth === upComingMonth && 
//                 selectedDay === upComingDay) {
//                     return upComingDate;
//                 }
// }




inbox();
saveItems();


