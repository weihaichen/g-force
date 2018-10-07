'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('undergraduates', [
     {
       name: "somedude",
       year: new Date(Date.UTC(2015,9,1)),
       majro: "whocares",
       eog: new Date(),
       createdAt: new Date(),
       updatedAt: new Date()
     }], {} )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('undergraduates',null,{});
  }
};
