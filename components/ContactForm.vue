<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ invalid }" tag="form">
      <form class="w-screen md:w-full bg-white p-8 md:p-16 shadow-md block" id="contact-form" @submit.prevent="sendEmail" ref="form">
        <h2 class="text-2xl text-left pb-2">Contact Us</h2>
        <svg
          width="62px"
          height="3px"
          class="mb-4"
          viewBox="0 0 62 3"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="IE_mobile_SEM"
              transform="translate(-62.000000, -1120.000000)"
              fill="#4BBFE1"
            >
              <g id="SEO" transform="translate(16.000000, 1030.000000)">
                <g
                  id="Group-2"
                  transform="translate(14.000000, 14.000000)"
                >
                  <polygon
                    id="Rectangle"
                    points="32 76 73.5535038 76 94 76 94 79 32 79"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <!-- company name -->
        <div class="field mb-2 w-full">
          <label class="uppercase text-xs" for="">Company Name*</label><br>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="Company Name"
          >
            <input
              type="text"
              placeholder="Eg. Google"
              class="input px-2 py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full is-invalid"
              name="companyName"
              v-model.trim="formData.companyName"
            />
            <span class="text-red-600">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <!-- name -->
        <div class="field mb-2 w-full">
          <label class="uppercase text-xs pb-4" for="">Name*</label><br>
          <div class="flex flex-direction-row w-full mt-2">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="First Name"
              class="w-full"
            >
              <input 
                type="text"
                placeholder="Eg. Anne"
                class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full mr-2 is-invalid"
                name="firstName"
                v-model.trim="formData.firstName"
              /><br class="hidden" />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="Last Name"
              class="w-full"
            >
              <input 
                type="text"
                placeholder="Eg. Smith"
                class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full is-invalid"
                name="lastName"
                v-model.trim="formData.lastName"
              /><br class="hidden" />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <!-- <span v-if="!$v.firstName.required || !$v.lastName.required" class="error-message">First and last name is required</span> -->
        </div>
        <!-- title -->
        <div class="field mb-2 w-full">
          <label class="uppercase text-xs" for="">Title*</label><br>
          <div class="flex flex-direction-column md:flex-direction-row">
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="Title"
            >
              <input 
                type="text"
                placeholder="Eg. Brand Manager"
                class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full is-invalid"
                name="title"
                v-model.trim="formData.title"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <!-- Email -->
        <div class="field mb-2">
          <label class="uppercase text-xs" for="">Email*</label><br>
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="Email"
            >
              <input 
                type="email"
                placeholder="Eg. email123@gmail.com"
                class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full is-invalid"
                name="email"
                v-model.trim="formData.email"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
        <!-- Phone -->
        <div class="field mb-2">
          <label class="uppercase text-xs" for="">Phone</label><br>
              <input 
                type="text"
                placeholder="Eg. 800-000-0000"
                class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full" 
                name="phone"
                v-model="formData.phone"
              />
        </div>
        <!-- Preferred contact -->
        <div class="field mb-2 w-full">
          <label class="label uppercase text-xs">Preferred method of contact</label><br>
          <div class="flex flex-direction-row w-full mt-2">
            <label class="container uppercase text-xs pt-1">Phone
              <input
                type="checkbox"
                class="input shadow"
                checked="checked"
                name="prefPhone"
                v-model="formData.prefPhone"
              />
              <span class="checkmark"></span>
            </label>
            <label class="container uppercase text-xs pt-1">Email
              <input 
                type="checkbox"
                class="input shadow"
                checked="checked"
                name="prefEmail"
                v-model="formData.prefEmail"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <!-- Industry -->
        <div class="field mb-2 w-full">
          <label class="uppercase text-xs" for="">Industry*</label><br>
            <ValidationProvider
              rules="required"
              v-slot="{ errors }"
              name="Industry"
            >
              <input 
                type="text"
                placeholder="Eg. Healthcare"
                class="input px-2 py-2 my-2 input py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full is-invalid"
                name="industry"
                v-model.trim="formData.industry"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
        <div class="field mb-2 w-full">
        <!-- Description -->
          <label class="uppercase text-xs" for="">Short description of what you're looking for</label><br>
          <textarea
            name="description"
            rows="4"
            cols="50"
            v-model="formData.description"
            placeholder="Eg. Looking to build out an application for a medical device..."
            class="input px-2 py-2 my-2 rounded-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:border-transparent shadow w-full" 
          />
        </div>

        <!-- submit button -->
        <div class="field flex justify-center">
          <button
            type="submit"
            class="button p-3 rounded-lg text-white uppercase w-100 my-4 text-lg bg-ie-blue hover:bg-ie-dark-blue focus:outline-none focus:ring-2 focus:ring-ie-dark-blue focus:ring-opacity-50"
            :disabled="invalid"
          >
            Submit
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default {
  name: 'ContactForm',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data: () => ({
    formData: {
      companyName: '',
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      phone: '',
      prefPhone: '',
      prefEmail: '',
      industry: '',
      description: '',
      errors: '',
      submitted: false,
    }
  }),
  methods: {
    sendEmail() {
      emailjs.sendForm(
        'service_4abj34h',
        'template_hmv49er',
        this.$refs.form,
        'user_XypTG85C21ZDwxNlgJIlj'
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          this.resetData();
      }, (error) => {
          console.log('FAILED...', error.text);
      });
    },
    resetData() {
      this.companyName = '';
      this.firstName = '';
      this.lastName = '';
      this.title = '';
      this.email = '';
      this.phone = '';
      this.prefPhone = '';
      this.prefEmail = '';
      this.industry = '';
      this.description = '';
    },
  }
};
</script>

<style scoped>
  .container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 23px;
  width: 23px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #4BBFE1
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 8px;
  top: 4px;
  width: 7px;
  height: 13px;
  border: 1px solid white;
  border-width: 0 3px 3px 0;
  border-radius: 10%;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>