let dataCars = [];
let dataActicles = [];
let cars = document.getElementById("cars");
let aritcles__list = document.getElementById("aritcles__list");

fetch('./assets/js/data.json')
    .then(res => res.json())
    .then(data => {
        dataCars = data.cars;

        dataCars.map(item => {
            let div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `
            <div class="product__image">
                <img class="main__img" src=${item.mainImg} alt="">
                <img class="sub__img" src=${item.subImg} alt="">
            </div>

            <div class="product__content">
                <h1>${item.name}</h1>
                <p>${item.desc}</p>
                <h4>${item.price}</h4>
            </div>
            `
            cars.appendChild(div);
        })

        // dataActicles = data.aritcle;
        // dataActicles.map(item => {
        //     let li = document.createElement("li");
        //     li.classList.add("splide__slide");
        //     li.innerHTML = `
            
        //     `
        //     aritcles__list.appendChild(li);
        // })
    })
    .catch(err => console.log(err))


let navBar = document.getElementById('navBar');

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        navBar.style.webkitBoxShadow = "rgba(240,255,255, 0.3) 0px 19px 38px, rgba(240,255,255, 0.22) 0px 15px 12px";
    }
    else{
        navBar.style.webkitBoxShadow = ""
    }
})