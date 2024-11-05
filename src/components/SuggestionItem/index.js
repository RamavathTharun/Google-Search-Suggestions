import './index.css'

const SuggestionItem = props => {
  const {Suggestions, resultSearch} = props

  const {suggestion, id} = Suggestions

  const onChickItem = () => {
    resultSearch(suggestion)
  }

  return (
    <li>
      <div className="item">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onChickItem}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
