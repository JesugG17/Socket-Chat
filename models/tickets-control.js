const path = require('path');
const fs = require('fs');

class TicketsControl {

    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.ultimos4 = []

        this.init();

    }

    get toJson() {
        return {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        };
    }


    init() {
        const { ultimo, hoy, tickets, ultimos4 } = require('../db/data.json');
        if (hoy === this.hoy) {
            this.ultimo = ultimo;
            this.tickets = tickets;
            this.ultimos4 = ultimos4;
        } else {
            this.guardarDB();
        }


    }

    guardarDB() {
        const dbPath = path.join(__dirname, '../db/data.json');
        fs.writeFileSync(dbPath, JSON.stringify(this.toJson));
    }

}

module.exports = TicketsControl;