import { ClientProxy } from "../base/proxy/clientProxy";
import { IRequesterInfo } from "../base/models";
import { ApiResponse } from "../base/models/common-models";

export class HomepageApi extends ClientProxy {
  constructor(requesterInfo: IRequesterInfo) {
    super({
      url: "homepage",
      requesterInfo,
    });
  }

  public async getHomePageValues(): Promise<
    ApiResponse<HomepageValuesResponse>
  > {
    this.props.url = "homepage/get-homepage-values";
    return await this.getAsync<ApiResponse<HomepageValuesResponse>>();
  }
  public async getCategoryItems(): Promise<ApiResponse<IdNameQuery[]>> {
    this.props.url = "filter-type/get-categories";
    return await this.getAsync<ApiResponse<IdNameQuery[]>>();
  }

  public async getLocations(): Promise<ApiResponse<IdNameQuery[]>> {
    this.props.url = "filter-type/get-locations";
    return await this.getAsync<ApiResponse<IdNameQuery[]>>();
  }

  public async searchCategoryEventOrganizer(
    value: string
  ): Promise<ApiResponse<any[]>> {
    this.props.url = `filter-type/search-category-event-organizer?value=${value}`;
    return await this.getAsync<ApiResponse<any[]>>();
  }
}
