import { AxiosInstance } from "axios";
import { axiosInstance } from "./axiosBase";
import { AgodaServiceConfig, IBaseResponse } from "./agoda.type";
import {
  ActivitiesAutoCompleteRequestType,
  ActivitiesAvailabilityRequestType,
  ActivitiesCalendarRequestType,
  ActivitiesDetailRequestType,
  ActivitiesReviewRequestType,
  ActivitiesSearchRequestType,
} from "./agodaActivities.type";
import {
  IActivitiesAutoCompleteResponse,
  IActivitiesCalendarResponse,
  IActivitiesReviewsResponse,
  IActivitiesSearchResponse,
  IActivityAvailabilityResponse,
  IActivityDetailResponse,
} from "./agodaActivities.interface";

export class AgodaActivitiesService {
  #_apiKey: string;
  #_axiosInstance: AxiosInstance;
  #_baseURL: string;
  constructor(tequilaServiceConfig: AgodaServiceConfig) {
    this.#_apiKey = tequilaServiceConfig.apiKey;
    this.#_baseURL = tequilaServiceConfig.baseUrl;
    this.#_axiosInstance = axiosInstance(this.#_baseURL, {
      headers: { "x-rapidapi-key": this.#_apiKey },
    });
  }

  async getActivitiesAutoComplete(
    params: ActivitiesAutoCompleteRequestType
  ): Promise<IBaseResponse<IActivitiesAutoCompleteResponse>> {
    return (
      await this.#_axiosInstance.get<
        IBaseResponse<IActivitiesAutoCompleteResponse>
      >("v2/activities/auto-complete", {
        params,
      })
    )?.data;
  }

  async search(
    params: ActivitiesSearchRequestType
  ): Promise<IBaseResponse<IActivitiesSearchResponse>> {
    return (
      await this.#_axiosInstance.get<IBaseResponse<IActivitiesSearchResponse>>(
        "v2/activities/search",
        {
          params: this.parseParam(params),
        }
      )
    )?.data;
  }
  private parseParam(_params: any) {
    const params: { [key: string]: Array<number> | string | number | Date } =
      {};
    for (const [key, value] of Object.entries(_params)) {
      if (value == null || value == undefined) continue;
      params[key] = value as any;
      if (["startDate", "endDate", "travelDate"].includes(key))
        params[key] = new Date(value?.toString()).toISOString().split("T")[0];
      if (Array.isArray(value)) params[key] = value.join(",");

      if (key == "prices")
        params.price = [_params.prices.from, _params.prices.to].join(",");
    }

    return params;
  }

  async details(
    params: ActivitiesDetailRequestType
  ): Promise<IBaseResponse<IActivityDetailResponse>> {
    return (
      await this.#_axiosInstance.get<IBaseResponse<IActivityDetailResponse>>(
        "v2/activities/details",
        {
          params: this.parseParam(params),
        }
      )
    )?.data;
  }

  async reviews(
    params: ActivitiesReviewRequestType
  ): Promise<IBaseResponse<IActivitiesReviewsResponse>> {
    return (
      await this.#_axiosInstance.get<IBaseResponse<IActivitiesReviewsResponse>>(
        "v2/activities/reviews",
        {
          params: this.parseParam(params),
        }
      )
    )?.data;
  }

  async calendar(
    params: ActivitiesCalendarRequestType
  ): Promise<IBaseResponse<IActivitiesCalendarResponse>> {
    return (
      await this.#_axiosInstance.get<
        IBaseResponse<IActivitiesCalendarResponse>
      >("v2/activities/calendar", {
        params: this.parseParam(params),
      })
    )?.data;
  }

  async availability(
    params: ActivitiesAvailabilityRequestType
  ): Promise<IBaseResponse<IActivityAvailabilityResponse>> {
    return (
      await this.#_axiosInstance.get<
        IBaseResponse<IActivityAvailabilityResponse>
      >("v2/activities/availability", {
        params: this.parseParam(params),
      })
    )?.data;
  }
}
