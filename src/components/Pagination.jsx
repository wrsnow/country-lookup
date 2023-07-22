import React from "react";
import styled from "styled-components";

function Pagination({ setCurrentPage, scrollToTop }) {
  const numberOfPages = Math.ceil(250 / 20);
  let pagesArr = [];
  for (let i = 0; i < numberOfPages; i++) {
    pagesArr.push(i + 1);
  }

  function changePage(page) {
    setCurrentPage(page);
    scrollToTop();
  }

  return (
    <S_Div>
      <ul>
        {pagesArr.map((page, i) => {
          return (
            <li onClick={() => changePage(page)} key={page}>
              {page}
              <input
                type="radio"
                name="page"
                aria-label={`page number ${page}`}
              />
            </li>
          );
        })}
      </ul>
    </S_Div>
  );
}

export default Pagination;

const S_Div = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;

  & ul {
    position: relative;
    list-style: none;
    display: flex;
    gap: 0.4rem;
    margin: 0;
    padding: 0;
  }

  & ul li {
    position: relative;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25px;
    aspect-ratio: 1;
    padding: 0.2rem;
    background-color: #fff;
    border-radius: 50%;
  }

  & ul li input {
    cursor: pointer;
    position: absolute;
    top: -2px;
    left: calc(-100% + 20px);
    aspect-ratio: 1;
    width: 100%;
    appearance: none;
  }
  & ul li:has(input:checked) {
    border: 1px solid white;
    background-color: #1b373f;
    color: #fff;
  }
`;
