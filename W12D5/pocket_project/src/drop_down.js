const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  return Object.entries(dogs).map(dog => {
    let a = document.createElement('a');
    a.innerHTML = dog[0];
    a.setAttribute('href', dog[1]);
    let li = document.createElement('li');
    li.classList.add('dog-link');
    li.appendChild(a);
    return li;
  });
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.getElementsByClassName("drop-down-dog-list")[0];
  dogLinks.forEach(dogLink => ul.appendChild(dogLink));
}

attachDogLinks();

function handleEnter(event) {
  let dogLinks = Array.from(document.querySelectorAll("li.dog-link"));
  dogLinks.forEach(dogLink => dogLink.classList.add("visible"));
}

function handleLeave(event) {
  let dogLinks = Array.from(document.querySelectorAll("li.dog-link"));
  dogLinks.forEach(dogLink => dogLink.classList.remove("visible"));
}

function dogDropDown() {
  let list = document.querySelector(".drop-down-dog-nav");
  list.addEventListener("mouseenter", handleEnter.bind(this));
  list.addEventListener("mouseleave", handleLeave.bind(this));
}

dogDropDown();