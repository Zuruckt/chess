import classNames from "classnames";
import "./App.css";

function App() {
	const x = Array(64).fill(1);
	let row = 0;
	return (
		<main className="App">
			<div className="board">
				{x.map((_, index) => {
					if ((index + 1) % 8 === 1) {
						row = row + 1;
					}
					let isEven = (index + row) % 2 === 0;
					return (
						<div
							key={`square${index}`}
							className={classNames("square", {
								"square-black": !isEven,
								"square-white": isEven,
							})}
						></div>
					);
				})}
			</div>
		</main>
	);
}

export default App;
