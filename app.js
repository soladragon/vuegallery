const cards = [
  {
    title: 'Tomato Forest', 
    img: 'img/tomforest.jpg',
    type: 'HTML5, CSS3',
    info: 'Blog template created using a combination of Grid and Flexbox.',
    link: 'https://soladragon.github.io/tomatoforest/',
    flipped: false,
  },
  {
    title: 'VeggieBlog', 
    img: 'img/veggieblog.jpg',
    type: 'HTML5, CSS3',
    info: 'Blog template created using a combination of Grid and Flexbox.',
    link: 'https://soladragon.github.io/veggieblog/index.html',
    flipped: false,
  },
  {
    title: 'Tomato Forest', 
    img: 'img/projectbs.jpg',
    type: 'HTML5, CSS3',
    info: 'Blog template created using a combination of Grid and Flexbox.',
    link: 'https://soladragon.github.io/tomatoforest/',
    flipped: false,
  },
  {
    title: 'Tomato Forest', 
    img: 'img/solaart.jpg',
    type: 'HTML5, CSS3',
    info: 'Blog template created using a combination of Grid and Flexbox.',
    link: 'https://soladragon.github.io/tomatoforest/',
    flipped: false,
  },
  {
    title: 'Tomato Forest', 
    img: 'img/jcm.jpg',
    type: 'HTML5, CSS3',
    info: 'Blog template created using a combination of Grid and Flexbox.',
    link: 'https://soladragon.github.io/tomatoforest/',
    flipped: false,
  },
  {
    title: 'Port', 
    img: 'img/port.jpg',
    type: 'HTML5, CSS3',
    info: 'Blog template created using a combination of Grid and Flexbox.',
    link: 'https://soladragon.github.io/veggieblog/index.html',
    flipped: false,
  },
]; 

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '', 
    error: false
  },
  methods: {
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
  }
});