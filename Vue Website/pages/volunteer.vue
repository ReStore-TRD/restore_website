<template>
  <Form />
  <!-- <div class="form-container">
    <div class="row g-0">
      <div class="col-6 col-md-2 text-end">
        <img
          src="https://www.jotform.com/uploads/Kabiri_Dorsa/form_files/logo_profilepic.631b06f7a594f9.40871792.png"
          alt=""
          width="100"
          class="header-logo-left"
        />
      </div>
      <div class="col-sm-6 col-md-10 pl-3">
        <h1 class="form-header">Want to become a volunteer at ReStore?</h1>
        <p class="form-subheader">Connect With Us!</p>
      </div>
    </div>
    <hr />
    <div>
      <b-form inline @submit.stop.prevent>
        <div class="row g-0">
          <div class="col-sm-6 col-md-6">
            <div class="form-field">
              <label for="feedback-user" class="form-label">First Name *</label>
              <b-form-input
                v-model="suserName"
                :state="snameValidation"
                id="feedback-user"
              ></b-form-input>
              <b-form-invalid-feedback :state="snameValidation">
                This Field is Required
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="snameValidation">
              </b-form-valid-feedback>
            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="form-field">
              <label for="feedback-user" class="form-label">Last Name *</label>
              <b-form-input
                v-model="userName"
                :state="nameValidation"
                id="feedback-user"
              ></b-form-input>
              <b-form-invalid-feedback :state="nameValidation">
                This Field is Required
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="nameValidation">
              </b-form-valid-feedback>
            </div>
          </div>
          <div class="pt-3">
            <div class="form-field-total">
              <label for="feedback-user" class="form-label">Email *</label>
              <b-form-input
                v-model="email"
                :state="emailValidation"
                id="feedback-user"
              ></b-form-input>
              <b-form-invalid-feedback :state="emailValidation">
                This Field is Required
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="emailValidation">
              </b-form-valid-feedback>
            </div>
          </div>
        </div>
        <div class="pt-4"> -->
          <!-- <div class="form-radio">
            <b-form-group
              class="form-label"
              label="Have you volunteered with ReStore before? *"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="A"
                > &nbsp; Yes</b-form-radio
              >
              <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                > &nbsp; No</b-form-radio
              >
            </b-form-group>

            <hr />
          </div> -->
          
          <!-- <div  class="form-radio">

            <b-label class="form-label">
               Have you volunteered with ReStore before? * </b-label>
    <b-form-radio-group v-model="value"  :options="radioOptions" :state="state" name="radio-validation"  >
      <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback> -->
      <!-- <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback> -->
    <!-- </b-form-radio-group>
  </div>
        </div>
      </b-form>
    </div>
    <div class="form-checkbox pt-5">
      <h3>
        The following section is about your desired voluntary activities at
        ReStore. If you're already a volunteer, you may fill out this if you
        want to explore any of the other groups too,
      </h3>
      <br />
      <h3>otherwise, you may ignore it.</h3>
      <div class="row g-0 pt-5">
        <div class="col-sm-6 col-md-6">
          <b-form-group class="form-label"
            label="Which of the following projects are you interested in? *"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox
              v-for="option in options"
              v-model="selected"
              :key="option.value"
              :value="option.value"
              :aria-describedby="ariaDescribedby"
              name="flavour-3a"
              class="form-checkbox-name"
            >
            &nbsp; {{ option.text }}
            </b-form-checkbox>
          </b-form-group>
        </div>
        <div class="col-sm-6 col-md-6 pl-3">
          <b-form-group class="pt-5" label="" v-slot="{ ariaDescribedby }">
            <b-form-checkbox
              v-for="option in extraOptions"
              v-model="selected"
              :key="option.value"
              :value="option.value"
              :aria-describedby="ariaDescribedby"
              name="flavour-3a"
              class="checkbox-text"
            >
            &nbsp;{{ option.text }}
            </b-form-checkbox>
          </b-form-group>
        </div>
      </div>
      <div class="p-5">
        <label class="form-label">Additional notes or new ideas?</label>

        <b-form-textarea id="textarea-rows" placeholder="Type here" rows="10"></b-form-textarea>
        <h4 class="text-center pt-5">
          Upon submitting this form, you'll be processed (this may take a couple
          of days), and then you will be added to our mailing list. The mailing
          list is our primary way of informing volunteers of all happenings at
          ReStore.
        </h4>
      </div>
    </div>
    <hr />
    <div class="text-center p-5">
      <b-button type="submit" variant="primary" class="form-button"  >Submit</b-button>
    </div>
  </div> -->
</template>

<script>
import Form from '../components/Form/Form.vue';
export default {
  components: { Form }
//   data() {
//     return {
//       userName: "",
//       email:"",
//       suserName: "",
//       selected: [], // Must be an array reference!
//       options: [
//         {
//           text: "ReSykkel (Repairing bikes)",
//           value: "ReSykkel (Repairing bikes)",
//         },
//         {
//           text: "ReBuild (Repairing furniture)",
//           value: "ReBuild (Repairing furniture)",
//         },
//         {
//           text: "ReStore (Organizing donations, planing the opening days)",
//           value: "ReStore (Organizing donations, planing the opening days)",
//         },
//         {
//           text: "ReHome Designing volunteers area in ReStore buildings ",
//           value: "ReHome Designing volunteers area in ReStore buildings",
//         },
//         { text: "Social Media Committee", value: "Social Media Committee" },
//         { text: "Drivers ", value: "Drivers " },
//       ],
//       extraOptions: [
//         {
//           text: "Website and App development ",
//           value: "Website and App development",
//         },
//         {
//           text: "ReFood (Finding solutions for decreasing food waste)",
//           value: "ReFood (Finding solutions for decreasing food waste)",
//         },
//         { text: "RePlant", value: "RePlant" },
//         { text: "ReSearch ", value: "ReSearch " },
//         { text: "Social Events Committee", value: "Social Events Committee" },
//       ],
//       value: null,
//         radioOptions: [
//           { text: 'Yes', value: 'first' },
//           { text: 'No', value: 'second' },
          
//         ]
//     };
//   },
//   computed: {
//     nameValidation() {
//       return this.userName.length > 4 && this.userName.length < 13;
//     },
//     snameValidation(){
//       return this.suserName.length > 4 && this.suserName.length < 13;
//     },
//     emailValidation() {
//       return this.email.length > 4 && this.email.length < 13;
//     },
//     state() {
//         return Boolean(this.value);
//   },
// },
};
</script>

<style></style>
