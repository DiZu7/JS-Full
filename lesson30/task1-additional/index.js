import { addImage } from './addImage.js';

// create new Promise inside of addImageV2
// if eror => reject err ('Image load failed')
// else => resolve omImageLoad (resolve width and heigth)
// return promise

export const addImageV2 = url => {
  return new Promise((resolve, reject) => {
    addImage(url, (err, onImageLoaded) => {
      if (err) reject(err);
      else resolve(onImageLoaded);
    });
  });
};

// examples

// addImageV2(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
// )
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'

// addImageV2('https://server.com/image.png')
//   .then(data => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch(error => console.log(error)); // ==> 'Image load failed'
