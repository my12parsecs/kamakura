
const imageUrls = {
  1: 'https://www.kanpai-japan.com/sites/default/files/uploads/2023/03/kamakura-32.jpg',
  2: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/502000/502324-kamakura.jpg',
  3: 'https://fs.tour.ne.jp/index.php/file_manage/view/?contents_code=curation&file_name=308/22413/1f7de001d6008d167d3750ea354fba7a.jpg',
  4: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Gokurakuji_Station_%2801%29_IMG_9763-1_20190513.jpg',
  5: 'https://s3.ap-northeast-1.amazonaws.com/bukkenmatome.nxin.jp/life/images/20211202174018/pixta_74421993_M-2000x1334.jpg',
  // 6: 'https://dm9p0p2npaqik.cloudfront.net/spots/890812/8943596/6588109/4.webp',
  6: "https://ak-d.tripcdn.com/images/100112000000sfr3fB521.jpg?proc=source%2Ftrip",
  7: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Zeniaraibenzaiten_Ugafuku-Shrine_01.jpg",
  8: "https://r-studio-kamakura.jp/wp-content/uploads/2021/03/IMG_0088.jpg",
  9: "https://www.enoden.co.jp/corporate/ehagaki/images/ehagaki-main1.jpg",
  10: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Enoden_Hase_Series300.jpg",
  11: "https://pbs.twimg.com/media/FIZceKyaAAIEL31?format=jpg&name=4096x4096",
  12: "https://www.unhcr.org/jp/wp-content/uploads/sites/34/2023/06/03-1-scaled.jpg",
  13: "https://images.microcms-assets.io/assets/14d13bd618dc45c7b684223c0ca9d033/767d955f5c224b61b5c609a2b90118d0/cj-wang-rYF-prmrzws-unsplash.jpg",
  14: "https://media.timeout.com/images/105728908/image.jpg"
};

const imageContainer = document.getElementById('slideshow-image');

let currentImageUrl = null;
let previousImageUrl = null;



function showRandomImage() {
  console.log("RANDOM IMAGE");
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
      document.querySelector('.image-link').href = randomImageUrl;
      // document.querySelector('.image-link').innerText = randomImageUrl;
    });

    previousImageUrl = currentImageUrl;
    currentImageUrl = randomImageUrl;
  }
  console.log("END");
}



window.addEventListener('DOMContentLoaded', showRandomImage);
setInterval(showRandomImage, 4500);