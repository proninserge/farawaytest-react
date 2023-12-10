import { PeopleData } from "../../../../stores";
import { format } from "date-fns";
import { DescriptionsItemType } from "./types";
import { DATE_FIELDS } from "../../../../utils/constants";

export const getDescriptionItems = (data: PeopleData.Character | null) => {
  if (!data) return [];

  const reducedData = (Object.keys(data) as Array<keyof PeopleData.Character>).reduce((acc, key, index) => {
    if (Array.isArray(data[key]) || data[key].includes("http")) {
      return acc;
    } else {
      const value = data[key] as string;
      const isDate = DATE_FIELDS.includes(key);
            
      acc.push({
        key: index + 1,
        label: key.toUpperCase(),
        children: !isDate ? value : format(new Date(value), "dd-MM-yyyy"),
      });
    }

    return acc;

  }, [] as DescriptionsItemType[]);
    
  return reducedData;
};