import React, { ChangeEvent, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./Pagination.scss";

type PaginationProps = {
  pageSize: number;
  currentPage: number;
  pageNumbers: number;
  setPageSize: (pageSize: number) => void;
  setCurrentPage: (newPage: number) => void;
};

/**
 * Pagination block component to add page number functionality to a page.
 *
 * The number of items per page (pageSize), the current page, and the number of pages
 * are supplied to the component to allow for dynamic generation.
 *
 * Functions are also supplied to handle the changing of a page (next or previous) and
 * the selection of a different pageSize (number of items per page).
 *
 * Allows next and previous page toggling, and disables the buttons if
 * the user reaches the beginning (previous button) or end (next button) of the pages.
 *
 * @returns Pagination react element
 */
function Pagination({
  pageSize,
  currentPage,
  pageNumbers,
  setPageSize,
  setCurrentPage,
}: PaginationProps): ReactElement {
  const pageSizes = [5, 10, 15, 25, 50];

  function handlePageSizeChange(e: ChangeEvent<HTMLSelectElement>): void {
    const pageSize: number = parseInt(e.target.value);
    setPageSize(pageSize);
  }

  function handleNextClick(): void {
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousClick(): void {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="pagination-items">
      <div className="pagination-items__page-numbers">
        <span className="pagination-items__page-numbers__contents">
          Page {currentPage} of {pageNumbers}
        </span>
        <label className="pagination-items__page-numbers__contents pagination-items__page-numbers__items-per-page">
          <span className="pagination-items__page-numbers__contents pagination-items__page-numbers__items-per-page__select-menu-label">
            Items per page:
            <select
              className="pagination-items__page-numbers__contents pagination-items__page-numbers__items-per-page__select"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              {pageSizes.map((pageSize: number) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </span>
        </label>
      </div>
      {pageNumbers > 1 && (
        <div className="pagination-items__pagination">
          <Button onClick={handlePreviousClick} disabled={currentPage <= 1}>
            <>
              <FontAwesomeIcon
                className="icon"
                icon={currentPage <= 1 ? faBan : faArrowLeft}
              />
              Previous
            </>
          </Button>

          <Button
            onClick={handleNextClick}
            disabled={currentPage >= pageNumbers}
          >
            <>
              <FontAwesomeIcon
                className="icon"
                icon={currentPage >= pageNumbers ? faBan : faArrowRight}
              />
              Next
            </>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
