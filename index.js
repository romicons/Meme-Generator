//****************************DOM ELEMENTS*********************************

//    NAVIGATION

const btnImgMenu = document.getElementById("btn-img-menu");
const btnTextMenu = document.getElementById("btn-text-menu");
const editImgMenu = document.getElementById("img-editor-menu");
const editTextMenu = document.getElementById("text-editor-menu");
const btncloseImgMenu = document.getElementById("close-img-menu");
const btncloseTextMenu = document.getElementById("close-text-menu");

//    IMAGE EDITOR

let imgMemeContainer = document.getElementById("canvas");

const uploadImg = document.querySelector("#upload-meme-img");
const imgUrlInput = document.getElementById("url-img-input");

const btnImgBackgroundColor = document.getElementById("blend-mode-bgc-label");
let selectImgBlendMode = document.getElementById("blend-mode-select");

//    TEXT EDITOR

let topTextMeme = document.getElementById("top-text-input");
const checkToRemoveTopText = document.getElementById("remove-top-text");

let bottomTextMeme = document.getElementById("bottom-text-input");
const checkToRemoveBottomText = document.getElementById("remove-bottom-text");

const selectFontFamily = document.getElementById("select-text-font-family");

const inputFontSize = document.getElementById("text-size-input");

const btnLeftAlign = document.getElementById("left-align-btn");
const btnCenterAlign = document.getElementById("center-align-btn");
const btnRightAlign = document.getElementById("right-align-btn");

const btnTextColor = document.getElementById("text-color-label");
const btnTextBackGroundColor = document.getElementById("text-bgc-color-label");
const checkToRemoveTextBgc = document.getElementById("remove-txt-bcg-color");

const btnNoOutline = document.getElementById("no-outline-btn");
const btnLightOutline = document.getElementById("light-outline-btn");
const btnDarkOutline = document.getElementById("dark-outline-btn");

const inputTextPadding = document.getElementById("padding-input");

const selectTextLineHeigth = document.getElementById("line-height-select");

//***********************FUNCTIONS OF NAVIGATION***************************


const setStyleToNone = (element) => {
  element.style.display = "none";
}

const setStyleToGrid = (element) => {
  element.style.display = "grid";
}

//    OPEN IMAGE EDITOR

const openImgEditor = () => {
  setStyleToGrid(editImgMenu);
  setStyleToNone(editTextMenu);
};

//    OPEN TEXT EDITOR

const openTextEditor = () => {
  setStyleToGrid(editTextMenu);
  setStyleToNone(editImgMenu);
};

//    CLOSE MENU

const closeImgMenu = () => {
  setStyleToNone(editImgMenu)
};

const closeTextMenu = () => {
  setStyleToNone(editTextMenu);
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

//    FUNCTION TO CHANGE THE BACKGROUND COLOR IMAGE

const changeImageBackgroundColor = () => {
  let imgBgcSelected = document.getElementById("blend-mode-color-value");

  imgBgcSelected.textContent = document.getElementById("blend-mode-bgc").value;
  imgMemeContainer.style.backgroundColor = document.getElementById("blend-mode-bgc").value;
};

//    FUNCTION TO BLEND THE BACKGROUND COLOR OF THE IMAGE

const changeBlendModeColor = () => {
  existingImage.style.mixBlendMode = selectImgBlendMode.value;
};

//*********************FUNCTIONS OF THE TEXT MENU************************** 

let memeTopText = document.getElementById("top-txt");
let memeBottomText = document.getElementById("bottom-txt");

let memeTexts = [memeTopText, memeBottomText];

//    FUNCTION ADD TOP TEXT

const addTopText = () => {
  memeTopText.textContent = topTextMeme.value;
};

//    FUNCTION ADD BOTTOM TEXT

const addBottomText = () => {
  memeBottomText.textContent = bottomTextMeme.value;
};

//    FUNCTION TO REMOVE TEXT

const removeText = (checkbox, text) => {
  if (checkbox.checked) {
    setStyleToNone(text);
  } else {
    text.style.display = "block";
  };
};

//    FUNCTION TO CHANGE THE FONT SIZE

const changeFontSize = () => {
  let valueToNumber =  parseInt(inputFontSize.value);

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
    text.style.fontFamily = `${selectFontFamily.value}`;
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
  let valueToNumber =  parseInt(inputTextPadding.value);

  memeTexts.forEach((text) => {
    text.style.height = `calc(15% + ${valueToNumber}px)`;
  })
  existingImage.style.height = `calc(70% - ${valueToNumber *2}px`;
};

//    FUNCTION TO CHANGE THE LINE HEIGHT

const changeLineHeight = () => {
  memeTexts.forEach((text) => {
    text.style.lineHeight = `${selectTextLineHeigth.value}`;
  })
};

//***************************EVENT LISTENER********************************

//    DOM EVENTS

btnImgMenu.addEventListener("click", openImgEditor);
btnTextMenu.addEventListener("click", openTextEditor);
btncloseImgMenu.addEventListener("click", closeImgMenu);
btncloseTextMenu.addEventListener("click", closeTextMenu);

//    IMAGE MENU EVENTS

uploadImg.addEventListener("change", updateImageDisplay);
imgUrlInput.addEventListener("input", imgFromUrl);

btnImgBackgroundColor.addEventListener("input", changeImageBackgroundColor);
selectImgBlendMode.addEventListener("change", changeBlendModeColor);

//    TEXT MENU EVENTS

topTextMeme.addEventListener("input", addTopText);
checkToRemoveTopText.addEventListener("click", (e) => { removeText(checkToRemoveTopText, memeTopText); });

bottomTextMeme.addEventListener("input", addBottomText);
checkToRemoveBottomText.addEventListener("click", (e) => { removeText(checkToRemoveBottomText, memeBottomText); });

selectFontFamily.addEventListener("change", changeFontFamily);

inputFontSize.addEventListener("input", changeFontSize);

btnLeftAlign.addEventListener("click", (e) => { changeTextAlign('left'); });
btnCenterAlign.addEventListener("click", (e) => { changeTextAlign('center'); });
btnRightAlign.addEventListener("click", (e) => { changeTextAlign('right'); });

btnTextColor.addEventListener("input", changeTextColor);
btnTextBackGroundColor.addEventListener("input", changeTextBackgroundColor);
checkToRemoveTextBgc.addEventListener("input", removeTextBgc);

btnNoOutline.addEventListener("click", (e) => { changeTextOutline('none'); })
btnLightOutline.addEventListener("click", (e) => { changeTextOutline('lighter'); })
btnDarkOutline.addEventListener("click", (e) => { changeTextOutline('darker'); })

inputTextPadding.addEventListener("input", changeTextPadding);

selectTextLineHeigth.addEventListener("change", changeLineHeight);
