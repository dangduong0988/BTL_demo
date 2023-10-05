const btn = document.getElementById("Send");
btn.addEventListener("click", function () {
  const email = document.getElementById("Email");
  const pass = document.getElementById("mk");
  if (email.value == "") {
    alert("Bạn chưa nhập email");
  } else if (pass.value == "") {
    alert("Bạn chưa nhập mật khẩu");
  }
});