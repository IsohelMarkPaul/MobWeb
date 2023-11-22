import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomeFunctional from './component/WelcomeFunction';
import WelcomeClass from './component/WelcomeClass';
import Comment from './component/Comment';
import sum from './component/sum';
import withdraw from './component/Withdraw';
import './App.css';
import NumberListFinal from './component/NumberListFinal';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <WelcomeFunctional name="Sara" />;
const elements = <WelcomeClass name="labati" />;
root.render(element);


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};


const numbers = [1, 2, 3, 4, 5];
class App extends Component {
  render() {
    const total = sum(1, 2);
    const account = { total: 1000 };
    const newTotal = withdraw(account, 200); // Example usage of withdraw

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);

    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );

    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    return (
      <>
        {element}
        {elements}

        <div>
          <WelcomeFunctional name="Sara" />
          <WelcomeFunctional name="Cahal" />
          <WelcomeFunctional name="Edite" />
          <WelcomeClass name="Your Name" />
          <WelcomeClass name="Another Name" />
          <WelcomeClass name="Yet Another Name" />
        </div>

        <div className='p-2 bg-violet-300'>
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />
        </div>

        <div>
          <p>Sum: {total}</p>
          <p>New Total: {newTotal}</p>
        </div>

        <div>
          <NumberList numbers={numbers} />
        </div>

        <div>
          <NumberListFinal numbers={numbers} />
        </div>
      </>
    );
  }
}

export default App;
