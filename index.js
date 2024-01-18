//***********************FUNCTIONS OF NAVIGATION***************************

const setStyleToNone = (element) => {
  element.style.display = "none";
}

const setStyleToGrid = (element) => {
  element.style.display = "grid";
}

//    OPEN IMAGE EDITOR

const openImgEditor = () => {
  setStyleToGrid(document.getElementById("img-editor-menu"));
  setStyleToNone(document.getElementById("text-editor-menu"));
};

//    OPEN TEXT EDITOR

const openTextEditor = () => {
  setStyleToGrid(document.getElementById("text-editor-menu"));
  setStyleToNone(document.getElementById("img-editor-menu"));
};

//    CLOSE MENU

const closeImgMenu = () => {
  setStyleToNone(document.getElementById("img-editor-menu"))
};

const closeTextMenu = () => {
  setStyleToNone(document.getElementById("text-editor-menu"));
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

//*********************FUNCTIONS OF THE IMAGE MENU*************************

//    FUNCTION TO UPLOAD AN IMAGE

const existingImage = document.getElementById("img-container");
const errorTxt = document.querySelector(".alert-text");
let noImg = document.createElement("p")
let txtInvalidFile = document.createElement("p");

const updateImageDisplay = () => {
  const fileImg = document.querySelector('input[type="file"][name="img_upload"]');
  const fileTypes = [
    "image/apng",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
  ];
  
  const validFileType = (file) => {
    return fileTypes.includes(file.type);
  };
  

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

//    FUNCTION TO USE AN IMAGE FROM AN URL

const imgFromUrl = (event) => {
  const validLinks = [
    /^(https:\/\/.*)(\.jpg|\.png)?$/,
    /^data:image\/png/,
    /^data:image\/jpeg/,
    /^data:image\/apng/,
    /^data:image\/ajpeg/
  ];
  
  const validUrl = (url) => {
    return validLinks.some(regex => regex.test(url));
  }

  event.preventDefault()
  let imgUrl = document.getElementById("url-img-input").value;

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

//    FUNCTION TO DOWNLOAD THE IMAGE

let imgMemeContainer = document.getElementById("canvas");

//    FUNCTION TO CHANGE THE BACKGROUND COLOR IMAGE

const changeImageBackgroundColor = () => {
  let imgBgcSelected = document.getElementById("blend-mode-color-value");

  imgBgcSelected.textContent = document.getElementById("blend-mode-bgc").value;
  imgMemeContainer.style.backgroundColor = document.getElementById("blend-mode-bgc").value;
};

//    FUNCTION TO BLEND THE BACKGROUND COLOR OF THE IMAGE

const changeBlendModeColor = () => {
  existingImage.style.mixBlendMode = document.getElementById("blend-mode-select").value;
};

//    FUNCTION TO CHANGE THE IMAGE ACCORDING TO FILTERS 

const applyFilters = () => {
  existingImage.style.filter = `brightness(${document.getElementById("brightness-slider").value}) opacity(${document.getElementById("opacity-slider").value}) blur(${document.getElementById("blur-slider").value}px) contrast(${document.getElementById("contrast-slider").value}%) grayscale(${document.getElementById("grayscale-slider").value}%) hue-rotate(${document.getElementById("hue-slider").value}deg) sepia(${document.getElementById("sepia-slider").value}%) saturate(${document.getElementById("saturate-slider").value}%) invert(${document.getElementById("invert-slider").value})`;
};

const revertFilters = () => {
document.getElementById("brightness-slider").value = 1;
document.getElementById("opacity-slider").value = 1;
document.getElementById("contrast-slider").value = 100;
document.getElementById("blur-slider").value = 0;
document.getElementById("grayscale-slider").value = 0;
document.getElementById("sepia-slider").value = 0;
document.getElementById("hue-slider").value = 0;
document.getElementById("saturate-slider").value = 100;
document.getElementById("invert-slider").value = 0;

applyFilters();
};

//*********************FUNCTIONS OF THE TEXT MENU************************** 

let memeTopText = document.getElementById("top-txt");
let memeBottomText = document.getElementById("bottom-txt");

let memeTexts = [memeTopText, memeBottomText];

//    FUNCTION ADD TOP TEXT

const addTopText = () => {
  memeTopText.textContent = document.getElementById("top-text-input").value;
};

//    FUNCTION ADD BOTTOM TEXT

const addBottomText = () => {
  memeBottomText.textContent = document.getElementById("bottom-text-input").value;
};

//    FUNCTION TO REMOVE TEXT

const removeText = (checkbox, text) => {
  if (checkbox.checked) {
    setStyleToNone(text);
  } else {
    setStyleToGrid(text);
  };
};

//    FUNCTION TO CHANGE THE FONT SIZE

const changeFontSize = () => {
  let valueToNumber =  parseInt(document.getElementById("text-size-input").value);

  memeTexts.forEach((text) => {
    text.style.fontSize = `${valueToNumber}px`;
  })
};

//    FUNTION TO ALIGN THE TEXT

let changeTextAlign = (textAlign) => {
  memeTexts.forEach((text) => {
    text.style.textAlign = textAlign;
  });
};

//    FUNCTION TO CHANGE THE TEXT COLOR

const changeTextColor = () => {
  let textColorSelected = document.getElementById("text-color-value");

  textColorSelected.textContent = document.getElementById("text-color-input").value;
  memeTexts.forEach((text) => {
    text.style.color = document.getElementById("text-color-input");
  });
};

//    FUNCTION TO CHANGE THE TEXT BACKGROUND COLOR

const changeTextBackgroundColor = () => {
  let textBgcSelected = document.getElementById("text-background-color-value");

  textBgcSelected.textContent = document.getElementById("text-bcg-color").value;

  let checkboxState = document.getElementById("remove-txt-bcg-color").checked;

  if (!checkboxState) {
    memeTexts.forEach((text) => {
      text.style.backgroundColor = document.getElementById("text-bcg-color").value;
    });
  }

};

//    FUNCTION TO REMOVE THE BACKGROUND COLOR

let textBackGroundColor = document.getElementById("text-bcg-color").value;

const removeTextBgc = () => {
  let checkboxState = document.getElementById("remove-txt-bcg-color").checked;

  if (checkboxState) {
    memeTexts.forEach((text) => {
      text.style.backgroundColor = "transparent";
    });
    return
  }

  memeTexts.forEach((text) => {
    text.style.backgroundColor = document.getElementById("text-bcg-color").value;
  });
  return
}

//    FUNCTION TO CHANGE THE FONT FAMILY 

const changeFontFamily = () => {
  memeTexts.forEach((text) => {
    text.style.fontFamily = `${document.getElementById("select-text-font-family").value}`;
  })
};

//    FUNCTION TO CHANGE THE TEXT OUTLINE

const changeTextOutline = (outline) => {
  if (outline === 'none') {
    memeTexts.forEach((text) => {
      text.style.textShadow = "none";
    });
  } else if (outline === 'lighter') {
    memeTexts.forEach((text) => {
      text.style.textShadow = "3px 3px 5px #FFFFFF";
    });
  } else if (outline === 'darker') {
    memeTexts.forEach((text) => {
      text.style.textShadow = "3px 3px 5px black";
    });
  }
};

//    FUNCTION TO CHANGE THE TEXT PADDING

const changeTextPadding = () => {
  let valueToNumber =  parseInt(document.getElementById("padding-input").value);

  memeTexts.forEach((text) => {
    text.style.height = `calc(15% + ${valueToNumber}px)`;
  })
  existingImage.style.height = `calc(70% - ${valueToNumber *2}px`;
};

//    FUNCTION TO CHANGE THE LINE HEIGHT

const changeLineHeight = () => {
  memeTexts.forEach((text) => {
    text.style.lineHeight = `${document.getElementById("line-height-select").value}`;
  })
};

//***************************EVENT LISTENER********************************

//    DOM EVENTS

document.getElementById("btn-img-menu").addEventListener("click", openImgEditor);
document.getElementById("btn-text-menu").addEventListener("click", openTextEditor);

document.getElementById("close-img-menu").addEventListener("click", closeImgMenu);
document.getElementById("close-text-menu").addEventListener("click", closeTextMenu);

darkModeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//    IMAGE MENU EVENTS

document.querySelector("#upload-meme-img").addEventListener("change", updateImageDisplay);
document.getElementById("url-img-input").addEventListener("input", imgFromUrl);

document.getElementById("blend-mode-bgc-label").addEventListener("input", changeImageBackgroundColor);
document.getElementById("blend-mode-select").addEventListener("change", changeBlendModeColor);

document.getElementById("brightness-slider").addEventListener("change", applyFilters);
document.getElementById("opacity-slider").addEventListener("change", applyFilters);
document.getElementById("contrast-slider").addEventListener("change", applyFilters);
document.getElementById("blur-slider").addEventListener("change", applyFilters);
document.getElementById("grayscale-slider").addEventListener("change", applyFilters);
document.getElementById("sepia-slider").addEventListener("change", applyFilters);
document.getElementById("hue-slider").addEventListener("change", applyFilters);
document.getElementById("saturate-slider").addEventListener("change", applyFilters);
document.getElementById("invert-slider").addEventListener("change", applyFilters);

document.getElementById("btn-default-filters").addEventListener("click", revertFilters);

//    TEXT MENU EVENTS

document.getElementById("top-text-input").addEventListener("input", addTopText);
document.getElementById("remove-top-text").addEventListener("click", (e) => { removeText(document.getElementById("remove-top-text"), memeTopText); });

document.getElementById("bottom-text-input").addEventListener("input", addBottomText);
document.getElementById("remove-bottom-text").addEventListener("click", (e) => { removeText(document.getElementById("remove-bottom-text"), memeBottomText); });

document.getElementById("select-text-font-family").addEventListener("change", changeFontFamily);

document.getElementById("text-size-input").addEventListener("input", changeFontSize);

document.getElementById("left-align-btn").addEventListener("click", (e) => { changeTextAlign('left'); });
document.getElementById("center-align-btn").addEventListener("click", (e) => { changeTextAlign('center'); });
document.getElementById("right-align-btn").addEventListener("click", (e) => { changeTextAlign('right'); });

document.getElementById("text-color-label").addEventListener("input", changeTextColor);
document.getElementById("text-bgc-color-label").addEventListener("input", changeTextBackgroundColor);
document.getElementById("remove-txt-bcg-color").addEventListener("input", removeTextBgc);

document.getElementById("no-outline-btn").addEventListener("click", (e) => { changeTextOutline('none'); })
document.getElementById("light-outline-btn").addEventListener("click", (e) => { changeTextOutline('lighter'); })
document.getElementById("dark-outline-btn").addEventListener("click", (e) => { changeTextOutline('darker'); })

document.getElementById("padding-input").addEventListener("input", changeTextPadding);

document.getElementById("line-height-select").addEventListener("change", changeLineHeight);
