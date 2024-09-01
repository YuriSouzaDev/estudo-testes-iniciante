import { ReactNode } from 'react';

const Button = ({
  disabled,
  children,
  onClick,
}: {
  disabled: boolean;
  children: ReactNode;
  onClick: (number: number) => void;
}) => {
  return (
    <button
      style={{
        background: 'red',
        opacity: disabled ? 0.5 : 1,
        color: 'white',
        padding: 10,
        display: 'block',
      }}
      onClick={() => onClick(20)}
    >
      {children}
    </button>
  );
};

export default Button;
