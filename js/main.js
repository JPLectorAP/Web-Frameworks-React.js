const friends = [
    { name: "Rachel", quote: "No uterus, no opinion!", img: "https://static.wikia.nocookie.net/friends/images/f/f7/Rachel_Greene.jpg" },
    { name: "Ross", quote: "We were on a break!", img: "https://static.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg" },
    { name: "Monica", quote: "Welcome to the real world, it sucks!", img: "https://static.wikia.nocookie.net/friends/images/2/2f/Monica_Geller-Bing_Season_10.png" },
    { name: "Chandler", quote: "Could I BE wearing any more clothes?", img: "https://static.wikia.nocookie.net/friends/images/1/10/10chandler.png" },
    { name: "Joey", quote: "How you doin'?", img: "https://static.wikia.nocookie.net/friends/images/4/43/10joey.png" },
    { name: "Phoebe", quote: "Smelly cat, smelly cat, what are they feeding you?", img: "https://static.wikia.nocookie.net/friends/images/5/57/10phoebe.png" }
];

function displayFriends(friendsList) {
    const container = document.getElementById("friends-list");
    container.innerHTML = "";
    friendsList.forEach(friend => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${friend.img}" alt="${friend.name}" class="image">
            <h2>${friend.name}</h2>
            <p>"${friend.quote}"</p>
        `;
        card.onclick = () => alert(`${friend.name} says: \"${friend.quote}\"`);
        container.appendChild(card);
    });
}

function handleInputChange(event) {
    console.log("Search input changed:", event.target.value);
}

document.addEventListener("DOMContentLoaded", () => {
    displayFriends(friends);
});