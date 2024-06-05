import { useFormikContext } from 'formik';
import { InputHTMLAttributes } from 'react';
import { Text, TextSize, TextTheme } from '../Text';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  handleChange?: (value: string) => void;
}

export const Input = ({ name, handleChange, ...otherProps }: IProps) => {
  const props = useFormikContext<any>();
  const isError = props.touched.search && props.errors.search;

  return (
    <>
      <input
        type="text"
        name={name}
        onChange={(e) => {
          props.handleChange(e);
          handleChange?.(e.target.value);
        }}
        onBlur={props.handleBlur}
        value={props.values[name]}
        className={`border  rounded-md px-4 py-2 h-10 bg-inherit placeholder:text-slate-500 ${
          isError ? 'border-red-400' : 'border-slate-500'
        }`}
        {...otherProps}
      />
      {isError ? (
        <Text
          size={TextSize.S}
          theme={TextTheme.ERROR}
          text={props.errors.search as string}
        />
      ) : null}
    </>
  );
};
