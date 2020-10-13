
let angleLeft = document.querySelector('.angleLeft')
let angleRight = document.querySelector('.angleRight')
let banner = document.querySelector('.banner')
let image = document.querySelector('.image')
let openningBanners = [
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/s/m/smartphones_1200x4.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/r/e/realme_c17-0_emi_120.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/b/o/bosch_chest_freezer_1200x40.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/a/m/amazfit_smartwatch_1200x400.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/c/o/computer_accessories__1200x400.jpg.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/b/i/bike_accessories_1200x400.jpg.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/c/a/casio_fastrack_1200.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/p/h/philips_products_1200.jpeg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/f/b/fb_promo_1200x400_9_.jpg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/m/e/mega_offer_post_v3_1_.jpg',
    'https://b2b-pickaboocdn.s3-ap-southeast-1.amazonaws.com/media/emthemes/resized/frontend/emthemes/slideshow/s/a/sale_on_watches_1200x400.jpg.jpeg',
]
let count = 0;
// making the image animation
let cot = 0;
let animate = setInterval(animation, 5000)
function animation() {
    cot++;
    image.src = `${openningBanners[cot]}`
    if (cot > openningBanners.length - 1) {
        cot = 0;
        image.src = `${openningBanners[cot]}`
    }
}
let dotIcons = document.querySelectorAll('.fa-circle')
let childs = document.querySelector('.dotIcons').children;
function setDotIcons() {
    for (let z = 0; z < childs.length; z++) {
        const element = childs[z];
        element.setAttribute('style', `color:black`)
    }
}
// making the sliding with angle icons
angleRight.addEventListener('click', function () {
    count++;
    if (count >= openningBanners.length) {
        count = 0;
        image.src = `${openningBanners[count]}`
        setDotIcons();
        dotIcons[count].setAttribute('style', `color:white;`)
    } else {
        image.src = `${openningBanners[count]}`
        setDotIcons();
        dotIcons[count].setAttribute('style', `color:white`)
    }
})

angleLeft.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = openningBanners.length - 1;
        image.src = `${openningBanners[count]}`

        setDotIcons();
        dotIcons[count].setAttribute('style', `color:white`)
    } else {
        image.src = `${openningBanners[count]}`
        setDotIcons();
        dotIcons[count].setAttribute('style', `color:white`)
    }
})
//


// the dotIcons part to change the image
for (let i = 0; i < openningBanners.length; i++) {
    dotIcons[i].addEventListener('click', cImg)
    function cImg(e) {
        image.src = `${openningBanners[i]}`
    }
}
//

// making the dotIconBar & AngleIcons visible when hover over the openningBars
let mainBanner = document.querySelector('.mainBanner')
let visibilityVisible = document.querySelectorAll('.visibilityVisible')
mainBanner.addEventListener('mouseenter', (e) => {
    clearInterval(animate);
    visibilityVisible.forEach((elm) => { elm.setAttribute('style', `visibility:visible;transition:0.1s;`) })
    for (let i = 0; i < dotIcons.length; i++) {
        dotIcons[i].addEventListener('click', (elm) => {
            for (let j = 0; j < childs.length; j++) {
                const element = childs[j];
                element.setAttribute('style', `color:black;`);
            }
            dotIcons[i].setAttribute('style', 'color:white;')
        })
    }
})
mainBanner.addEventListener('mouseleave', (e) => {
    visibilityVisible.forEach((elm) => { elm.setAttribute('style', `visibility:hidden;transition:0.1s;`) })
    let k = setInterval(animation, 5000);
    function animation() {
        cot++;
        image.src = `${openningBanners[cot]}`
        if (cot > openningBanners.length - 1) {
            cot = 0;
            image.src = `${openningBanners[cot]}`
        }
    }
    mainBanner.addEventListener('mouseenter', (e) => { clearInterval(k); })
})

// making the mobile accessories carosel 


let mobileCard = document.querySelectorAll('.mobileCard');
let mobileSection = document.querySelector('.mobileAccessories');
function slide(e) {
    let card = e.nextElementSibling.children;
    let slideleft = e.querySelector(`.clicker span:nth-child(1)`)
    let slideright = e.querySelector(` .clicker span:nth-child(2)`)
    let i = 0;
    slideleft.addEventListener('click', (f) => {
        if (i < 2) {
            card[i].setAttribute('style', `display:none;`)
            card[i + 4].setAttribute('style', `display:inline-block;`)
            i++;
        }
    })
    slideright.addEventListener('click', (e) => {
        if (i != 0) {
            if (i <= 2) {
                card[i + 3].setAttribute('style', `display:none;`)
                card[i - 1].setAttribute('style', `display:inline-block;`)
                i--;
            }
            else if (i > 2) {
                i = 2;
                card[i + 3].style.display = "none"
                card[i - 1].style.display = "inline-block";
                i--;
            }
        }
    })
}
let b = 0, s = 0, r = 0;
let basicCard = document.querySelectorAll('.basicCard')
basicCard.forEach((e, i) => {
    if (i >= 12 && i <= 17) {
        e.classList.add(`miniCard${b}`)
        b++;
    }
    if (i >= 18 && i <= 23) {
        e.classList.add(`miniCard${r}`)
        r++;
    }
    if (i >= 24 && i <= 29) {
        e.classList.add(`miniCard${s}`)
        s++;
    }
})

let card = document.querySelectorAll('.card')
window.addEventListener('resize', loadingResizing);
function loadingResizing(e) {
    if (innerWidth > 1025) {
        basicCard.forEach((e) => { e.style.display = "inline-block" })
    }
    if (innerWidth <= 1025) {
        let k = 4;
        while (k <= 5) {
            card[k].style.display = "none";
            mobileCard[k].style.display = "none";
            k++;
        }
        let m = 0;
        while (m <= 3) {
            card[m].style.display = "inline-block";
            mobileCard[m].style.display = "inline-block";
            m++;
        }
        let f = 0;
        while (f < 3) {
            let c = 0;
            while (c <= 3) {
                document.querySelectorAll(`.miniCard${c}`)[f].style.display = "inline-block";
                c++;
            }
            let j = 4;
            while (j <= 5) {
                document.querySelectorAll(`.miniCard${j}`)[f].style.display = "none";
                j++;
            }
            f++;
        }
    }

    if (innerWidth <= 770) {
        let k = 0;
        while (k <= 2) {
            card[k].style.display = "flex";
            k++;
        }
        let l = 3;
        while (l <= 5) {
            card[l].style.display = "none";
            l++;
        }
    }
    if (innerWidth < 480) {
        let f = 0;
        while (f < 3) {
            let c = 0;
            while (c <= 1) {
                document.querySelectorAll(`.miniCard${c}`)[f].style.display = "inline-block";
                c++;
            }
            let j = 2;
            while (j <= 5) {
                document.querySelectorAll(`.miniCard${j}`)[f].style.display = "none";
                j++;
            }
            f++;
        }
    }
}
loadingResizing();
window.addEventListener('load', (e) => {
    if (innerWidth <= 770) {
        let vis = 3;
        while (vis <= 5) {
            card[vis].style.display = "none";
            vis++;
        }
    }
})
let list = document.querySelectorAll('.list')
let label = document.querySelectorAll(`.label`);
label.forEach((e, i) => {
    e.addEventListener('click', () => {
        list[i].classList.toggle('active')
        label[i].classList.toggle('active')
    })
})

let hoverCommonBox = document.querySelectorAll('.menuSubBar .commonBox')
let commonList = document.querySelectorAll('.commonList');
let title = document.querySelectorAll('.title')
for (let i = 0; i < title.length; i++) {
    if (i == 3) {
        hoverCommonBox[i].addEventListener('mouseenter', (e) => {
            commonList[i].setAttribute('style', `display:flex`);
            title[i].setAttribute('style', `background:white;color:#11a0db;`)
        })
    }
    else {
        hoverCommonBox[i].addEventListener('mouseenter', (e) => {
            commonList[i].setAttribute('style', `display:inline-block;`)
            title[i].setAttribute('style', `background:white;color:#11a0db;`)
        })
    }
    hoverCommonBox[i].addEventListener('mouseleave', (e) => {
        commonList[i].setAttribute('style', `display:none`)
        title[i].setAttribute('style', `color:white;background:#11a0db;`)
    })
}

let clickToSearch = document.querySelector('.searchBesideCart')
let searchBox = document.querySelector('.searchBox')


clickToSearch.addEventListener('click', (e) => {
    searchBox.classList.toggle('visible');
})

let hiddenBar = document.querySelector('.hiddenBar')
let searchIcon = document.querySelector('.searchIcon')
let menu = document.querySelector('.menu')

window.addEventListener('load', resizing)
window.addEventListener('resize', resizing)
window.addEventListener('load', (e) => {
    if (innerWidth < 770) {
        hiddenBar.setAttribute('style', `display:inline-block;transform:translateX(-100vw);transition:0s;`);
        toggling();
    }
})
function resizing(f) {
    if (innerWidth < 770) { toggling(); }
    if (innerWidth > 771) {
        hiddenBar.setAttribute('style', `transform:translateX(-100vw);transition:0s;`);
    }
}
let hiddenMenuBar = document.querySelector('.hiddenMenuBar');
let menubar = document.querySelector('.menubar').cloneNode(true);
hiddenMenuBar.innerHTML = menubar.innerHTML;
let commonBox = document.querySelectorAll('.hiddenMenuBar .commonBox')
commonBox.forEach((e) => {
    e.children[1].classList.remove('commonList')
    e.children[1].classList.add('hiddenList')
})
let hiddenList = document.querySelectorAll('.hiddenList')
let hiddenTitle = document.querySelectorAll('.hiddenMenuBar .title')
for (let index = 0; index < hiddenTitle.length; index++) {
    hiddenTitle[index].addEventListener('click', (e) => {
        hiddenList[index].classList.toggle('exposed')
        hiddenList.forEach((e) => {
            if (hiddenList[index] != e) {
                e.classList.remove('exposed')
            }
        })
    })
}

let hiddenAccountBar = document.querySelector('.hiddenAccountBar')
let logRegister = document.querySelector('.logRegister')
let accountLogRegister = logRegister.cloneNode(true);
let wishlist = `<span class="wishlist"><i class="fas fa-heart"></i>Wishlist()</span>`;
hiddenAccountBar.innerHTML = logRegister.innerHTML;
hiddenAccountBar.insertAdjacentHTML("beforeend", wishlist)

let account = document.querySelector('.account')
menu.addEventListener('click', (e) => {
    menu.setAttribute('style', `background:white; color:#11a0db;`)
    account.setAttribute('style', `color:white; background:#11a0db;`)
    hiddenMenuBar.setAttribute('style', `display:inline-block;transform:translateX(0vw);`);
    hiddenAccountBar.setAttribute('style', `display:none;`);
})
account.addEventListener('click', (e) => {
    menu.setAttribute('style', `color:white; background:#11a0db;`)
    account.setAttribute('style', `background:white; color:#11a0db;`)
    hiddenMenuBar.setAttribute('style', `display:none;`);
    hiddenAccountBar.setAttribute('style', `display:flex;transform:translateX(0vw);`);
})
let searchLog = document.querySelector('.searchLog')
function toggling() {
    let num = 1;
    searchIcon.addEventListener('click', (e) => {
        if (num == 1) {
            searchLog.classList.add('positionRelative')
            hiddenBar.setAttribute('style', `transform:translateX(0vw);transition:0.5s;`);
            num++;
        }
        else {
            hiddenBar.setAttribute('style', `transform:translateX(-90vw);transition:0.5s;`);
            num--;
            searchLog.classList.remove('positionRelative')
        }
    })
}
let listHover = hiddenMenuBar.querySelectorAll('ul li')
let span = `<span>`
listHover.forEach((e) => {
    e.insertAdjacentHTML("beforebegin", span)
})
let menuBar = document.querySelector('.menubar')
window.addEventListener('scroll', scrolling)
function scrolling(e) {
    if (scrollY > 100 && innerWidth > 780) {
        menuBar.setAttribute('style', `position:fixed;width:100vw; top:0;`)
        
    }
    if (scrollY < 100) {
        menuBar.setAttribute('style', `position:relative;width:auto;`)
    }
}
window.addEventListener('load', scrolling);






