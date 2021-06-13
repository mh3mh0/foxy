import { registerImage } from "./lazy";

const randomNumber = () => Math.floor(Math.random() * (122 - 1)) + 1;

const addImageBtn = document.getElementById("get-image");
const removeImageBtn = document.getElementById("delete-image");
const deleteAllBtn = document.getElementById("delete-all");
const imagesContainer = document.getElementById("images");

const addNewImage = () => {
  const image = document.createElement("img");
  image.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  image.dataset.src = `https://randomfox.ca/images/${randomNumber()}.jpg`;
  image.className =
    "mt-8 mx-auto rounded-md bg-yellow-200 border-8 border-gray-400 shadow-2xl p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 object-fill";
  image.width = "300";

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("p-2");
  imageContainer.append(image);
  imageContainer.className =
    "flex flex-auto align-items:center min-width-3 max-width-2; min-height-2 gap-2";

  registerImage(imageContainer);
  imagesContainer.append(imageContainer);
};

const removeLastImage = () => {
  imagesContainer.lastChild
    ? imagesContainer.lastChild.remove()
    : Swal.fire({
        position: "center",
        icon: "success",
        title: "Nothing to left",
        showConfirmButton: false,
        timer: 1500,
      });
};

addImageBtn.addEventListener("click", addNewImage);
removeImageBtn.addEventListener("click", removeLastImage);
deleteAllBtn.addEventListener("click", () => (imagesContainer.innerHTML = ""));
