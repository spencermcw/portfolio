console.log('appjs loaded')

let technology = new Vue({
  el: "#technology",
  data: {
    technology: {
      front: [{
        icon: "fab fa-html5",
        about: "My first experience with HTML was in Junior High and my love has been flourishing since.",
        name: "HTML",
        exp: "~ 8 years"
      }, {
        icon: "fab fa-js",
        about: "JavaScript is a language I only recently began seriously working with though my experience with it also extends back to my early years. I am also familiar and comfortable with ES6 syntax, TypeScript, and NPM.",
        name: "JS",
        exp: "5 years"
      }, {
        icon: "fab fa-sass",
        about: "Most often I write SCSS because I like the structure but I heavily employ (7-1) SASS in all of my projects.",
        name: "SASS",
        exp: "2 year"
      }, {
        icon: "fab fa-vuejs",
        about: "Vue is currently my favorite of the major frontend frameworks/libraries. While Vue is my most practiced, I do have experience with Angular and React providing an abstract understanding of modern front end frameworks/libraries.",
        name: "Vue",
        exp: "2 years"
      }, {
        icon: "fab fa-node",
        about: "Node has been my go-to tool for web servers. Most of my Node work has been with Express, however, here are some libraries I've worked with: Passport, Mocha/Chai, Loopback, Knex, TypeORM, Mongoose.",
        name: "Node",
        exp: "3 years"
      }, {
        icon: "fa fa-code",
        about: "PHP, Angular, React, Redux, Vuex, TypeScript, ASP, JSF, Ruby on Rails, (Python's) Django",
        name: "Other",
        exp: "~ 3 years (cumulative)"
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
      console.log(tech)
      this.selected = tech
    }
  }
})
