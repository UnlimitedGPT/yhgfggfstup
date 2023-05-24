const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch("https://formsubmit.co/ajax/contact@unlimitedgpt.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      _replyto: "contact@unlimitedgpt.co",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      statusMessage.textContent = "Message sent! We'll be in touch soon.";
      form.reset();
    })
    .catch((error) => {
      statusMessage.textContent = "There was an error sending your message. Please try again later.";
    });
});
