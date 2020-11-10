const todo = new Vue({
  el: "#todo-app",
  data: {
    list: [
      'Programmare',
      'Fare la spesa',
      'Pagare le bollette'
    ],
  },
  methods: {
    removeElement(index) {
      this.list.splice(index,1);
    }
  }
});