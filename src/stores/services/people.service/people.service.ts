import { FetchResource } from "../../core";
import { CharacterId, PeopleData } from "./types";

export class PeopleService extends FetchResource {
  constructor() {
    super({
      url: "people",
    });
  }

  resources = {
    all: "",
    character: (charId: CharacterId) => `${charId}`,
  };

  getAll(params: PeopleData.Params) {
    return this.rest.get<PeopleData.Response>({
      resource: this.resources.all,
      params,
    });
  }

  getCharacter(charId: CharacterId) {
    return this.rest.get<PeopleData.Character>({
      resource: this.resources.character(charId),
    });
  }
}

export const peopleService = new PeopleService();