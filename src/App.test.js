import React from "react";
import { render } from "@testing-library/react";
import App from "./App"
import Board from "./Board";


it("renders without crashing", function() {
    render(<Board />);
});