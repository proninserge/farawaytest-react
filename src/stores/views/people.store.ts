import { makeAutoObservable } from "mobx";
import { CharacterId, PeopleData, peopleService } from "../services";

export type PeopleViewStoreData = {
  all: Awaited<ReturnType<typeof peopleService.getAll>>;
  currentCharacter: Awaited<ReturnType<typeof peopleService.getCharacter>>;
};

class PeopleViewStore {
  private readonly peopleService = peopleService;

  constructor() {
    makeAutoObservable(this);
  }

  initialCharacter: PeopleData.Character | null = null;

  character: PeopleData.Character | null = null;

  currentСharacterId: CharacterId | null = null;

  resetCharacter() {
    this.character = this.initialCharacter;
  }

  editCharacter(newData: PeopleData.Character) {
    this.character = { ...this.character, ...newData };
  }

  setCurrentСharacterId(id: CharacterId) {
    this.currentСharacterId = id;
  }

  async getAll(params: PeopleData.Params): ReturnType<typeof peopleService.getAll> {
    return await this.peopleService.getAll(params);
  }

  async getCharacter(id: CharacterId) {
    const result = await this.peopleService.getCharacter(id);
    this.initialCharacter = this.character = result.response;
  }

  get data(): PeopleViewStoreData {
    const {
      rest: { getStatus },
      resources,
    } = this.peopleService;

    const id = this.currentСharacterId!;

    return {
      all: getStatus(resources.all)?.get,
      currentCharacter: getStatus(resources.character(id))?.get,
    };
  }
}

export const peopleViewStore = new PeopleViewStore();
