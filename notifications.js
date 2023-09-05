const markRead = document.querySelector("#mark-read");

markRead.addEventListener("click", markAsRead);

function markAsRead() {
    const numNew = document.querySelector(".new-notifications");
    const newNotifications = document.querySelectorAll(".new");
    
    numNew.textContent = "0";
    for (const notification of newNotifications) {
        notification.classList.remove("new");
    }
}