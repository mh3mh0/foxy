import { count } from "./utils/manageCount.js";

const loadImage = (entries) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      console.log(entry);
      const image = entry.target.firstChild;
      image.src = image.dataset.src;
      observer.unobserve(entry.target);
      count.imageRendered();
    });
};

const observer = new IntersectionObserver(loadImage);

export const registerImage = (img) => {
  observer.observe(img);
  count.imageLoaded();
};
