import { useState } from "react";
import iconArrowRight from "./assets/images/icon-arrow-right.svg";
import iconCheck from "./assets/images/icon-check.svg";
import iconCopy from "./assets/images/icon-copy.svg";
import CheckBox from "./CheckBox";

export default function PasswordGenerator() {
	const [includeUppercase, setIncludeUppercase] = useState(false);
	const [includeLowercase, setIncludeLowercase] = useState(false);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSymbols, setIncludeSymbols] = useState(false);

	return (
		<div className="text-preset-4 text-grey-200 w-full">
			<header className="text-grey-600 flex items-center justify-center">
				<h1>Password Generator</h1>
			</header>
			<main className="mt-4 flex flex-col gap-4">
				<section className="bg-grey-800 text-preset-2 flex items-center justify-between p-4">
					<h1 className="text-grey-700">P4$5W0rD!</h1>
					<img src={iconCopy} className="h-[20px] w-[17.5px]" />
				</section>
				<section className="bg-grey-800 flex flex-col gap-8 p-4">
					<section>
						<div className="flex items-center justify-between">
							<label>Character Length</label>
							<span className="text-preset-2 text-green-200">0</span>
						</div>
						<input
							type="range"
							className="custom-slider-thumb mt-2 w-full accent-green-200"
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
						<div className="flex h-[28px] w-[68px] justify-between">
							<span className="border-grey-200 box-border w-[10px] border-2"></span>
							<span className="border-grey-200 box-border w-[10px] border-2"></span>
							<span className="border-grey-200 box-border w-[10px] border-2"></span>
							<span className="border-grey-200 box-border w-[10px] border-2"></span>
						</div>
					</section>
					<button
						type="button"
						className="text-grey-800 flex h-14 items-center justify-center gap-4 bg-green-200"
					>
						GENERATE
						<img src={iconArrowRight} className="h-[12px] w-[11.11px]" />
					</button>
				</section>
			</main>
		</div>
	);
}
