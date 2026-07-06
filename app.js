//Creation de la variable de selection
let choix;
let nbElements = 3;

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
         /* zone.appendChild(choix);  */
            zone.replaceWith(choix);
            alert("Déplacement récu !");
            nbElements--;
            if(nbElements === 0){
              document.getElementById("titre2").textContent = "Vous avez 0 colis à déplacer !";
              document.getElementById("titre2").style.color = "red";
            }
        }else{
            alert("Le poid ne correspond pas à la place !");
        }
    });
    
});