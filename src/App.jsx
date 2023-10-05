import { CreateGalleryFotos } from 'components/Gallery/ImageGallery';
import { HederFormSearch } from 'components/Search/Searchbar';
import { Component } from 'react';
import { fetchGallery } from './services/axios';
import { ButtonLoadMore } from 'components/Button/ButtonLoadMore';
import { Modal } from 'components/Modal/Modal';
// import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    gallery: null,
    isLoading: false,
    error: null,
    word: '',
    page: 1,
    perPage: 12,
    modal: {
      isOpen: false,
      largeImageURL: null,
    },
    showButton: true,
  };
  getGallery = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await fetchGallery(this.state.word, this.state.page);
      const totalPage = Math.ceil(data.totalHits / this.state.perPage);
      this.setState({
        gallery: data,
        showButton: this.state.page !== totalPage,
      });
      console.log('data.hits', data.hits);
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
  }
  onPageIncrement = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
  onFindPhotos = word => {
    this.setState({ word: word, page: 1 });
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
          gallery={this.state.gallery}
          showModal={this.onOpenModal}
        />
        {this.state.showButton && (
          <ButtonLoadMore onPageIncrement={this.onPageIncrement} />
        )}
        {/* <Modal data={this.state.modal.largeImageURL} /> */}
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
