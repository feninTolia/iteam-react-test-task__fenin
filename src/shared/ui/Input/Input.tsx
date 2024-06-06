import { useFormikContext } from 'formik';
import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from 'react';
import { Text, TextSize, TextTheme } from '../Text';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  handleChange?: (value: string) => void;
}

export const Input = memo(
  ({ name, handleChange, label, ...otherProps }: IProps) => {
    const {
      handleChange: formikHandleChange,
      handleBlur,
      touched,
      errors,
      values,
    } = useFormikContext<any>();
    const isError = touched[name] && errors[name];

    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        formikHandleChange(e);
        handleChange?.(e.target.value);
      },
      [handleChange, formikHandleChange]
    );

    return (
      <label className="flex flex-col gap-2">
        {label && <Text text={label} />}
        <input
          type="text"
          name={name}
          onChange={onChange}
          onBlur={handleBlur}
          value={values[name]}
          className={`border  rounded-md px-4 py-2 h-10 bg-inherit placeholder:text-slate-500 ${
            isError ? 'border-red-400' : 'border-slate-500'
          }`}
          {...otherProps}
        />
        {isError ? (
          <Text
            size={TextSize.S}
            theme={TextTheme.ERROR}
            text={errors[name] as string}
          />
        ) : null}
      </label>
    );
  }
);
