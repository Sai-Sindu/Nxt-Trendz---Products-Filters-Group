import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {searchInputOnChange} = props
    searchInputOnChange(event.target.value)
  }

  const onSearchEnterKeyDown = event => {
    const {getSearchInputOnEnter} = props
    if (event.key === 'Enter') {
      getSearchInputOnEnter()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="input-container">
        <input
          type="search"
          value={searchInput}
          placeholder="Search"
          className="input-card"
          onChange={onChangeSearchInput}
          onKeyDown={onSearchEnterKeyDown}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const onClickClearFilter = () => {
    const {clearFilter} = props
    clearFilter()
  }

  const renderCategories = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {onChangeCategory, activeCategory} = props
      const onClickCategoryItem = () => {
        onChangeCategory(category.categoryId)
      }
      const isActive = category.categoryId === activeCategory

      const categoryItemClassName = isActive
        ? 'active-category'
        : 'not-active-category'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryItemClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategoryList = () => (
    <>
      <h1 className="category-title">Category</h1>
      <ul className="category-container">{renderCategories()}</ul>
    </>
  )

  const renderRatings = () => {
    const {ratingsList} = props
    return ratingsList.map(eachRating => {
      const {activeRatingId, onChangeRating} = props
      const onClickRatingItem = () => {
        onChangeRating(eachRating.ratingId)
      }
      const isActiveRating = eachRating.ratingId === activeRatingId

      const ratingItemClassName = isActiveRating
        ? 'active-rating'
        : 'not-active-rating'

      return (
        <li
          className="rating-card"
          key={eachRating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingItemClassName}>&up</p>
        </li>
      )
    })
  }

  const renderRatingsList = () => (
    <>
      <h1 className="ratings-title">Rating</h1>
      <ul className="ratings-container">{renderRatings()}</ul>
    </>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryList()}
      {renderRatingsList()}
      <button
        className="clear-filter-button"
        type="button"
        onClick={onClickClearFilter}
      >
        Clear Filters
      </button>
      {/* Replace this element with your code */}
    </div>
  )
}
export default FiltersGroup
