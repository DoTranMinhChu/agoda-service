export interface IHotelsAutoCompleteResponse {
  id: string;
  name: string;
  typeId: number;
  typeName: string;
  subTypeId: number;
  subTypeName: string;
  area: IHotelState;
  city?: IHotelState;
  country: IHotelState;
  latitude: number;
  longitude: number;
  searchType: number;
  imageUrl: string;
  activeHotels: number;
  landingUrl: string;
  state?: IHotelState;
}
export interface IHotelBaseText {
  title: string;
  subtitle: string;
  note: string;
}
export interface IHotelAmountBase {
  amount: number;
}

export interface IHotelPriceBase {
  exclusive: number;
  inclusive: number;
}
// =========== Hotel Auto Complete ===============
interface IHotelState {
  id: number;
  name: string;
}

// =========== Hotel Search Overnight Start ===============

export interface ISearchHotelResponse {
  searchResult: ISearchHotelResult;
  properties: ISearchHotelProperty[];
  aggregation: IHotelAggregation;
  geoPlaces: ISearchHotelGeoPlace[];
  searchEnrichment: ISearchHotelEnrichment;
  featuredAgodaHome: ISearchHotelProperty[];
  highlyRatedAgodaHomes: ISearchHotelProperty[];
  extraAgodaHomes: any[];
  filters: IFilters;
}

export interface ISearchHotelResult {
  searchInfo: ISearchHotelInfo;
  urgencyDetail: ISearchHotelUrgencyDetail;
  histogram: IHotelHistogram;
  isFreeTextSortMatch: any;
  nhaProbability: string;
  cid: number;
}

export interface ISearchHotelInfo {
  totalActiveHotels: number;
  totalFilteredHotels: number;
  totalAvailableHotelsWithoutFilter: number;
  searchStatus: ISearchHotelInfoStatus;
  objectInfo: ISearchHotelObjectInfo;
  isComplete: boolean;
  hasSecretDeal: boolean;
  hasInsiderDeal: boolean;
  pollingInfoResponse: any;
  hasEscapesPackage: boolean;
}

export interface ISearchHotelInfoStatus {
  searchStatus: string;
  searchCriteria: ISearchCriteria;
}

export interface ISearchCriteria {
  checkIn: string;
}

export interface ISearchHotelObjectInfo {
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

export interface ISearchHotelUrgencyDetail {
  urgencyScore: number;
}

export interface IHotelHistogram {
  bins: IHotelHistogramBin[];
  maxMinPrice: IHotelMaxMinPrice;
}

export interface IHotelHistogramBin {
  numOfElements: number;
  upperBound: IHotelUpperBound;
}

export interface IHotelUpperBound {
  perNightPerRoom: number;
  perBooking: number;
}

export interface IHotelMaxMinPrice {
  perRoomPerNight: IHotelPriceRange;
  perBook: IHotelPriceRange;
}

export interface IHotelPriceRange {
  max: number;
  median: any;
  min: number;
}

export interface ISearchHotelProperty {
  propertyId: number;
  propertyResultType: string;
  metaLab: IHotelMetaLab;
  soldOut: any;
  content: IHotelContent;
  enrichment: IHotelEnrichment;
  sponsoredDetail: IHotelSponsoredDetail;
  pricing: ISearchHotelPropertyPricing;
}

export interface IHotelMetaLab {
  attributes: IHotelAttribute[];
}

export interface IHotelAttribute {
  attributeId: number;
  value: string;
}

export interface IHotelContent {
  propertyId: number;
  features: IHotelFeatures;
  informationSummary: IInformationSummary;
  highlight: IHighlight;
  nonHotelAccommodation: INonHotelAccommodation;
  reviews: IHotelReviews;
  familyFeatures: IHotelFamilyFeatures;
  propertyEngagement: ISearchHotelPropertyEngagement;
  images: IHotelImages;
  localInformation: IHotelLocalInformation;
  rateCategories: IHotelRateCategories;
}

export interface IHotelFeatures {
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
  accommodation: IHotelAccommodation;
  remarks: any;
  address: IHotelAddress;
  geoInfo: IHotelGeoInfo;
  rating: number;
  spokenLanguages: IHotelContentSpokenLanguage[];
  awardYear: any;
  hasHostExperience: boolean;
  agodaGuaranteeProgram: boolean;
  isSustainableTravel: boolean;
  hotelCharacter?: IHotelCharacter;
}

export interface IHotelAccommodation {
  accommodationName: string;
  accommodationType: number;
}

export interface IHotelAddress {
  country: IHotelCountry;
  city: IHotelCity;
  area: IHotelArea;
}

export interface IHotelCountry {
  id: number;
  name: string;
}

export interface IHotelCity {
  id: number;
  name: string;
}

export interface IHotelArea {
  id: number;
  name: string;
}

export interface IHotelGeoInfo {
  latitude: number;
  longitude: number;
  obfuscatedLat: number;
  obfuscatedLong: number;
}

export interface IHotelContentSpokenLanguage {
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
  cityCenter: IHotelCityCenter;
  hasNearbyPublicTransportation: boolean;
}

export interface IHotelCityCenter {
  isInsideCityCenter: boolean;
  distanceFromCityCenter: number;
}

export interface INonHotelAccommodation {
  masterRooms: any[];
  hostLevel: any;
  isRareFind: any;
  supportedLongStay: any;
}

export interface IHotelReviews {
  cumulative: IHotelCumulative;
  contentReview: IHotelContentReview[];
}

export interface IHotelCumulative {
  reviewCount: number;
  score: number;
}

export interface IHotelContentReview {
  providerId: number;
  isDefault: boolean;
  demographics: IHotelDemographics;
  summaries?: IHotelSummaries;
  cumulative: IHotelCumulative;
}

export interface IHotelDemographics {
  groups: IHotelGroup[];
}

export interface IHotelGroup {
  id: number;
  reviewCount: number;
  grades: IHotelGrade[];
}

export interface IHotelGrade {
  id: string;
  score: number;
}

export interface IHotelSummaries {
  recommendationScores: IHotelRecommendationScore[];
}

export interface IHotelRecommendationScore {
  recommendationScore: number;
}

export interface IHotelFamilyFeatures {
  isFamilyRoom: boolean;
  isInterConnectingRoom: boolean;
  isInfantCottageAvailable: boolean;
  hasKidsClub: boolean;
  hasKidsPool: boolean;
}

export interface ISearchHotelPropertyEngagement {
  peopleLooking: number;
  lastBooking: string;
  todayBooking: string;
}

export interface IHotelImages {
  hotelImages: IHotelImage[];
}

export interface IHotelImage {
  id: number;
  caption: string;
  urls: IHotelUrl[];
  groupId: string;
  typeId: number;
  uploadedDate: Date;
  blurhash: string;
  snippet: any;
}

export interface IHotelUrl {
  key: string;
  value: string;
}

export interface IHotelLocalInformation {
  landmarks: IHotelLandmarks;
  hasAirportTransfer: boolean;
}

export interface IHotelLandmarks {
  topLandmark: IHotelTopLandmark[];
}

export interface IHotelTopLandmark {
  landmarkName: string;
  distanceInM: number;
}

export interface IHotelRateCategories {
  escapeRateCategories: any;
}

export interface IHotelEnrichment {
  topSellingPoint: IHotelTopSellingPoint[];
  uniqueSellingPoint: IHotelUniqueSellingPoint[];
  roomInformation: IHotelRoomInformation;
}

export interface IHotelTopSellingPoint {
  tspType: string;
  value?: number;
  cmsId: number;
}

export interface IHotelUniqueSellingPoint {
  uspType: string;
  uspPropertyType?: string;
  value?: number;
  rank: number;
  segment?: string;
}

export interface IHotelRoomInformation {
  cheapestRoomSizeSqm: any;
  cheapestRoomName?: string;
}

export interface IHotelSponsoredDetail {
  trackingData?: string;
  sponsoredType: string;
  isShowSponsoredFlag: boolean;
}

export interface ISearchHotelPropertyPricing {
  hotelId: number;
  isReady: boolean;
  isAvailable: boolean;
  isEasyCancel: boolean;
  isSuggested: boolean;
  payment: IHotelPayment;
  pricingMessages: IHotelPricingMessage[];
  benefits: number[];
  offers: IHotelOffer[];
  roomBundle?: IHotelRoomBundle;
  suggestedRoomQuantity: number;
  suggestPriceType: ISuggestPriceType;
  loyaltyDisplay: IHotelLoyaltyDisplay;
  cheapestStayPackageRatePlans: ICheapestStayPackageRatePlan[];
}

export interface IHotelPayment {
  payLater: IHotelPayLater;
  cancellation: IHotelCancellation;
  noCreditCard: IHotelNoCreditCard;
  payAtHotel: IHotelPayAtHotel;
}

export interface IHotelPayLater {
  isEligible: boolean;
  authDate: string;
  chargeDate: string;
}

export interface IHotelCancellation {
  code: string;
  cancellationType: string;
}

export interface IHotelNoCreditCard {
  isEligible: boolean;
}

export interface IHotelPayAtHotel {
  isEligible: boolean;
}

export interface IHotelPricingMessage {
  location: number;
  ids: number[];
}

export interface IHotelOffer {
  bundleType: string;
  bundleDetail?: IHotelBundleDetail;
  roomOffers: IHotelRoomOffer[];
}

export interface IHotelBundleDetail {
  bundleSegmentRoomIdentifiers: IBundleSegmentRoomIdentifier[];
}

export interface IBundleSegmentRoomIdentifier {
  roomIdentifier: string;
  quantity: number;
}

export interface IHotelRoomOffer {
  room: IHotelRoom;
}

export interface IHotelRoom {
  uid: string;
  supplierId: number;
  availableRooms: number;
  benefits: IHotelBenefit[];
  payment: IHotelPayment;
  localVoucher: any;
  campaign: any;
  isPromoEligible: boolean;
  occupancy: number;
  agodaCash: IHotelAmountBase;
  cashback: any;
  discount: IHotelDiscount;
  channel: IHotelRoomChannel;
  promotions: any;
  loyaltyDisplay?: IHotelLoyaltyDisplay;
  bookingDuration: any;
  corInfo: IHotelCorInfo;
  pricing: IHotelRoomPricing[];
}

export interface IHotelBenefit {
  benefitId: number;
  message: string;
}

export interface IHotelDiscount {
  originalPrice: number;
  discountPercentage: number;
}

export interface IHotelRoomChannel {
  channel: string;
}

export interface IHotelLoyaltyDisplay {
  loyaltyName: string;
  loyaltyProgramName: string;
  loyaltyBenefits: IHotelLoyaltyBenefit[];
}

export interface IHotelLoyaltyBenefit {
  title: string;
  description: string;
}

export interface IHotelCorInfo {
  condition: string;
}

export interface IHotelRoomPricing {
  price: IHotelRoomPrice;
  hotelPromo: IHotelPromo;
  customerPoints: IHotelRoomCustomerPoints;
  customerPay?: IHotelRoomCustomerPay;
  rebateInCountry: IRebateInCountry;
  vatOnServiceCharge: IVatOnServiceCharge;
  vatOnBoardingPass: IVatOnBoardingPass;
  vatOnCouponDiscount: IVatOnCouponDiscount;
}

export interface IHotelRoomPrice {
  perRoomPerNight: number;
  perBooking: number;
}

export interface IHotelPromo {
  totalPromo: number;
}

export interface IHotelRoomCustomerPoints {
  pointsAmount: number;
}

export interface IHotelRoomCustomerPay {
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

export interface IHotelRoomBundle {
  roomOfferList: IHotelRoomOfferList[];
}

export interface IHotelRoomOfferList {
  roomOffer: IHotelRoomOffer;
}

export interface ISuggestPriceType {
  suggestPriceType: string;
}

export interface ICheapestStayPackageRatePlan {
  pricingMessages: IHotelPricingMessage[];
  benefits: number[];
  roomBundle?: IHotelRoomBundle;
  suggestedRoomQuantity: number;
  suggestPriceType: ISuggestPriceType;
}

export interface IHotelAggregation {
  matrixGroupResults: IMatrixGroupResult[];
  agodaHomesCount: IAgodaHomesCount;
}
export interface IMatrixGroupResult {
  matrixGroup: string;
  matrixItemResults: IMatrixItemResult[];
}
export interface IMatrixItemResult {
  id: number;
  filterKey: string;
  filterRequestType: string;
  name: string;
  count: number;
}
export interface IAgodaHomesCount {
  properties: ISearchHotelProperty[];
}

export interface ISearchHotelGeoPlace {
  id: number;
  landmarkTypeId: number;
  placeType: number;
  name: string;
  abbreviation: string;
  latitude: number;
  longitude: number;
}

export interface ISearchHotelEnrichment {
  enrichment: string;
  creditCardCampaignInfos: any[];
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
  contentDetail: IHotelContentDetail;
  metaLab: IHotelMetaLab;
}

export interface IHotelContentDetail {
  propertyId: number;
  hostProfile: any;
  contentImages: IHotelContentImages;
  contentReviewScore: IHotelContentReviewScore;
  contentReviewSummaries: IHotelContentReviewSummaries;
  contentEngagement: IHotelContentEngagement;
  contentHighlights: IHotelContentHighlights;
  contentFeatures: IHotelContentFeatures;
  contentInformation: IHotelContentInformation;
  contentSummary: IHotelContentSummary;
  contentLocalInformation: IHotelContentLocalInformation;
  contentExperiences: IHotelContentExperiences;
}

export interface IHotelContentImages {
  hotelImages: IHotelImage[];
  matterports: any[];
  categories: ICategory[];
}

export interface IHotelUrl {
  key: string;
  value: string;
}

export interface ICategory {
  category: string;
  count: number;
}

export interface IHotelContentReviewScore {
  combinedReviewScore: IHotelCumulative;
  providerReviewScore: IProviderReviewScore[];
}

export interface IHotelCumulative {
  score: number;
  reviewCount: number;
}

export interface IProviderReviewScore {
  providerId: number;
  isDefault: boolean;
  cumulative: IHotelCumulative;
  demographics: IHotelDemographics;
  trendingScore?: ITrendingScore;
}

export interface IHotelDemographics {
  groups: IHotelGroup[];
  allGuest: IAllGuest;
}

export interface IHotelGroup {
  id: number;
  reviewCount: number;
  grades: IHotelGrade[];
}

export interface IHotelGrade {
  id: string;
  score: number;
}

export interface IAllGuest {
  id: number;
  reviewCount: number;
  grades: IHotelGrade[];
}

export interface ITrendingScore {
  past14DaysUplift: number;
  past30DaysUplift: number;
}

export interface IHotelContentReviewSummaries {
  snippets: ISnippet[];
  recommendationScores: IHotelRecommendationScores;
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

export interface IHotelRecommendationScores {
  recommendationScore: number;
}

export interface IPositiveMentions {
  bcomReviewScores: any[];
}

export interface IHotelContentEngagement {
  lastBooked: string;
  noOfPeopleLooking: number;
}

export interface IHotelContentHighlights {
  locationHighlights: ILocationHighlight[];
  favoriteFeatures: IHotelFeature[];
}

export interface ILocationHighlight {
  distanceKm: number;
  highlightType: string;
}

export interface IHotelFeature {
  id: number;
  name: string;
  symbol: string;
}

export interface IHotelContentFeatures {
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
  urls: IHotelUrl[];
}

export interface IHotelFacility {
  id: number;
}

export interface ISummary {
  chineseFriendly: boolean;
  hygienePlusFacilities: any;
}

export interface IHotelContentInformation {
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

export interface IHotelContentSummary {
  accommodation: IHotelAccommodation;
  agodaGuaranteeProgram: boolean;
  hasHostExperience: boolean;
  localeName: string;
  defaultName: string;
  propertyType: string;
  propertyLinks: ISearchHotelPropertyLinks;
  geoInfo: IHotelGeoInfo;
  address: IHotelAddress;
  spokenLanguages: IHotelContentSpokenLanguage[];
  nhaSummary: IHotelNhaSummary;
  rating: number;
}

export interface IHotelAccommodation {
  accommodationType: number;
  accommodationName: string;
}

export interface ISearchHotelPropertyLinks {
  propertyPage: string;
}

export interface IHotelGeoInfo {
  latitude: number;
  longitude: number;
  obfuscatedLat: number;
  obfuscatedLong: number;
}

export interface IHotelAddress {
  address1: string;
  address2: string;
  postalCode: string;
  country: IHotelCountry;
  city: IHotelCity;
  area: IHotelArea;
}

export interface IHotelCountry {
  id: number;
  name: string;
}

export interface IHotelCity {
  id: number;
  name: string;
}

export interface IHotelArea {
  name: string;
}

export interface IHotelContentSpokenLanguage {
  id: number;
}

export interface IHotelNhaSummary {
  isRareFind: any;
  supportedLongStay: any;
}

export interface IHotelContentLocalInformation {
  nearbyPlaces: IHotelNearbyPlace[];
  topPlaces: IHotelTopPlace[];
  nearbyProperties: IHotelNearbyProperty[];
  walkablePlaces: IHotelWalkablePlaces;
  nearbyShops: IHotelNearbyShop[];
}

export interface IHotelNearbyPlace {
  name: string;
  distanceInKm: number;
  geoInfo: IHotelGeoInfo;
  typeId: number;
  typeName: string;
}

export interface IHotelTopPlace {
  name: string;
  distanceInKm: number;
  geoInfo: IHotelGeoInfo;
  typeId: number;
  typeName: string;
}

export interface IHotelNearbyProperty {
  categoryName: string;
  categorySymbol: string;
  places: IPlace[];
}

export interface IPlace {
  name: string;
  distanceInKm: number;
  duration: any;
  durationIcon: any;
  geoInfo: IHotelGeoInfo;
}

export interface IHotelWalkablePlaces {
  title: string;
  description: string;
  totalCount: number;
  walkableCategories: IHotelWalkableCategory[];
}

export interface IHotelWalkableCategory {
  categoryName: string;
  totalCount: number;
  topPlaces: IHotelTopPlace[];
}

export interface IHotelNearbyShop {
  name: string;
  typeId: number;
  distanceInKm: number;
  geoInfo: IHotelGeoInfo;
}

export interface IHotelContentExperiences {
  experience: IHotelExperience[];
}

export interface IHotelExperience {
  symbol: string;
  landmarks: IHotelLandmark[];
}

export interface IHotelLandmark {
  name: string;
  geoInfo: IHotelGeoInfo;
  scores: any;
  distanceInKm: number;
}

export interface IHotelMetaLab {
  propertyAttributes: ISearchHotelPropertyAttribute[];
}

export interface ISearchHotelPropertyAttribute {
  attributeId: number;
  value: string;
}

// ========= Hotel Review ========

export interface IHotelReviewResponse {
  comments: IHotelReviewComment[];
  errors: any[];
  resultStatus: IHotelResultStatus;
  serverTime: string;
  serverName: string;
  processTime: any;
}

export interface IHotelReviewComment {
  id: number;
  providerId: number;
  reviewerInfo: IHotelReviewCommentReviewerInfo;
  reviewDetail: IHotelReviewCommentReviewDetail;
  responseInfo: any;
  rating: IHotelReviewCommentRating;
}

export interface IHotelReviewCommentReviewerInfo {
  name: string;
  demographicName: string;
  country: IHotelReviewCommentReviewerInfoCountry;
  checkInDate: string;
  checkOutDate: string;
}

export interface IHotelReviewCommentReviewerInfoCountry {
  id: number;
  name: string;
  countryIso2: string;
}

export interface IHotelReviewCommentReviewDetail {
  date: string;
  title: string;
  originalTitle: string;
  positive: string;
  negative: string;
  comment: string;
  originalComment: string;
  languageId: number;
}

export interface IHotelReviewCommentRating {
  score: number;
  scoreText: string;
}

export interface IHotelResultStatus {
  category: number;
  serverStatus: number;
  message: string;
  serverMessage: string;
  severity: number;
  isSuccess: boolean;
}

// ======= Room price ===========

export interface IRoomPriceResponse {
  resultStatus: IHotelResultStatus;
  serverTime: string;
  serverName: string;
  debugLogs: any[];
  roomGroups: IHotelRoomGroup[];
  refreshComplete: boolean;
  roomFilters: any[];
  benefitOrders: number[];
  cheapestRoomTokens: string[];
  roomBundles: any[];
  jtbRatePlanExist: boolean;
  searchToken: string;
  searchId: string;
  enableChildWidget: boolean;
  searchInfo: ISearchHotelInfo;
  eligibleWalletPromotions: any[];
  isEligibleForBasket: boolean;
}
export interface IHotelRoomGroup {
  masterRoomTypeId: number;
  masterRoomTypeName: string;
  masterRoomTypeAlternateName: string;
  masterRoomTypeEnglishName: string;
  cheapestRoomToken: string;
  cheapestRoomTokens: string[];
  rooms: IHotelRoomItem[];
  bedType: string;
  roomSize: number;
  sizeInfo: IHotelRoomGroupSizeInfo;
  facilities: number[];
  occupancyInfo: IHotelRoomOccupancyInfo;
  features: IHotelFeature[];
  images: IHotelImage[];
  suitableFor: any[];
  allowChildren: boolean;
  isRecommended: boolean;
}

export interface IHotelRoomItem {
  roomToken: string;
  uid: string;
  pc: IHotelRoomPc;
  cashback: IHotelRoomCashback;
  breakfastIncluded: boolean;
  benefits: IHotelRoomBenefit[];
  badgeType: number;
  badges: any[];
  roomOccupancyDescription: string;
  remainRoom: number;
  roomInfoComponent: IHotelRoomInfoComponent[];
  providerText: IHotelRoomProviderText;
  cancellationPolicyType: number;
  currentCancellationPolicyType: number;
  cancellationPolicyTitle: string;
  cancellationPolicyTitleTemplate: IHotelRoomInfoTemplate;
  cancellationPolicy: string;
  cancellationInfo: IHotelRoomCancellationInfo;
  isBnpl: boolean;
  isAgency: boolean;
  isMultiHotelEligible: boolean;
  isPromoCodeEligible: boolean;
  isVipDiscountEligible: boolean;
  isFullyChargeAtAgoda: boolean;
  isCreditCardRequired: boolean;
  isApplePayAvailable: boolean;
  isImportantInformationTextRequired: boolean;
  masterRoomTypeId: number;
  roomName: string;
  englishRoomName: string;
  roomView: string;
  roomSize: number;
  isPromotionEligible: boolean;
  promotionDiscount: IRoomPromotionDiscount;
  maxRoomOccupancy: number;
  isExtrabedAvaiable: boolean;
  hasSurcharge: boolean;
  minimumFitRooms: number;
  numberOfGuestsWithoutRoom: number;
  isBOR: boolean;
  occupancyInfo: IHotelRoomOccupancyInfo;
  hasBookingFee: boolean;
  paymentInfo: IHotelRoomPaymentInfo;
  suggestedRoomQuantity: number;
  discountMessages: any[];
  isFreeChildrenSuggestionEligible: boolean;
  channelId: number;
  stackedChannels: IHotelRoomStackedChannels;
  isEasyCancel: boolean;
  roomIdentifiers: string;
  rareFindType: number;
  roomOfferNameType: string;
  hasAnyBreakfastRelatedBenefits: boolean;
  isTaiwanCampaignEligible: boolean;
  isGoLocalEligible: boolean;
  cartEligible: boolean;
  pricingDisplaySummary: IHotelRoomPricingDisplaySummary;
  isCartRestricted: boolean;
  allowMultipleBooking: boolean;
  papiRoomIdentifier: string;
  roomTypeId: number;
  bfUrl: string;
  roomOccupancy: number;
  cancellationPolicyCode: string;
  rateplanID: number;
  promotionID: number;
  roomNumAdult: number;
  roomNumChild: number;
  roomDMCId: string;
  rateCategory: IHotelRoomRateCategory;
  price: number;
  pricePerNight: number;
  priceType: number;
  crossedPrice: number;
  isInclusive: boolean;
  promotionType: number;
  promotionSavings: number;
  maxChildren: number;
  lastBookedTimeStamp: string;
  HasSummaryData: boolean;
  hasTaxPerPerson: boolean;
  isRequiredAddress: boolean;
}

export interface IHotelRoomPc {
  a: number;
  i: string;
  e: string;
  t: number;
  s: number;
  cor: number;
  ccor: number;
  tf: number;
  tfPRPN: number;
  promotionPricePeek: number;
  originalTotal: number;
  pseudoCoupon: number;
  priceFreezePrice: IHotelPriceBase;
}

export interface IHotelRoomCashback {
  total: IHotelAmountBase;
  extraBedAmount: IHotelAmountBase;
  totalAfterCashback: IHotelAmountBase;
  showPostCashbackPrice: boolean;
  earnId: number;
  expiryDay: number;
  dayToEarn: number;
  percent: number;
  cashbackType: string;
  tcUrl: string;
  cashbackVersion: string;
}

export interface IHotelRoomBenefit {
  id: number;
  displayText: string;
  available: boolean;
  targetType: string;
  benefitValue: number;
  labels: any[];
}

export interface IHotelRoomInfoComponent {
  title: string;
  subSectionComponents: IHotelRoomSubSectionComponent[];
  sectionType: number;
  type: number;
}

export interface IHotelRoomSubSectionComponent {
  subTitle?: string;
  des: string;
  icontype: number;
}

export interface IHotelRoomProviderText {
  room: IHotelBaseText;
  payment: IHotelBaseText;
}

export interface IHotelRoomCancellationInfo {
  type: number;
  currentType: number;
  freeCancellationDate: string;
  titleTemplate: IHotelRoomInfoTemplate;
  descriptionTemplate: IHotelRoomInfoTemplate;
  noShowPolicy: string;
  policies: string[];
  cancellationCode: string;
}
export interface IHotelRoomInfoTemplate {
  template: string;
  arguments: ITemplateArgument[];
}
export interface ITemplateArgument {
  id: string;
  type: number;
  value: string;
}

export interface IRoomPromotionDiscount {
  typeId: number;
  v: number;
  u: number;
  id: number;
}

export interface IHotelRoomOccupancyInfo {
  maxOccupancy: number;
  extraBed: number;
  maxFreeChildren: number;
  perOfferFreeChildrenAndInfants: number;
  maxAdults: number;
  maxChildren: number;
  noOfFreeChildren: number;
  noOfChildrenWithChildRate: number;
}

export interface IHotelRoomPaymentInfo {
  isPrepay: boolean;
  paymentModel: number;
}

export interface IHotelRoomStackedChannels {
  id: number;
  channelBreakDowns: any[];
}

export interface IHotelRoomPricingDisplaySummary {
  perBook: IHotelRoomPricePer;
  perRoomPerBook: IHotelRoomPricePer;
  perRoomPerNight: IHotelRoomPricePer;
  perNight: IHotelRoomPricePer;
}

export interface IHotelRoomPricePer {
  chargeTotal: IHotelRoomPricePerDetail;
  rebateTotal: IHotelRoomPricePerDetail;
  rebateExtraBed: IHotelRoomPricePerDetail;
  displayTotal: IHotelRoomPricePerDetail;
  pseudoCoupon: IHotelRoomPricePerDetail;
  originalTotal: IHotelRoomPricePerDetail;
  crossedOut: IHotelRoomPricePerDetail;
  payToAgoda: IHotelRoomPricePerDetail;
  payAtHotel: IHotelRoomPricePerDetail;
  ignoreDownliftAmount: IHotelRoomPricePerDetail;
  autoAppliedPromoDiscount: any;
}
export interface IHotelRoomPricePerDetail {
  exclusive: number;
  allInclusive: number;
}
export interface IHotelRoomRateCategory {
  id: number;
  stayPackageType: number;
  checkIn: any;
  checkOut: any;
  isChildRateEnabled: boolean;
}

export interface IHotelRoomGroupSizeInfo {
  size: number;
  unit: string;
  fullDescription: string;
}

//===== Hotel Detail Other =======

export interface IHotelDetailOtherResponse {
  type: string;
  name: string;
  children: IHotelDetailOtherChildren[];
  screens: any[];
}

export interface IHotelDetailOtherChildren {
  type: string;
  property: IHotelDetailOtherChildrenProperty;
  pois: IHotelDetailOtherChildrenPoi[];
  isSelectRoomAvailable: boolean;
  viewMode: string;
  child: IHotelDetailOtherChild;
}
export interface IHotelDetailOtherChildrenProperty {
  id: number;
  name: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  cityId: number;
  countryId: number;
  priceAmount: number;
  priceCrossOut: number;
  cashbackVersion: string;
  isLocationHidden: boolean;
  isSingleRoomNha: boolean;
  isSoldOut: boolean;
  bookingDuration: IHotelDetailOtherChildrenPropertyBookingDuration;
  shouldShowAgodaHomesBadge: boolean;
  distanceDescription: string;
  review: IHotelDetailOtherChildrenPropertyReview;
  rating: IHotelDetailOtherChildrenPropertyRating;
  propertyType: string;
}
export interface IHotelDetailOtherChildrenPropertyBookingDuration {
  type: string;
  duration: number;
}

export interface IHotelDetailOtherChildrenPropertyReview {
  score: number;
  quote: string;
  count: number;
}

export interface IHotelDetailOtherChildrenPropertyRating {
  rating: number;
  shape: string;
  style: string;
}

export interface IHotelDetailOtherChildrenPoi {
  latitude: number;
  longitude: number;
  name: string;
  distance: number;
  type: string;
  filterType: string;
}

export interface IHotelDetailOtherChild {
  type: string;
  header: IHotelDetailOtherChildHeader;
  headerIsOverlay: boolean;
  content: IHotelDetailOtherChildContent;
  footer: IHotelDetailOtherChildFooter;
  onPageLoaded: any;
}

export interface IHotelDetailOtherChildHeader {
  type: string;
  isTransparent: boolean;
  backVariant: string;
  content: IHotelDetailOtherChildHeaderContent;
  trailingItems: IHotelDetailOtherTrailingItem[];
}

export interface IHotelDetailOtherChildHeaderContent {
  type: string;
  title: string;
  subtitle: string;
  icon: string;
  analytics: IHotelDetailOtherAnalytics;
  onClick: IHotelDetailOtherOnClick;
}

export interface IHotelDetailOtherOnClick {
  type: string;
}
export interface IHotelDetailOtherAnalytics {
  elementName: string;
  version: number;
  context: any;
  actions: string[];
}

export interface IHotelDetailOtherChildContent {
  type: string;
  isRootList: boolean;

  spacing?: string;
  alignment?: string;

  contentSlotVariant?: string;
  title?: string;
  content?: IHotelDetailOtherChildContent;
  analytics?: IHotelDetailOtherAnalytics;
  variant?: string;
  action?: IHotelDetailOtherChildHeaderContent;
  verticalPadding?: string;
  horizontalPadding?: string;
  color?: string;
  widthType?: string;

  children: IHotelDetailOtherChildContent[];

  filterGroupId?: string;
  initialSelectedFilters?: string[];

  icon?: string;
  body?: string;

  value?: string;
  maxLines?: number;

  columns?: number;
  space?: string;
}

export interface IHotelDetailOtherTrailingItem {
  type: string;
  propertyId?: number;
  icon?: string;
  selectedIcon?: string;
  shouldHighlight: boolean;
  analytics: IHotelDetailOtherAnalytics;
  onClick?: IHotelDetailOtherOnClick;
}

export interface IHotelDetailOtherChildFooter {
  type: string;
  verticalPadding: string;
  horizontalPadding: string;
  color: string;
  widthType: string;
  content: IHotelDetailOtherChildContent;
}
