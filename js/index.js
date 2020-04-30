var appliancesBody = document.getElementById("appliancesBody");



$("#createApplianceBtn").on("click", (name, icon) => {
    var name = document.getElementById("name").value;
    var icon = document.getElementById("icon").value;

    switch (icon) {
        case "tv":
            icon = "tv";
            break;

        default:
            break;
    }

    appliancesBody.innerHTML += `
    <div class="appliances-item">
        <div class="appliances-item-image">
            <i class="fas fa-2x fa-${icon}"></i>
        </div>
        <div class="appliances-item-title">
            <h6>${name}</h6>
        </div>
    </div>
    `;
});