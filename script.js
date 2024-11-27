function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();

  // Extract time
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Handle 12-hour format and AM/PM
  const isAm = hours < 12;
  const amPm = isAm ? "AM" : "PM";
  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  hours = String(hours).padStart(2, "0");

  // Format time
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  timeElement.textContent = timeString;

  // Format date
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const day = dayNames[now.getDay()];
  const date = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  const dateString = `${day}, ${month} ${date}, ${year}`;
  dateElement.textContent = dateString;
}

// Smooth refresh of time every second
setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
