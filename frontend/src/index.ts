import { formData } from "./forms";
console.log("hello");
console.log("hello x 2");

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});
