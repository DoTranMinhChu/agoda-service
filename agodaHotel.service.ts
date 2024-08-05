import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosBase";
import { AgodaServiceConfig, IBaseResponse } from "./agoda.type";
import {
  HotelAutoCompleteRequestType,
  HotelSearchOvernightRequestType,
} from "./agodaHotel.type";

export class AgodaHotelService {
  #_apiKey: string;
  #_axiosInstance: AxiosInstance;
  #_baseURL: string;
  constructor(tequilaServiceConfig: AgodaServiceConfig) {
    this.#_apiKey = tequilaServiceConfig.apiKey;
    this.#_baseURL = tequilaServiceConfig.baseUrl;
    this.#_axiosInstance = axiosInstance(this.#_baseURL, {
      headers: { Apikey: this.#_apiKey },
    });
  }

  async getHotelAutoComplete(
    params: HotelAutoCompleteRequestType
  ): Promise<IBaseResponse<Array<IHotelsAutoCompleteResponse>>> {
    return (
      await this.#_axiosInstance.get<
        IBaseResponse<Array<IHotelsAutoCompleteResponse>>
      >("hotels/auto-complete", {
        params,
      })
    )?.data;
  }

  async searchOvernight(
    params: HotelSearchOvernightRequestType
  ): Promise<ISearchHotelResponse> {
    return (
      await this.#_axiosInstance.get<ISearchHotelResponse>(
        "v2/booking/save_booking",
        {
          params,
        }
      )
    )?.data;
  }
}
