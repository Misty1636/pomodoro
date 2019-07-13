<template lang="pug">
  .clockWrap
    .clockMain(:class="{break : status === 'breaking'}")
      .clockMain__content
        .clockMain__addMisson.addMisson
          input.addMisson__input(type="text" placeholder="add a new mission…" :class="{break : status === 'breaking'}" v-model="newtodo" @keyup.13="addTodo")
          button.material-icons(:class="{break : status === 'breaking'}" @click="addTodo()") add
        .clockMain__doing
          input.clockMain__doing__checkbox.checkboxCircle(type="checkbox")
          .clockMain__doing__content
            .clockMain__doing__title {{nowtodo.thing}}
            .clockMain__doing__circles(:class="{break : status === 'breaking'}")
              span
              span
              span
        .clockMain__time(:class="{break : status === 'breaking'}") {{times}}
        .clockMain__tasks
          .task
            input.task__checkbox.checkboxCircle(type="checkbox" :checked="!defalutTodo.status")
            .task__title {{ defalutTodo.thing }}
            .material-icons play_circle_outline
          .task(v-for = "items,index in waitTodo" :key="items.id"  v-if="index < 2")
            input.task__checkbox.checkboxCircle(type="checkbox" v-model="items.status")
            .task__title {{items.thing}}
            .material-icons play_circle_outline
          //- .task
          //-   input.task__checkbox.checkboxCircle(type="checkbox")
          //-   .task__title the second thing to do today
          //-   .material-icons play_circle_outline
          //- .task
          //-   input.task__checkbox.checkboxCircle(type="checkbox")
          //-   .task__title the second thing to do today
          //-   .material-icons play_circle_outline
          .clockMain__more(:class="{break : status === 'breaking'}")
            a(href="#") more
    .clockMenu
      .clockMenu__content
        ul.clockMenu__menu
          li
            router-link(to="list").material-icons list
          li
            router-link(to="analytics").material-icons insert_chart
          li
            router-link(to="ringtones").material-icons library_music
        span.clockMenu__logoTitle POMODORO
      .clockMenu__Player(:class="{break : status === 'breaking'}")
        svg(width="100%" height="100%")
          circle(class="svgCircle" cx="321" cy="321" r="315" stroke="transparent" fill="transparent" stroke-width="20"
          :class="{working: isPlay &&  status === 'work',breaking : isPlay &&  status === 'breaking'}" :stroke-dashoffset="lines")
        .clockMenu__Player__content(:class="{working: isPlay &&  status === 'work',breaking : isPlay &&  status === 'breaking',break : status === 'breaking'}")
        .clockMenu__Player__startbtn(:class="{isOverhiden : isPlay, break : status === 'breaking'}" @click="plays()")
        .clockMenu__Player__plusebtn(:class="{isOverhiden : !isPlay, breaking : isPlay &&  status === 'breaking'}" @click="plays()")
          .material-icons pause
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      workTime: 25,
      breakTime: 5,
      playTime: 0,
      isPlay: false,
      status: 'work',
      lines: 0,
      timing: '',
      todos: [],
      defalutTodo: {
        id: 111,
        thing: 'THE FIRST THING TO DO TODAY',
        status: false,
      },
      newtodo: '',
    };
  },
  methods: {
    plays() {
      const vm = this;
      vm.isPlay = !vm.isPlay;
      if (vm.status === 'work') vm.clockWork();
      if (vm.status === 'breaking') vm.clockBreak();
      console.log(this.todos.filter(item => item.status === false)[0]);
    },
    clockWork() {
      const vm = this;
      // vm.timing = setInterval(() => {
      //   if (vm.isPlay && vm.playTime > 0) {
      //     vm.playTime -= 1;
      //     vm.lines += 2000 / vm.workTime;
      //     console.log(new Date().getTime(), 'setInterval');
      //   } else {
      //     clearInterval(vm.timing);
      //   }

      //   if (vm.playTime === 0) {
      //     vm.isPlay = false;
      //     clearInterval(vm.timing);
      //     vm.playTime = vm.breakTime;
      //     vm.status = 'breaking';
      //   }
      // }, 1000);
      vm.timing = setTimeout(() => {
        if (vm.isPlay && vm.playTime > 0) {
          vm.playTime -= 1 * 0.02;
          vm.lines += 2000 / vm.workTime * 0.02;
          vm.clockWork();
        }
        if (vm.playTime <= 0) {
          vm.isPlay = false;
          vm.playTime = vm.breakTime;
          vm.status = 'breaking';
          vm.lines = 0;
        }
      }, 20);

      // vm.timing = requestAnimationFrame(() => {
      //   if (vm.isPlay && vm.playTime > 0) {
      //     vm.playTime -= 1 * 0.0166;
      //     vm.lines += 2000 / vm.workTime * 0.0166;
      //     vm.clockWork();
      //     console.log(new Date().getTime(), 'requestAnimationFrame');
      //   } else {
      //     vm.timing = '';
      //   }

      //   if (vm.playTime <= 0) {
      //     vm.isPlay = false;
      //     clearInterval(vm.timing);
      //     vm.playTime = vm.breakTime;
      //     vm.status = 'breaking';
      //   }
      // });
    },
    clockBreak() {
      const vm = this;
      vm.timing = setTimeout(() => {
        if (vm.isPlay && vm.playTime > 0) {
          vm.playTime -= 1 * 0.02;
          vm.lines += 2000 / vm.breakTime * 0.02;
          vm.clockBreak();
        }
        if (vm.playTime <= 0) {
          vm.isPlay = false;
          vm.playTime = vm.workTime;
          vm.status = 'work';
          vm.lines = 0;
        }
      }, 20);
      //   const breaking = setInterval(() => {
      //     if (vm.isPlay && vm.playTime > 0) {
      //       vm.playTime -= 1;
      //       vm.lines += 2000 / vm.breakTime;
      //     } else {
      //       clearInterval(breaking);
      //     }

    //     if (vm.playTime === 0) {
    //       vm.isPlay = false;
    //       clearInterval(breaking);
    //       vm.playTime = vm.workTime;
    //       vm.status = 'work';
    //     }
    //   }, 1000);
    },
    addTodo() {
      const todovalue = this.newtodo.trim();
      if (!todovalue) return;
      const nowtime = new Date().getTime();
      this.todos.push(
        {
          id: nowtime,
          thing: todovalue,
          status: false,
        },
      );
      this.newtodo = '';
    },
  },
  computed: {
    times() {
      let m = 0;
      let s = 0;
      const vm = this;
      m = Math.floor(vm.playTime / 60);
      s = Math.ceil(vm.playTime % 60);
      if (s < 10) {
        s = `0${s}`;
      }

      if (m < 10) {
        m = `0${m}`;
      }

      if (s === 60) {
        m += 1;
        s = '00';
        if (m < 10) {
          m = '';
          m = `0${m + 1}`;
        }
      }
      return `${m}:${s}`;
    },
    nowtodo() {
      if (this.todos.length < 1 || this.todos[0].ststus === true) return this.defalutTodo;
      return this.todos.filter(item => item.status === false)[0] || this.defalutTodo;
    },
    waitTodo() {
      return this.todos.filter(item => item.status === false);
    },
  },
  mounted() {
    const vm = this;
    vm.playTime = vm.workTime;
  },
};
</script>
