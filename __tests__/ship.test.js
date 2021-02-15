const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");
//  import Ship from "../src/ship.js";


describe("Ship constructor", () => {
  
  it("checks if the ship constructor is defined", () => {
    const dover = new Port("Dover");
    const itinerary = new Itinerary([dover])
    const ship =new Ship (itinerary) 
    expect(ship).toBeDefined();
  });
  it("cheks if ship is an Object", () => {
    const dover = new Port("Dover");
    const itinerary = new Itinerary([dover])
    const ship =new Ship (itinerary)
    expect(ship).toBeInstanceOf(Object);
  });
  it("has a starting point",() => {
    const dover = new Port("Dover");
    const itinerary = new Itinerary([dover])
    const ship =new Ship (itinerary)
    expect(ship.currentPort).toEqual(dover);
  });
});

describe("Set sail", () => {
  it("checks if the ship constructor is defined", () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port])
    ship = new Ship (itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(port);
  });
});

describe("Dock", () => {
  it("can dock at any port",()=>{
    const dover = new Port("Dover")
    const calais = new Port("Calais")
    const itinerary = new Itinerary([dover, calais])
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(calais);

  });
});




