import { SyntheticEvent, useEffect, useState } from "react";
import { peopleViewStore } from "../../../stores";
import { useDebounce } from "../../../utils";
import { DEBOUNCE_VALUE } from "../../../utils/constants";

export const useGetAllPeople = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debounceCallback = () => {
    setPage(1);
  };

  const debouncedSearch = useDebounce(search, DEBOUNCE_VALUE, debounceCallback);

  const handleSearchInput = (evt: SyntheticEvent) => {
    setSearch((evt.target as HTMLInputElement).value);
  };

  useEffect(() => {
    peopleViewStore.getAll({page, search: debouncedSearch});
  }, [
    page,
    debouncedSearch,
  ]);

  return {
    data: peopleViewStore.data.all.response,
    isFetching: peopleViewStore.data.all.isFetching,
    page,
    search,
    setPage,
    setSearch: handleSearchInput,
  };
};
