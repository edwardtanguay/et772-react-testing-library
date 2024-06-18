import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
	it("finds text in component", () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
		screen.getByText(/component/i);
	});
});

