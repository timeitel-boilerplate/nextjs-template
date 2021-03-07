import { FC, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import ReactDOM from 'react-dom';
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop
} from './style';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerText: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  headerText,
  children
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Escape' && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [isOpen]);

  const modal = (
    <>
      <Backdrop onClick={onClose} />
      <FocusLock>
        <Wrapper
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
        >
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton onClick={onClose}>X</CloseButton>
            </Header>
            <Content>{children}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
