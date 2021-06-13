const manageCount = () => {
  let loadedImages = 0;
  let renderImages = 0;

  return {
    imageLoaded: function () {
      loadedImages += 1;
      console.log(
        `
        🙌 It has been added ${loadedImages} images
        👏 It has been loaded ${renderImages} images
        ----------------------------
        `
      );
    },
    imageRendered: function () {
      renderImages += 1;
      console.log(
        `
        🙌 It has been added ${loadedImages} images
        👏 It has been loaded ${renderImages} images
        ----------------------------
        `
      );
    },
  };
};

export const count = manageCount();
