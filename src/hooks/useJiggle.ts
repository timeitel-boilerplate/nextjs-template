import { CSSProperties, useCallback, useState } from 'react';
import { useSpring, SpringConfig } from 'react-spring';

type JiggleProps = {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  springConfig?: SpringConfig;
};

type Style = CSSProperties;
type Trigger = () => void;

export const useJiggle = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  springConfig = {
    tension: 300,
    friction: 10
  }
}: JiggleProps): [Style, Trigger] => {
  const [isJiggling, setIsJiggling] = useState(false);

  const style: CSSProperties = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isJiggling
      ? `translate(${x}px, ${y}px)
       rotate(${rotation}deg)
       scale(${scale})`
      : `translate(0px, 0px)
       rotate(0deg)
       scale(1)`,
    onRest: () => setIsJiggling(false),
    config: springConfig
  });

  const trigger = useCallback(() => {
    setIsJiggling(true);
  }, []);

  return [style, trigger];
};
