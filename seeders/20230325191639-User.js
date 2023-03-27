'use strict';
const bcrypt = require("bcrypt");
const password1 = "123";
const password6 = bcrypt.hashSync(password1, 10);


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users',
  [
   {id: 1, name: "alvaro", surname: "bernabe", nif: "F12345687", birth_date: "2023-02-22 00:00:00", direction: "c/ programador", email: "alvaro@alvaro.com", phone: "+34676006825", password: password6, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
   {id: 2, name: "laura", surname: "sanchez", nif: "J48591097", birth_date: "2023-02-22 00:00:00", direction: "c/ sin rumbo", email: "laura@laura.com", phone: "+34676006825", password: password6, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
   {id: 3, name: "alyna", surname: "nastas", nif: "H48759036", birth_date: "2023-02-22 00:00:00", direction: "c/ cordura", email: "alyna@alyna.com", phone: "+34676006825", password: password6, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
   {id: 4, name: "jose ramon", surname: "rosario", nif: "H48759056", birth_date: "2023-02-22 00:00:00", direction: "c/ locura", email: "ramon@ramon.com", phone: "+34676006825", password: password6, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
],
{});
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
