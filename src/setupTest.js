import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Bars from './components/bars'

describe("Bars", () => {
    it("renders", () => {
      shallow(<Bars />)
    });
  });

  Enzyme.configure({ adapter: new Adapter() });