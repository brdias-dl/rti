var iconclicked = '';
var iconsArray = {
    "Bell": "fa-bell",
    "Play": "fa-play",
    "Random": "fa-random",
    "Undo": "fa-undo",
    "Recycle": "fa-recycle",
    "Backward": "fa-backward",
    "Eject": "fa-eject",
    "Expand": "fa-expand",
    "Fast Backward": "fa-fast-backward",
    "Fast Forward": "fa-fast-forward",
    "Forward": "fa-forward",
    "Headphone": "fa-headphones",
    "Music": "fa-music",
    "Pause": "fa-pause",
    "Stop": "fa-stop",
    "Television": "fa-tv",
    "Video": "fa-video",
    "Volume Down": "fa-volume-down",
    "Volume Off": "fa-volume-off",
    "Volume Up": "fa-volume-up",
    "Car": "fa-car",
    "Charging Station": "fa-charging-station",
    "Apple": "fa-apple-alt",
    "Cloud Sun": "fa-cloud-sun",
    "Mountain": "fa-mountain",
    "Tree": "fa-tree",
    "Wind": "fa-wind",
    "Blender": "fa-blender",
    "Coffee": "fa-coffee",
    "Envelope": "fa-envelope",
    "Glasses": "fa-glasses",
    "Sticky Note": "fa-sticky-note",
    "Phone": "fa-phone-alt",
    "Baby": "fa-baby",
    "Baby Carriage": "fa-baby",
    "Bath": "fa-bath",
    "Birthday Cake": "fa-birthday-cake",
    "Gamepad": "fa-gamepad",
    "Mitten": "fa-mitten",
    "T-shirt": "fa-tshirt",
    "Bug": "fa-bug",
    "Fire Extinguisher": "fa-fire-extinguisher",
    "Desktop": "fa-desktop",
    "Laptop": "fa-laptop",
    "Mobile": "fa-mobile-alt",
    "Plug": "fa-plug",
    "Power": "fa-power-off",
    "Tablet": "fa-tablet-alt",
    "Toolbox": "fa-toolbox",
    "Dollar": "fa-dollar-sign",
    "Euro": "fa-euro-sign",
    "Hryvnia": "fa-hryvnia",
    "Money Bill": "fa-money-bill",
    "Pound": "fa-pound-sign",
    "Ruble": "fa-ruble-sign",
    "Rupee": "fa-rupee-sign",
    "Shekel": "fa-shekel-sign",
    "Tenge": "fa-tenge",
    "Won": "fa-won-sign",
    "Yen": "fa-yen-sign",
    "Calendar": "fa-calendar-alt",
    "Clock": "fa-clock",
    "Eye": "fa-eye",
    "Palette": "fa-palette",
    "Music": "fa-music",
    "Fan": "fa-fan",
    "Lightbulb": "fa-lightbulb",
    "Solar Panel": "fa-solar-panel",
    "Sun": "fa-sun",
    "Book": "fa-book",
    "Wheelchair": "fa-wheelchair",
    "Wifi": "fa-wifi",
    "Shower": "fa-shower",
    "Bed": "fa-bed",
    "Door Closed": "fa-door-closed",
    "Door Open": "fa-door-open"
}

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

$(document).ready(() => {
    var iconsappliances = document.getElementById("iconsappliances");
    for (var name in iconsArray) {
        iconsappliances.innerHTML += `
        <button class="dropdown-item appliance-icon" type="button">
            <i class="fas ${iconsArray[name]}"></i>
            &nbsp;&nbsp;${name}
        </button>
        `;    
    }

    
$(".appliance-icon").click(function(event) {
    if (event.target.children[0].classList[1].match("^fa-")) {
        iconclicked = event.target.children[0].classList[1];
    }
});
});
