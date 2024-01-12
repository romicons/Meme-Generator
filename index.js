// DOM ELEMENTS

const uploadImg = document.querySelector("#upload-meme-img");
const fileImg = document.querySelector('input[type="file"][name="img_upload"]');
const existingImage = document.getElementById("img-container");
const errorTxt = document.querySelector(".alert-text");
const imgMemeContainer = document.querySelector("#canvas");

// FUNCTION DARK/LIGHT MODE

let darkMode = localStorage.getItem('darkMode');
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
  darkMode = JSON.parse(localStorage.getItem('darkMode'));

  if (!darkMode) {
      enableDarkMode();
  } else {  
      disableDarkMode(); 
}
});

// FUNCTION TO UPLOAD AN IMAGE

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
const imgUrl = imgUrlInput.value;

const validUrl = (url) => {
  return validLinks.some(regex => regex.test(url));
}

const imgFromUrl = () => {
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

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
  }
});

uploadImg.addEventListener("change", updateImageDisplay);
imgUrlInput.addEventListener("input", imgFromUrl);