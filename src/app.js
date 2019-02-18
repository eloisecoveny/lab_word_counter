import Vue from "vue";
import wordCount from './models/WordCounter.js';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      textInput: "",
      result: null,
    },
    methods: {
      wordCount: function(){
        this.result = wordCount(this.textInput);
      }
    }
  });
});
