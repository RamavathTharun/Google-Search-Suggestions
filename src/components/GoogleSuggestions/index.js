import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  resultSearch = suggestion =>{
    this.setState({searchInput:suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google"
          />
          <div className="list-conatiner">
            <div className="searchbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="icon"
              />
              <input
                type="search"
                className="sear"
                onChange={this.onChangeSearch}
                value={searchInput}
              />
            </div>
            <ul className="list">
              {searchResult.map(each => (
                <SuggestionItem
                  Suggestions={each}
                  key={each.id}
                  resultSearch={this.resultSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
