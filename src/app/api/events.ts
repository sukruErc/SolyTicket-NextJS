import { ClientProxy } from "../base/proxy/clientProxy";
import { IRequesterInfo } from "../base/models";
import { ApiResponse } from "../base/models/common-models";

export class EventsApi extends ClientProxy {
  constructor(requesterInfo: IRequesterInfo) {
    super({
      url: "events",
      requesterInfo,
    });
  }

  public async getEventsByFilter(
    req: GetEventsByFilterRequestModel
  ): Promise<ApiResponse<Event[]>> {
    const queryParams = new URLSearchParams();

    Object.keys(req).forEach((key) => {
      const value = (req as any)[key];
      if (value !== null && value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });

    this.props.url = `events/get-events-by-filter?${queryParams.toString()}`;
    return await this.getAsync<ApiResponse<Event[]>>();
  }

  public async getEventById(eventId: string): Promise<ApiResponse<Event>> {
    this.props.url = `events/get-event-by-id?eventId=${eventId}`;
    return await this.getAsync<ApiResponse<Event>>();
  }

  public async getSimilarEvents(
    eventId: string
  ): Promise<ApiResponse<Event[]>> {
    this.props.url = `events/get-similar-events?eventId=${eventId}`;
    return await this.getAsync<ApiResponse<Event[]>>();
  }

  public async addViewedEvent(
    eventId: string,
    userId: string
  ): Promise<ApiResponse<Event>> {
    this.props.url = `events/add-viewed-event`;
    return await this.postAsync<ApiResponse<Event>>({ eventId, userId });
  }

  public async getEventFilterTypes(): Promise<ApiResponse<EventFilterTypes>> {
    this.props.url = `filter-type/get-event-page-filters`;
    return await this.getAsync<ApiResponse<EventFilterTypes>>();
  }
}
