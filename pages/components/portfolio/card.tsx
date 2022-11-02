export default function PortfolioCard() {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<h1>Portfolio</h1>
            <div>
                <div className="card-body">
                    <h2 className="card-title">App Name1</h2>
                    <p>Todo write description.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            Go to repository
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-body">
                    <h2 className="card-title">App Name2</h2>
                    <p>Todo write description.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                            Go to repository
                        </button>
                    </div>
                </div>
            </div>
		</div>
	);
}

