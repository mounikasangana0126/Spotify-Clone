import './style.css';
const APP_URL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("accessToken")) {
    window.location.href = `${APP_URL}/dashboard/dashboard.html`;
  } else {
    window.location.href = `${APP_URL}/login/login.html`;
  }
})
 