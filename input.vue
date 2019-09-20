<template>
  <div>
    <input
      v-model="email"
      v-validate="'required|email'"
      type="text"
      :name="name"
      :placeholder="placeholder"
      @change="validateInput"
    >
    <span>{{ errors.first('test-input') }}</span>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      email: '',
      name: 'test-input',
    };
  },
  methods: {
    validateInput() {
      this.$validator.validateAll();
    },
  },
};
</script>

