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
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); 
    if (darkMode !== 'enabled') {
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
      errorTxt.appendChild(noImg);
    } else {
      if (validFileType(currentFile)) {
        // Crear una vista previa de la imagen
        const image = document.createElement("img");
        image.src = URL.createObjectURL(currentFile);
        image.alt = image.title = currentFile.name;
        imgMemeContainer.appendChild(image);
      } else {
        const txtInvalidFile = document.createElement("p");
        txtInvalidFile.textContent = `Nombre del archivo ${currentFile.name}: No es un archivo válido. Por favor, elige un archivo válido.`;
        errorTxt.appendChild(txtInvalidFile);
      }
    }
  };

// EVENT LISTENER

uploadImg.addEventListener("change", updateImageDisplay);
