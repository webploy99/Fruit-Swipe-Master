
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/fruit-swipe-master/id6474890975";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/6e/14/ed/6e14edb0-36e1-b16b-b344-77098a13254e/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/c7/4a/34/c74a34b3-f146-501f-8fbf-94e5e8229ce7/bc860725-2294-48d0-bc7a-ee081eaa5fa6_Untitled-1_14.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/2c/43/f7/2c43f77b-cf7d-694c-1f01-8dd4ed15fdeb/a5a32097-83bb-4266-b259-4922226b5c32_Untitled-1_15.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/31/44/02/31440228-3b64-0208-b1eb-8c7aec0cffc2/3e1adae4-73b1-4a18-bff0-c7137578386e_Untitled-1_16.png/434x0w.webp",
  appImg4:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/8e/d8/9d/8ed89d81-1766-ae17-026b-0b651f3f9231/c3b154b8-52dd-4c2c-ba4e-94e3ac0e3a86_Untitled-1_18.png/434x0w.webp",
  appImg5:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/b1/6b/46/b16b46e8-1c63-4f35-c0ef-7908a03e79fd/ec4e7739-4d74-4bce-994a-80e690296c00_Untitled-1_17.png/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3
document.getElementById('pic4').src = getImg.appImg4
document.getElementById('pic5').src = getImg.appImg5

