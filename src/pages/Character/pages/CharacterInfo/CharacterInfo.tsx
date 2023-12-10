import React, { useMemo, useState } from "react";
import { useGetCharacter } from "./hooks";
import * as Styled from "./styles";
import { observer } from "mobx-react";
import { Loading, Descriptions } from "../../../../ui-kit";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { peopleViewStore } from "../../../../stores";
import { EditModal } from "./components";
import { getDescriptionItems } from "./utils";

export const CharacterInfoPage = observer(() => {
  const { isFetching, isError } = useGetCharacter();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const descriptionItems = useMemo(() => getDescriptionItems(peopleViewStore.character!), [peopleViewStore.character]);

  if (isError) {
    navigate("/not-found");
  };

  return (
    <Styled.Container>
      {peopleViewStore.character === null || isFetching ? (
        <Loading />
      ) : (
        <Styled.Main>
          <Descriptions title="Character Info" items={descriptionItems} />
          <Button type="primary" onClick={showModal}>
              Edit
          </Button>
          <EditModal {...peopleViewStore.character} fields={descriptionItems} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
        </Styled.Main>
      )}
    </Styled.Container>
  );
});
