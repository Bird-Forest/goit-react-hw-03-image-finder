import React, { Component } from 'react';
// import React from 'react';
import { TbWorldSearch } from 'react-icons/tb';
import { BtnSearch, FormSearch, Heder, InputSearch } from './Searchbar.styled';

export class HederFormSearch extends Component {
  state = {
    word: '',
  };

  handleSubmitWord = event => {
    event.preventDefault();
    // const choosedWord = event.currentTarget.elements.word.value;
    const choosedWord = this.state.word;
    this.props.findPhotos(choosedWord);

    this.setState({
      word: '',
    });
  };

  handleInputChange = event => {
    this.setState({
      // [event.target.name]: event.target.value,
      word: event.target.value,
    });
  };
  render() {
    return (
      <Heder>
        <FormSearch onSubmit={this.handleSubmitWord}>
          <InputSearch
            name="word"
            value={this.state.word}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search photos"
            onChange={this.handleInputChange}
          />
          <BtnSearch type="submit">
            <TbWorldSearch className="icon" />
          </BtnSearch>
        </FormSearch>
      </Heder>
    );
  }
}
