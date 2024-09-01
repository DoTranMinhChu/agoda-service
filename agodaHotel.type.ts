export type HotelAutoCompleteRequestType = {
  query: string;
  language?: string;
};

export type HotelSearchOvernightRequestType = {
  id: string;
  //YYYY-MM-DD
  checkinDate: Date;
  //YYYY-MM-DD
  checkoutDate: Date;

  /**
   * Total number of record per api call
   * The limit must be between 0 and 50
   * Ex: 2Default: 20
   */
  limit?: number;

  /**
   * The page index, for paging purpose
   * Default: 1
   * Ex: 2
   */
  page?: number;
  language?: string;
  currency?: string;
  room?: number;
  adult?: number;
  childAges?: number;

  prices?: {
    from: number;
    to: number;
  };
  /**
   * Sort by
   * Format: key sort,Asc/Desc
   * Ex: Ranking,Desc
   * Default: Ranking,Desc
   * Some example values
   * Ranking,Desc: Best match
   * Price,Asc: Lowest price
   * Price,Desc: Highest price
   * AllGuestsReviewScore,Desc: Top guest ratings
   * StarRating,Desc: Stars (5 to 0)
   *
   * @type {{ a: string, b: number }}
   */
  sort?: {
    by: string;
    type: "Asc" | "Desc";
  };

  /**
   * Star rating
   * It can input multiple values, and the values should be separated by commas
   * Ex: 1,2
   * 1: 1 star
   * 2: 2 stars
   * 3: 3 stars
   * 4: 4 stars
   * 5: 5 stars
   *
   * @type {Array<number>}
   */
  starRating?: Array<number>;

  /**
   * Guest review score
   * The guestReview has a value from 6 to 9
   * Ex: 6
   * 6: 6+ Good
   * 7: 7+ Very good
   * 8: 8+ Excellent
   * 9: 9+ Exceptional
   *
   * @type {Array<number>}
   */
  guestReview?: number;

  /**
   * Neighborhoods
   * neighborhoods can be retrieved from response of this endpoint (data->filters->neighborhoods->id)
   * It can input multiple values, and the values should be separated by commas
   * Ex: 60866,481365,60865
   * Some example values
   * 60866: Times Square
   * 481365: Brooklyn
   * 60865: Midtown East
   * 60874: Gramercy
   *
   * @type {Array<number>}
   */
  neighborhoods?: Array<number>;

  /**
   * Property type
   * propertyType can be retrieved from response of this endpoint (data->filters->propertyType->id)
   * It can input multiple values, and the values should be separated by commas
   * Ex: 34,131
   * Some example values
   * 34: Hotel
   * 131: Entire house
   * 29: Entire apartment
   * ......................
   * @type {Array<number>}
   */
  propertyType?: Array<number>;

  /**
   * Room offers
   * roomOffers can be retrieved from response of this endpoint (data->filters->roomOffers->id)
   * It can input multiple values, and the values should be separated by commas
   * Ex: 78322,78310
   * Some example values
   * 78322: Breakfast included
   * 78310: Early check-in
   * 84842: Car rental
   * ......................
   *
   * @type {Array<number>}
   */
  roomOffers?: Array<number>;

  /**
   * Facilities
   * facilities can be retrieved from response of this endpoint (data->filters->facilities->id)
   * It can input multiple values, and the values should be separated by commas
   * Ex: 93,80
   * Some example values
   * 93: Swimming pool
   * 80: Car park
   * 90: Internet
   * ......................
   *
   * @type {Array<number>}
   */
  facilities?: Array<number>;

  /**
   * Looking for something special
   * somethingSpecial can be retrieved from response of this endpoint (data->filters->somethingSpecial->id)
   * Ex: 1
   * Some example values
   * 1: Great for Groups
   * 2: Great for Families
   * 3: Workation Friendly
   * 4: Pets Allowed
   *
   * @type {number}
   */
  somethingSpecial?: number;

  /**
   * Room amenities
   * roomAmenities can be retrieved from response of this endpoint (data->filters->roomAmenities->id)
   * It can input multiple values, and the values should be separated by commas
   * Ex: 35,43
   * Some example values
   * 35: TV
   * 43: Balcony/terrace
   * 86: Refrigerator
   * ......................
   *
   * @type {Array<number>}
   */
  roomAmenities?: Array<number>;

  /**
   * Payment options
   * paymentOptions can be retrieved from response of this endpoint (data->filters->paymentOptions->id)
   *  It can input multiple values, and the values should be separated by commas
   *  Ex: 80031,56649
   *  Some example values
   *  80031: Book without credit card
   *  49499: Free cancellation
   *  56649: Pay at the hotel
   *  ......................
   *
   * @type {Array<number>}
   */
  paymentOptions?: Array<number>;

  /**
   * Bedrooms
   * bedrooms can be retrieved from response of this endpoint (data->filters->bedrooms->id)
   *  It can input multiple values, and the values should be separated by commas
   *  Ex: 1,3
   *  Some example values
   *  1: 1 bedroom/studio
   *  2: 2 bedrooms
   *  3: 3+ bedrooms
   *
   * @type {Array<number>}
   */
  bedrooms?: Array<number>;

  /**
   * Property name
   * Ex: bedroom
   *
   * @type {string}
   */
  propertyName?: string;

  /**
   * Host details
   * hostDetails can be retrieved from response of this endpoint (data->filters->hostDetails->id)
   * It can input multiple values, and the values should be separated by commas
   * Ex: 1,2
   * Some example values
   * 1: Verified Host
   * 2: Top Host
   *
   * @type {Array<number>}
   */
  hostDetails?: Array<number>;
};

export type HotelDetailRequestType = {
  //propertyId can be retrieved from /hotels/search (data->properties->propertyId)
  propertyId: string;
  /**
   * language can be retrieved from /languages (data->Code) Ex: en-us Default: en-us
   */
  language?: string;
};

//==== Hotel Review ===
export type HotelReviewRequestType = {
  /**
   * Required: true
   * propertyId can be retrieved from the /hotels/search endpoint (data->properties->propertyId)
   * Ex: 9062231
   * You can view the count of reviews from the /hotels/details (data->contentDetail->contentReviewScore->providerReviewScore->cumulative->reviewCount)
   */
  propertyId: string;

  /**
   * Review sources reviewSources can be retrieved from the /hotels/details (data->contentDetail->contentReviewScore->providerReviewScore->providerId)
   * Ex: 332
   * Default: 332
   * Some example values
   * -1: All
   * 332: Agoda
   * 3038: Booking.com
   */
  reviewSources?: number;

  /**
   * Total number of record per api call
   * The limit must be between 0 and 50
   * Ex: 2Default: 20
   */
  limit?: number;

  /**
   * The page index, for paging purpose
   * Default: 1
   * Ex: 2
   */
  page?: number;

  /**
   * Sort by
   * Ex: 7
   * Default: 7
   * Some example values
   * 1: Most recent
   * 2: Rating, high to low
   * 3: Rating, low to high
   * 7: Most helpful
   */
  sort?: number;

  /**
   * Traveler types
   * travelerType can be retrieved from the /hotels/details (data->contentDetail->contentReviewScore->providerReviewScore->demographics->groups->id)
   * Ex: 0
   * Default: 0
   * Some example values
   * 0: All guests
   * 1: Business travelers
   * 2: Couples
   * 3: Solo travelers
   * 4: Families with young children
   * 5: Families with teens
   * 6: Groups
   */
  travelerType?: number;

  /**
   * language can be retrieved from /languages (data->Code) Ex: en-us Default: en-us
   */
  language?: string;

  /**
   * currency can be retrieved from /currencies (data->Code) Ex: EUR Default: USD
   */
  currency?: string;
};
