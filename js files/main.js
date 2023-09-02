// menu api fetch.

let menuData = async () => {
  let catagoriString = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  let catagoriData = await catagoriString.json();
  let menuData = catagoriData.data;
  menuDisplay(menuData);
};

let menu = document.getElementById("menu");
let menuDisplay = (data) => {
  data.forEach((element) => {
    let button = document.createElement("button");
    button.classList.add("btn", "lg:px-7");
    button.setAttribute("onclick", `${element.category}btn()`);
    button.setAttribute("id", `${element.category}`);
    button.innerText = `${element.category}`;
    menu.appendChild(button);
  });
};

let gridContanier = document.getElementById("gridSection");

let Allbtn = async () => {
  // btn active
  document
    .getElementById("Music")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Comedy")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Drawing")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("All")
    .classList.remove("bg-gray-300", "text-[#1f2937]");
  document.getElementById("All").classList.add("bg-red-500", "text-white");

  document.getElementById("All").classList.add("bg-red-500", "text-white");

  let allDatastring = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  let allData = await allDatastring.json();
  let Alldata = allData.data;
  AllDataBtnDisplay(Alldata);
};

let AllDataBtnDisplay = (AllData) => {
  gridContanier.innerHTML = "";
  AllData.forEach((element) => {
    let card = document.createElement("div");

    let ghonta = 0;
    let minit = 0;
    function toHOurAndMInut(sec) {
      let munnutmodulas = sec % 60;
      let minut = (sec - munnutmodulas) / 60;

      let realMinut = minut % 60;
      let hour = (minut - realMinut) / 60;

      ghonta = hour;
      minit = realMinut;
    }
    toHOurAndMInut(element.others.posted_date);

    let authorstring = element.authors[0].profile_name;
    authorstring = authorstring.split(" ");
    authorstring = authorstring[1];

    card.innerHTML = `
    
    <div class="card w-full bg-base-100 shadow-xl">
    <figure class="h-[200px] rounded-b-2xl relative">
    <img class=" w-full" src="${element.thumbnail}" alt="Shoes"/>
    <span id="${authorstring}" class="absolute bottom-4 right-4 p-1 bg-black text-white rounded text-[10px] font-normal">${ghonta}hrs ${minit}min ago</span>
    </figure>
    
        <section class="mt-5">
            <div class="flex items-start gap-3 pb-10 px-1">
                <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                  element.authors[0].profile_picture
                }" alt="">
                <div>
                    <h1 class="text-base font-bold mb-2" >${element.title}</h1>
                   <div class="flex gap-2"> <h3 class="text-sm font-normal inline-block">${
                     element.authors[0].profile_name
                   }</h3> <span>${
      element.authors[0].verified ? '<img src="img/bluetick.png">' : ""
    }</span></div>
                    <h4 class="text-sm font-normal mt-2">${
                      element.others.views
                    } views</h4>
                </div>
            </div>
        </section>
    
</div>

    `;

    gridContanier.appendChild(card);

    if (ghonta === 0) {
      document.getElementById(`${authorstring}`).classList.add("hidden");
    }
  });
};

let Musicbtn = async () => {
  // btn active
  document.getElementById("All").classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Music")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Comedy")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Drawing")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Music")
    .classList.remove("bg-gray-300", "text-[#1f2937]");
  document.getElementById("Music").classList.add("bg-red-500", "text-white");

  let allDatastring = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1001"
  );
  let allData = await allDatastring.json();
  let Alldata = allData.data;
  MusicDataBtnDisplay(Alldata);
};

let MusicDataBtnDisplay = (AllData) => {
  gridContanier.innerHTML = "";
  AllData.forEach((element) => {
    let card = document.createElement("div");

    let ghonta = 0;
    let minit = 0;
    function toHOurAndMInut(sec) {
      let munnutmodulas = sec % 60;
      let minut = (sec - munnutmodulas) / 60;

      let realMinut = minut % 60;
      let hour = (minut - realMinut) / 60;

      ghonta = hour;
      minit = realMinut;
    }
    toHOurAndMInut(element.others.posted_date);

    let authorstring = element.authors[0].profile_name;
    authorstring = authorstring.split(" ");
    authorstring = authorstring[1];

    card.innerHTML = `
    
    <div class="card w-full bg-base-100 shadow-xl">

    <figure class="h-[200px] rounded-b-2xl relative">
    <img class=" w-full" src="${element.thumbnail}" alt="Shoes"/>
    <span id="${authorstring}" class="absolute bottom-4 right-4 p-1 bg-black text-white rounded text-[10px] font-normal">${ghonta}hrs ${minit}min ago</span>
    </figure>
    
        <section class="mt-5">
            <div class="flex items-start gap-3 pb-10 px-1">
                <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                  element.authors[0].profile_picture
                }" alt="">
                <div>
                    <h1 class="text-base font-bold mb-2" >${element.title}</h1>
                   <div class="flex gap-2"> <h3 class="text-sm font-normal inline-block">${
                     element.authors[0].profile_name
                   }</h3> <span>${
      element.authors[0].verified ? '<img src="img/bluetick.png">' : ""
    }</span></div>
                    <h4 class="text-sm font-normal mt-2">${
                      element.others.views
                    } views</h4>
                </div>
            </div>
        </section>
    
</div>

    `;

    gridContanier.appendChild(card);

    if (ghonta === 0) {
      document.getElementById(`${authorstring}`).classList.add("hidden");
    }
  });
};

let Comedybtn = async () => {
  // btn active
  document.getElementById("All").classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Music")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Comedy")
    .classList.remove("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Drawing")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document.getElementById("Comedy").classList.add("bg-red-500", "text-white");

  let ComedyDatastring = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1003"
  );
  let allData = await ComedyDatastring.json();
  let Alldata = allData.data;
  ComedyDataBtnDisplay(Alldata);
};

let ComedyDataBtnDisplay = (AllData) => {
  gridContanier.innerHTML = "";
  AllData.forEach((element) => {
    let card = document.createElement("div");

    let ghonta = 0;
    let minit = 0;
    function toHOurAndMInut(sec) {
      let munnutmodulas = sec % 60;
      let minut = (sec - munnutmodulas) / 60;

      let realMinut = minut % 60;
      let hour = (minut - realMinut) / 60;

      ghonta = hour;
      minit = realMinut;
    }
    toHOurAndMInut(element.others.posted_date);

    let authorstring = element.authors[0].profile_name;
    authorstring = authorstring.split(" ");
    authorstring = authorstring[1];

    card.innerHTML = `
    
    <div class="card w-full bg-base-100 shadow-xl">
    
 <figure class="h-[200px] rounded-b-2xl relative">
    <img class=" w-full" src="${element.thumbnail}" alt="Shoes"/>
    <span id="${authorstring}" class="absolute bottom-4 right-4 p-1 bg-black text-white rounded text-[10px] font-normal">${ghonta}hrs ${minit}min ago</span>
    </figure>
    
        <section class="mt-5">
            <div class="flex items-start gap-3 pb-10 px-1">
                <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                  element.authors[0].profile_picture
                }" alt="">
                <div>
                    <h1 class="text-base font-bold mb-2" >${element.title}</h1>
                   <div class="flex gap-2"> <h3 class="text-sm font-normal inline-block">${
                     element.authors[0].profile_name
                   }</h3> <span>${
      element.authors[0].verified ? '<img src="img/bluetick.png">' : ""
    }</span></div>
                    <h4 class="text-sm font-normal mt-2">${
                      element.others.views
                    } views</h4>
                </div>
            </div>
        </section>
    
</div>

    `;

    gridContanier.appendChild(card);

    if (ghonta === 0) {
      document.getElementById(`${authorstring}`).classList.add("hidden");
    }
  });
};

let Drawingbtn = () => {
  document.getElementById("All").classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Music")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Comedy")
    .classList.add("bg-gray-300", "text-[#1f2937]");
  document
    .getElementById("Drawing")
    .classList.remove("bg-gray-300", "text-[#1f2937]");
  document.getElementById("Drawing").classList.add("bg-red-500", "text-white");
  gridContanier.innerHTML = "";
  // gridContanier.classList.remove("grid","gird-cols-1","lg:grid-cols-4", "gap-6");
  let section = document.createElement("section");
  section.classList.add(
    "w-full",
    "h-[calc(100vh-238px)]",
    "flex",
    "justify-center",
    "items-center",
    "flex-col",
    "gap-8",
    "col-span-full"
  );
  section.innerHTML = `
  <img src="./img/Icon.png" alt="">
<h2 class="text-3xl font-bold text-center">Oops!! Sorry, There is no <br>content here</h2>
  `;
  gridContanier.appendChild(section);
};

let pagefire = async () => {
  await menuData();
  await Allbtn();
};

pagefire();

// blog btn action.

let blogBtn = () => {
  window.location.replace("blog/index.html");
};

// this is for sort by view btn.

let sortByView = async () => {
  let Datafetch = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  let res = await Datafetch.json();
  allBtnDataSort(res.data);
};

let allBtnDataSort = (data) => {

  // this is for btn active

  document.getElementById("All").classList.add("bg-gray-300", "text-[#1f2937]");
  document
      .getElementById("Music")
      .classList.add("bg-gray-300", "text-[#1f2937]");
  document
      .getElementById("Comedy")
      .classList.add("bg-gray-300", "text-[#1f2937]");
  document
      .getElementById("Drawing")
      .classList.add("bg-gray-300", "text-[#1f2937]");
  document
      .getElementById("Music")
      .classList.add("bg-gray-300", "text-[#1f2937]");
 


  // 
  gridContanier.innerHTML = "";
  data.sort(function (a, b) {
    if (parseFloat(a.others.views) < parseFloat(b.others.views)) {
      return 1;
    } else if (parseFloat(a.others.views) > parseFloat(b.others.views)) {
      return -1;
    }
  });

  data.forEach((element) => {
    let card = document.createElement("div");

    let ghonta = 0;
    let minit = 0;
    function toHOurAndMInut(sec) {
      let munnutmodulas = sec % 60;
      let minut = (sec - munnutmodulas) / 60;

      let realMinut = minut % 60;
      let hour = (minut - realMinut) / 60;

      ghonta = hour;
      minit = realMinut;
    }
    toHOurAndMInut(element.others.posted_date);

    let authorstring = element.authors[0].profile_name;
    authorstring = authorstring.split(" ");
    authorstring = authorstring[1];

    card.innerHTML = `
    
    <div class="card w-full bg-base-100 shadow-xl">

    <figure class="h-[200px] rounded-b-2xl relative">
    <img class=" w-full" src="${element.thumbnail}" alt="Shoes"/>
    <span id="${authorstring}" class="absolute bottom-4 right-4 p-1 bg-black text-white rounded text-[10px] font-normal">${ghonta}hrs ${minit}min ago</span>
    </figure>
    
        <section class="mt-5">
            <div class="flex items-start gap-3 pb-10 px-1">
                <img  class="rounded-[50%] w-[45px] h-[45px]" src="${
                  element.authors[0].profile_picture
                }" alt="">
                <div>
                    <h1 class="text-base font-bold mb-2" >${element.title}</h1>
                   <div class="flex gap-2"> <h3 class="text-sm font-normal inline-block">${
                     element.authors[0].profile_name
                   }</h3> <span>${
      element.authors[0].verified ? '<img src="img/bluetick.png">' : ""
    }</span></div>
                    <h4 class="text-sm font-normal mt-2">${
                      element.others.views
                    } views</h4>
                </div>
            </div>
        </section>
    
</div>

    `;

    gridContanier.appendChild(card);

    if (ghonta === 0) {
      document.getElementById(`${authorstring}`).classList.add("hidden");
    }
  });
};
