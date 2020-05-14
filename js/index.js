var iconclicked = '';

document.getElementById("createApplianceBtn").onclick = function(name) {
    var appliancesBody = document.getElementById("appliancesBody");
    name = document.getElementById("appliancename-input").value;

    appliancesBody.innerHTML += `
    <div class="appliances-item">
        <div class="appliances-item-image">
            <i class="fas fa-2x ${iconclicked}"></i>
        </div>
        <div class="appliances-item-title">
            <h6>${name}</h6>
        </div>
    </div>
    `;
};

document.getElementById("createPreviewBtn").onclick = function(name) {
    if(iconclicked === ''){
        alert("Deve escolher um icon");
        return;
    }
    var appliancesPreviewBody = document.getElementById("previewappliance");
    name = document.getElementById("appliancename-input").value;


    appliancesPreviewBody.innerHTML += `
    <div class="appliances-item">
        <div class="appliances-item-image">
            <i class="fas fa-2x ${iconclicked}"></i>
        </div>
        <div class="appliances-item-title">
            <h6>${name}</h6>
        </div>
    </div>
    `;
};

$(".appliance-icon").click(function(event) {
    if (event.target.children[0].classList[1].match("^fa-")) {
        iconclicked = event.target.children[0].classList[1];
    }
});

$("#loginpress").click(() => {
    if(!$("#loginusername").value == 0 || !$("#loginpassword").value == 0){
        alert("Tem que introduzir algo nos campos");
        return;
    }

    console.log("pressed");

    $("#loginpage").slideToggle(500);
    setTimeout(function(){ $("#homepage").slideToggle(500) }, 500);
});

