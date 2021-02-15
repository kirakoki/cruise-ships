class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
  }
  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }
  dock() {
    const itineraryArr = this.itinerary.ports
    const previousPortIndex = itineraryArr.indexOf(this.previousPort)
    this.currentPort= this.itinerary.ports[previousPortIndex+1];
  }
};



module.exports = Ship
// export default Ship;
