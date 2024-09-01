import { AgodaServiceConfig } from "./agoda.type";
import { AgodaActivitiesService } from "./agodaActivities.service";
import { AgodaHotelService } from "./agodaHotel.service";

export class AgodaService {
  _agodaServiceConfig: AgodaServiceConfig;
  constructor(agodaServiceConfig: AgodaServiceConfig) {
    if (!agodaServiceConfig.baseUrl)
      agodaServiceConfig.baseUrl = "https://agoda-com.p.rapidapi.com";
    this._agodaServiceConfig = agodaServiceConfig;
  }

  get hotel() {
    return new AgodaHotelService(this._agodaServiceConfig);
  }
  get activity() {
    return new AgodaActivitiesService(this._agodaServiceConfig);
  }
}
