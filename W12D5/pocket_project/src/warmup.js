
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  let p = document.createElement("p");
  p.textContent = string;
  Array.from(htmlElement.children).forEach(child => htmlElement.removeChild(child));
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator("I <3 Vanilla DOM manipulation", partyHeader);

export default htmlGenerator;

