import { ReactElement } from 'react';
import { animated } from 'react-spring';
import { useJiggle } from '@hooks/useJiggle';

export const Jiggle = ({ children, ...jiggleConfig }): ReactElement => {
  const [style, trigger] = useJiggle(jiggleConfig);
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};
