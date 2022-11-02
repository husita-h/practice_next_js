import Link from "next/link";

export default function Menu() {
	return (
		<div className="normal-case text-xl">
			<li>
				<Link href="/home">Home</Link>
			</li>
			<li>
				<Link href="/portfolio">Portfolio</Link>
			</li>
			<li>
				<Link href="/about">About</Link>
			</li>
			<li>
				<Link href="/">Top</Link>
			</li>
		</div>
	);
}
