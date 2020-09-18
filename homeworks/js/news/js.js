const postOne   = document.getElementById('post-1-tab');
    const postTwo   = document.getElementById('post-2-tab');
    const postThree = document.getElementById('post-3-tab');
    const postFour  = document.getElementById('post-4-tab');
    const mainPost  = document.getElementById('main-post');

    postOne.addEventListener('click', activator);
    postOne.addEventListener('click', show);

    postTwo.addEventListener('click', activator);
    postTwo.addEventListener('click', show);

    postThree.addEventListener('click', activator);
    postThree.addEventListener('click', show);

    postFour.addEventListener('click', activator);
    postFour.addEventListener('click', show);

    function activator() {
        postOne.classList.remove('active');
        postTwo.classList.remove('active');
        postThree.classList.remove('active');
        postFour.classList.remove('active');
        this.classList.add("active");
    }

    function show() {
        let imageSrc = this.firstElementChild.firstElementChild.firstElementChild.src;
        let title    = this.firstElementChild.lastElementChild.firstElementChild.innerHTML;
        mainPost.firstElementChild.style.backgroundImage = `url(${imageSrc})`;
        mainPost.firstElementChild.lastElementChild.firstElementChild.innerHTML = title;
    }

    let contact = document.getElementById('contact');
    let popup   = document.getElementById('popup');
    let deactivator = document.getElementById('deactivator');
    
    contact.onclick = popupToggle;
    deactivator.onclick = popupToggle;

    function popupToggle() {
        popup.classList.toggle('popup-show');
        deactivator.classList.toggle('popup-show');
        document.body.classList.toggle('overflow');
    }