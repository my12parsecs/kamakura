const imageUrls = {
    1: 'https://www.kanpai-japan.com/sites/default/files/uploads/2023/03/kamakura-32.jpg',
    2: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/502000/502324-kamakura.jpg',
    3: 'https://fs.tour.ne.jp/index.php/file_manage/view/?contents_code=curation&file_name=308/22413/1f7de001d6008d167d3750ea354fba7a.jpg&w=1200',
    4: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Gokurakuji_Station_%2801%29_IMG_9763-1_20190513.jpg',
    5: 'https://s3.ap-northeast-1.amazonaws.com/bukkenmatome.nxin.jp/life/images/20211202174018/pixta_74421993_M-2000x1334.jpg',
    6: 'https://dm9p0p2npaqik.cloudfront.net/spots/890812/8943596/6588109/4.webp',
    // 5: '',
    // 5: '',
    // 5: '',
  };
  
  const imageContainer = document.getElementById('slideshow-image');
  
  function showRandomImage() {
    const imageKeys = Object.keys(imageUrls);
    const randomIndex = Math.floor(Math.random() * imageKeys.length);
    const randomImageUrl = imageUrls[imageKeys[randomIndex]];

    imageContainer.style.opacity = 0;
      
    setTimeout(() => {
      imageContainer.src = randomImageUrl;
      
      imageContainer.style.opacity = 1;
    }, 500);
  }

  window.addEventListener('DOMContentLoaded', showRandomImage);
  
  setInterval(showRandomImage, 3000); // Change image every 5 seconds