let technology = new Vue({
  el: "#technology",
  data: {
    technology: {
      front: [{
        icon: "fab fa-ethereum",
        about: `
          My foray into blockchain began in September of 2021.
          I had been familiar with the space as a consumer for about a year before exploring the bones of the ecosystem.
          Given my background in Web 2 my blockchain experience has been thrilling and an absolute treat.
          While the ecosystem is coming into its own, I'm enjoying growing with it.
        `,
        name: "Blockchain",
        exp: "Since 2021"
      }, {
        icon: "fab fa-html5",
        about: `
          My first exposure with HTML was in Junior High and I've been working with it ever since.
          JavaScript was always in my pocket for client-side later adopting node for server-side code.
          I am familiar with ES6, Webpack, TypeScript, npm, etc.
          Always tinkering and looking out for the next tech to learn and the web community doesn't disappoint.
        `,
        name: "WEB",
        exp: "Since 2007"
      }, {
        icon: "fab fa-sass",
        about: `
          CSS and visuals are always something that grabbed my attention - I like aesthetic things.
          With the "recent" evolutions of CSS into LESS and SASS, I've always had fun pushing the envelope with my creative creations.
          I enjoy writing stylesheets and rely on frameworks as little as possible; usually for the more generic tasks like grid layouts etc.
          Most often I write SCSS because I prefer the structure while heavily leveraging the 7-1 and BEM patterns.
        `,
        name: "SASS",
        exp: "Since 2011"
      }, {
        icon: "fab fa-vuejs",
        about: `
          Vue is my favorite of the major frontend frameworks/libraries.
          While Vue is my most practiced, I do have professional experience with Angular and personal experience with React - providing me with a solid abstract understanding of modern front end technologies.
        `,
        name: "Vue",
        exp: "Since 2018"
      }, {
        icon: "fa fa-code",
        about: "Other Tech I'm familiar with: PHP, Angular, React, Redux, Vuex, TypeScript, ASP, JSF, Ruby on Rails, (Python's) Django, Apache, Nginx, Passport, Mocha/Chai, Loopback, Knex, TypeORM, Mongoose... To name a few.",
        name: "Misc",
        exp: "Since 2011"
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
