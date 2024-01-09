// DOM ELEMENTS

const uploadImg = document.querySelector("#upload-meme-img");
const fileImg = document.querySelector('input[type="file"][name="img_upload"]');
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

// FUNCTION TO UPLOAD THE IMAGE

const fileTypes = [
  "image/apng",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
];

const validFileType = (file) => {
  return fileTypes.includes(file.type);
}

uploadImg.style.opacity = 0;

const updateImageDisplay = () => {
  while (errorTxt.firstChild) {
      errorTxt.removeChild(errorTxt.firstChild);
  }

  const currentFile = fileImg.files[0];

  if (!currentFile) {
      const noImg = document.createElement("p");
      noImg.textContent = "No has cargado ninguna imagen.";
      noImg.style.color = "red";
      errorTxt.appendChild(noImg);
  } else {
      if (validFileType(currentFile)) {
          const existingImage = document.getElementById("img-container");
          if (existingImage) {
              existingImage.src = URL.createObjectURL(currentFile);
          } else {
              const txtInvalidFile = document.createElement("p");
              txtInvalidFile.textContent = "No se encontró ninguna imagen. Por favor, intente nuevamente.";
              txtInvalidFile.style.color = "red";
              errorTxt.appendChild(txtInvalidFile);
          }
      } else {
          const txtInvalidFile = document.createElement("p");
          txtInvalidFile.textContent = `${currentFile.name}: No es un archivo válido. Por favor, elige un archivo válido.`;
          txtInvalidFile.style.color = "red";
          errorTxt.appendChild(txtInvalidFile);
      }
  }
};


// EVENT LISTENER

uploadImg.addEventListener("change", updateImageDisplay);
