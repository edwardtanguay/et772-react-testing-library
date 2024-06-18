import { describe, it, expect } from "vitest";
import { render, screen} from "@testing-library/react";
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
	it("finds necessary elements", () => {
		render(
			<BrowserRouter>
			<Nav/>
			</BrowserRouter>
		);

		// this just throws an error if not found
		screen.getByText(/welcome/i);

		// this returns an element
		const elem = screen.queryByText(/nav333/i);
		expect(elem).not.toBeNull();
		
		// this returns an array
		const elems = screen.queryAllByText(/info/i);
		expect(elems.length).toBe(1);
		
	});
});

