/** @format */

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCCunjexLvpC60yMZ2sZ5KmHF0oO5nFCt0",
    authDomain: "ia-house-6c7cf.firebaseapp.com",
    projectId: "ia-house-6c7cf",
    storageBucket: "ia-house-6c7cf.appspot.com",
    messagingSenderId: "468241721646",
    appId: "1:468241721646:web:ef72637b28c9894ad532bf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const products = [
    {
        name: "Echo Dot 1° generación",
        precio: 999,
        formato: "Producto",
        img: "../src/assets/img/Productos/Eco Dot 1° generación.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Reproduce musica",
        category: 4,
    },
    {
        name: "Echo Dot 3° generación",
        precio: 1600,
        formato: "Producto",
        img: "../src/assets/img/Productos/Eco Dot 3° generación.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Excelente audio",
        category: 4,
    },
    {
        name: "Echo Dot 5° generación",
        precio: 2500,
        formato: "Producto",
        img: "../src/assets/img/Productos/Eco Dot 5° generación.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Enlaza tu sistema de vigilancia",
        category: 4,
    },
    {
        name: "Gen de hologramas",
        precio: 1999,
        formato: "Producto",
        img: "../src/assets/img/Productos/Generador de hologramas.png",
        especificaciones1: "Haz tus propios diseños",
        especificaciones2: "Solo conecta y disfruta",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Disfruta de sus efectos con audio",
        category: 1,
    },
    {
        name: "Luz RGB",
        precio: 300,
        formato: "Producto",
        img: "../src/assets/img/Productos/Luz RGB.png",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Disfruta de sus efectos",
        especificaciones3: "Controla con tu asistente (alexa)",
        especificaciones4: "25 efectos pre-instalados y cargo los propios",
        category: 1,
    },
    {
        name: "Enchufe inteligente",
        precio: 400,
        formato: "Producto",
        img: "../src/assets/img/Productos/Enchufe inteligente.jpg",
        especificaciones1: "Facil de instalar",
        especificaciones2: "Controla tus dispositivos con tu voz",
        especificaciones3: "Se enlaza con tu asistente (alexa)",
        especificaciones4: "Control ante descargas",
        category: 3,
    },
    {
        name: "TP-Link Tapo C500",
        precio: 778,
        formato: "Producto",
        img: "../src/assets/img/Productos/TP-LINK.jpg",
        especificaciones1: "Cámara de Seguridad Wi-Fi para Exteriores",
        especificaciones2: "360° FHD 1080P con Visión Nocturna",
        especificaciones3: "Audio Bidireccional",
        especificaciones4: "Funciona con Alexa",
        category: 2,
    },
    {
        name: "EASYTAO Q09",
        precio: 318,
        formato: "Producto",
        img: "../src/assets/img/Productos/EASYTAO.jpg",
        especificaciones1: "Camara de Seguridad WiFi",
        especificaciones2: "2MP Camara de Foco",
        especificaciones3: "Detección de Movimiento con Alerta",
        especificaciones4: "Funciona con Alexa",
        category: 2,
    },
    {
        name: "Dyson Purificador",
        precio: 13176,
        formato: "Producto",
        img: "../src/assets/img/Productos/DYSON PURIFICADOR.jpg",
        especificaciones1: "Detecta, captura y encierra",
        especificaciones2:
            "Elimina el virus H1N16 y el 99.97 % de las bacterias",
        especificaciones3: "2 años de garantía directo con Dyson México",
        especificaciones4: "Funciona con Alexa",
        category: 4,
    },
];

export const seedProducts = () => {
    products.forEach((product) => {
        addDoc(collection(db, "productos"), product);
    });
    console.log("productos añadidos");
};
// seedProducts();
