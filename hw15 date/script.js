const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.width = "200px";
wrapper.style.height = "100px";
wrapper.style.border = "1px solid blue";

const div = document.createElement("div");
div.style.marginLeft= "50px";
div.style.marginTop = "20px";
div.style.fontFamily = "cursive";

const select = document.createElement("select");
select.style.marginLeft = "60px";
select.style.fontFamily = "cursive";

const option1 = document.createElement("option");
option1.innerText = "hh:mm:ss";
option1.value = 0;

const option2 = document.createElement("option");
option2.innerText = "hh:mm:ss a.m./p.m.";
option2.value = 1;

select.appendChild(option1);
select.appendChild(option2);

wrapper.appendChild(select);
wrapper.appendChild(div);

const arrayOfFunctions = [];
arrayOfFunctions.push(dateFormatSimple);
arrayOfFunctions.push(dateFormatAmPm);

renderWatches(arrayOfFunctions[0]());

let intervalId = setInterval(() => { renderWatches(dateFormatSimple()) }, 1000);
let intervalIds = [];
intervalIds.push(intervalId); 
    

function dateFormatSimple() {
    const date = new Date();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const currentTime = date.getHours() + ":" + minutes + ":" + seconds;
    return currentTime;
}

function dateFormatAmPm() {
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const ampm = date.getHours() >= 12 ? "p.m." : "a.m."
    const currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return currentTime;
}

function renderWatches(string) {
    const arr = Array.from(string);

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    for (let i = 0; i < arr.length; i++) {
        const span = document.createElement("span");
        div.appendChild(span);
        span.innerHTML = arr[i];
    }
}

select.addEventListener("change", (event) => {
    const functionFormat = event.target.value;

    intervalIds.forEach(clearInterval);
    intervalIds.splice(0, intervalIds.length);

    renderWatches(arrayOfFunctions[functionFormat]());
    const intervalId = setInterval(() => {
        renderWatches(arrayOfFunctions[functionFormat]())
    }, 1000);

    intervalIds.push(intervalId);
})
