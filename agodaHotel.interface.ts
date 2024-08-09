export interface IHotelsAutoCompleteResponse {
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
// =========== Hotel Auto Complete ===============
interface IState {
  id: number;
  name: string;
}

// =========== Hotel Search Overnight Start ===============

export interface ISearchHotelResponse {
  searchResult: ISearchResult;
  properties: IProperty[];
  aggregation: IAggregation;
  geoPlaces: IGeoPlace[];
  searchEnrichment: ISearchEnrichment;
  featuredAgodaHome: IFeaturedAgodaHome[];
  highlyRatedAgodaHomes: IHighlyRatedAgodaHome[];
  extraAgodaHomes: any[];
  filters: IFilters;
}

export interface ISearchResult {
  searchInfo: ISearchInfo;
  urgencyDetail: IUrgencyDetail;
  histogram: IHistogram;
  isFreeTextSortMatch: any;
  nhaProbability: string;
  cid: number;
}

export interface ISearchInfo {
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

export interface ISearchStatus {
  searchStatus: string;
  searchCriteria: ISearchCriteria;
}

export interface ISearchCriteria {
  checkIn: string;
}

export interface IObjectInfo {
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

export interface IUrgencyDetail {
  urgencyScore: number;
}

export interface IHistogram {
  bins: IBin[];
  maxMinPrice: IMaxMinPrice;
}

export interface IBin {
  numOfElements: number;
  upperBound: IUpperBound;
}

export interface IUpperBound {
  perNightPerRoom: number;
  perBooking: number;
}

export interface IMaxMinPrice {
  perRoomPerNight: IPriceRange;
  perBook: IPriceRange;
}

export interface IPriceRange {
  max: number;
  median: any;
  min: number;
}

export interface IProperty {
  propertyId: number;
  propertyResultType: string;
  metaLab: IMetaLab;
  soldOut: any;
  content: IContent;
  enrichment: IEnrichment;
  sponsoredDetail: ISponsoredDetail;
  pricing: IPropertyPricing;
}

export interface IMetaLab {
  attributes: IAttribute[];
}

export interface IAttribute {
  attributeId: number;
  value: string;
}

export interface IContent {
  propertyId: number;
  features: IFeatures;
  informationSummary: IInformationSummary;
  highlight: IHighlight;
  nonHotelAccommodation: INonHotelAccommodation;
  reviews: IReviews;
  familyFeatures: IFamilyFeatures;
  propertyEngagement: IPropertyEngagement;
  images: IImages;
  localInformation: ILocalInformation;
  rateCategories: IRateCategories;
}

export interface IFeatures {
  hotelFacilities: IHotelFacility[];
}

export interface IHotelFacility {
  id: number;
  name: any;
}

export interface IInformationSummary {
  localeName: string;
  defaultName: string;
  propertyType: string;
  accommodation: IAccommodation;
  remarks: any;
  address: IAddress;
  geoInfo: IGeoInfo;
  rating: number;
  spokenLanguages: ISpokenLanguage[];
  awardYear: any;
  hasHostExperience: boolean;
  agodaGuaranteeProgram: boolean;
  isSustainableTravel: boolean;
  hotelCharacter?: IHotelCharacter;
}

export interface IAccommodation {
  accommodationName: string;
  accommodationType: number;
}

export interface IAddress {
  country: ICountry;
  city: ICity;
  area: IArea;
}

export interface ICountry {
  id: number;
  name: string;
}

export interface ICity {
  id: number;
  name: string;
}

export interface IArea {
  id: number;
  name: string;
}

export interface IGeoInfo {
  latitude: number;
  longitude: number;
  obfuscatedLat: number;
  obfuscatedLong: number;
}

export interface ISpokenLanguage {
  id: number;
}

export interface IHotelCharacter {
  hotelTag: IHotelTag;
  hotelView: any;
}

export interface IHotelTag {
  name: string;
  symbol: string;
}

export interface IHighlight {
  distance: any[];
  cityCenter: ICityCenter;
  hasNearbyPublicTransportation: boolean;
}

export interface ICityCenter {
  isInsideCityCenter: boolean;
  distanceFromCityCenter: number;
}

export interface INonHotelAccommodation {
  masterRooms: any[];
  hostLevel: any;
  isRareFind: any;
  supportedLongStay: any;
}

export interface IReviews {
  cumulative: ICumulative;
  contentReview: IContentReview[];
}

export interface ICumulative {
  reviewCount: number;
  score: number;
}

export interface IContentReview {
  providerId: number;
  isDefault: boolean;
  demographics: IDemographics;
  summaries?: ISummaries;
  cumulative: ICumulative;
}

export interface IDemographics {
  groups: IGroup[];
}

export interface IGroup {
  id: number;
  reviewCount: number;
  grades: IGrade[];
}

export interface IGrade {
  id: string;
  score: number;
}

export interface ISummaries {
  recommendationScores: IRecommendationScore[];
}

export interface IRecommendationScore {
  recommendationScore: number;
}

export interface IFamilyFeatures {
  isFamilyRoom: boolean;
  isInterConnectingRoom: boolean;
  isInfantCottageAvailable: boolean;
  hasKidsClub: boolean;
  hasKidsPool: boolean;
}

export interface IPropertyEngagement {
  peopleLooking: number;
  lastBooking: string;
  todayBooking: string;
}

export interface IImages {
  hotelImages: IHotelImage[];
}

export interface IHotelImage {
  id: number;
  caption: string;
  urls: IUrl[];
  groupId: string;
  typeId: number;
  blurhash: string;
}

export interface IUrl {
  key: string;
  value: string;
}

export interface ILocalInformation {
  landmarks: ILandmarks;
  hasAirportTransfer: boolean;
}

export interface ILandmarks {
  topLandmark: ITopLandmark[];
}

export interface ITopLandmark {
  landmarkName: string;
  distanceInM: number;
}

export interface IRateCategories {
  escapeRateCategories: any;
}

export interface IEnrichment {
  topSellingPoint: ITopSellingPoint[];
  uniqueSellingPoint: IUniqueSellingPoint[];
  roomInformation: IRoomInformation;
}

export interface ITopSellingPoint {
  tspType: string;
  value?: number;
  cmsId: number;
}

export interface IUniqueSellingPoint {
  uspType: string;
  uspPropertyType?: string;
  value?: number;
  rank: number;
  segment?: string;
}

export interface IRoomInformation {
  cheapestRoomSizeSqm: any;
  cheapestRoomName?: string;
}

export interface ISponsoredDetail {
  trackingData?: string;
  sponsoredType: string;
  isShowSponsoredFlag: boolean;
}

export interface IPropertyPricing {
  hotelId: number;
  isReady: boolean;
  isAvailable: boolean;
  isEasyCancel: boolean;
  isSuggested: boolean;
  payment: IPayment;
  pricingMessages: IPricingMessage[];
  benefits: number[];
  offers: IOffer[];
  roomBundle?: IRoomBundle;
  suggestedRoomQuantity: number;
  suggestPriceType: ISuggestPriceType;
  loyaltyDisplay: ILoyaltyDisplay;
  cheapestStayPackageRatePlans: ICheapestStayPackageRatePlan[];
}

export interface IPayment {
  payLater: IPayLater;
  cancellation: ICancellation;
  noCreditCard: INoCreditCard;
  payAtHotel: IPayAtHotel;
}

export interface IPayLater {
  isEligible: boolean;
  authDate: string;
  chargeDate: string;
}

export interface ICancellation {
  code: string;
  cancellationType: string;
}

export interface INoCreditCard {
  isEligible: boolean;
}

export interface IPayAtHotel {
  isEligible: boolean;
}

export interface IPricingMessage {
  location: number;
  ids: number[];
}

export interface IOffer {
  bundleType: string;
  bundleDetail?: IBundleDetail;
  roomOffers: IRoomOffer[];
}

export interface IBundleDetail {
  bundleSegmentRoomIdentifiers: IBundleSegmentRoomIdentifier[];
}

export interface IBundleSegmentRoomIdentifier {
  roomIdentifier: string;
  quantity: number;
}

export interface IRoomOffer {
  room: IRoom;
}

export interface IRoom {
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
  cashback: any;
  discount: IDiscount;
  channel: IChannel;
  promotions: any;
  loyaltyDisplay?: ILoyaltyDisplay;
  bookingDuration: any;
  corInfo: ICorInfo;
  pricing: IRoomPricing;
}

export interface IBenefit {
  benefitId: number;
  message: string;
}

export interface IAgodaCash {
  amount: any;
}

export interface IDiscount {
  originalPrice: number;
  discountPercentage: number;
}

export interface IChannel {
  channel: string;
}

export interface ILoyaltyDisplay {
  loyaltyName: string;
  loyaltyProgramName: string;
  loyaltyBenefits: ILoyaltyBenefit[];
}

export interface ILoyaltyBenefit {
  title: string;
  description: string;
}

export interface ICorInfo {
  condition: string;
}

export interface IRoomPricing {
  price: IPrice;
  hotelPromo: IHotelPromo;
  customerPoints: ICustomerPoints;
  customerPay?: ICustomerPay;
  rebateInCountry: IRebateInCountry;
  vatOnServiceCharge: IVatOnServiceCharge;
  vatOnBoardingPass: IVatOnBoardingPass;
  vatOnCouponDiscount: IVatOnCouponDiscount;
}

export interface IPrice {
  perRoomPerNight: number;
  perBooking: number;
}

export interface IHotelPromo {
  totalPromo: number;
}

export interface ICustomerPoints {
  pointsAmount: number;
}

export interface ICustomerPay {
  amountInHotelCurrency: number;
  amountInDisplayCurrency: number;
}

export interface IRebateInCountry {
  rebateInfo: string;
}

export interface IVatOnServiceCharge {
  amountInHotelCurrency: number;
  amountInDisplayCurrency: number;
}

export interface IVatOnBoardingPass {
  amountInHotelCurrency: number;
  amountInDisplayCurrency: number;
}

export interface IVatOnCouponDiscount {
  amountInHotelCurrency: number;
  amountInDisplayCurrency: number;
}

export interface IRoomBundle {
  roomOfferList: IRoomOfferList[];
}

export interface IRoomOfferList {
  roomOffer: IRoomOffer;
}

export interface ISuggestPriceType {
  suggestPriceType: string;
}

export interface ICheapestStayPackageRatePlan {
  pricingMessages: IPricingMessage[];
  benefits: number[];
  roomBundle?: IRoomBundle;
  suggestedRoomQuantity: number;
  suggestPriceType: ISuggestPriceType;
}

export interface IAggregation {
  agodaHomesCount: IAgodaHomesCount;
}

export interface IAgodaHomesCount {
  properties: IProperty[];
}

export interface IGeoPlace {
  placeId: number;
  placeName: string;
  placeType: string;
  parentPlaceId: number;
  parentPlaceName: string;
}

export interface ISearchEnrichment {
  enrichment: string;
}

export interface IFeaturedAgodaHome {
  homeId: number;
  homeName: string;
  price: number;
}

export interface IHighlyRatedAgodaHome {
  homeId: number;
  homeName: string;
  rating: number;
}

export interface IFilters {
  availableFilters: IAvailableFilter[];
}

export interface IAvailableFilter {
  id: string;
  name: string;
  values: IFilterValue[];
}

export interface IFilterValue {
  id: string;
  name: string;
  count: number;
}

export interface IMeta {
  query: string;
  timestamp: string;
}

// =========== Hotel Search Overnight End ===============

// =========== Hotel Search Detail Start ===============

export interface IHotelDetailResponse {
  propertyId: number;
  contentDetail: IContentDetail;
  metaLab: IMetaLab;
}

export interface IContentDetail {
  propertyId: number;
  hostProfile: any;
  contentImages: IContentImages;
  contentReviewScore: IContentReviewScore;
  contentReviewSummaries: IContentReviewSummaries;
  contentEngagement: IContentEngagement;
  contentHighlights: IContentHighlights;
  contentFeatures: IContentFeatures;
  contentInformation: IContentInformation;
  contentSummary: IContentSummary;
  contentLocalInformation: IContentLocalInformation;
  contentExperiences: IContentExperiences;
}

export interface IContentImages {
  hotelImages: IHotelImage[];
  matterports: any[];
  categories: ICategory[];
}

export interface IHotelImage {
  id: number;
  caption: string;
  groupId: string;
  urls: IUrl[];
  typeId: number;
  uploadedDate?: string;
  snippet: any;
}

export interface IUrl {
  key: string;
  value: string;
}

export interface ICategory {
  category: string;
  count: number;
}

export interface IContentReviewScore {
  combinedReviewScore: ICumulative;
  providerReviewScore: IProviderReviewScore[];
}

export interface ICumulative {
  score: number;
  reviewCount: number;
}

export interface IProviderReviewScore {
  providerId: number;
  isDefault: boolean;
  cumulative: ICumulative;
  demographics: IDemographics;
  trendingScore?: ITrendingScore;
}

export interface IDemographics {
  groups: IGroup[];
  allGuest: IAllGuest;
}

export interface IGroup {
  id: number;
  reviewCount: number;
  grades: IGrade[];
}

export interface IGrade {
  id: string;
  score: number;
}

export interface IAllGuest {
  id: number;
  reviewCount: number;
  grades: IGrade[];
}

export interface ITrendingScore {
  past14DaysUplift: number;
  past30DaysUplift: number;
}

export interface IContentReviewSummaries {
  snippets: ISnippet[];
  recommendationScores: IRecommendationScores;
  positiveMentions: IPositiveMentions;
}

export interface ISnippet {
  snippet: string;
  reviewRating: number;
  reviewer: string;
  date: string;
  countryId: number;
  countryName: string;
}

export interface IRecommendationScores {
  recommendationScore: number;
}

export interface IPositiveMentions {
  bcomReviewScores: any[];
}

export interface IContentEngagement {
  lastBooked: string;
  noOfPeopleLooking: number;
}

export interface IContentHighlights {
  locationHighlights: ILocationHighlight[];
  favoriteFeatures: IFavoriteFeature[];
}

export interface ILocationHighlight {
  distanceKm: number;
  highlightType: string;
}

export interface IFavoriteFeature {
  id: number;
  name: string;
  symbol: string;
}

export interface IContentFeatures {
  featureGroups: IFeatureGroup[];
  hotelFacilities: IHotelFacility[];
  summary: ISummary;
}

export interface IFeatureGroup {
  id: number;
  name: string;
  order: number;
  features: IFeature[];
}

export interface IFeature {
  id: number;
  featureName: string;
  symbol: string;
  available: boolean;
  order: number;
  images?: IImage[];
}

export interface IImage {
  caption: string;
  urls: IUrl[];
}

export interface IHotelFacility {
  id: number;
}

export interface ISummary {
  chineseFriendly: boolean;
  hygienePlusFacilities: any;
}

export interface IContentInformation {
  policies: IPolicies;
  isAgodaVerified: boolean;
  messaging: IMessaging;
  blockedNationalities: any[];
  checkInInformation: ICheckInInformation;
  usefulInfoGroups: IUsefulInfoGroup[];
  notes: INotes;
  description: IDescription;
  nhaInformation: any;
  restaurantOnSite: IRestaurantOnSite[];
  certificate: any;
  staffVaccinationInfo: any;
}

export interface IPolicies {
  children: IChildren;
  hotelAgePolicy: IHotelAgePolicy;
  extraBed: string[];
  additional: string[];
  adult: string[];
  minAge: any[];
}

export interface IChildren {
  stayFreeAgeRange: IStayFreeAgeRange;
  details: IDetail[];
}

export interface IStayFreeAgeRange {
  min: number;
  max: number;
}

export interface IDetail {
  title: string;
  description: string;
}

export interface IHotelAgePolicy {
  infantAges: IAgeRange;
  childAges: IAgeRange;
  isChildStayFree: boolean;
  minGuestAge: number;
}

export interface IAgeRange {
  min: number;
  max: number;
}

export interface IMessaging {
  hostName: any;
  isAllowedPreBooking: boolean;
  isAllowedPostBooking: boolean;
  isAllowedWithBooking: boolean;
  isAllowedInHouseFeedback: boolean;
  isAllowedInHouseRequest: boolean;
}

export interface ICheckInInformation {
  checkInFrom: ITime;
  checkOutUntil: ITime;
}

export interface ITime {
  hh: number;
  mm: number;
}

export interface IUsefulInfoGroup {
  id: number;
  name: string;
  usefulInfo: IUsefulInfo[];
}

export interface IUsefulInfo {
  id: number;
  name: string;
  description: string;
  symbol: string;
}

export interface INotes {
  importantNotes: string[];
  publicNotes: string[];
}

export interface IDescription {
  short: string;
  long: string;
}

export interface IRestaurantOnSite {
  id: number;
  name: string;
  servings: string[];
  cuisines: string[];
}

export interface IContentSummary {
  accommodation: IAccommodation;
  agodaGuaranteeProgram: boolean;
  hasHostExperience: boolean;
  localeName: string;
  defaultName: string;
  propertyType: string;
  propertyLinks: IPropertyLinks;
  geoInfo: IGeoInfo;
  address: IAddress;
  spokenLanguages: ISpokenLanguage[];
  nhaSummary: INhaSummary;
  rating: number;
}

export interface IAccommodation {
  accommodationType: number;
  accommodationName: string;
}

export interface IPropertyLinks {
  propertyPage: string;
}

export interface IGeoInfo {
  latitude: number;
  longitude: number;
  obfuscatedLat: number;
  obfuscatedLong: number;
}

export interface IAddress {
  address1: string;
  address2: string;
  postalCode: string;
  country: ICountry;
  city: ICity;
  area: IArea;
}

export interface ICountry {
  id: number;
  name: string;
}

export interface ICity {
  id: number;
  name: string;
}

export interface IArea {
  name: string;
}

export interface ISpokenLanguage {
  id: number;
}

export interface INhaSummary {
  isRareFind: any;
  supportedLongStay: any;
}

export interface IContentLocalInformation {
  nearbyPlaces: INearbyPlace[];
  topPlaces: ITopPlace[];
  nearbyProperties: INearbyProperty[];
  walkablePlaces: IWalkablePlaces;
  nearbyShops: INearbyShop[];
}

export interface INearbyPlace {
  name: string;
  distanceInKm: number;
  geoInfo: IGeoInfo;
  typeId: number;
  typeName: string;
}

export interface ITopPlace {
  name: string;
  distanceInKm: number;
  geoInfo: IGeoInfo;
  typeId: number;
  typeName: string;
}

export interface INearbyProperty {
  categoryName: string;
  categorySymbol: string;
  places: IPlace[];
}

export interface IPlace {
  name: string;
  distanceInKm: number;
  duration: any;
  durationIcon: any;
  geoInfo: IGeoInfo;
}

export interface IWalkablePlaces {
  title: string;
  description: string;
  totalCount: number;
  walkableCategories: IWalkableCategory[];
}

export interface IWalkableCategory {
  categoryName: string;
  totalCount: number;
  topPlaces: ITopPlace[];
}

export interface INearbyShop {
  name: string;
  typeId: number;
  distanceInKm: number;
  geoInfo: IGeoInfo;
}

export interface IContentExperiences {
  experience: IExperience[];
}

export interface IExperience {
  symbol: string;
  landmarks: ILandmark[];
}

export interface ILandmark {
  name: string;
  geoInfo: IGeoInfo;
  scores: any;
  distanceInKm: number;
}

export interface IMetaLab {
  propertyAttributes: IPropertyAttribute[];
}

export interface IPropertyAttribute {
  attributeId: number;
  value: string;
}
