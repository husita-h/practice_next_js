import Link from "next/link";

export default function Top() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">This is husita-hhp.</p>
					<button className="btn btn-primary">
						<Link href="/home">Next Page</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
