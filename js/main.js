//Step # 1 (Set the release date)
let releaseDate = new Date("Oct 20, 2020 05:53:07");

//Step # 2 (Create Interval Function)
function interval() {
  //Step # 3 get current time in milliseconds
  let current = new Date().getTime();

  //Step # 4 find the duration between the release  and current date
  let duration = releaseDate - current;

  //Step # 5 we need to get the days, hours, mins, seconds

  //in one day we have (hours * minutes * seconds * milliseconds)

  let days = Math.floor(duration / (24 * 60 * 60 * 1000));

  let hours = Math.floor((duration % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

  let mins = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));

  let seconds = Math.floor((duration % (1000 * 60)) / 1000);

  //Step # 6 Target the html counter code
  let countdown = document.querySelector("#countdown");

  //Step # 7 Cut and paste html code here

  //Step # 8 Replace static Days, Hours, Minutes and Seconds with dynamic

  countdown.innerHTML = `
  <div class="counter-box">

            <span class="counter-number">${days}</span>

            <span class="counter-text">Days</span>

       </div>

       <div class="counter-box">

            <span class="counter-number">${hours}</span>

            <span class="counter-text">Hours</span>

       </div>
       <div class="counter-box">

            <span class="counter-number">${mins}</span>

            <span class="counter-text">Mins</span>

       </div>

      <div class="counter-box">

            <span class="counter-number">${seconds}</span>

            <span class="counter-text">Seconds</span>

       </div>


`;

  //Step # 9  Put the condition if duration completed

  if (duration < 0) {
    closeInterval();
    countdown.style.color = "#76b328";
    countdown.style.fontSize = "22px";
    countdown.innerHTML = "Website has been launched";
  }
}

var interval = setInterval(interval, 1000);

//Step # 10 Close interval
function closeInterval() {
  clearInterval(interval);
}
