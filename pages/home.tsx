import Content from "./components/content";

export default function Home() {
  return (
		<div className="flex flex-col min-h-screen">
			<div>
				<h1 className="normal-case text-xl">Home</h1>
				<Content></Content>
			</div>
		</div>
  );
}

