export enum TextTheme {
  PRIMARY = '',
  ERROR = 'text-red-400',
}
export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}
export enum TextSize {
  S = 'text-sm',
  M = 'text-base',
  XXL = 'text-2xl',
  XXXL = 'text-3xl',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  list?: string[];
}

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.XXL]: 'h1',
  [TextSize.XXXL]: 'h1',
};

export const Text = (props: ITextProps) => {
  const {
    className,
    title,
    text: description,
    list,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={`flex flex-col list-disc ${align} ${theme} ${className}`}>
      {title && <HeaderTag className={`font-bold ${size}`}>{title}</HeaderTag>}
      {description && <p className={`${size}`}>{description}</p>}
      {list &&
        list.map((item) => (
          <li className="list-inside " key={item}>
            {item}
          </li>
        ))}
    </div>
  );
};
