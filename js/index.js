function createAppliance(){
    var appliancesBody = document.getElementById("appliancesBody");

    appliancesBody.innerHTML += `
    <div class="appliances-item">
        <div class="appliances-item-image">
            <i class="fas fa-2x fa-${document.getElementById("icon").value}"></i>
        </div>
        <div class="appliances-item-title">
            <h6>${document.getElementById("name").value}</h6>
        </div>
    </div>
    `
    ;
}