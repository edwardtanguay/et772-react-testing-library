import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
	return (
		<>
			<p>This is on the app component.</p>
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</>
	);
}

export default App;
