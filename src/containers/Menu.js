import React from "react";


const Menu = ({difficulty, updateDifficulty}) => {

    const incrementDifficulty = () => {
        const newDifficulty = difficulty + 1;
        updateDifficulty(newDifficulty)
    }

    const decrementDifficulty = () => {
        if(difficulty===1){
            return alert("how's that gonna work buddy?")
        }
        const newDifficulty = difficulty - 1;
        updateDifficulty(newDifficulty)
    }

    return (
        <div>
            this is the menu


            <p>
                <button onClick={decrementDifficulty}>-</button>
                difficulty = {difficulty}
                <button onClick={incrementDifficulty}>+</button>
            </p>
        </div>
    )
}


export default Menu;