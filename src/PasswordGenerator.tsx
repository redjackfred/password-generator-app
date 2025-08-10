import { useEffect, useState } from "react";
import iconArrowRight from "./assets/images/icon-arrow-right.svg";
import iconCopy from "./assets/images/icon-copy.svg";
import CheckBox from "./CheckBox";
import SignalButton from "./SignalButton";

// Assuming you've replaced the 'generate-password' library with a browser-compatible one
// For example, if you were to use 'nanoid' or a similar library
import { customAlphabet } from "nanoid";

export default function PasswordGenerator() {
	const [includeUppercase, setIncludeUppercase] = useState(true);
	const [includeLowercase, setIncludeLowercase] = useState(true);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSymbols, setIncludeSymbols] = useState(false);
	const [characterNumbers, setCharacterNumbers] = useState(10);
	const [strength, setStrength] = useState(0);
	const [password, setPassword] = useState("");

	function copyPassword() {
		if (password) {
			navigator.clipboard
				.writeText(password)
				.then(() => {
					console.log("Password copied to clipboard!");
				})
				.catch((err) => {
					console.error("Failed to copy password: ", err);
				});
		}
	}

	function generatePassword() {
		const characters = [];

		if (includeUppercase) {
			characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		}
		if (includeLowercase) {
			characters.push("abcdefghijklmnopqrstuvwxyz");
		}
		if (includeNumbers) {
			characters.push("0123456789");
		}
		if (includeSymbols) {
			characters.push('!@#$%^&*()_+-=[]{}|;:",.<>?/~`');
		}

		// Handle the case where no character types are selected.
		if (characters.length === 0) {
			alert("Please select at least one character type.");
			return;
		}

		const alphabet = characters.join("");
		const nanoid = customAlphabet(alphabet, characterNumbers);

		const generatedPassword = nanoid();
		setPassword(generatedPassword);
	}

	useEffect(() => {
		copyPassword();
	}, [password]);

	return (
		<div className="text-preset-4 text-grey-200 w-full md:w-[540px]">
			<header className="text-grey-600 flex items-center justify-center">
				<h1>Password Generator</h1>
			</header>
			<main className="mt-4 flex flex-col gap-4">
				<section className="bg-grey-800 text-preset-2 flex items-center justify-between p-4">
					{password === "" ? (
						<h1 className="text-grey-700">P4$5W0rD!</h1>
					) : (
						<h1 className="text-white">{password}</h1>
					)}
					<div className="text-preset-3 flex items-center gap-2 text-green-200">
						{password === "" ? "" : "COPIED"}
						<img src={iconCopy} className="h-[20px] w-[17.5px]" />
					</div>
				</section>
				<section className="bg-grey-800 flex flex-col gap-8 p-4">
					<section>
						<div className="flex items-center justify-between">
							<label>Character Length</label>
							<span className="text-preset-2 text-green-200">
								{characterNumbers}
							</span>
						</div>
						<input
							type="range"
							className="custom-slider-thumb mt-2 w-full accent-green-200"
							onChange={(e) => setCharacterNumbers(Number(e.target.value))}
							min="0"
							max="20"
						/>
					</section>
					<section className="flex flex-col gap-4">
						<div className="flex items-center gap-4">
							<CheckBox
								handleClick={() => setIncludeLowercase(!includeLowercase)}
								isChecked={includeLowercase}
							/>
							<label>Include Uppercase Letters</label>
						</div>
						<div className="flex items-center gap-4">
							<CheckBox
								handleClick={() => setIncludeUppercase(!includeUppercase)}
								isChecked={includeUppercase}
							/>
							<label>Include Lowercase Letters</label>
						</div>
						<div className="flex items-center gap-4">
							<CheckBox
								handleClick={() => setIncludeNumbers(!includeNumbers)}
								isChecked={includeNumbers}
							/>
							<label>Include Numbers</label>
						</div>
						<div className="flex items-center gap-4">
							<CheckBox
								handleClick={() => setIncludeSymbols(!includeSymbols)}
								isChecked={includeSymbols}
							/>
							<label>Include Symbols</label>
						</div>
					</section>
					<section className="bg-grey-850 text-grey-600 flex items-center justify-between px-4 py-[14px]">
						<p>STRENGTH</p>
						<div className="flex items-center gap-4 text-white">
							{strength < 2 ? "WEAK" : strength < 4 ? "MEDIUM" : "STRONG"}
							<div className="flex h-[28px] w-[68px] justify-between">
								{Array.from({ length: 4 }).map((_, index) => {
									if (index < strength) {
										return (
											<SignalButton
												isOn={true}
												handleClick={() => setStrength(index + 1)}
												key={index}
											/>
										);
									} else {
										return (
											<SignalButton
												isOn={false}
												handleClick={() => setStrength(index + 1)}
												key={index}
											/>
										);
									}
								})}
							</div>
						</div>
					</section>
					<button
						type="button"
						className="text-grey-800 flex h-14 items-center justify-center gap-4 bg-green-200"
						onClick={generatePassword}
					>
						GENERATE
						<img src={iconArrowRight} className="h-[12px] w-[11.11px]" />
					</button>
				</section>
			</main>
		</div>
	);
}
