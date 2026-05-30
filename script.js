const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("#contactForm");
const formFeedback = document.querySelector("#formFeedback");
const messageInput = document.querySelector("#message");
const interestInput = document.querySelector("#interest");
const whatsappLink = document.querySelector("#whatsappLink");
const submitButton = contactForm.querySelector("button[type='submit']");

function buildServiceMessage(name, phone, interest, message) {
  const details = message ? ` Minha dúvida: ${message}` : "";
  return `Olá, sou ${name}. Meu telefone é ${phone}. Tenho interesse em ${interest}.${details}`;
}

function handleContactRequest(event) {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const phone = formData.get("phone").trim();
  const interest = formData.get("interest");
  const message = formData.get("message").trim();
  const serviceMessage = buildServiceMessage(name, phone, interest, message);

  whatsappLink.href = `https://wa.me/5541996601811?text=${encodeURIComponent(serviceMessage)}`;
  formFeedback.innerHTML = `
    Mensagem pronta para WhatsApp:<br>
    <small>${serviceMessage}</small>
  `;
}

function selectInterest(button) {
  document.querySelectorAll(".choice-button").forEach((item) => {
    item.classList.remove("is-selected");
  });

  button.classList.add("is-selected");
  interestInput.value = button.dataset.interest;
  messageInput.value = button.dataset.message;
  formFeedback.textContent = "Ótimo. Agora complete seus dados para falar com o atendimento.";
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".choice-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectInterest(button);
    document.querySelector("#atendimento").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

contactForm.addEventListener("submit", handleContactRequest);
submitButton.addEventListener("click", handleContactRequest);
