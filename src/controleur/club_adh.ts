// dans les outils de développement, désactiver le cache pour forcer le chargement des fichiers js et css 
// sur Firefox : cocher la case "Désactiver le cache"
// test pour ne définir que la classe et l'objet une seule fois sinon redéclaration ==> erreur
if (vueNomApplication === undefined)
{
  // définition de la classe 
  class ClubAdh {
    constructor() {
    }
    init():void {
        APIpageWeb.show('nom premier fichier.html', 'appli');  // affichage page
    }
  }
  
  var vueNomApplication = new ClubAdh; 
}

vueNomApplication.init();
// définition des événements