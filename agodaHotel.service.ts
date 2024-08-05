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
          params: this.parseParamSearchOvernight(params),
        }
      )
    )?.data;
  }
  private parseParamSearchOvernight(_params: HotelSearchOvernightRequestType) {
    const params: { [key: string]: Array<number> | string | number | Date } =
      {};
    for (const [key, value] of Object.entries(_params)) {
      if (value instanceof Date)
        params[key] = value.toISOString().split("T")[0];
      if (Array.isArray(value)) params[key] = value.join(",");
      if (key == "sort")
        params.sort = [_params.sort.by, _params.sort.type].join(",");
    }

    return params;
  }
}
