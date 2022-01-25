let popup = document.getElementById("popup");
const createMachinePopup = () => {
  popup = document.getElementById("popup");
  popup.style = "display:block";
};

const createMachine = () => {
  const card = document.getElementById("card-container");
  console.log(document.styleSheets);
  const name = document.getElementById("machineName");
  const description = document.getElementById("description");
  console.log("values", name.value, description.value);
  popup = document.getElementById("popup");
  popup.style = "display:none";
  console.log("child appended", card);
  card.insertAdjacentHTML(
    "beforeend",
    `
    <div id="card" class ="card">
      <img src="machine.png" width="100%" alt="m/c" />
      <h2>${name.value}</h2>
      <p>${description.value}</p>
      <button class="create-machine">START</button>
    </div>`
  );
};
