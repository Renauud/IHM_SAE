class Connexion {
    constructor() {
        this.init();
    }
    init() {
        APIpageWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr', '3306', 'zell6u_IHM', 'zell6u', '', 'utf8');
    }
}
// eslint-disable-next-line no-var
let connexion = new Connexion;
export { connexion };
//# sourceMappingURL=connexion.js.map