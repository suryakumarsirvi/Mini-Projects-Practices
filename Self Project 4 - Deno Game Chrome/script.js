const dropArea = document.getElementById("drop-area");
const fileElem = document.getElementById("fileElem");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const downloadNormal = document.getElementById("downloadNormal");
const loader = document.getElementById("loader");
import {getApiKey} from './src/api/removeBg.js';


let currentFile = null;

dropArea.addEventListener("click", () => fileElem.click());


fileElem.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
});

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", () => dropArea.classList.remove("dragover"));

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    console.log(e)
    if (file) handleFile(file);
});

async function handleFile(file) {
    if (!file.type.startsWith("image/")) return alert("Please upload an image!");
    currentFile = file;

    // Show loader
    loader.classList.remove("hidden");
    canvas.classList.remove("show");
    downloadNormal.disabled = true;

    // Quick preview
    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.classList.add("show");
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);

    // Remove BG using remove.bg API
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {
        const res = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            headers: {
                "X-Api-Key": getApiKey()
            },
            body: formData
        });

        if (!res.ok) throw new Error("Background removal failed");
        const blob = await res.blob();
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            loader.classList.add("hidden");
            downloadNormal.disabled = false;
        };
        img.src = URL.createObjectURL(blob);
        
    } catch (err) {
        loader.classList.add("hidden");
        alert(err.message);
    }
}

// Download Normal
downloadNormal.addEventListener("click", (e) => {
    console.log(e)
    const link = document.createElement("a");
    link.download = "bg-removed.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});
