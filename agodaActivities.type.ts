export enum EActivatesDuration {
  "UpTo1Hour" = "UpTo1Hour",
  "1To4Hour" = "1To4Hour",
  "4To24Hour" = "4To24Hour",
  "24To72Hour" = "24To72Hour",
  "MoreThan72Hour" = "MoreThan72Hour",
}
export enum EActivatesCategory {
  "All" = "All",
  "Tours" = "Tours",
  "FoodAndDrinks" = "FoodAndDrinks",
  "Experiences" = "Experiences",
  "Attractions" = "Attractions",
  "Transportation" = "Transportation",
  "SimCardsAndWifi" = "SimCardsAndWifi",
  "TravelEssentials" = "TravelEssentials",
}
export type ActivitiesAutoCompleteRequestType = {
  query: string;
  language?: string;
};
// ===== Detail ====
export type ActivitiesDetailRequestType = {
  /**
   * Required: true
   * activityId can be retrieved from /activities/auto-complete (data->suggestionList->activityId)
   * Ex: eyJjIjozMTgsIm4iOiJOZXcgWW9yayAoTlkpIiwidSI6MTgxLCJtIjoiVW5pdGVkIFN0YXRlcyIsInMiOiJVUyIsImEiOjAsImUiOiJ1bmRlZmluZWQiLCJ0IjoiTmV3IFlvcmsgU3RhdGUiLCJsIjoiL2NpdHkvdW5pdGVkX3N0YXRlcy9uZXdfeW9ya19ueSIsImFjIjpudWxsfQ== (New York (NY))
   */
  activityId: string;

  /**
   * currency can be retrieved from /currencies (data->Code)
   * Ex: EUR
   * Default: USD
   */
  currency?: string;
  /**
   * language can be retrieved from /languages (data->Code)
   * The language must match the language passed in the /activities/search endpoint
   * Ex: en-us
   * Default: en-us
   */
  language?: string;
};
// ==== Search ====
export type ActivitiesSearchRequestType = ActivitiesDetailRequestType & {
  /**
   * Total number of record per api call
   * The limit must be between 0 and 100
   * Ex: 2
   * Default: 24
   */
  limit?: number;

  /**
   * The page index, for paging purpose
   * Default: 1
   * Ex: 2
   */
  page?: number;

  /**
   * Sort
   * sort can be retrieved from response of this endpoint (data->matrix->sort->availableCode)
   * Ex: Price
   * Default: Popular
   * Choose one of the values below
   * Popular: Popular (The sortOrder does not input or input any value)
   * Price: Lowest price first (input sortOrder=Ascending)
   * Rating: Highest rating first (input sortOrder=Descending)
   * ..........
   */
  sort?: string;
  /**
   * Sort order
   * Ascending or Descending
   * Default: Ascending
   * Ex: Ascendin
   */
  sortOrder?: "Ascending" | "Descending";

  /**
   * Prices
   * Input both min and max prices, separated by commas
   * The minimum and maximum can be retrieved from the response of this endpoint (data->matrix->filter->rangeFilterMatrix(code=Price)->min/max)
   * Default: 306,1429
   */
  prices?: {
    from: number;
    to: number;
  };

  /**
   * Star rating
   * It can input multiple values, and the values should be separated by commas
   * Ex: 0,2
   * 0: No rating
   * 1: 1 star
   * 2: 2 stars
   * 3: 3 stars
   * 4: 4 stars
   * 5: 5 stars
   */
  starRating?: Array<number>;

  /**
   * Duration
   * duration can be retrieved from response of this endpoint (data->matrix->filter->valueFilterMatrix(code=Duration)->availableValue->id)
   * It can input multiple values, and the values should be separated by commas
   * Ex: UpTo1Hour,4To24Hour,24To72Hour,MoreThan72Hour
   * Some example values
   * UpTo1Hour
   * 1To4Hour
   * 4To24Hour
   * 24To72Hour
   * MoreThan72Hour
   */
  duration?: Array<EActivatesDuration>;

  /**
   * Category
   * category can be retrieved from response of this endpoint (data->matrix->filter->valueFilterMatrix(code=Category)->availableValue->id)
   * Default: All
   * Ex: Tours
   * Some example values
   * All
   * Tours
   * FoodAndDrinks
   * Experiences
   * Attractions
   * Transportation
   * SimCardsAndWifi
   * TravelEssentials
   */
  category?: Array<EActivatesCategory>;
};
// ==== Reviews ====
export type ActivitiesReviewRequestType = {
  /**
   * Required: true
   * activityId can be retrieved from /activities/auto-complete (data->suggestionList->activityId)
   * Ex: eyJjIjozMTgsIm4iOiJOZXcgWW9yayAoTlkpIiwidSI6MTgxLCJtIjoiVW5pdGVkIFN0YXRlcyIsInMiOiJVUyIsImEiOjAsImUiOiJ1bmRlZmluZWQiLCJ0IjoiTmV3IFlvcmsgU3RhdGUiLCJsIjoiL2NpdHkvdW5pdGVkX3N0YXRlcy9uZXdfeW9ya19ueSIsImFjIjpudWxsfQ== (New York (NY))
   */
  activityId: string;
  /**
   * Total number of record per api call
   * The limit must be between 0 and 100
   * Ex: 2
   * Default: 24
   */
  limit?: number;

  /**
   * The page index, for paging purpose
   * Default: 1
   * Ex: 2
   */
  page?: number;

  /**
   * Sort
   * sort can be retrieved from response of this endpoint (data->matrix->sort->availableCode)
   * Ex: Price
   * Default: Popular
   * Choose one of the values below
   * Popular: Popular (The sortOrder does not input or input any value)
   * Price: Lowest price first (input sortOrder=Ascending)
   * Rating: Highest rating first (input sortOrder=Descending)
   * ..........
   */
  sort?: string;
  /**
   * Sort order
   * Ascending or Descending
   * Default: Ascending
   * Ex: Ascendin
   */
  sortOrder?: "Ascending" | "Descending";

  /**
   * currency can be retrieved from /currencies (data->Code)
   * Ex: EUR
   * Default: USD
   */
  currency?: string;
  /**
   * language can be retrieved from /languages (data->Code)
   * The language must match the language passed in the /activities/search endpoint
   * Ex: en-us
   * Default: en-us
   */
  language?: string;

  /**
   * With photos only
   * true or false
   * Default: false
   */
  withPhotosOnly?: boolean;

  /**
   * Star rating
   * It can input multiple values, and the values should be separated by commas
   * Ex: 0,2
   * 0: No rating
   * 1: 1 star
   * 2: 2 stars
   * 3: 3 stars
   * 4: 4 stars
   * 5: 5 stars
   */
  starRating?: Array<number>;
};

// ==== Calendar ======
export type ActivitiesCalendarRequestType = {
  /**
   * Required: true
   * activityId can be retrieved from /activities/auto-complete (data->suggestionList->activityId)
   * Ex: eyJjIjozMTgsIm4iOiJOZXcgWW9yayAoTlkpIiwidSI6MTgxLCJtIjoiVW5pdGVkIFN0YXRlcyIsInMiOiJVUyIsImEiOjAsImUiOiJ1bmRlZmluZWQiLCJ0IjoiTmV3IFlvcmsgU3RhdGUiLCJsIjoiL2NpdHkvdW5pdGVkX3N0YXRlcy9uZXdfeW9ya19ueSIsImFjIjpudWxsfQ== (New York (NY))
   */
  activityId: string;

  /**
   * Required: true
   * activityToken can be retrieved from /activities/details (data->activity->activityRepresentativeInfo->activityToken)
   * Ex: AAABdPACeyJhaWQiOjEwMzQwNDEsInMOAPACNTAwMDIsInNhYyI6IiIsIm8VAFMwLCJzbxEAMmN1cgkA8A1wcmljZSI6eyJkdCI6IkJPT0siLCJxIjoxLCJ0FwAgZXgGALFjdCI6MC4wLCJjbwkAX30sImFsGQAEomUiOm51bGwsImEJAOB9LCJsbyI6W10sInBtYwkAr30sInN0YXJ0cHJ5AF8kdGQmADRvc3QLAEVwYXhyDAAUbQoAFWIUABRvQAFwcHIiOltdfQ
   */
  activityToken: string;

  /**
   * currency can be retrieved from /currencies (data->Code)
   * Ex: EUR
   * Default: USD
   */
  currency?: string;
  /**
   * language can be retrieved from /languages (data->Code)
   * The language must match the language passed in the /activities/search endpoint
   * Ex: en-us
   * Default: en-us
   */
  language?: string;

  /**
   * Start date
   * Format: YYYY-MM-DD
   * Ex: 2024-06-16
   * Default: Current date
   */
  startDate?: Date;

  /**
   * End date
   * Format: YYYY-MM-DD
   * Ex: 2024-07-16
   * Default: Current date + 1 month
   */
  endDate?: Date;
};
// ==== Availability ======
export type ActivitiesAvailabilityRequestType = {
  /**
   * Required: true
   * activityId can be retrieved from /activities/auto-complete (data->suggestionList->activityId)
   * Ex: eyJjIjozMTgsIm4iOiJOZXcgWW9yayAoTlkpIiwidSI6MTgxLCJtIjoiVW5pdGVkIFN0YXRlcyIsInMiOiJVUyIsImEiOjAsImUiOiJ1bmRlZmluZWQiLCJ0IjoiTmV3IFlvcmsgU3RhdGUiLCJsIjoiL2NpdHkvdW5pdGVkX3N0YXRlcy9uZXdfeW9ya19ueSIsImFjIjpudWxsfQ== (New York (NY))
   */
  activityId: string;

  /**
   * Required: true
   * activityToken can be retrieved from /activities/details (data->activity->activityRepresentativeInfo->activityToken)
   * Ex: AAABdPACeyJhaWQiOjEwMzQwNDEsInMOAPACNTAwMDIsInNhYyI6IiIsIm8VAFMwLCJzbxEAMmN1cgkA8A1wcmljZSI6eyJkdCI6IkJPT0siLCJxIjoxLCJ0FwAgZXgGALFjdCI6MC4wLCJjbwkAX30sImFsGQAEomUiOm51bGwsImEJAOB9LCJsbyI6W10sInBtYwkAr30sInN0YXJ0cHJ5AF8kdGQmADRvc3QLAEVwYXhyDAAUbQoAFWIUABRvQAFwcHIiOltdfQ
   */
  activityToken: string;

  /**
   * currency can be retrieved from /currencies (data->Code)
   * Ex: EUR
   * Default: USD
   */
  currency?: string;
  /**
   * language can be retrieved from /languages (data->Code)
   * The language must match the language passed in the /activities/search endpoint
   * Ex: en-us
   * Default: en-us
   */
  language?: string;

  /**
   * Travel  date
   * Format: YYYY-MM-DD
   * Ex: 2024-06-16
   */
  travelDate: Date;
};
