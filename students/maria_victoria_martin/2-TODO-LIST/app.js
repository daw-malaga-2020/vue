const app = new Vue({
  el: '#app',
  data: {
    toDo: [{
      id: 1,
      text:"salir a la calle",
      done: false
    }],
    newTask: ""
  },
  computed: {
    pendingTask(){
      return this.toDo.filter((item)=> item.done===false)
    },
    doneTask(){
      return this.toDo.filter((item)=> item.done===true)
    }
  },
  methods:{
    addTask() {
      let timestamp = new Date().getTime();
      this.toDo.unshift({
          id: timestamp,
          text: this.newTask,
          done: false
      })
      this.newTask = ""
    }
  }
})
