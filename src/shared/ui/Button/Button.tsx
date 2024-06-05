import { ButtonHTMLAttributes, memo } from 'react';

export enum ButtonTheme {
  PRIMARY = 'link-btn-primary',
  CLEAR = 'clear',
  //   CLEAR_INVERTED = 'clearInverted',
  //   OUTLINED = 'outlined',
  //   OUTLINED_RED = 'outlinedRed',
  //   BACKGROUND = 'background',
  //   BACKGROUND_INVERTED = 'backgroundInverted',
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

  //   const mods = {
  //     [cls.squared]: squared,
  //     [cls.disabled]: disabled,
  //     [cls.fullWidth]: fullWidth,
  //   };

  return (
    <button
      className={`${theme} ${className}`}
      //   className={classNames(cls.Button, mods, [
      //     className,
      //     cls[theme],
      //     cls[size],
      //   ])}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
});
