import { CreateGalleryFotos } from 'components/Gallery/ImageGallery';
import { HederFormSearch } from 'components/Search/Searchbar';
import { Component } from 'react';
import { fetchGallery } from './services/axios';
import { ButtonLoadMore } from 'components/Button/ButtonLoadMore';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    gallery: null,
    hits: null,
    isLoading: false,
    error: null,
    word: '',
    page: 1,
    perPage: 12,
    totalPage: 1,
    modal: {
      isOpen: false,
      largeImageURL: null,
    },
  };

  getGallery = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await fetchGallery(this.state.word, this.state.page);
      console.log(data);

      this.setState({
        hits: data.hits,
        totalPage: Math.ceil(data.totalHits / this.state.perPage),
        gallery: data.hits,
      });
      console.log('data.hits', this.state.hits);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.word !== this.state.word
    )
      this.getGallery();

    // this.setState(prevState => {
    //   return {
    //     gallery: [prevState.gallery, this.state.hits],
    //   };
    // });
  }

  onPageIncrement = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  onFindPhotos = choosedWord => {
    this.setState({ word: choosedWord, page: 1 });
  };

  onOpenModal = newlargeImageURL => {
    console.log(newlargeImageURL);
    this.setState({
      modal: {
        isOpen: true,
        largeImageURL: newlargeImageURL,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        largeImageURL: null,
      },
    });
  };

  render() {
    return (
      <div>
        <HederFormSearch findPhotos={this.onFindPhotos} />
        <CreateGalleryFotos
          hits={this.state.hits}
          showModal={this.onOpenModal}
        />
        {this.state.page !== this.state.totalPage && (
          <ButtonLoadMore nextPage={this.onPageIncrement} />
        )}
        {this.state.modal.isOpen && (
          <Modal
            open={this.state.modal.largeImageURL}
            onClose={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}
