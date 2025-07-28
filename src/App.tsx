import "./App.css";
import PasswordGenerator from "./PasswordGenerator";

function App() {
	return (
		<div className="bg-grey-950 flex min-h-screen flex-col items-center justify-center">
			<div className="flex w-full flex-col items-center justify-center px-4">
				<PasswordGenerator />
			</div>
		</div>
	);
}

export default App;
