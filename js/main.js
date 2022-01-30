$(document).ready(function () {
    $("section.click").on("click", function () {
        $("header").css({
            'animation': 'animate 300ms linear'
        }).fadeIn(100);


    })


    $("section.close>i").on("click", function () {
        $("header").css({
            'animation': 'animate-out 500ms linear '
        }).fadeOut(500);

    })


    let offset = $("section.aboutUs").offset().top - 550
    $(document).scroll(function () {
        let scrollTop = $(this).scrollTop()
        if (scrollTop >= offset) {
            $("section.aboutUs>section:nth-of-type(2)").css({
                'animation': 'scroll  1000ms linear 1'
            }).fadeIn(500)
            $("section.aboutUs>section:nth-of-type(1)").fadeIn(600)
        }
    })

    let offset2 = $("section.discount").offset().top - 800
    $(document).scroll(function () {
        let scrollTop = $(this).scrollTop()
        if (scrollTop >= offset2) {
            $("section.discount>h1").css({
                'animation': 'scroll2  1000ms linear 1'
            }).fadeIn(500)
        }


    })

    let offset3 = $("section.order>section:nth-of-type(3)").offset().top - 800;
    $(document).scroll(function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > offset3) {
            $("section.order>section:nth-of-type(3)>h1,section.order>section:nth-of-type(3)>p").css({
                'animation': 'scroll2  1000ms linear 1'
            }).fadeIn(500)
        }
    })

    $(".cart-click").click(function () {
        $(".cart").fadeIn(50)
    })
    $("#cart-1").click(function () {
        $(".cart").fadeIn(50)
    })
    $(".fa-times").click(function () {
        $(".cart").fadeOut(300)
    })

    let changing = true;

    $("img.like").click(function () {
        let g = $(this)
        if (changing === true) {
            $(g).css({
                'backgroundColor': 'red'
            })
            changing = false
        } else {
            $(g).css({
                'backgroundColor': '#7a716d'
            })
            changing = true
        }
    })

    $(document).scroll(function () {
        let st = $(document).scrollTop();
        if (st > 900) {
            $("section.scrollT").fadeIn(500)
        } else {
            $("section.scrollT").fadeOut(500)
        }
    })
    $("section.scrollT").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 500, "linear")
    })


})

/////////slider
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


////////////////////////////////////////////////////////////////order form
let EmailOrder = document.getElementById("input-1");
let NameOrder = document.getElementById("input-2 ")
let sub = document.getElementById("submit");
let times = document.querySelector(".e-times");
let ckeck = document.querySelector(".e-check");
let times2 = document.querySelector(".o-times");
let ckec2 = document.querySelector(".o-check");
let E = false
let N = false
sub.addEventListener("click", function () {
    if (EmailOrder.value === "") {
        EmailOrder.style.border = "3px red solid"
        times.style.display = "block"
        ckeck.style.display = "none"
    } else {
        NameOrder.style.border = "3px lightgreen solid"
        times2.style.display = "none"
        ckec2.style.display = "block"
    }

    let regexEmail = /^[a-zA-Z0-9_]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/;
    let regex = regexEmail.test(EmailOrder.value);

    if (regex) {
        EmailOrder.style.border = "3px lightgreen solid"
        times.style.display = "none"
        ckeck.style.display = "block"
        E = true;

    } else {
        EmailOrder.style.border = "3px red solid"
        times.style.display = "block"
        ckeck.style.display = "none"
        E = false;
    }

    if (NameOrder.value === "" || NameOrder.value.length < 2 || NameOrder.value.length === 0) {
        NameOrder.style.border = "3px red solid"
        times2.style.display = "block"
        ckec2.style.display = "none"
        N = false;

    } else {
        NameOrder.style.border = "3px lightgreen solid"
        times2.style.display = "none"
        ckec2.style.display = "block"
        N = true;
    }

    ///////////////////////////////////////////////// registered order

    if (E === true && N === true) {
        let showNotification = document.querySelector('#notification-by');
        showNotification.style.display="block"
        EmailOrder.value = "";
        NameOrder.value = "";
        ckeck.style.display = "none"
        ckec2.style.display = "none"
        EmailOrder.style.border = "3px black solid"
        NameOrder.style.border = "3px black solid"
    }
})
EmailOrder.addEventListener("keyup", function (e) {
    let regexEmail = /^[a-zA-Z0-9_]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/;
    let EmailValue = e.target.value;
    let regex = regexEmail.test(EmailValue);

    if (regex) {
        EmailOrder.style.border = "3px lightgreen solid"
        times.style.display = "none"
        ckeck.style.display = "block"

    } else {
        EmailOrder.style.border = "3px red solid"
        times.style.display = "block"
        ckeck.style.display = "none"
        return false;
    }
})
NameOrder.addEventListener("keyup", function () {

    if (NameOrder.value.length < 2 || NameOrder.value.length === 0) {
        NameOrder.style.border = "3px red solid"
        times2.style.display = "block"
        ckec2.style.display = "none"
        return false;
    } else {
        NameOrder.style.border = "3px lightgreen solid"
        times2.style.display = "none"
        ckec2.style.display = "block"
    }
})


////////////////////////////////////////////////////////////////form
let Name = document.getElementById("chek")
let Email = document.getElementById("chekBox")
let Sub = document.getElementById("second")

Sub.addEventListener("click", function () {
    if (Name.value === "") {
        Name.style.border = "3px red solid"
    } else {
        Name.style.border = "3px lightgreen solid"
    }

    if (Email.value === "") {
        Email.style.border = "3px red solid"
    } else {
        Email.style.border = "3px lightgreen solid"
    }
});
Name.addEventListener("keyup", function () {
    if (Name.value.length >= 2) {
        Name.style.border = "3px lightgreen solid"
    } else {
        Name.style.border = "3px red solid"
    }
})
Email.addEventListener("keyup", function (e) {
    let regexEmail = /^[a-zA-Z0-9_]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/;
    let EmailValue = e.target.value;
    let regex = regexEmail.test(EmailValue);

    if (regex) {
        Email.style.border = "3px lightgreen solid"

    } else {
        Email.style.border = "3px red solid"
        return false;
    }
})


///////////////////////////////////////////////////////////////menu button
let about = $("div#menu>nav>ul>li:nth-of-type(2)>a").attr('data-id');
let aboutOffset = $(`section${about}`).offset().top;

function About() {
    $(document).ready(function () {
        $('html').animate({
            scrollTop: aboutOffset
        }, 500, "linear")
    })
}

let shop = $("div#menu>nav>ul>li:nth-of-type(4)>a").attr('data-id');
let shopOffset = $(`section${shop}`).offset().top;

function Shop() {
    $(document).ready(function () {
        $('html').animate({
            scrollTop: shopOffset
        }, 500, "linear")
    })
}

let contact = $("section#contact").offset().top;

function Contact() {
    $(document).ready(function () {
        $('html').animate({
            scrollTop: contact
        }, 600, "linear")
    })
}

let blog = $("section#blog").offset().top;

function Blog() {
    $("html").animate({
        scrollTop: blog
    }, 600, "linear")
}



///////////////////////cart

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    let removeButton = document.getElementsByClassName('shop-button-remove');
    for (let i = 0; i < removeButton.length; i++) {
        let removeButtonCart = removeButton[i]
        removeButtonCart.addEventListener('click', remove)
    }
    let quantityInputs = document.getElementsByClassName('quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        let quantity = quantityInputs[i];
        quantity.addEventListener('change', quantityF)
    }
    let addToChart = document.getElementsByClassName('by');
    for (let i = 0; i < addToChart.length; i++) {
        let button = addToChart[i];
        button.addEventListener('click', By)
    }
}

function remove(e) {
    let remove = e.target
    remove.parentElement.parentElement.remove()
    price()
}

function quantityF(e) {
    let input = e.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    price()
}

function By(e) {
    let button = e.target;
    let shopItem = button.parentElement.parentElement.parentNode;
    let mainPrice = shopItem.getElementsByClassName('item-shop-price')[0].innerText;
    let name = shopItem.getElementsByClassName('item-name')[0].innerText;
    addToShopCart(mainPrice, name)
    price()
}

function addToShopCart(mainPrice, name) {
    let mainCart = document.getElementsByClassName('main-product-cart')[0];
    let itemSpan = mainCart.getElementsByClassName("name-product");
    for (let i = 0; i < itemSpan.length; i++) {
        if (itemSpan[i].innerText === name) {
            let x = document.querySelector("#notification");
            x.style.animation = "noti 300ms 1 linear"
            x.style.display = "block"
            setTimeout(function () {
                x.style.display = "none"

            }, 2000, "linear")
            return
        }
    }
    let x = document.querySelector("#notification-2");
    x.style.animation = "noti 300ms 1 linear"
    x.style.display = "block"
    setTimeout(function () {
        x.style.display = "none"

    }, 2000, "linear")
    let newElem = document.createElement("div");
    newElem.classList.add("product-cart");
    let cartContent = `
                <div class="name-product">${name}</div>
                <div class="price-product">${mainPrice}</div>
                <div class="remove-product">
                    <input class="quantity" type="number" value="1">
                    <button class="shop-button-remove" type="button">REMOVE</button>
                </div>
   `
    newElem.innerHTML = cartContent
    mainCart.append(newElem)
    newElem.getElementsByClassName("shop-button-remove")[0].addEventListener('click', remove)
    newElem.getElementsByClassName("quantity")[0].addEventListener('change', quantityF)
}

function price() {
    let mainProductCart = document.getElementsByClassName('main-product-cart')[0];
    let productCart = mainProductCart.getElementsByClassName('product-cart');
    let total = 0;
    for (let i = 0; i < productCart.length; i++) {
        let cartRow = productCart[i];
        let priceElement = cartRow.getElementsByClassName('price-product')[0];
        let quantityElement = cartRow.getElementsByClassName('quantity')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('main-price')[0].innerText = `CART-$ ${total}`
    document.getElementsByClassName('main-price')[1].innerText = `CART-$ ${total}`
    document.getElementsByClassName('main-price')[2].innerText = `CART-$ ${total}`
}
