const todo = new Vue({
  el: "#todo-app",
  data: {
    list: [
      'Programmare',
      'Fare la spesa',
      'Pagare le bollette'
    ],
    newElement: '',
  },
  methods: {
    // remove the element with click on X
    removeElement(index) {
      this.list.splice(index,1);
    },
    // add an element if the input tag is not empty
    addElement() {
      if(this.newElement.trim() !== '') {
        this.list.push(this.newElement.trim());
      }
    }
  }
});