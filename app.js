//Creation de l avariable de selection
let choix;

document.querySelectorAll(".boite").forEach(boite=>{
    boite.addEventListener("dragstart",()=>{
        choix = boite;
    });
});

// Les Zones
document.querySelectorAll(".zone").forEach(zone=>{

    zone.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });

    zone.addEventListener("drop",(e)=>{
        e.preventDefault();

        // Vérification
        if(choix.dataset.zone === zone.id){
            zone.appendChild(choix);
            alert("Déplacement récu !");
        }else{
            alert("Le poid ne correspond pas à la place !");
        }
    });

});