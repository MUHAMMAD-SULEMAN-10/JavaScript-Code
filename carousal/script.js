// const images = [
//     'https://plus.unsplash.com/premium_photo-1701201197400-e5d5b8a75e1f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1735446918160-af0b896b7a89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1736236666093-5c3b428c805b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1736270699291-bd082e37e44c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1736270699291-bd082e37e44c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
// ];

// const n = images.length;
// const flexContainer = document.getElementById('flex-container');
// const leftBtn=  document.getElementById('leftbtn');
// const rightBtn=  document.getElementById('rightbtn');

// const containerWidth = 80;
// const flexContainerWidth = n*containerWidth;
// flexContainer.style.width= flexContainerWidth; 


// for(let i = 0; i<n; i++){
//     const newImg = document.createElement('img');
//     newImg.src = images[i];
//     newImg.classList.add('img-style');
//     flexContainer.appendChild(newImg);
// }
//     let curPosition = 0;
//     leftBtn.addEventListener('click', ()=>{
//         if (curPosition > 0){
//             curPosition--;
           
//         } else{
//             curPosition = n-1;

//         }
//         showImg();

//     })

//     rightBtn.addEventListener('click', ()=>{
//         if (curPosition < n-1){
//             curPosition++;
           
//         }
//         else{
//             curPosition = 0;
//         }
//         showImg();
//     })

//     function showImg(){

//         const translateXDistance = -curPosition*containerWidth;
//         flexContainer.style.transform = `translateX(${translateXDistance}vw)`;

//     }

//    flexContainer.style.transform = `translateX(-160vw)`;

const images = [
    'https://plus.unsplash.com/premium_photo-1701201197400-e5d5b8a75e1f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735446918160-af0b896b7a89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736236666093-5c3b428c805b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736270699291-bd082e37e44c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736270699291-bd082e37e44c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftBtn = document.getElementById('leftbtn');
const rightBtn = document.getElementById('rightbtn');

// Get the container width dynamically
const container = document.getElementById('container');
const containerWidth = container.clientWidth;

// Set flex-container width dynamically
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = `${flexContainerWidth}px`;

// Add images dynamically to flex-container
for (let i = 0; i < n; i++) {
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);
}

let curPosition = 0;

// Handle left button click
leftBtn.addEventListener('click', () => {
    if (curPosition > 0) {
        curPosition--;
    } else {
        curPosition = n - 1; // Loop back to the last image
    }
    showImg();
});

// Handle right button click
rightBtn.addEventListener('click', () => {
    if (curPosition < n - 1) {
        curPosition++;
    } else {
        curPosition = 0; // Loop back to the first image
    }
    showImg();
});

// Function to display the current image
function showImg() {
    const translateXDistance = -curPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}px)`;
    flexContainer.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
}

// Initialize the first position
// showImg();