import salad from "../assets/images/icons/salad.png";
import squid from "../assets/images/icons/squid.png";
import cheese from "../assets/images/icons/cheese.png";
import ribs from "../assets/images/icons/ribs.png";
import sandwich from "../assets/images/icons/sandwich.png";
import burger from "../assets/images/icons/burger.png";
import chili from "../assets/images/icons/chili.png";
import paella from "../assets/images/icons/paella.png";
import cake from "../assets/images/icons/cake.png";
import gluten from "../assets/images/icons/gluten.png";
import crustaceans from "../assets/images/icons/crustaceans.png";
import egg from "../assets/images/icons/egg.png";
import fish from "../assets/images/icons/fish.png";
import peanuts from "../assets/images/icons/peanuts.png";
import soja from "../assets/images/icons/soja.png";
import milk from "../assets/images/icons/milk.png";
import shelledFruits from "../assets/images/icons/shelled-fruits.png";
import celery from "../assets/images/icons/celery.png";
import mustard from "../assets/images/icons/mustard.png";
import sesame from "../assets/images/icons/sesame.png";
import sulfites from "../assets/images/icons/sulfites.png";
import lupins from "../assets/images/icons/lupins.png";
import mollusks from "../assets/images/icons/mollusks.png";

const events = [
    {
        image: "https://www.calataboo.com/wp-content/uploads/2024/03/TABOO-JUEVES-28-MARZO-2024.jpg",
    },
    {
        image: "https://www.calataboo.com/wp-content/uploads/2024/03/VIERNES-29.jpg",
    },
    {
        image: "https://www.calataboo.com/wp-content/uploads/2024/03/DISCO-LOVE.jpg",
    },
    {
        image: "https://www.calataboo.com/wp-content/uploads/2024/03/Super-Sunday-31-Marzo-2024.jpg",
    },
    {
        image: "https://www.calataboo.com/wp-content/uploads/2024/03/SALSABADOS-23-MARZOSANTA-SALSA.jpg",
    },
    {
        image: "https://www.calataboo.com/wp-content/uploads/2024/03/VITO.jpg",
    },
    {
        image: "https://www.calataboo.com/wp-content/uploads/2024/03/DOMINGO-31-MARZO.jpg",
    },
];

const menu = [
    {
        id: "salads",
        title: "menu.salads",
        plates: [
            {
                name: "menu.salads1.name",
                description: "menu.salads1.description",
                price: "9,80€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.salads2.name",
                description: "menu.salads2.description",
                price: "7,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.salads3.name",
                description: "menu.salads3.description",
                price: "11,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.salads4.name",
                description: "menu.salads4.description",
                price: "17,60€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.salads5.name",
                description: "menu.salads5.description",
                price: "17,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.salads6.name",
                description: "menu.salads6.description",
                price: "12,30€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.salads7.name",
                description: "menu.salads7.description",
                price: "19,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.salads8.name",
                description: "menu.salads8.description",
                price: "12,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: salad,
    },
    {
        id: "rations",
        title: "menu.rations",
        plates: [
            {
                name: "menu.rations1.name",
                description: "menu.rations1.description",
                price: "8,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations2.name",
                description: "menu.rations2.description",
                price: "12,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations3.name",
                description: "menu.rations3.description",
                price: "8,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations4.name",
                description: "menu.rations4.description",
                price: "11,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations5.name",
                description: "menu.rations5.description",
                price: "9,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations6.name",
                description: "menu.rations6.description",
                price: "13,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations7.name",
                description: "menu.rations7.description",
                price: "15,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations8.name",
                description: "menu.rations8.description",
                price: "18,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations9.name",
                description: "menu.rations9.description",
                price: "12,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations10.name",
                description: "menu.rations10.description",
                price: "15,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rations11.name",
                description: "menu.rations11.description",
                price: "12,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: squid,
    },
    {
        id: "boards",
        title: "menu.boards",
        plates: [
            {
                name: "menu.boards1.name",
                description: "menu.boards1.description",
                price: "19,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.boards2.name",
                description: "menu.boards2.description",
                price: "16,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.boards3.name",
                description: "menu.boards3.description",
                price: "20,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: cheese,
    },
    {
        id: "grill",
        title: "menu.grill",
        plates: [
            {
                name: "menu.grill1.name",
                description: "menu.grill1.description",
                price: "8,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.grill2.name",
                description: "menu.grill2.description",
                price: "12,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.grill3.name",
                description: "menu.grill3.description",
                price: "8,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.grill4.name",
                description: "menu.grill4.description",
                price: "11,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.grill5.name",
                description: "menu.grill5.description",
                price: "9,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.grill6.name",
                description: "menu.grill6.description",
                price: "13,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: ribs,
    },
    {
        id: "sandwiches",
        title: "menu.sandwiches",
        plates: [
            {
                name: "menu.sandwiches1.name",
                description: "menu.sandwiches1.description",
                price: "8,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.sandwiches2.name",
                description: "menu.sandwiches2.description",
                price: "12,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.sandwiches3.name",
                description: "menu.sandwiches3.description",
                price: "8,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: sandwich,
    },
    {
        id: "burgers",
        title: "menu.burgers",
        plates: [
            {
                name: "menu.burgers1.name",
                description: "menu.burgers1.description",
                price: "15,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.burgers2.name",
                description: "menu.burgers2.description",
                price: "14,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.burgers3.name",
                description: "menu.burgers3.description",
                price: "13,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.burgers4.name",
                description: "menu.burgers4.description",
                price: "14,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.burgers5.name",
                description: "menu.burgers5.description",
                price: "15,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.burgers6.name",
                description: "menu.burgers6.description",
                price: "15,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.burgers7.name",
                description: "menu.burgers7.description",
                price: "13,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: burger,
    },
    {
        id: "tex-mex",
        title: "menu.tex-mex",
        plates: [
            {
                name: "menu.tex-mex1.name",
                description: "menu.tex-mex1.description",
                price: "15,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.tex-mex2.name",
                description: "menu.tex-mex2.description",
                price: "14,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.tex-mex3.name",
                description: "menu.tex-mex3.description",
                price: "13,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: chili,
    },
    {
        id: "rice",
        title: "menu.rice",
        plates: [
            {
                name: "menu.rice1.name",
                description: "menu.rice1.description",
                price: "13,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rice2.name",
                description: "menu.rice2.description",
                price: "13,90€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.rice3.name",
                description: "menu.rice3.description",
                price: "16,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: paella,
    },
    {
        id: "desserts",
        title: "menu.desserts",
        plates: [
            {
                name: "menu.desserts1.name",
                description: "menu.desserts1.description",
                price: "7,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.desserts2.name",
                description: "menu.desserts2.description",
                price: "7,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.desserts3.name",
                description: "menu.desserts3.description",
                price: "7,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.desserts4.name",
                description: "menu.desserts4.description",
                price: "7,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.desserts5.name",
                description: "menu.desserts5.description",
                price: "7,00€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.desserts6.name",
                description: "menu.desserts6.description",
                price: "7,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
            {
                name: "menu.desserts7.name",
                description: "menu.desserts7.description",
                price: "6,50€",
                allergens: [gluten, crustaceans, egg, fish, peanuts, soja, milk, shelledFruits, celery, mustard, sesame, sulfites, lupins, mollusks],
                image: "https://framerusercontent.com/images/9kkGOeR8XfJ0bkSq5vagmboso.webp",
            },
        ],
        icon: cake,
    },
];

const allergens = [
    { icon: gluten, text: "menu.allergensOne", color: "#FFCC75" },
    { icon: crustaceans, text: "menu.allergensTwo", color: "#F15A24" },
    { icon: egg, text: "menu.allergensThree", color: "#F9E8D4" },
    { icon: fish, text: "menu.allergensFour", color: "#D9DEFB" },
    { icon: peanuts, text: "menu.allergensFive", color: "#F5C86E" },
    { icon: soja, text: "menu.allergensSix", color: "#39B54A" },
    { icon: milk, text: "menu.allergensSeven", color: "#FFF9E2" },
    { icon: shelledFruits, text: "menu.allergensEight", color: "#A44F3E" },
    { icon: celery, text: "menu.allergensNine", color: "#BCEA73" },
    { icon: mustard, text: "menu.allergensTen", color: "#FFD150" },
    { icon: sesame, text: "menu.allergensEleven", color: "#5B5B68" },
    { icon: sulfites, text: "menu.allergensTwelve", color: "#36D49B" },
    { icon: lupins, text: "menu.allergensThirteen", color: "#FFCA28" },
    { icon: mollusks, text: "menu.allergensFourteen", color: "#FF5F7F" },
];

export { events, menu, allergens };
