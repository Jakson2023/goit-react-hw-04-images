import { Component } from 'react';
import { Overlay, Modal } from './Modal.styled';

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.props.onClick();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { modalImg } = this.props;
    return (
      <Overlay onClick={this.props.onClick}>
        <Modal onClick={e => e.stopPropagation()}>
          <img src={modalImg} alt="" />
        </Modal>
      </Overlay>
    );
  }
}
