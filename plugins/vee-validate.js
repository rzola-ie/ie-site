// import Vue from "vue";
// import { ValidationProvider, ValidationObserver } from "vee-validate";
// import { extend } from "vee-validate";
// import { required, integer } from "vee-validate/dist/rules";
// import { configure } from 'vee-validate';

// configure({
//   classes: {
//     valid: 'is-valid',
//     invalid: 'is-invalid',
//     dirty: ['is-dirty', 'is-dirty'],
//   }
// })


// Vue.component('ValidationProvider', ValidationProvider);
// Vue.component('ValidationObserver', ValidationObserver);

// // const companyName = {
// //   message () {
// //     return `The company name is required`
// //   },
// // }
// // const firstName = {
// //   message () {
// //     return `The first name is required`
// //   },
// // }
// // const lastName = {
// //   message () {
// //     return `The last name is required`
// //   },
// // }
// // const title = {
// //   message () {
// //     return `The title is required`
// //   },
// // }
// // const email = {
// //   message () {
// //     return `The email is required`
// //   },
// // }
// // const industry = {
// //   message () {
// //     return `The industry is required`
// //   },
// // }

// extend('required', required);
// extend('integer', integer);
// // extend('companyName', companyName);
// // extend('firstName', firstName);
// // extend('lastName', lastName);
// // extend('title', title);
// // extend('email', email);
// // extend('industry', industry);


// // const dict = {
// //   custom: {
// //     companyName: {
// //       required: () => 'Your company name is empty'
// //     },
// //     firstName: {
// //       required: () => 'Your first name is empty'
// //     },
// //     lastName: {
// //       required: () => 'Your last name is empty'
// //     },
// //     title: {
// //       required: () => 'Your title is empty'
// //     },
// //     email: {
// //       required: 'Your email is empty'
// //     },
// //     industry: {
// //       required: 'Your industry is empty'
// //     },
// //   }
// // };

// // Validator.localize('en', dict);
