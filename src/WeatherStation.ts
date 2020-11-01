import { WeatherData } from './WeatherData.js';

/**
 * Class representing a weather station.
 */
export class WeatherStation {
  private ipAddress;

  constructor(ipAddress: string) {
    this.ipAddress = ipAddress;
  }

  async getWeatherData(): Promise<WeatherData> {
    return new Promise<WeatherData>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = `http://${this.ipAddress}/livedata.htm`;

      xhr.open('GET', url);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            if (xhr.responseXML != null) {
              resolve(this.parseWeatherData(xhr.responseXML));
            } else {
              reject(`Weather station request successful but empty response.`);
            }
          } else {
            reject(`Weather station request failed with status code ${xhr.status}.`);
          }
        }
      };
    });
  }

  private parseWeatherData(document: Document): WeatherData {
    const weatherData = new WeatherData();
    weatherData.indoorTemperature = this.parseWeatherDataValue(document, 'inTemp');
    weatherData.outdoorTemperature = this.parseWeatherDataValue(document, 'outTemp');
    return weatherData;
  }

  private parseWeatherDataValue(document: Document, name: string): number | undefined {
    const element = document.querySelector(`input[name="${name}"]`) as HTMLInputElement;
    if (element === null || isNaN(Number(element.value))) {
      return undefined;
    }
    return Number(element.value);
  }
}
