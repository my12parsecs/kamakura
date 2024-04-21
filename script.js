

// const imageUrls = {
//   1: 'https://www.kanpai-japan.com/sites/default/files/uploads/2023/03/kamakura-32.jpg',
//   2: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/502000/502324-kamakura.jpg',
//   3: 'https://fs.tour.ne.jp/index.php/file_manage/view/?contents_code=curation&file_name=308/22413/1f7de001d6008d167d3750ea354fba7a.jpg&w=1200',
//   4: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Gokurakuji_Station_%2801%29_IMG_9763-1_20190513.jpg',
//   5: 'https://s3.ap-northeast-1.amazonaws.com/bukkenmatome.nxin.jp/life/images/20211202174018/pixta_74421993_M-2000x1334.jpg',
//   6: 'https://dm9p0p2npaqik.cloudfront.net/spots/890812/8943596/6588109/4.webp',
// };

// const imageContainer = document.getElementById('slideshow-image');

// let currentImageUrl = null;

// function showRandomImage() {
//   const imageKeys = Object.keys(imageUrls);
//   const randomIndex = Math.floor(Math.random() * imageKeys.length);
//   const randomImageUrl = imageUrls[imageKeys[randomIndex]];

//   if (randomImageUrl !== currentImageUrl) {
//     const newImage = new Image();
//     newImage.src = randomImageUrl;
//     newImage.classList.add('visible');

//     newImage.addEventListener('load', () => {
//       if (imageContainer.src) {
//         imageContainer.classList.remove('visible');
//         setTimeout(() => {
//           imageContainer.src = newImage.src;
//           imageContainer.classList.add('visible');
//           newImage.remove();
//         }, 500); // Wait for the transition to complete
//       } else {
//         imageContainer.src = newImage.src;
//         imageContainer.classList.add('visible');
//         newImage.remove();
//       }
//     });

//     currentImageUrl = randomImageUrl;
//   }
// }

// window.addEventListener('DOMContentLoaded', showRandomImage);
// setInterval(showRandomImage, 3000);







const imageUrls = {
  1: 'https://www.kanpai-japan.com/sites/default/files/uploads/2023/03/kamakura-32.jpg',
  2: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/502000/502324-kamakura.jpg',
  3: 'https://fs.tour.ne.jp/index.php/file_manage/view/?contents_code=curation&file_name=308/22413/1f7de001d6008d167d3750ea354fba7a.jpg&w=1200',
  4: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Gokurakuji_Station_%2801%29_IMG_9763-1_20190513.jpg',
  5: 'https://s3.ap-northeast-1.amazonaws.com/bukkenmatome.nxin.jp/life/images/20211202174018/pixta_74421993_M-2000x1334.jpg',
  6: 'https://dm9p0p2npaqik.cloudfront.net/spots/890812/8943596/6588109/4.webp',
};

const imageContainer = document.getElementById('slideshow-image');

let currentImageUrl = null;
let previousImageUrl = null;

function showRandomImage() {
  const imageKeys = Object.keys(imageUrls);
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * imageKeys.length);
  } while (imageUrls[imageKeys[randomIndex]] === previousImageUrl);

  const randomImageUrl = imageUrls[imageKeys[randomIndex]];

  if (randomImageUrl !== currentImageUrl) {
    const newImage = new Image();
    newImage.src = randomImageUrl;
    newImage.classList.add('visible');

    newImage.addEventListener('load', () => {
      if (imageContainer.src) {
        imageContainer.classList.remove('visible');
        setTimeout(() => {
          imageContainer.src = newImage.src;
          imageContainer.classList.add('visible');
          newImage.remove();
        }, 500);
      } else {
        imageContainer.src = newImage.src;
        imageContainer.classList.add('visible');
        newImage.remove();
      }
    });

    previousImageUrl = currentImageUrl;
    currentImageUrl = randomImageUrl;
  }
}

window.addEventListener('DOMContentLoaded', showRandomImage);
setInterval(showRandomImage, 5000);