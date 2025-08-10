export default function SignalButton({
	isOn,
	handleClick,
}: {
	isOn: boolean;
	handleClick: () => void;
}) {
	if (isOn) {
		return (
			<span
				className="box-border w-[10px] border-2 border-none bg-amber-500"
				onClick={handleClick}
			></span>
		);
	} else {
		return (
			<span
				className="border-grey-200 box-border w-[10px] border-2"
				onClick={handleClick}
			></span>
		);
	}
}
