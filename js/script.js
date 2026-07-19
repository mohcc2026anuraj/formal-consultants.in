 const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const consultationForm = document.getElementById("consultationForm");

if (consultationForm) {
  consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "918547081373";

    const whatsappMessage =
      New consultation enquiry\n\n +
      Name: ${name}\n +
      Phone: ${phone}\n +
      Email: ${email}\n +
      Service required: ${service}\n +
      Message: ${message}\n\n +
      Please attach your CV or documents in this WhatsApp chat if needed.;

    const whatsappURL =
      https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)};

    window.open(whatsappURL, "_blank");
  });
}
```
