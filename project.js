const track = document.getElementById("track");

let images = [
  "img.png/abstract-digital-grid-black-background.jpg",
  "img.png/balazs-ketyi-_x335IZXxfc-unsplash.jpg",
  "img.png/ben-kolde-bs2Ba7t69mM-unsplash.jpg",
  "img.png/c0e7aa281ecf9c838197bc1319178155.jpg",
  "img.png/campaign-creators-ARW7Ic7MSAM-unsplash.jpg",
  "img.png/campaign-creators-iEIUTs149M-unsplash.jpg",
  "img.png/daniel-korpai-pKRNxEguRgM-unsplash.jpg",
  "img.png/david-pupaza-Q9-QEy1_jYI-unsplash.jpg",
  "img.png/domenico-loia-hGV2TfOh0ns-unsplash.jpg",
  "img.png/ejftakher-alam-1lVQZsU86ok-unsplash.jpg",
  "img.png/faded_gallery-OfdOEdGY1uk-unsplash.jpg",
  "img.png/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg",
  "img.png/images.jpeg",
  "img.png/images (1).jpeg",
  "img.png/kelly-sikkema-v9FQR4tblq8-unsplash.jpg",
  "img.png/lee-campbell-DtDlVpy-vvQ-unsplash.jpg",
  "img.png/subtle-cinematics-KEI-VNDi0_g-unsplash.jpg",
  "img.png/tran-mau-tri-tam-h7v_38e3IGE-unsplash.jpg",
  "img.png/ux-indonesia-qC2n6RQU4Vw-unsplash.jpg"
];

// shuffle (random order)
images.sort(() => Math.random() - 0.5);

// double images for infinite loop
let finalImages = [...images, ...images];

// add images
finalImages.forEach(src => {
  let img = document.createElement("img");
  img.src = src;
  track.appendChild(img);
});