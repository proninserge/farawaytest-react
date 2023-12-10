import React, { FC } from "react";
import { observer } from "mobx-react";
import { useGetAllPeople } from "./hooks";
import { Cards, Loading, Pagination } from "../../ui-kit";
import * as Styled from "./styles";
import { Search } from "./components";

export const HomePage: FC = observer(() => {
  const {
    data,
    isFetching,
    page,
    setPage,
    ...searchProps
  } = useGetAllPeople();

  return (
    <Styled.Container>
      {data === null || isFetching ? (
        <Loading />
      ) : (
        <>
          <Search {...searchProps} />
          <Styled.Main>
            <Cards data={data.results} />
          </Styled.Main>
          <Pagination
            current={page}
            total={data.count}
            onChange={(page) => setPage(page)}
            hideOnSinglePage
            showSizeChanger={false}
          />
        </>
      )}
    </Styled.Container>
  );
});