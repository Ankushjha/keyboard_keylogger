// getting all elements as variable to add or remove events

const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn");

//adding event to show what will happen when we click on that start button
startBtn.addEventListener("click", ()=> {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})


//removing event so that further key presses will not work when we click stop button
stopBtn.addEventListener("click", ()=> {
    document.removeEventListener("keydown", handleKeyDown)
    document.removeEventListener("keyup", handleKeyUp)

    logDiv.textContent = "";
    stateDiv.textContent = "";

    stopBtn.disabled = true;
    startBtn.disabled = false;
})


function handleKeyDown(event){
    logDiv.textContent = `Key ${event.key} pressed down`;  //this event will show which key is pressed as argument
    stateDiv.textContent = "Key is down"
}
function handleKeyUp(event){
    logDiv.textContent = `Key ${event.key} pressed up`;
    stateDiv.textContent = "Key is up"
}