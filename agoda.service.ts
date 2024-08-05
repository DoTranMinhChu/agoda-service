import { AgodaServiceConfig } from "./agoda.type";
import { AgodaHotelService } from "./agodaHotel.service";

export class AgodaService {
  _tequilaServiceConfig: AgodaServiceConfig;
  constructor(tequilaServiceConfig: AgodaServiceConfig) {
    if (!tequilaServiceConfig.baseUrl)
      tequilaServiceConfig.baseUrl = "https://agoda-com.p.rapidapi.com";
    this._tequilaServiceConfig = tequilaServiceConfig;
  }

  get location() {
    return new AgodaHotelService(this._tequilaServiceConfig);
  }
}
