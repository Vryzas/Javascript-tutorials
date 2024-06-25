import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // page 1 and + pages
    if (curPage === 1 && numPages > 1) {
      return btnMarkup(curPage + 1, 'next', 'right');
    }
    // only page 1
    if (curPage === 1 && numPages <= 1) {
      return '';
    }
    // last page
    if (curPage === numPages && numPages > 1) {
      return btnMarkup(curPage - 1, 'prev', 'left');
    }
    // other (middle) pages
    if (curPage < numPages) {
      return (
        btnMarkup(curPage - 1, 'prev', 'left') +
        btnMarkup(curPage + 1, 'next', 'right')
      );
    }
  }
}

const btnMarkup = (page, btn, icn) => {
  return `<button data-goto="${page}" class="btn--inline pagination__btn--${btn}">
        <span>Page ${page}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${icn}t"></use>
        </svg>
      </button>`;
};

export default new PaginationView();
