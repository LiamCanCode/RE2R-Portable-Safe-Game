import { React, useState } from "react";
import GameScreen from "./GameScreen";
import Menu from "./Menu";

const Game = () => {

    const [difficulty, setDifficulty] = useState(8)
    const updateDifficulty = (newDifficulty) => { setDifficulty(newDifficulty) };

    const [gameState, setGameState] = useState("Title Menu");
    const updateGameState = (newState) => { setGameState(newState) }

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

    return (


        <>

            <GameScreen/>
            <Menu difficulty={difficulty} updateDifficulty={updateDifficulty}/>


            <p>
                <button onClick={generateSafeCode}>NEW SAFECODE</button>
                safecode = {safecode}
            </p>

            <p>
                gameState = {gameState}
            </p>


        </>

    )
}

export default Game;