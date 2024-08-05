interface IHotelsAutoCompleteResponse {
  id: string;
  name: string;
  typeId: number;
  typeName: string;
  subTypeId: number;
  subTypeName: string;
  area: IState;
  city?: IState;
  country: IState;
  latitude: number;
  longitude: number;
  searchType: number;
  imageUrl: string;
  activeHotels: number;
  landingUrl: string;
  state?: IState;
}

interface IState {
  id: number;
  name: string;
}

interface ISearchHotelResponse {
  searchResult: ISearchResult;
  properties: IProperty[];
  aggregation: IAggregation;
  geoPlaces: any[];
  searchEnrichment: ISearchEnrichment;
  featuredAgodaHome: IProperty[];
  highlyRatedAgodaHomes: IProperty[];
  extraAgodaHomes: any[];
  filters: IFilters;
}

interface ISearchResult {
  searchInfo: ISearchInfo;
  urgencyDetail: any;
  histogram: IHistogram;
  isFreeTextSortMatch: any;
  nhaProbability: string;
  cid: number;
}

interface ISearchInfo {
  totalActiveHotels: number;
  totalFilteredHotels: number;
  totalAvailableHotelsWithoutFilter: number;
  searchStatus: ISearchStatus;
  objectInfo: IObjectInfo;
  isComplete: boolean;
  hasSecretDeal: boolean;
  hasInsiderDeal: boolean;
  pollingInfoResponse: any;
  hasEscapesPackage: boolean;
}

interface ISearchStatus {
  searchStatus: string;
  searchCriteria: SearchCriteria;
}

interface SearchCriteria {
  checkIn: string;
}

interface IObjectInfo {
  cityId: number;
  cityName: string;
  cityEnglishName: string;
  countryId: number;
  countryName: string;
  countryEnglishName: string;
  centerLatitude: number;
  centerLongitude: number;
  objectName: string;
}

interface IHistogram {
  bins: Bin[];
  maxMinPrice: MaxMinPrice;
}

interface Bin {
  numOfElements: number;
  upperBound: UpperBound;
}

interface UpperBound {
  perNightPerRoom: number;
  perBooking: number;
}

interface MaxMinPrice {
  perRoomPerNight: IPerMaxMinPrice;
  perBook: IPerMaxMinPrice;
}

interface IPerMaxMinPrice {
  max: number;
  median: any;
  min: number;
}

interface IProperty {
  propertyId: number;
  propertyResultType: string;
  metaLab?: IMetaLab;
  soldOut: any;
  content: IContent;
  enrichment: IEnrichment;
  sponsoredDetail: ISponsoredDetail;
  pricing: IPricing;
}

interface IMetaLab {
  attributes: IAttribute[];
}

interface IAttribute {
  attributeId: number;
  value: string;
}

interface IContent {
  propertyId: number;
  features: IFeatures;
  informationSummary: InformationSummary;
  highlight: IHighlight;
  nonHotelAccommodation: INonHotelAccommodation;
  reviews: IReviews;
  familyFeatures: IFamilyFeatures;
  propertyEngagement: IPropertyEngagement;
  images: Images;
  localInformation: LocalInformation;
  rateCategories: RateCategories;
}

interface IFeatures {
  hotelFacilities: IState[];
}

interface InformationSummary {
  localeName: string;
  defaultName: string;
  propertyType: string;
  accommodation: Accommodation;
  remarks?: Remarks;
  address: IAdress;
  geoInfo: GeoInfo;
  rating: number;
  spokenLanguages: SpokenLanguage[];
  awardYear: any;
  hasHostExperience: boolean;
  agodaGuaranteeProgram: boolean;
  isSustainableTravel: boolean;
  hotelCharacter?: HotelCharacter;
}

interface Accommodation {
  accommodationName: string;
  accommodationType: number;
}

interface Remarks {
  renovationInfo: RenovationInfo;
}

interface RenovationInfo {
  renovationType: number;
  year: number;
}

interface IAdress {
  country: IState;
  city: IState;
  area: IState;
}

interface GeoInfo {
  latitude: number;
  longitude: number;
  obfuscatedLat: number;
  obfuscatedLong: number;
}

interface SpokenLanguage {
  id: number;
}

interface HotelCharacter {
  hotelTag?: IHotelCharacterDetail;
  hotelView: IHotelCharacterDetail;
}

interface IHotelCharacterDetail {
  name: string;
  symbol: string;
}

interface IHighlight {
  distance: any[];
  cityCenter: ICityCenter;
  hasNearbyPublicTransportation: boolean;
}

interface ICityCenter {
  isInsideCityCenter: boolean;
  distanceFromCityCenter: number;
}

interface INonHotelAccommodation {
  masterRooms: IMasterRoom[];
  hostLevel: any;
  isRareFind: any;
  supportedLongStay: any;
}

interface IMasterRoom {
  roomSizeSqm: number;
  noOfBeds: number;
  noOfBedrooms: any;
  noOfBathrooms: number;
  highlightedFacilities: any[];
}

interface IReviews {
  cumulative: ICumulative;
  contentReview: IContentReview[];
}

interface ICumulative {
  reviewCount: number;
  score: number;
}

interface IContentReview {
  providerId: number;
  isDefault: boolean;
  demographics: IDemographics;
  summaries?: ISummaries;
  cumulative: ICumulative;
}

interface IDemographics {
  groups: IGroup[];
}

interface IGroup {
  id: number;
  reviewCount: number;
  grades: IGrade[];
}

interface IGrade {
  id: string;
  score: number;
}

interface ISummaries {
  snippets: ISnippet[];
  recommendationScores: IRecommendationScore[];
  frequentTravellerRecommendationScore: any;
}

interface IRecommendationScore {
  recommendationScore: number;
}

interface IFamilyFeatures {
  isFamilyRoom: boolean;
  isInterConnectingRoom: boolean;
  isInfantCottageAvailable: boolean;
  hasKidsClub: boolean;
  hasKidsPool: boolean;
}

interface IPropertyEngagement {
  peopleLooking: number;
  lastBooking: string;
  todayBooking: string;
}

interface Images {
  hotelImages: HotelImage[];
}

interface HotelImage {
  id: number;
  caption: string;
  urls: Url[];
  groupId: string;
  typeId: number;
  blurhash?: string;
}

interface Url {
  key: string;
  value: string;
}

interface LocalInformation {
  landmarks: Landmarks;
  hasAirportTransfer: boolean;
}

interface Landmarks {
  topLandmark?: TopLandmark[];
}

interface TopLandmark {
  landmarkName: string;
  distanceInM: number;
}

interface RateCategories {
  escapeRateCategories: any;
}

interface IEnrichment {
  topSellingPoint: ITopSellingPoint[];
  uniqueSellingPoint: IUniqueSellingPoint[];
  roomInformation: IRoomInformation;
}

interface ITopSellingPoint {
  tspType: string;
  value?: number;
  cmsId: number;
}

interface IUniqueSellingPoint {
  uspType: string;
  uspPropertyType: any;
  value: number;
  rank: number;
  segment: string;
}

interface IRoomInformation {
  cheapestRoomSizeSqm: any;
  cheapestRoomName?: string;
}

interface ISponsoredDetail {
  trackingData: any;
  sponsoredType: string;
  isShowSponsoredFlag: boolean;
}

interface IPricing {
  hotelId: number;
  isReady: boolean;
  isAvailable: boolean;
  isEasyCancel?: boolean;
  isSuggested: boolean;
  payment?: IPayment;
  pricingMessages: IPricingMessage[];
  benefits: number[];
  offers: IOffer[];
  roomBundle: any;
  suggestedRoomQuantity: number;
  suggestPriceType: ISuggestPriceType;
  loyaltyDisplay?: ILoyaltyDisplay;
  cheapestStayPackageRatePlans?: ICheapestStayPackageRatePlan[];
}

interface IOffer {
  bundleType: string;
  bundleDetail: any;
  roomOffers: IRoomOffer[];
}

interface IRoomOffer {
  room: IRoom;
}

interface IRoom {
  uid: string;
  supplierId: number;
  availableRooms: number;
  benefits: IBenefit[];
  payment: IPayment;
  localVoucher: any;
  campaign: any;
  isPromoEligible: boolean;
  occupancy: number;
  agodaCash: IAgodaCash;
  cashback?: ICashback;
  discount: IDiscount;
  channel: IChannel;
  promotions?: IPromotions;
  loyaltyDisplay: any;
  bookingDuration: any;
  corInfo: ICorInfo;
  pricing: IPricing[];
  packaging?: IPackaging;
  stayPackageType: number;
  pricingMessages: IPricingMessages;
}

interface IAgodaCash {
  showBadge: boolean;
  giftcardGuid: string;
  dayToEarn: number;
  earnId: number;
  expiryDay: number;
}

interface ICashback {
  cashbackGuid: string;
  dayToEarn: number;
  earnId: number;
  expiryDay: number;
  cashbackType: string;
  cashbackVersion: string;
}

interface IDiscount {
  pseudoCoupon: any;
  channelDiscount?: string;
  deals: string[];
}

interface IChannel {
  id: number;
}

interface IPromotions {
  typeId: number;
  promotionDiscount: IPromotionDiscount;
}

interface IPromotionDiscount {
  value: number;
  discountType: string;
}

interface ICorInfo {
  corBreakdown: ICorBreakdown;
}

interface ICorBreakdown {
  taxExPRPN: ITaxPrpn[];
  taxInPRPN: ITaxPrpn[];
}

interface ITaxPrpn {
  cmsId: number;
  id: number;
  isDiscount: boolean;
  price: number;
}

interface IPrice {
  perBook: IPricePer;
  perRoomPerNight: IPricePer;
  perNight: PerNight;
  totalDiscount: number;
}

interface Exclusive {
  display: number;
  chargeTotal: number;
  originalPrice: number;
  crossedOutPrice: number;
  rebatePrice: number;
  cashbackPrice?: number;
  displayAfterCashback?: number;
  pseudoCouponPrice: number;
}

interface Inclusive {
  display: number;
  chargeTotal: number;
  originalPrice: number;
  crossedOutPrice: number;
  rebatePrice: number;
  cashbackPrice?: number;
  displayAfterCashback?: number;
  pseudoCouponPrice: number;
}

interface PerNight {
  exclusive: IInclusive;
  inclusive: IInclusive;
}

interface IChannelDiscountSummary {
  channelId: number;
  channelDiscountBreakdown: IChannelDiscountBreakdown[];
}

interface IChannelDiscountBreakdown {
  channelId: number;
  display: boolean;
  discountPercent: number;
}

interface IPackaging {
  token: IToken;
  pricing: any[];
}

interface IToken {
  clientToken: string;
  interSystemToken: string;
}

interface IPricingMessages {
  formatted: IFormatted[];
}

interface IFormatted {
  location: number;
  texts: IText[];
}

interface IText {
  index: number;
  text: string;
}

interface ISuggestPriceType {
  suggestPrice: string;
  applyType: string;
}

interface ILoyaltyDisplay {
  items: any[];
}

interface ICheapestStayPackageRatePlan {
  stayPackageType: number;
  ratePlanId: number;
}

interface IAggregation {
  matrixGroupResults: IMatrixGroupResult[];
}

interface IMatrixGroupResult {
  matrixGroup: string;
  matrixItemResults: IMatrixItemResult[];
}

interface IMatrixItemResult {
  id: number;
  filterKey: string;
  filterRequestType: string;
  name: string;
  count: number;
}

interface ISearchEnrichment {
  creditCardCampaignInfos: any[];
}

interface ISnippet {
  snippet: string;
  date: string;
  reviewer: string;
  countryId: number;
  countryName: string;
  reviewRating: number;
}

interface IPricingMessage {
  location: number;
  ids: number[];
}

interface IOffer {
  bundleType: string;
  bundleDetail: any;
  roomOffers: IRoomOffer[];
}

interface IRoomOffer {
  room: IRoom;
}

interface IRoom {
  uid: string;
  supplierId: number;
  availableRooms: number;
  benefits: IBenefit[];
  payment: IPayment;
  pricing: IPricing[];
  isPromoEligible: boolean;
  occupancy: number;
  agodaCash: IAgodaCash;
  cashback?: ICashback;
  discount: IDiscount;
  channel: IChannel;
  promotions?: IPromotions;
}

interface IBenefit {
  id: number;
  value: number;
  remark: string;
  unit: number;
  targetType: number;
  description: string;
}

interface IPayment {
  payLater: IPaymentDetail;
  cancellation: ICancellationDetail;
  noCreditCard: IPaymentDetail;
  payAtHotel: IPaymentDetail;
  paymentModel: string;
}

interface IPaymentDetail {
  isEligible: boolean;
  authDate: string;
  chargeDate: string;
}

interface ICancellationDetail {
  code: string;
  cancellationType: string;
}

interface IPricing {
  currency: string;
  price: IPrice;
  channelDiscountSummary: IChannelDiscountSummary;
}

interface IPrice {
  perBook: IPricePer;
  perRoomPerNight: IPricePer;
  perNight: IPricePer;
  totalDiscount: number;
}

interface IPricePer {
  exclusive: IInclusive;
  inclusive: IInclusive;
}

interface IInclusive {
  display: number;
  chargeTotal: number;
  originalPrice: number;
  crossedOutPrice: number;
  rebatePrice: number;
  cashbackPrice?: number;
  displayAfterCashback?: number;
  pseudoCouponPrice: number;
}

interface IFilters {
  neighborhoods: IFilterOption[];
  propertyType: IFilterOption[];
  roomOffers: IFilterOption[];
  facilities: IFilterOption[];
  somethingSpecial: IFilterOption[];
  roomAmenities: IFilterOption[];
  paymentOptions: IFilterOption[];
  bedrooms: IFilterOption[];
  hostDetails: IFilterOption[];
}

interface IFilterOption {
  id: number;
  filterKey: string;
  filterRequestType: string;
  name: string;
  count: number;
}
