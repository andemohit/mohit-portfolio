import { RoughNotation } from 'react-rough-notation';

export interface IRainbowHighlight {
  color: string;
  children: React.ReactNode;
}

export const RainbowHighlight: React.FC<IRainbowHighlight> = ({
  color,
  children,
}) => {
  const animationDuration = 30;

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
