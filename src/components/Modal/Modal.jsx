import React, { Component } from 'react';
import { ModalImg, Overlay, ModalWrap } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount: Modal - render');
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    console.log(' componentWillUnmount: Modal -delete');
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code === 'Escape') this.props.onClose();
  };

  onOverlyaClick = event => {
    if (event.currentTarget === event.target) this.props.onClose();
  };
  render() {
    return (
      <Overlay onClick={this.onOverlyaClick}>
        <ModalWrap>
          <ModalImg src={this.props.open} alt="Big foto" />
        </ModalWrap>
      </Overlay>
    );
  }
}
