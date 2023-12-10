import { computed, makeObservable } from "mobx";
import { RESTService } from "./rest.service";

export class FetchResource {
  public rest: RESTService;

  constructor(private readonly config: { url: string }) {
    makeObservable(this);

    this.rest = new RESTService({
      url: this.config.url,
    });
  }

  @computed
  get status() {
    return this.rest.status;
  }
}
