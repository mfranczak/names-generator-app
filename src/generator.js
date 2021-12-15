const faker = require('faker');
const timer = ms => new Promise( res => setTimeout(res, ms));

module.exports = {
    getName: async function ()  {        
        await timer(getRandomInt(250));
        return faker.name.firstName();
    },
    getNames: async function () {
        const names = [];
        let n = getRandomInt(12);
    
        while (n--) {
            names.push(await this.getName())
        }
        
        return names;
    }
}


const getRandomInt = function(max) {
    return Math.floor(Math.random() * max);
}
