import { ButtonHTMLAttributes, memo } from 'react';

export enum ButtonTheme {
  PRIMARY = 'link-btn-primary',
  CLEAR = 'clear',
  OUTLINED = 'btn-outlined',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  squared?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button = memo((props: IButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    squared = false,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...buttonProps
  } = props;

  return (
    <button
      className={`${theme} ${
        disabled && 'opacity-50 hover:brightness-100'
      } ${className} `}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
});
