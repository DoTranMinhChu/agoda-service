export interface IActivitiesAutoCompleteSuggestionResponse {
  activityId: string;
  activityName?: string;
  activityNameTranslated?: string;
  addressId: string;
  cityAbbr?: string;
  latitude: number;
  longitude: number;
  isPopular: boolean;
  isAddress: boolean;
  isBestSeller: boolean;
  isSubSuggestion: boolean;
  isCityPageEligible: boolean;
  whiteLabelToken: string;
  airportCodes: any;
  objectTypeId: number;
  displayNames: IDisplayNames;
  categories?: Array<ICategory>;
  id: number;
  name?: string;
  nameTranslated: string;
  areaId: number;
  areaName: string;
  areaNameTranslated: string;
  cityId: number;
  cityName: string;
  cityNameTranslated: string;
  countryId: number;
  countryISO2: string;
  countryName: string;
  countryNameTranslated: string;
  stateId: number;
  stateName: string;
  stateNameTranslated: string;
  placeType: number;
  type: number;
  url: string;
}
// =========== Activities Auto Complete ===============
export interface IDisplayNames {
  name: string;
  geoHierarchyName: string;
  categoryName: string;
  countryName: any;
  defaultName: any;
}

export interface ICategory {
  id: number;
  code: string;
  isPrimary: boolean;
}

export interface IActivitiesAutoCompleteResponse {
  suggestionList: Array<IActivitiesAutoCompleteSuggestionResponse>;
  searchType: number;
  types: string[];
  derivedLanguageID: number;
}

//========= Activities Search ===========
export interface IActivitiesSearchResponse {
  isCompleted: boolean;
  resultInfo: IActivitiesResultInfo;
  activities: Array<IActivityResult>;
  matrix: IActivityMatrix;
}

export interface IActivitiesResultInfo {
  totalActivities: number;
  totalFilteredActivities: number;
  pagination: { number: number; size: number };
}

export interface IActivityResult {
  masterActivityId: number;
  masterSupplierId: number;
  rankScore?: IActivityRankScore;
  activityRepresentativeInfo: IActivityRepresentativeInfo;
  content: IActivityContent;
}

export interface IActivityRankScore {
  value: number;
}
export interface IActivityRepresentativeInfo {
  activityId: string;
  activityToken: string;
  pricingSummary: IActivityRepresentativeInfoPricingSummary;
  supplierActivityCode: string;
  cancellationPolicy: IActivityRepresentativeInfoCancellationPolicy;
}
export interface IActivityRepresentativeInfoPricingSummary {
  pricing: IPricing[];
}

export interface IPricing {
  currency: string;
  display: IPricingDisplay;
}

export interface IPricingDisplay {
  perBook: IPricingDisplayPer;
  perPax: IPricingDisplayPer[];
}

export interface IPricingDisplayPer {
  displayType: string;
  quantity: number;
  total: IPricingDisplayPerTotal;
  loyaltyOffers: any[];
}
export interface IPricingDisplayPerTotal {
  exclusive: IPricingDisplayPerTotalDetail;
  allInclusive: IPricingDisplayPerTotalDetail;
}
export interface IPricingDisplayPerTotalDetail {
  chargeTotal: number;
  crossedOut: number;
}
export interface IActivityRepresentativeInfoCancellationPolicy {
  cancellationType: string;
  policies: IPolicy[];
}
export interface IPolicy {
  hoursFrom: number;
  hoursUntil: number;
  penaltyCode: string;
}

export interface IActivityContent {
  activity: IActivity;
  images: IImage[];
  reviewSummary: IReviewSummary;
  detail: IActivityContentDetail;
  contentLocale: string;
  badges: IActivityContentBadges;
  supportedLanguages: any;
}
export interface IImage {
  url: string;
  description: string;
  imageType: string;
  imageSize: IImageSize;
}

export interface IImageSize {
  height: number;
  width: number;
}

export interface IReviewSummary {
  averageScore: number;
  totalCount: number;
}
export interface IActivityContentBadges {
  activityHighlights: IActivityHighlight[];
  deals: any[];
}
export interface IActivityContentDetail {
  genericSection: IActivityContentDetailGenericSection[];
  locations: any[];
  inclusions: IActivityContentDetailBenefit[];
  exclusions: IActivityContentDetailBenefit[];
  additionalDetails: any[];
  itineraries: any[];
  offerDetails: IActivityContentOfferDetail[];
  offerGroupDetails: IActivityContentOfferGroupDetail[];
  logistics: any[];
  ticketing: IActivityContentDetailTicketing;
}

export interface IActivityContentDetailGenericSection {
  title: string;
  sectionType: string;
  content: IActivityContentDetailGenericSectionContent[];
}
export interface IActivityContentDetailGenericSectionContent {
  title: string;
  description: string;
  media: IMedia[];
}

export interface IMedia {
  description: any;
  source: string;
  mediaType: string;
}

export interface IActivityContentDetailBenefit {
  id: number;
  benefitItems: IActivityContentDetailBenefitItem[];
}

export interface IActivityContentDetailBenefitItem {
  name: string;
  description: string[];
}

export interface IActivityContentOfferDetail {
  title: string;
  description: string;
  offerDetailRef: string;
  inclusionRefId: number;
  exclusionRefId: number;
}
export interface IActivityContentOfferGroupDetail {
  offerGroupDetailsReference: string;
  offerGroupTitle: string;
}
export interface IActivityContentDetailTicketing {
  ticketTypes: string[];
}
export interface IActivityHighlight {
  badgeType: string;
  badgeData: any;
}
export interface IActivity {
  title: string;
  categories: string[];
  description: string;
  duration: IActivityDuration;
  location: IActivityLocation;
}
export interface IActivityDuration {
  minutes: number;
  minutesUntil?: number;
  durationType: string;
}

export interface IActivityLocation {
  city: IActivityLocationCity;
  addressLine: string;
  geo: IActivityLocationGeo;
  country: IActivityLocationCountry;
  postalCode: string;
}

export interface IActivityLocationCity {
  id: number;
  name: string;
}

export interface IActivityLocationGeo {
  lat: number;
  long: number;
}

export interface IActivityLocationCountry {
  id: number;
  name: string;
}

export interface IActivityMatrix {
  sort: IActivityMatrixSort;
  filter: IActivityMatrixFilter;
}

export interface IActivityMatrixSort {
  availableCode: string[];
  availableOrder: string[];
}

export interface IActivityMatrixFilter {
  rangeFilterMatrix: IActivityRangeFilterMatrix[];
  valueFilterMatrix: IActivityValueFilterMatrix[];
}

export interface IActivityRangeFilterMatrix {
  code: string;
  min: number;
  max: number;
  bucket: any[];
}

export interface IActivityValueFilterMatrix {
  availableValue: IActivityValueFilterMatrixAvailableValue[];
  code: string;
}

export interface IActivityValueFilterMatrixAvailableValue {
  count: number;
  id: string;
}

export interface IMeta {
  currentPage: number;
  limit: number;
  totalRecords: number;
  totalPage: number;
}
//========= Activities Detail ===========
export interface IActivityDetailResponse {
  isCompleted: boolean;
  activity: IActivityResult;
  fieldContentTypes: Array<IFieldContentType>;
}
export interface IFieldContentType {
  fieldType: "ACTIVITY_DESCRIPTION";
  contentType: "MARKDOWN";
}
//========= Activities Review ===========
export interface IActivitiesReviewsResponse {
  isCompleted: boolean;
  resultInfo: IActivitiesReviewsResultInfo;
  reviews: Array<IActivityReviewResult>;
  masterActivityId: number;
  masterSupplierId: number;
  reviewScore: number;
  matrix: IActivityMatrix;
}
export interface IActivitiesReviewsResultInfo {
  totalReviews: number;
  totalFilteredReviews: number;
  pagination: { number: number; size: number };
}
export interface IActivityReviewResult {
  reviewId: number;
  reviewSource: string;
  authorName: string;
  title: string;
  reviewText: string;
  reviewDateTime: string;
  reviewScore: number;
  helpfulVoteCount: number;
  isTranslationRequired: boolean;
  media: IMedia[];
  replies: any[];
}
