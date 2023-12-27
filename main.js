

let successMsg = '<i class="fa fa-check" aria-hidden="true"></i> Successfully submitted';
let errorMsg = '<i class="fa fa-times" aria-hidden="true"></i> Error found';
let invalidMsg = '<i class="fa fa-exclamation" aria-hidden="true"></i> Invalid input';



function showMsg(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toastmsg");
  toast.innerHTML = msg;
  let toasting = document.getElementById("toasting");
  toasting.appendChild(toast);
  if (msg.includes("Error")) {
    toast.classList.add("error");
    console.log("completed here");
  }
  else if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 5100);
}