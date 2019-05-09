console.log('appjs loaded')

let technology = new Vue({
  el: "#technology",
  data: {
    technology: {
      front: [{
        icon: "fab fa-html5",
        about: "My first exposure with HTML was in Junior High and I've been working with it ever since.",
        name: "HTML",
        exp: "~ 8 years"
      }, {
        icon: "fab fa-js",
        about: "JavaScript was always in my pocket for client-side but I only recently adopted node. I am familiar with ES6, Webpack, TypeScript, npm, etc. I'm always looking for the next thing to learn and this community doesn't disappoint.",
        name: "JS",
        exp: "5 years"
      }, {
        icon: "fab fa-sass",
        about: "Most often I write SCSS because I prefer the structure but I heavily employ the 7-1 pattern in all of my projects.",
        name: "SASS",
        exp: "2 year"
      }, {
        icon: "fab fa-vuejs",
        about: "Vue is (currently) my favorite of the major frontend frameworks/libraries. While Vue is my most practiced, I do have experience with Angular and React providing an abstract understanding of modern front end libraries.",
        name: "Vue",
        exp: "2 years"
      }, {
        icon: "fab fa-node",
        about: "Ever since I picked it up, node has been my go-to tool for web servers. Most of my Node work is in Express. Other Libraries: Passport, Mocha/Chai, Loopback, Knex, TypeORM, Mongoose.",
        name: "Node",
        exp: "3 years"
      }, {
        icon: "fa fa-code",
        about: "PHP, Angular, React, Redux, Vuex, TypeScript, ASP, JSF, Ruby on Rails, (Python's) Django, Apache, Nginx",
        name: "Other",
        exp: "~ 3 years"
      }],
    },
    selected: 0
  },
  computed: {
    selectedTech() {
      return this.technology.front[this.selected]
    }
  },
  methods: {
    select(tech) {
      this.selected = tech
    }
  }
})
