import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";

// Smoke test 

it("renders Board without crashing", function() {
    render(<Board />)
});