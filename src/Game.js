import { React, useState } from "react";

const Game = () => {

    const [difficulty, setDifficulty] = useState(8)
    const updateDifficulty = (newDifficulty) => { setDifficulty(newDifficulty) };

    const [gameInProgress, setGameInProgress] = useState(false);
    const updateGameInProgress = (newState) => { setGameInProgress(newState) }

    const [safecode, setSafecode] = useState([]);
    const updateSafecode = (newSafeCode) => { setSafecode(newSafeCode) };

    const generateSafeCode = () => {

        const newSafecode = [];

        for (let i = 1; i <= difficulty; i++) {
            newSafecode.push(i)
        }

        // stackoverflow! take the wheel!
        let currentIndex = newSafecode.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [newSafecode[currentIndex], newSafecode[randomIndex]] = [
                newSafecode[randomIndex], newSafecode[currentIndex]];
        }

        return updateSafecode(newSafecode);
    }

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
        <>

            <div>
                <button onClick={generateSafeCode}>NEW SAFECODE</button>
                safecode = {safecode}
            </div>

            <div>
                gameInProgress = {gameInProgress}
            </div>

            <div>
                <button onClick={decrementDifficulty}>-</button>difficulty = {difficulty}<button onClick={incrementDifficulty}>+</button>
            </div>

        </>

    )
}

export default Game;