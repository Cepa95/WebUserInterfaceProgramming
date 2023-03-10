    const img  = document.getElementById('apple');
    let flag = true;
    img.addEventListener('click', function() {
        if (flag){
            img.src = '../images/apple.png';
            flag =false;
        }
        else {
            img.src = '../images/worm.png';
            flag =true;
        }
    })


