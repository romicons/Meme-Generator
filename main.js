
/***************************EVENT LISTENER********************************/

//                NAVIGATION EVENTS

//    OPEN AND CLOSE IMG EDITOR
document.getElementById("btn-img-menu").addEventListener("click", openImgEditor);
document.getElementById("close-img-menu").addEventListener("click", closeImgMenu);

//    OPEN AND CLOSE TEXT EDITOR
document.getElementById("btn-text-menu").addEventListener("click", openTextEditor);
document.getElementById("close-text-menu").addEventListener("click", closeTextMenu);

//    ACTIVATE DARK/LIGHT MODE
darkModeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//    DOWNLOAD YOUR MEME

document.getElementById("btn-download").addEventListener("click", downloadMeme);

//                IMAGE MENU EVENTS

//    ADD AN IMG FROM YOUR DEVICE
document.querySelector("#upload-meme-img").addEventListener("change", updateImageDisplay);

//    ADD AN IMG FROM AN URL
document.getElementById("url-img-input").addEventListener("input", imgFromUrl);

//    CHANGE THE BACKGROUND COLOR OF THE IMAGE
document.getElementById("blend-mode-bgc-label").addEventListener("input", changeImageBackgroundColor);

//    CHANGE THE MIX BLEND MODE OF THE IMAGE
document.getElementById("blend-mode-select").addEventListener("change", changeBlendModeColor);

//    CHANGE THE BRIGHTNESS OF THE IMAGE
document.getElementById("brightness-slider").addEventListener("change", applyFilters);

//    CHANGE THE OPACITY OF THE IMAGE
document.getElementById("opacity-slider").addEventListener("change", applyFilters);

//    CHANGE THE CONTRAST OF THE IMAGE
document.getElementById("contrast-slider").addEventListener("change", applyFilters);

//    CHANGE THE BLUR OF THE IMAGE
document.getElementById("blur-slider").addEventListener("change", applyFilters);

//    CHANGE THE GRAYSCALE OF THE IMAGE
document.getElementById("grayscale-slider").addEventListener("change", applyFilters);

//    CHANGE THE SEPIA OF THE IMAGE
document.getElementById("sepia-slider").addEventListener("change", applyFilters);

//    CHANGE THE HUE OF THE IMAGE
document.getElementById("hue-slider").addEventListener("change", applyFilters);

//    CHANGE THE SATURATION OF THE IMAGE
document.getElementById("saturate-slider").addEventListener("change", applyFilters);

//    CHANGE THE INVERT EFFECT OF THE IMAGE
document.getElementById("invert-slider").addEventListener("change", applyFilters);

//    REVERT ALL THE FILTERS
document.getElementById("btn-default-filters").addEventListener("click", revertFilters);

//                TEXT MENU EVENTS

//    ADD AND REMOVE THE TOP TEXT
document.getElementById("top-text-input").addEventListener("input", addTopText);
document.getElementById("remove-top-text").addEventListener("click", (e) => { removeText(document.getElementById("remove-top-text"), memeTopText); });

//    ADD AND REMOVE THE BOTTOM TEXT
document.getElementById("bottom-text-input").addEventListener("input", addBottomText);
document.getElementById("remove-bottom-text").addEventListener("click", (e) => { removeText(document.getElementById("remove-bottom-text"), memeBottomText); });

//    CHANGE THE FONT FAMILY OF THE TEXTS
document.getElementById("select-text-font-family").addEventListener("change", changeFontFamily);

//    CHANGE THE FONT SIZE OF THE TEXTS
document.getElementById("text-size-input").addEventListener("input", changeFontSize);

//    CHANGE THE TEXTS ALIGNS
document.getElementById("left-align-btn").addEventListener("click", (e) => { changeTextAlign('left'); });
document.getElementById("center-align-btn").addEventListener("click", (e) => { changeTextAlign('center'); });
document.getElementById("right-align-btn").addEventListener("click", (e) => { changeTextAlign('right'); });

//    CHANGE THE COLOR OF THE TEXTS
document.getElementById("text-color-label").addEventListener("input", changeTextColor);

//    CHANGE AND REMOVE THE BACKGROUND COLOR OF THE TEXTS
document.getElementById("text-bgc-color-label").addEventListener("input", changeTextBackgroundColor);
document.getElementById("remove-txt-bcg-color").addEventListener("input", removeTextBgc);

//    CHANGE THE OUTLINE OF THE TEXTS
document.getElementById("no-outline-btn").addEventListener("click", (e) => { changeTextOutline('none'); })
document.getElementById("light-outline-btn").addEventListener("click", (e) => { changeTextOutline('lighter'); })
document.getElementById("dark-outline-btn").addEventListener("click", (e) => { changeTextOutline('darker'); })

//    CHANGE THE PADDING OF THE TEXTS
document.getElementById("padding-input").addEventListener("input", changeTextPadding);

//    CHANGE THE LINE HEIGH OF THE TEXTS
document.getElementById("line-height-select").addEventListener("change", changeLineHeight);
