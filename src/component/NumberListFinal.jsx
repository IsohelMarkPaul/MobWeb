import React from 'react'

function NumberListFinal(props) {
    const numberNames = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five'];
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <li key={number.toString()}>
            {index + 1}. {numberNames[number]}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    )
}

export default NumberListFinal