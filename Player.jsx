import { useState } from "react"



export default function Player({initialName, symbol, isActivePlayer}) {
    const[playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);
    function handleClickPlayer() {
        setIsEditing((editing) => !editing); // this is the best form of using React JS because if the current states or the latest state depends on the previous state
       // setIsEditing(!isEditing) ; this is also same but not advisable to use as it might use the value from the useState 
    }
    function handleChange(event) {
        setPlayerName(event.target.value);

    }
    let editplayerName = <span  className="player-name">{playerName}</span>;

    if (isEditing) {
        editplayerName = (
        <input type="text" required value = {playerName} onChange = {handleChange} />
        ); 
    }
    return (
        <li className={isActivePlayer ? 'active' : undefined}>
        <span className="player">
            {editplayerName}
            <span className="player-symbol">{symbol}</span>  
        </span>
        <button onClick={handleClickPlayer}>{isEditing ? 'Save': 'Edit'}</button>
      </li>

    )
}