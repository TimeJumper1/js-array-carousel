// array
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
const imageBig = document.querySelector('.image-big');
const thumbnail = document.querySelector('.thumbnail-single');

for ( i = 0; i < items.length; i++) {
    const thisImage = items[i];
    const thisTitle = title[i];
    const thisText = text[i];
    
    // metto le immagini grandi
    const bigImage = `
    <div class="single-image ">
        <img src="${thisImage}" alt="img ${i}">

        <div class="image-info">
            <h2>${thisTitle}</h2>
            <p>${thisText}</p>
        </div>
    </div>
    `;
    imageBig.innerHTML += bigImage ;
}
// classe active
let activeImage = 0;
const allImage = document.getElementsByClassName('single-image')
allImage[activeImage].classList.add('active')