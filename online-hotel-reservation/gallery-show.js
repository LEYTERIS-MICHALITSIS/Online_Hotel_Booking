document.querySelectorAll('.gallery-images img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.selected-image').style.display = 'block';
        document.querySelector('.selected-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.selected-image span').onclick = () =>{
    document.querySelector('.selected-image').style.display = 'none';
}