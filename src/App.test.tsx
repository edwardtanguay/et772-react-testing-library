import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

describe("App", () => {
	it("finds relevant text", () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
		screen.getByText(/component/i);
	});
});


describe("Header", () => {
	it("finds relevant text", () => {
		render(
			<BrowserRouter>
			<Header/>
			</BrowserRouter>
		);
		screen.getByText(/info site/i);
	});
});

describe("Nav", () => {
	it("finds relevant text", () => {
		render(
			<BrowserRouter>
			<Nav/>
			</BrowserRouter>
		);
		screen.getByText(/nav333/i);
	});
});

