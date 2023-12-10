import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { peopleViewStore } from "../../../../../stores";

export const useGetCharacter = () => {
  const { charId } = useParams();

  useEffect(() => {
    if (charId !== undefined) {
      peopleViewStore.setCurrentСharacterId(charId);
    }
  }, [charId]);

  useEffect(() => {
    if (
      !peopleViewStore.data.currentCharacter.isFetched &&
      !peopleViewStore.data.currentCharacter.isFetching &&
      charId !== undefined
    ) {
      peopleViewStore.getCharacter(charId);
    }
  }, [peopleViewStore.currentСharacterId]);

  return {
    data: peopleViewStore.data.currentCharacter.response,
    isFetching: peopleViewStore.data.currentCharacter.isFetching,
    isError: peopleViewStore.data.currentCharacter.error,
  };
};