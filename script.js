// window.addEventListener('load', (event) => {
//   let clock;
//
//   // Grab the current date
//   let currentDate = new Date();
//
//   // Target future date/24 hour time/Timezone
//   let targetDate = moment.tz("2024-10-30 23:59", "Australia/Sydney");
//
//   // Calculate the difference in seconds between the future and current date
//   let diff = targetDate / 1000 - currentDate.getTime() / 1000;
//
//   if (diff <= 0) {
//     // If remaining countdown is 0
//     clock = (".clock").FlipClock(0, {
//       clockFace: "DailyCounter",
//       countdown: true,
//       autostart: false
//     });
//     console.log("Date has already passed!")
//
//   } else {
//     // Run countdown timer
//     clock = $(".clock").FlipClock(diff, {
//       clockFace: "DailyCounter",
//       countdown: true,
//       callbacks: {
//         stop: function() {
//           console.log("Timer has ended!")
//         }
//       }
//     });
//
//     // Check when timer reaches 0, then stop at 0
//     setTimeout(function() {
//       checktime();
//     }, 1000);
//
//     function checktime() {
//       t = clock.getTime();
//       if (t <= 0) {
//         clock.setTime(0);
//       }
//       setTimeout(function() {
//         checktime();
//       }, 1000);
//     }
//   }
// });
//
window.addEventListener('load', (event) => {
  let clock;


  let currentDate = new Date();

  let targetDate = moment.tz("2024-09-15 10:00", "Asia/Colombo");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0, initialize the clock at 0
    clock = $(".clock").FlipClock(0, {
      clockFace: "HourlyCounter", // Changed from DailyCounter to HourlyCounter
      countdown: true,
      autostart: false
    });
    console.log("Date has already passed!");

  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "HourlyCounter", // Changed from DailyCounter to HourlyCounter
      countdown: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!");
        }
      }
    });

    // Check when timer reaches 0, then stop at 0
    setTimeout(function() {
      checktime();
    }, 1000);

    function checktime() {
      let t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }
});

