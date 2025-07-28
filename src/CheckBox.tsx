import iconCheck from "./assets/images/icon-check.svg";

export default function CheckBox({
	handleClick,
	isChecked,
}: {
	handleClick: () => void;
	isChecked: boolean;
}) {
	return (
		<button type="button" className="h-5 w-5" onClick={handleClick}>
			{isChecked ? (
				<div className="flex h-full items-center justify-center bg-green-200">
					<img src={iconCheck} className="h-[10px] w-[12px]" />
				</div>
			) : (
				<div className="box-border h-full w-full border-2 border-white"></div>
			)}
		</button>
	);
}
