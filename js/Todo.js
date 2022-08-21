const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },

  methods: {
    //タスク追加メソッド
    addItem() {
      // alert();
      //input欄に何も入力されていなければ処理を実行しない
      if (this.newItem == '') return;

      //1つのタスクとなる配列(todos)を用意
      let todo = {
        item: this.newItem, //inputに入力されたタスク
        isDone: false       //タスクの状態
      };
      //タスク(todo)をタスクリスト(todos)に追加する
      this.todos.push(todo);
      this.newItem = '';  //input欄は空にする
      this.$refs.ref.focus();
      // localStorage.setItem('todo-list', JSON.stringify(this.todos));
      // console.log(this.todos);
    },

    //タスク消去メソッド
    deleteItem(index) {
      // alert(index);
      this.todos.splice(index, 1);
    },

    // mounted() {
    //   if (localStorage.hasOwnProperty('todo-list')) {
    //     this.todos = JSON.parse(
    //       localStorage.getItem('todo-list')
    //     );
    //   }
    //   this.addItem();
    // }
  },
});