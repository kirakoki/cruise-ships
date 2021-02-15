const Port = require("../src/port.js");
//  import Ship from "../src/ship.js";

describe("Port constructor", () => {
    it("checks if the port constructor is an Object", () => {
       const port = new Port("Dover");
       expect(port).toBeInstanceOf(Object);
    });
    it("checks if the port's name is recorded", () => {
        const port = new Port("Dover");
        expect(port.name).toBe("Dover");
     });
  });