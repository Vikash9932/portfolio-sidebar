import { useEffect, useState } from 'react';
import './Home.css';

const designation = [
  'Programmer',
  'Front-End Web Dev',
  'React Developer',
  'Learner',
];

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState('|');
  const [masterIndex, setMasterIndex] = useState(1);
  const [word, setWord] = useState(designation[0]);
  const [splitText, setSplitText] = useState(designation[0].split(''));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (index < word.length) {
      setTimeout(() => {
        setText(text + splitText[index]);
        setIndex(index + 1);
      }, 100);
    } else if (index === word.length) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 550);
    } else if (index > word.length && index <= word.length * 2) {
      setTimeout(() => {
        setText(text.slice(0, -1));
        setIndex(index + 1);
      }, 100);
    } else {
      if (masterIndex < designation.length) {
        setWord(designation[masterIndex]);
        setText('');
        setIndex(0);
        setMasterIndex(masterIndex + 1);
        setSplitText(designation[masterIndex].split(''));
      } else {
        setWord(designation[0]);
        setText('');
        setIndex(0);
        setMasterIndex(1);
        setSplitText(designation[0].split(''));
      }
    }
    //eslint-disable-next-line
  }, [index, ready]);

  useEffect(() => {
    setTimeout(() => {
      if (cursor === '|') setCursor('');
      else setCursor('|');
    }, 200);
  }, [cursor]);

  return (
    <div className='home'>
      <div className='home--name'>Vikash Kumar</div>
      <div className='home--designation'>
        I'm a {ready && <span className='home--text'>{text}</span>}
        <span className='home--cursor'>{cursor}</span>
      </div>
    </div>
  );
};

export default Home;
