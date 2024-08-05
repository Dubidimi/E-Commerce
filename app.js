function cartWindow() {
        let cart = document.getElementById('cartwindow')
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "inline-block";
        mobile_gallery.style.zIndex = '-1';
    } else {
        cart.style.display = "none";
        mobile_gallery.style.zIndex = '1';
    }
}

function closeGallery() {
    document.getElementById('gallery').style.display = "none"
}
function openGallery() {
    document.getElementById('gallery').style.display = "block"
}

// Switch between images

function showPic1() {
    document.getElementById('mainpic1').style.display = "block"
    document.getElementById('thumb1').style.border = "4px solid #fd7b1b"
    document.getElementById('thumb1').style.opacity = "0.5"
    document.getElementById('thumb2').style.border = "none"
    document.getElementById('thumb2').style.opacity = "1"
    document.getElementById('thumb3').style.border = "none"
    document.getElementById('thumb3').style.opacity = "1"
    document.getElementById('thumb4').style.border = "none"
    document.getElementById('thumb4').style.opacity = "1"
    document.getElementById('mainpic2').style.display = "none"
    document.getElementById('mainpic3').style.display = "none"
    document.getElementById('mainpic4').style.display = "none"
}
function showPic2() {
    document.getElementById('mainpic2').style.display = "block"
    document.getElementById('thumb2').style.border = "4px solid #fd7b1b"
    document.getElementById('thumb2').style.opacity = "0.5"
    document.getElementById('thumb1').style.border = "none"
    document.getElementById('thumb1').style.opacity = "1"
    document.getElementById('thumb3').style.border = "none"
    document.getElementById('thumb3').style.opacity = "1"
    document.getElementById('thumb4').style.border = "none"
    document.getElementById('thumb4').style.opacity = "1"
    document.getElementById('mainpic1').style.display = "none"
    document.getElementById('mainpic3').style.display = "none"
    document.getElementById('mainpic4').style.display = "none"
}
function showPic3() {
    document.getElementById('mainpic3').style.display = "block"
    document.getElementById('thumb3').style.border = "4px solid #fd7b1b"
    document.getElementById('thumb3').style.opacity = "0.5"
    document.getElementById('thumb1').style.border = "none"
    document.getElementById('thumb1').style.opacity = "1"
    document.getElementById('thumb2').style.border = "none"
    document.getElementById('thumb2').style.opacity = "1"
    document.getElementById('thumb4').style.border = "none"
    document.getElementById('thumb4').style.opacity = "1"
    document.getElementById('mainpic2').style.display = "none"
    document.getElementById('mainpic1').style.display = "none"
    document.getElementById('mainpic4').style.display = "none"
}
function showPic4() {
    document.getElementById('mainpic4').style.display = "block"
    document.getElementById('thumb4').style.border = "4px solid #fd7b1b"
    document.getElementById('thumb4').style.opacity = "0.5"
    document.getElementById('thumb2').style.border = "none"
    document.getElementById('thumb2').style.opacity = "1"
    document.getElementById('thumb3').style.border = "none"
    document.getElementById('thumb3').style.opacity = "1"
    document.getElementById('thumb1').style.border = "none"
    document.getElementById('thumb1').style.opacity = "1"
    document.getElementById('mainpic3').style.display = "none"
    document.getElementById('mainpic2').style.display = "none"
    document.getElementById('mainpic1').style.display = "none"
}
function gshowPic1() {
    document.getElementById('gmainpic1').style.display = "block"
    document.getElementById('gthumb1').style.border = "4px solid #fd7b1b"
    document.getElementById('gthumb1').style.opacity = "0.5"
    document.getElementById('gthumb2').style.border = "none"
    document.getElementById('gthumb2').style.opacity = "1"
    document.getElementById('gthumb3').style.border = "none"
    document.getElementById('gthumb3').style.opacity = "1"
    document.getElementById('gthumb4').style.border = "none"
    document.getElementById('gthumb4').style.opacity = "1"
    document.getElementById('gmainpic2').style.display = "none"
    document.getElementById('gmainpic3').style.display = "none"
    document.getElementById('gmainpic4').style.display = "none"
}
function gshowPic2() {
    document.getElementById('gmainpic2').style.display = "block"
    document.getElementById('gthumb2').style.border = "4px solid #fd7b1b"
    document.getElementById('gthumb2').style.opacity = "0.5"
    document.getElementById('gthumb1').style.border = "none"
    document.getElementById('gthumb1').style.opacity = "1"
    document.getElementById('gthumb3').style.border = "none"
    document.getElementById('gthumb3').style.opacity = "1"
    document.getElementById('gthumb4').style.border = "none"
    document.getElementById('gthumb4').style.opacity = "1"
    document.getElementById('gmainpic1').style.display = "none"
    document.getElementById('gmainpic3').style.display = "none"
    document.getElementById('gmainpic4').style.display = "none"
}
function gshowPic3() {
    document.getElementById('gmainpic3').style.display = "block"
    document.getElementById('gthumb3').style.border = "4px solid #fd7b1b"
    document.getElementById('gthumb3').style.opacity = "0.5"
    document.getElementById('gthumb1').style.border = "none"
    document.getElementById('gthumb1').style.opacity = "1"
    document.getElementById('gthumb2').style.border = "none"
    document.getElementById('gthumb2').style.opacity = "1"
    document.getElementById('gthumb4').style.border = "none"
    document.getElementById('gthumb4').style.opacity = "1"
    document.getElementById('gmainpic2').style.display = "none"
    document.getElementById('gmainpic1').style.display = "none"
    document.getElementById('gmainpic4').style.display = "none"
}
function gshowPic4() {
    document.getElementById('gmainpic4').style.display = "block"
    document.getElementById('gthumb4').style.border = "4px solid #fd7b1b"
    document.getElementById('gthumb4').style.opacity = "0.5"
    document.getElementById('gthumb2').style.border = "none"
    document.getElementById('gthumb2').style.opacity = "1"
    document.getElementById('gthumb3').style.border = "none"
    document.getElementById('gthumb3').style.opacity = "1"
    document.getElementById('gthumb1').style.border = "none"
    document.getElementById('gthumb1').style.opacity = "1"
    document.getElementById('gmainpic3').style.display = "none"
    document.getElementById('gmainpic2').style.display = "none"
    document.getElementById('gmainpic1').style.display = "none"
}
// Gallery
document.addEventListener('DOMContentLoaded', function() {
    /* Mobile gallery */
    var left_btn = document.getElementById("arrow_left");
    var right_btn = document.getElementById("arrow_right");

    var number2 = 1;

    var images = [
        document.getElementById("gmainpic1"),
        document.getElementById("gmainpic2"),
        document.getElementById("gmainpic3"),
        document.getElementById("gmainpic4")
    ];

    function Mslideleft() {
        number2 = (number2 === 1) ? 4 : number2 - 1;
        changeImage();
    }

    function Mslideright() {
        number2 = (number2 === 4) ? 1 : number2 + 1;
        changeImage();
    }

    function changeImage() {
        images.forEach((img, index) => {
            img.style.display = (index === number2 - 1) ? 'inline-block' : 'none';
        });
    }

    left_btn.addEventListener('click', Mslideleft);
    right_btn.addEventListener('click', Mslideright);

    changeImage();
});


// Increase or decrease items
function increment() {
    let number = document.getElementById("amount_counter");
    number.innerText = parseInt(number.innerText, 10) + 1;
}
function decrement() {
    let number = document.getElementById("amount_counter");
    let currentValue = parseInt(number.innerText, 10);
    if (currentValue > 0) {
        number.innerText = currentValue - 1;
    }
}
function addProduct() {
    const number = document.getElementById("amount_counter").innerText;

    if (number >= 1) {
        let cart = document.getElementById("cart_product");
        cart.innerHTML = "";
        cart.style.paddingBlock = '20px';

        // Top 
        let top_div = document.createElement('div');
        top_div.setAttribute('id', 'c_top');

        // Image 
        let img_div = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', './images/image-product-1-thumbnail.jpg');
        img.setAttribute('id', 'c_image');
        img_div.appendChild(img);

        // Text 
        let text_div = document.createElement('div');
        let text = document.createElement('p');
        text.setAttribute('id', 'c_desc');
        text.innerText = "Fall Limited Edition Sneakers $125.00 x ";

        let span = document.createElement('span');
        span.setAttribute('id', 'c_counter');
        span.innerText = number;

        let price = document.createElement('span');
        price.setAttribute('id', 'c_price');
        price.innerText = " $" + (125 * number).toFixed(2);

        text.appendChild(span);
        text.appendChild(price);
        text_div.appendChild(text);

        // Trash button
        let trash = document.createElement('button');
        let trash_img = document.createElement('img');
        trash_img.setAttribute('src', './images/icon-delete.svg');
        trash_img.setAttribute('alt', 'trash');
        trash.appendChild(trash_img);
        trash.setAttribute('id', 'c_trash');
        trash.setAttribute('onclick', 'removeItem()');

        // Append top
        top_div.appendChild(img_div);
        top_div.appendChild(text_div);
        top_div.appendChild(trash);

        // Bottom container
        let bottom_div = document.createElement('div');
        bottom_div.setAttribute('id', 'c_bottom');

        let button = document.createElement('button');
        button.setAttribute('id', 'c_button');
        button.innerText = "Checkout";
        
        // Apend bottom
        bottom_div.appendChild(button);

        cart.appendChild(top_div);
        cart.appendChild(bottom_div);
    }
}
function removeItem() {
    let cart = document.getElementById("cart_product");
    let span = document.getElementById('c_counter');
    let price = document.getElementById('c_price');

    let quantity = parseInt(span.innerText, 10);
    let unitPrice = 125.00; 

    if (quantity >= 2) {
        quantity -= 1;
        span.innerText = quantity;
        price.innerText = " $" + (unitPrice * quantity).toFixed(2);
    } else {
        cart.innerHTML = "Your cart is empty.";
        cart.style.paddingBlock = '80px';
    }
}


// Mobile functions


// Add or remove products from cartwindow
function addmProduct() {
    const number = document.getElementById("mamount_counter").innerText;

    if (number >= 1) {
        let cart = document.getElementById("mcart_product");
        cart.innerHTML = "";
        cart.style.paddingBlock = '20px';

        // Top 
        let top_div = document.createElement('div');
        top_div.setAttribute('id', 'mc_top');

        // Image 
        let img_div = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', './images/image-product-1-thumbnail.jpg');
        img.setAttribute('id', 'mc_image');
        img_div.appendChild(img);

        // Text 
        let text_div = document.createElement('div');
        let text = document.createElement('p');
        text.setAttribute('id', 'mc_desc');
        text.innerText = "Fall Limited Edition Sneakers $125.00 x ";

        let span = document.createElement('span');
        span.setAttribute('id', 'mc_counter');
        span.innerText = number;

        let price = document.createElement('span');
        price.setAttribute('id', 'mc_price');
        price.innerText = " $" + (125 * number).toFixed(2);

        text.appendChild(span);
        text.appendChild(price);
        text_div.appendChild(text);

        // Trash button
        let trash = document.createElement('button');
        let trash_img = document.createElement('img');
        trash_img.setAttribute('src', './images/icon-delete.svg');
        trash_img.setAttribute('alt', 'trash');
        trash.appendChild(trash_img);
        trash.setAttribute('id', 'mc_trash');
        trash.setAttribute('onclick', 'mremoveItem()');

        // Append top
        top_div.appendChild(img_div);
        top_div.appendChild(text_div);
        top_div.appendChild(trash);

        // Bottom container
        let bottom_div = document.createElement('div');
        bottom_div.setAttribute('id', 'mc_bottom');

        let button = document.createElement('button');
        button.setAttribute('id', 'mc_button');
        button.innerText = "Checkout";
        
        // Apend bottom
        bottom_div.appendChild(button);

        cart.appendChild(top_div);
        cart.appendChild(bottom_div);
    }
}
function mremoveItem() {
    let cart = document.getElementById("mcart_product");
    let span = document.getElementById('mc_counter');
    let price = document.getElementById('mc_price');

    let quantity = parseInt(span.innerText, 10);
    let unitPrice = 125.00; 

    if (quantity >= 2) {
        quantity -= 1;
        span.innerText = quantity;
        price.innerText = " $" + (unitPrice * quantity).toFixed(2);
    } else {
        cart.innerHTML = "Your cart is empty.";
        cart.style.paddingBlock = '80px';
    }
}


// Increase or decrease amount for productcount
function mincrement() {
    let number = document.getElementById("mamount_counter");
    number.innerText = parseInt(number.innerText, 10) + 1;
}
function mdecrement() {
    let number = document.getElementById("mamount_counter");
    let currentValue = parseInt(number.innerText, 10);
    if (currentValue > 0) {
        number.innerText = currentValue - 1;
    }
}

// Mobile gallery
document.addEventListener('DOMContentLoaded', function() {
    /* Mobile gallery */
    var left_btn = document.getElementById("marrow_left");
    var right_btn = document.getElementById("marrow_right");

    var number2 = 1;

    var images = [
        document.getElementById("mgmainpic1"),
        document.getElementById("mgmainpic2"),
        document.getElementById("mgmainpic3"),
        document.getElementById("mgmainpic4")
    ];

    function Mslideleft() {
        number2 = (number2 === 1) ? 4 : number2 - 1;
        changeImage();
    }

    function Mslideright() {
        number2 = (number2 === 4) ? 1 : number2 + 1;
        changeImage();
    }

    function changeImage() {
        images.forEach((img, index) => {
            img.style.display = (index === number2 - 1) ? 'inline-block' : 'none';
        });
    }

    left_btn.addEventListener('click', Mslideleft);
    right_btn.addEventListener('click', Mslideright);

    changeImage();
});

// Open and close cartwindow

function mcartWindow() {
        let cart = document.getElementById('mcartwindow')
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "inline-block";
        mobile_gallery.style.zIndex = '-1';
    } else {
        cart.style.display = "none";
        mobile_gallery.style.zIndex = '1';
    }
}
// Menu open and close

function closeMenu() {
    document.getElementById('menu_dropdown').style.display = "none"
}
function openMenu() {
    document.getElementById('menu_dropdown').style.display = "block"
}
