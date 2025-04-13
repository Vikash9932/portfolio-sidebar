const toDo = require('../assets/toDoList.jpg');
const tetrisGame = require('../assets/tetrisGame.png');
const meroPisoGame = require('../assets/meroPiso.png');
const memoryGameImg = require('../assets/memoryGame.png');

const projectsList = [
  {
    id: 1,
    name: 'To Do List',
    image: toDo,
    githubLink: 'https://github.com/Vikash9932/todo-list',
    deployLink: 'https://todo-list-vikash9932.vercel.app',
    techStack: ['React', 'Redux'],
  },
  {
    id: 2,
    name: 'Tetris Game',
    image: tetrisGame,
    githubLink: 'https://github.com/Vikash9932/tetris-game',
    deployLink: 'https://tetris-game-two.vercel.app',
    techStack: ['JavaScript'],
  },
  {
    id: 3,
    name: 'Finance Tracker',
    image: meroPisoGame,
    githubLink: 'https://github.com/Vikash9932/finance-tracker',
    deployLink: 'https://meropiso.web.app/',
    techStack: ['React', 'Firebase'],
  },
  {
    id: 4,
    name: 'Memory Game',
    image: memoryGameImg,
    githubLink: 'https://github.com/Vikash9932/memory-game',
    deployLink: 'https://memory-game-vikash9932.vercel.app',
    techStack: ['React'],
  },
];

export default projectsList;
