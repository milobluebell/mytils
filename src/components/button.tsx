import { FunctionalComponent, h } from 'preact';

interface IButtonProps {
  children: any;
  onClick: () => void;
}
//
const buttonStyle = {
  cursor: `pointer`,
  outline: `none`,
  padding: 8,
  borderRadius: 5,
  background: `linear-gradient(#53a0d4, #1b5377)`,
  color: `white`,
};
export const Button: FunctionalComponent = (props: IButtonProps) => {
  return (
    <button onClick={props?.onClick} style={buttonStyle}>
      <span>{`测试 ${props?.children?.toString()} 方法`}</span>
    </button>
  );
};
