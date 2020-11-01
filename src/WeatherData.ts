/**
 * Class representing the current weather data.
 */
export class WeatherData {
  timestamp: Date;
  indoorTemperature: number | undefined;
  outdoorTemperature: number | undefined;

  constructor() {
    this.timestamp = new Date();
    this.indoorTemperature = undefined;
    this.outdoorTemperature = undefined;
  }
}
