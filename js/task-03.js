const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const gallery = document.querySelector(".gallery");
const arrayImg = images
    .map(
        (image) =>
            `<li style="list-style:none;"><img style="width:100%; height:100%;" src="${image.url}" alt="${image.alt}"></li>`
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", arrayImg);

gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(2, 500px)";
gallery.style.gridGap = "10px";
gallery.style.gridAutoRows = "300px";
