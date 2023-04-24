<template>
  <b-container fluid>
    <b-row fluid>
      <b-col md="4" class="form-image fluid">
        <div class="header-text">
          <h4 >
            Want to become a volunteer at ReStore? Connect With Us!
          </h4>
        </div>
      </b-col>
      <b-col md="8" class="pt-5">
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row>
              <b-col md="6">
                <b-form-group
                  id="input-group-1"
                  label="First Name *"
                  label-for="input-1"
                  class="pb-3"
                >
                  <b-form-input
                    v-model="form.f_name"
                    :state="f_name_Validation"
                    id="input-1"
                    placeholder="Enter First Name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Last Name *"
                  label-for="input-2"
                  class="pb-3"
                >
                  <b-form-input
                    v-model="form.l_name"
                    :state="l_name_Validation"
                    id="input-2"
                    placeholder="Enter Last Name"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-3"
                  label="Email address *"
                  label-for="input-1"
                  class="pb-3"
                >
                  <b-form-input
                    v-model="form.email"
                    :state="email_Validation"
                    type="email"
                    id="input-3"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>

                <div class="form-radio">
                  <b-label class="form-label1">
                    Have you volunteered with ReStore before? *
                  </b-label>
                  <b-form-radio-group
                    v-model="form.value"
                    :options="form.radioOptions"
                    :state="state"
                    type="radio"
                    name="radio-validation"
                    class="pb-3 pt-2 radioOptions"
                    required
                  >
                    <b-form-invalid-feedback :state="state"
                      >Please select one</b-form-invalid-feedback
                    >
                  </b-form-radio-group>
                </div>
              </b-col>
              <b-col md="6">
                <div class="pb-3">
                  <h4 class="form-text-checkbox">
                    The following section is about your desired voluntary
                    activities at ReStore. If you're already a volunteer, you
                    may fill out this if you want to explore any of the other
                    groups too, otherwise, you may ignore it.
                  </h4>
                </div>
                <b-form-group class="form-label" v-slot="{ ariaDescribedby }">
                  <b-label class="form-label1  pb-4">
                    Have you volunteered with ReStore before? *
                  </b-label>
                  <b-form-checkbox
                    v-for="option in form.options"
                    v-model="form.checked"
                    :key="option.value"
                    :state="check_state"
                    :value="option.value"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-3a"
                    class="form-checkbox-name"
                  >
                    &nbsp; {{ option.text }}
                  </b-form-checkbox>
                  <b-form-invalid-feedback :state="check_state"
                    >Please select one</b-form-invalid-feedback
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <div>
              <label class="form-label3">Additional notes or new ideas?</label>

              <b-form-textarea
                id="textarea-rows"
                placeholder="Type here"
                rows="10"
              ></b-form-textarea>
              <h4 class="text-center pt-5">
                Upon submitting this form, you'll be processed (this may take a
                couple of days), and then you will be added to our mailing list.
                The mailing list is our primary way of informing volunteers of
                all happenings at ReStore.
              </h4>
            </div>
            <div class="d-flex justify-content-center">
              <div class="p-2"><b-button type="submit"  class="btn-btn">Submit</b-button></div>
              <div class="p-2">   <b-button type="reset" class="btn-btn-reset">Reset</b-button></div>
            
          
          </div>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        f_name: "",
        l_name: "",
        food: null,
        checked: [],
        value: null,
        radioOptions: [
          { text: "Yes", value: "first" },
          { text: "No", value: "second" },
        ],

        options: [
          {
            text: "ReSykkel (Repairing bikes)",
            value: "ReSykkel (Repairing bikes)",
          },
          {
            text: "ReBuild (Repairing furniture)",
            value: "ReBuild (Repairing furniture)",
          },
          {
            text: "ReStore (Organizing donations, planing the opening days)",
            value: "ReStore (Organizing donations, planing the opening days)",
          },
          {
            text: "ReHome Designing volunteers area in ReStore buildings ",
            value: "ReHome Designing volunteers area in ReStore buildings",
          },
          { text: "Social Media Committee", value: "Social Media Committee" },
          { text: "Drivers ", value: "Drivers " },
          {
            text: "Website and App development ",
            value: "Website and App development",
          },
          {
            text: "ReFood (Finding solutions for decreasing food waste)",
            value: "ReFood (Finding solutions for decreasing food waste)",
          },
          { text: "RePlant", value: "RePlant" },
          { text: "ReSearch ", value: "ReSearch " },
          { text: "Social Events Committee", value: "Social Events Committee" },
        ],
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.f_name = "";
      this.form.l_name = "";

      this.form.checked = null;
      this.form.value = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  computed: {
    f_name_Validation() {
      return this.form.f_name.length > 4 && this.form.f_name.length < 13;
    },
    l_name_Validation() {
      return this.form.l_name.length > 4 && this.form.l_name.length < 13;
    },
    email_Validation() {
      return this.form.email.length > 4 && this.form.email.length < 40;
    },
    state() {
      return Boolean(this.form.value);
    },
    check_state() {
      return Boolean(this.form.checked);
    },
  },
};
</script>

<style>
.container {
  box-sizing: border-box;
}
</style>
