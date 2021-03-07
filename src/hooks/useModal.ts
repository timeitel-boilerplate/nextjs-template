import { useState } from 'react';

type showModal = () => void;
type hideModal = () => void;

export const useModal = (isOpen = false): [showModal, hideModal] => {
  const [, setIsOpen] = useState(isOpen);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  return [showModal, hideModal];
};
