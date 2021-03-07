import { FC } from 'react';
import { Popover as PopoverComponent } from 'react-tiny-popover';

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
  content: JSX.Element;
}

export const Popover: FC<PopoverProps> = ({
  isOpen,
  onClose,
  children,
  content
}) => {
  return (
    <PopoverComponent
      isOpen={isOpen}
      padding={10}
      reposition={false}
      onClickOutside={onClose}
      content={<div>{content}</div>}
    >
      {children}
    </PopoverComponent>
  );
};
