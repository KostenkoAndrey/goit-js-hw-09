`use strict`;

const formData = {
    email: "",
    message: ""
  };
  
  const localStorKey = "feedback-form-state";
  
  const form = document.querySelector(".feedback-form");
  const input = form.elements.email;
  const textarea = form.elements.message;
  
  const saveToLocalStorage = () => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    localStorage.setItem(localStorKey, JSON.stringify(formData));
  };
  
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem(localStorKey);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      input.value = formData.email;
      textarea.value = formData.message;
    }
  };
  loadFromLocalStorage();
  

  form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() === "" || textarea.value.trim() === "") {
      alert("Fill please all fields");
      return;
    }
  
    console.log({
      email: input.value.trim(),
      message: textarea.value.trim()
    });
  
    localStorage.removeItem(localStorKey);
    formData.email = "";
    formData.message = "";
    form.reset();
  });
  