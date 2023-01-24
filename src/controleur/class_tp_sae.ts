import { LesAbonnements } from "../modele/data_abonnement";
import { UnAbonnement } from "../modele/data_abonnement";
import { UnTheme } from "../modele/data_theme";
import { LesThemes } from "../modele/data_theme";
import { LesThemesByAbonnement } from "../modele/data_theme";
import { UnThemeByAbonnement } from "../modele/data_theme";
import { LesAdherents } from "../modele/data_adherent";
import { LesCsps } from "../modele/data_csp";

  class VueTpSae {
    init(form) {
      this._inde
      this._form = form;
      this.form.div_page_abonnement.hidden = true;
    }
    get form() { return this._form; }

  }
  
  let vueTpSaeClass = new VueTpSae;
  export { vueTpSaeClass };
// vueNomApplication.init();
// définition des événements