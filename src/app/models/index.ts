interface HomepageValuesResponse {
  upcomingEventsCount: number;
  ticketSoldCount: number;
  totalCustomerCount: number;
}

interface verifyResponse {
  accessToken: string;
}

interface CreateAccountResponse {
  userId: string;
}

interface resetPassRequestResponse {
  resetToken: string;
}

interface CreateAccountModels {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  role: string;
  password: string;
}

interface LoginModel {
  email: string;
  password: string;
}

interface IdNameQuery {
  id: string;
  name: string;
}

interface Event {
  id: string;
  date: string;
  desc: string;
  eventName: string;
  image: string;
  time: string;
  userId: string;
  contractAddress: string;
  categoryId: string;
  categoryTypeId: string;
  locationId: string;
  createdAt: string;
  updatedAt: string;
  priceLabel: string;
  location: {
    id: string;
    name: string;
  };
  eventCategory: {
    id: string;
    name: string;
  };
  eventCategoryType: {
    id: string;
    name: string;
    categoryId: string;
  };
  creatorId: {
    id: string;
    name: string;
    createdAt: string;
  };
}

interface GetEventsByFilterRequestModel {
  page: number;
  size: number;
  locationId?: string;
  organizerId?: string;
  endDate?: string;
  categoryTypeId?: string;
  categoryId?: string;
  sortBy?: string;
  sortOrder?: string;
}

interface EventFilterTypes {
  orderTypes: IdNameQuery[];
  categories: Category[];
  locations: Location[];
  organizers: Organizer[];
}

interface Category {
  id: string;
  name: string;
  CategoryType: CategoryType[];
}

interface CategoryType {
  id: string;
  name: string;
  categoryId: string;
}

interface Location {
  id: string;
  name: string;
  address: string;
  cityId: string;
}

interface Organizer {
  id: string;
  name: string;
  email: string;
  type: string;
  subscribeType: string;
  status: boolean;
  bcAddress: string;
  password: string;
  image: string | null;
  phone: string | null;
  birthday: Date | null;
  createdAt: Date;
  updatedAt: Date;
  familyId: string | null;
}

interface CategoryWithCount {
  id: string;
  categoryName: string;
  count: number;
}

interface LocationsForHomepage {
  id: string;
  locationName: string;
  locationAddress: string;
}
