document.addEventListener("DOMContentLoaded", function() {
  // Visitor counter using localStorage
  let visitorCount = localStorage.getItem("visitorCount");
  visitorCount = visitorCount ? parseInt(visitorCount) + 1 : 1;
  localStorage.setItem("visitorCount", visitorCount);
  document.getElementById("visitorCount").innerText = "방문자 수: " + visitorCount;

  // Validate login form before redirection
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (username && password) {
      window.location.href = "illegal.html";
    } else {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
    }
  });

  // Redirect signup button
  document.getElementById("signUpButton").addEventListener("click", function() {
    window.location.href = "illegal.html";
  });
});
