import "./App.css";
import PasswordGenerator from "./PasswordGenerator";

function App() {
	return (
		<div className="bg-grey-950 min-h-screen">
			<div className="flex h-full w-full flex-col items-center px-4 py-[65px] md:py-[133px]">
				<PasswordGenerator />
			</div>
		</div>
	);
}

export default App;
