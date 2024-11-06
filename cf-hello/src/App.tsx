import { useState } from "react";

function App() {
	const [resp, setResp] = useState("");

	const fetchApi = async () => {
		const res = await fetch("./api");
		const text = await res.text();
		setResp(text);
	};

	return (
		<>
			<h1>Request api</h1>
			<div>
				<button type="button" onClick={fetchApi}>
					Request
				</button>
				<p>{resp}</p>
			</div>
		</>
	);
}

export default App;
