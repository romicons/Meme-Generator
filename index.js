// DOM ELEMENTS

const imgMemeContainer = document.getElementById("canvas");
const btnImgMenu = document.getElementById("btn-img-menu");
const btnTextMenu = document.getElementById("btn-text-menu");
const editImgMenu = document.getElementById("img-editor-menu");
const editTextMenu = document.getElementById("text-editor-menu");
const btncloseImgMenu = document.getElementById("close-img-menu");
const btncloseTextMenu = document.getElementById("close-text-menu");

// FUNCTIONS OF NAVIGATION 

//    OPEN IMAGE EDITOR

const openImgEditor = () => {
  editTextMenu.style.display = "none";
  editImgMenu.style.display = "block";
};

//    OPEN TEXT EDITOR

const openTextEditor = () => {
  editImgMenu.style.display = "none";
  editTextMenu.style.display = "block";
};

//    CLOSE MENU

const closeImgMenu = () => {
  editImgMenu.style.display = "none";
};

const closeTextMenu = () => {
  editTextMenu.style.display = "none";
};

//    FUNCTION DARK/LIGHT MODE

let darkMode = localStorage.getItem('darkMode') === 'true';
const darkModeToggle = document.querySelector('#btn-darkmode');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', true);
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', false);
}

darkModeToggle.addEventListener('click', () => {
  darkMode = !darkMode; 
  if (darkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// FUNCTION TO UPLOAD AN IMAGE

const uploadImg = document.querySelector("#upload-meme-img");
const fileImg = document.querySelector('input[type="file"][name="img_upload"]');
const existingImage = document.getElementById("img-container");
const errorTxt = document.querySelector(".alert-text");

let noImg = document.createElement("p")
let txtInvalidFile = document.createElement("p");

const fileTypes = [
  "image/apng",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
];

const validFileType = (file) => {
  return fileTypes.includes(file.type);
};

const updateImageDisplay = () => {
  while (errorTxt.firstChild) {
      errorTxt.removeChild(errorTxt.firstChild);
};

const currentFile = fileImg.files[0];

  if (!currentFile) {
      noImg.textContent = "No has cargado ninguna imagen.";
      noImg.style.color = "red";
      errorTxt.appendChild(noImg);
  } else {
      if (validFileType(currentFile)) {
          if (existingImage) {
              existingImage.src = URL.createObjectURL(currentFile);
          } else {
              txtInvalidFile.textContent = "No se encontró ninguna imagen. Por favor, intente nuevamente.";
              txtInvalidFile.style.color = "red";
              errorTxt.appendChild(txtInvalidFile);
          }
      } else {
          txtInvalidFile.textContent = `${currentFile.name}: No es un archivo válido. Por favor, intente nuevamente.`;
          txtInvalidFile.style.color = "red";
          errorTxt.appendChild(txtInvalidFile);
      }
  }
};

//FUNCTION TO USE AN IMAGE FROM AN URL

const validLinks = [
  /^(https:\/\/.*)(\.jpg|\.png)?$/,
  /^data:image\/png/,
  /^data:image\/jpeg/,
  /^data:image\/apng/,
  /^data:image\/ajpeg/
];

const imgUrlInput = document.getElementById("url-img-input");

const validUrl = (url) => {
  return validLinks.some(regex => regex.test(url));
}

const imgFromUrl = (event) => {
  event.preventDefault()
  let imgUrl = imgUrlInput.value;

  if (imgUrl === "") {
      noImg.textContent = "No has ingresado ninguna URL.";
      noImg.style.color = "red";
      errorTxt.appendChild(noImg);
  } else {
        if (validUrl(imgUrl)) {
          existingImage.src = imgUrl;
        } else {
          txtInvalidFile.textContent = `El link ingresado no es válido. Por favor, intente nuevamente.`;
          txtInvalidFile.style.color = "red";
          errorTxt.appendChild(txtInvalidFile);
        }
    }
};

// EVENT LISTENER

//    DOM EVENTS

btnImgMenu.addEventListener("click", openImgEditor);
btnTextMenu.addEventListener("click", openTextEditor);
btncloseImgMenu.addEventListener("click", closeImgMenu);
btncloseTextMenu.addEventListener("click", closeTextMenu);

uploadImg.addEventListener("change", updateImageDisplay);
imgUrlInput.addEventListener("input", imgFromUrl);
