import toDo from '../assets/toDoList.jpg';
import tetris from '../assets/tetrisGame.png';
import meroPiso from '../assets/meroPiso.png';
import memoryGame from '../assets/memoryGame.png';

const projectsList = [
  {
    id: 1,
    name: 'To Do List',
    image: toDo,
    githubLink: 'https://github.com/Vikash9932/todo-list-source',
    deployLink: 'https://todo-lisst.herokuapp.com',
    techStack: ['React', 'Redux'],
  },
  {
    id: 2,
    name: 'Tetris Game',
    image: tetris,
    githubLink: 'https://github.com/Vikash9932/tetris-game',
    deployLink: 'https://tetris-game-two.vercel.app',
    techStack: ['JavaScript'],
  },
  {
    id: 3,
    name: 'Finance Tracker',
    image: meroPiso,
    githubLink: 'https://github.com/Vikash9932/finance-tracker',
    deployLink: 'https://meropiso.web.app/',
    techStack: ['React', 'Firebase'],
  },
  {
    id: 4,
    name: 'Memory Game',
    image: memoryGame,
    githubLink: 'https://github.com/Vikash9932/memory-game',
    deployLink: 'https://memory-game-vikash9932.vercel.app',
    techStack: ['React'],
  },
];

export default projectsList;
