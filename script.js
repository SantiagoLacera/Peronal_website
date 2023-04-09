function sendEmail() {
  Email.send({
    secureToken: " ",
    To: " ",
    From: document.getElementById("formEmail").value,
    Subject: "valentine's day requests",
    Body:
      "Name: " +
      document.getElementById("form-text").message +
      "Email: " +
      document.getElementById("form-email").message +
      "Phone Number: " +
      document.getElementById("formNumber").message +
      "Message: " +
      document.getElementById("formMessage").message,
  }).then((message) => alert("Thank you for your message!"));
}
