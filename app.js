const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

let tmenu = document.querySelector("#men")
tmenu.classList.add("text-center")

let btn = document.createElement("button")
let btn1 = document.createElement("button")
let btn2 = document.createElement("button")
let btn3 = document.createElement("button")

btn.classList.add("btn","btn-item" ,"btn-outline-dark")
btn1.classList.add("btn","btn-item","btn-outline-dark")
btn2.classList.add("btn","btn-item","btn-outline-dark")
btn3.classList.add("btn","btn-item","btn-outline-dark")

btn.innerText="All"
btn1.innerText="Korea"
btn2.innerText="Japan"
btn3.innerText="China"

btn.addEventListener("click",changeCategory)
btn1.addEventListener("click",changeCategory)
btn2.addEventListener("click",changeCategory)
btn3.addEventListener("click",changeCategory)


tmenu.append(btn)
tmenu.append(btn1)
tmenu.append(btn2)
tmenu.append(btn3)



let sct = document.querySelector("#sct")



function newItem(index){
    console.log("agaa");
    let div = document.createElement("div")
    div.classList.add("col-sm-12","col-lg-6","mb-3")
    let img = document.createElement("img")
    img.src=menu[index].img
    img.classList.add("photo","float-start")
    let mınfo = document.createElement("div")
    mınfo.classList.add("menu-info")
    let title = document.createElement("div")
    title.classList.add("menu-title")
    title.innerHTML=`
        <h4>${menu[index].title}</h4>
        <h4 class="price">${menu[index].price}</h4>
    `
    let text = document.createElement("div")
    text.innerText=menu[index].desc
    text.classList.add("menu-text")
    sct.append(div)
    div.append(img)
    div.append(mınfo)
    mınfo.append(title)
    div.append(text)

}

function changeCategory(){
    sct.innerHTML=""
    for (let index = 0; index < menu.length; index++) {
        // console.log(this.innerHTML);
        if(this.innerText==menu[index].category ||this.innerHTML=="All"){
            console.log("kendi");
            newItem(index)
        }
    }
}

for (let index = 0; index < menu.length; index++) {
    console.log(index);
    newItem(index)
}