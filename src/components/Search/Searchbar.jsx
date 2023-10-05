import React, { Component } from 'react';
// import React from 'react';
import { TbWorldSearch } from 'react-icons/tb';
import { BtnSearch, FormSearch, Heder, InputSearch } from './Searchbar.styled';

export class HederFormSearch extends Component {
  handleSubmitWord = event => {
    event.preventDefault();

    const choosedWord = event.currentTarget.elements.word.value;
    this.props.findPhotos(choosedWord);
    event.currentTarget.reset();
  };
  render() {
    return (
      <Heder>
        <FormSearch onSubmit={this.handleSubmitWord}>
          <InputSearch
            name="word"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <BtnSearch type="submit">
            <TbWorldSearch className="icon" />
          </BtnSearch>
        </FormSearch>
      </Heder>
    );
  }
}
