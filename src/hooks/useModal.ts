import { useState } from 'react';

type isOpen = boolean;
type toggleModal = () => void;

export const useModal = (): [isOpen, toggleModal] => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(false);

  return [isOpen, toggleModal];
};
