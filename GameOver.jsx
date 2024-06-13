export default function GameOver({winner, onRestart}) {
    return <div id="game-over">
<h2>KUDOOOSSSS MATEEEE!!!!!</h2>
{winner && <p>{winner}won!</p>}
{!winner && <p>Whatttt A Draw</p>}
<button onClick={onRestart}>Rematch</button>
    </div>
}