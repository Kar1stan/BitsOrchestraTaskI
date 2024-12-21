import { defineConfig } from 'cypress'; 
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    },
    baseUrl: 'https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail&ddm=1&dsh=S1865783018:1734776623279191&flowEntry=SignUp&flowName=GlifWebSignIn&service=mail&TL=AE--Llzyq_DQlOCmAnwCIDw7ekVQy5j-QRhOftkdC8C6hrIJF2eUtlu_cx5r5PTD',
    specPattern: '**/*.spec.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
  },
});
