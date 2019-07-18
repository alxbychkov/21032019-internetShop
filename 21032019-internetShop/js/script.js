
class Elements {
    constructor(elImage, elName, elPrice, elPress) {
        this.image = elImage;
        this.name = elName;
        this.price = elPrice;
        this.el = document.querySelector('.elements');
    }
    // clear() {
    //     this.el.innerHTML = '';
    // }
    renderElement() {
        let newel = document.createElement('div');
        newel.classList.add('elements-item');
        newel.innerHTML =
            `
                <div class="content" style="background: ${this.image}"></div>
                <div class="name">${this.name}</div>
                <div class="price">${this.price}</div>
            `;
        document.querySelector('.elements').appendChild(newel);
    }
}

class Catalog {
    constructor(catalogBlock) {
        this.el = document.querySelector(catalogBlock);
        this.products = [];
    }
    productsArray(products) {
        this.products = products;
    }
    renderCatalog() {
        this.products.forEach((value) => {
            value.renderElement(this.el);
        });
    }
    clear() {
        this.el = document.querySelector('.elements');
        this.el.innerHTML = '';
    }
    preloaderOn() {
        this.el = document.querySelector('.elements');
        this.el.innerHTML = ' <div class="preloader"></div>';
    }
    preloaderOff() {
        this.el = document.querySelector('.elements');
        this.el.innerHTML = '';
    }
    renderPagination(currentBlock, allBlocks) {
        // номер активного кубика
        // кол-во кубиков
        this.el = document.querySelector('.number-page');
        // this.el.innerHTML = '';
        for (let i = 1; i <= allBlocks; i++) {

            let numpage = document.createElement('div');
            numpage.classList.add('number-item');
            if (i == currentBlock) numpage.classList.add('active_btn');

            numpage.addEventListener('click', () => {
                category = window.location.search + '&page=' + i;
                // this.load(category);
                // document.querySelector('.active_btn').classList.remove('active_btn');
                // numpage.classList.add('active_btn');
                console.log(category);
            });

            numpage.innerText = i;
            document.querySelector('.number-page').appendChild(numpage);
        }


        // pagination [
        //     'active' : 1,
        //     'allBlock': 4
        // ]
    }
    load(cat) {

        let categ = (cat !== '') ? cat : '?category=1';



        // if (cat !== '') {
        //     var categ = cat;
        // } else {
        //     var categ = '?category=1'
        // }
        // console.log(categ);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `../handlers/catalog.php${categ}`);
        xhr.send();
        this.clear();
        this.preloaderOn();

        xhr.addEventListener('load', () => {
            this.preloaderOff();

            // 1. записали данные в переменную data (array);
            let data = JSON.parse(xhr.responseText);
            // 2. Перебираем циклом полученный массив
            // console.log(data.pagination);
            let dataArray = [];
            data.catalogItems.forEach(function (value) {
                dataArray.push(new Elements(value.image, value.name, value.price));
            });

            catalog.productsArray(dataArray);
            catalog.renderCatalog();
            this.renderPagination(data.pagination.currentPage, data.pagination.allPages);
        });
    }

}




/////////////////////////////////////////
////////////////////////////////////////



// class Elements {
//     constructor(elImage, elName, elPrice, elPress) {
//         this.image = elImage;
//         this.name = elName;
//         this.price = elPrice;
//         this.el = document.querySelector('.elements');
//     }
//     renderCatalogElement() {

//     }
//     renderElement() {
//         //////////////////////////////////////////
//         //////// CLASSWORK 4.06 //////////////////
//         /////////////////////////////////////////
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', '/handlers/catalog.php');
//         xhr.send();

//         xhr.addEventListener('load', () => {

//             let data = JSON.parse(xhr.responseText);
//             console.log(data);
//             data.forEach((value, index) => {
//                 let catalogItem = new Elements(value.image, value.name, value.price);
//             });

//             let newel = document.createElement('div');
//             newel.classList.add('elements-item');
//             newel.innerHTML =
//                 `
//                         <div class="content"></div>
//                         <div class="name">${data}</div>
//                         <div class="price">${this.price}</div>
//                 `;
//             document.querySelector('.elements').appendChild(newel);


//         });


//         /////////////////////////////////////////
//         /////////////////////////////////////////

//     }
// }


/////////////////CLASS 8.06//////////////////


// let Trousers = new Elements('grey', 'Штаны', '2000');
// Trousers.renderElement();
// let Tshirt = new Elements('grey', 'Футболка', '1000');


///////////
// Tshirt.renderElement();
// Tshirt.renderElement();

// let newCatalog = new 

// for (let i = 0; i < 10; i++) {
//     Trousers.renderElement();
// }

let category = window.location.search;
// console.log(window.location.search);
let catalog = new Catalog();
let value = '';
let id = '';





catalog.load(category);


document.getElementById('name').addEventListener('change', () => {
    value = document.getElementById('name').value;
    id = '&id=' + value;
    if (~category.indexOf('id')) {
        // console.log(category.split('&')[1] + '  ' + id);
        // console.log(category.replace(category.split('&')[1], '?id=' + value));
        category = category.replace(category.split('&')[1], 'id=' + value);
    } else {
        category = category + id;
    }
    // console.log(category.replace(id, ''));

    // console.log(category);
    // console.log(document.getElementById('name').options.selectedIndex);
    // window.location.search = category;
    // window.history.pushState(null, null, category);
    window.history.pushState(null, null, category);

    // catalog.load(window.location.search);
    // window.location.replace('category.php' + category);
    catalog.load(category);
    // console.log(window.location.hash + 'qqqq');
    // window.location.search = category;
    // return window.location.search = category;

});


let page = document.getElementsByClassName('.number-item');


// document.addEventListener('onmousemove', () => {
//     console.log('h');
// });

// function hash() {
//     let oldHref = window.location.href;

//     setInterval(function () {
//         if (oldHref !== window.location.href) {
//             alert("HREF CHANGED - new has" + window.location.href + ' - ' + oldHref);
//             oldHref = window.location.href;
//         }
//     }, 10);
// }
// hash();




// console.log(category);
// category = category + '&' + 'id=' + value;

// catalog.load(category);