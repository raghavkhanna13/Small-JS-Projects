
const successButton = document.querySelector("#success");
const errorButton = document.querySelector("#error");
const invalidButton = document.querySelector("#invalid");

let toastBox = document.querySelector("#toastBox");

let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted!`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please resolve the Error!`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!`;


successButton.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.classList.add("toast", "success");
    toast.innerHTML = successMsg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 6000);
});
errorButton.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.classList.add("toast", "error");
    toast.innerHTML = errorMsg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 6000);
});
invalidButton.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.classList.add("toast", "invalid");
    toast.innerHTML = invalidMsg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 6000);
});
