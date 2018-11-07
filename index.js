
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date;
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let totalYears = (endDate - this.startDate) (365 * 24 * 60 * 60 * 1000);
    return parseInst(totalYears); 
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this. 
  }
}