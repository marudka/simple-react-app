import React from "react";
import { expect } from 'chai';
import { shallow } from "enzyme";

import App from "./App";

describe("App component", () => {
    it("renders itself", () => {
        const component = shallow(<App />);
        expect(component.node).not.to.be.equal(null);

        component.unmount();
    });

    it("renders h2", () => {
        const component = shallow(<App />);
        const title = component.find("h2");
        expect(title).to.have.length(1);

        component.unmount();
    })
});
