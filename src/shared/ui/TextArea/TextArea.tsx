import { useFormikContext } from 'formik';
import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from 'react';
import { Text, TextSize, TextTheme } from '../Text';

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  handleChange?: (value: string) => void;
}

export const Textarea = memo(
  ({ name, handleChange, label, ...otherProps }: IProps) => {
    const {
      handleChange: formikHandleChange,
      handleBlur,
      touched,
      errors,
      values,
    } = useFormikContext<any>();
    const isError = touched.search && errors.search;

    const onChange = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        formikHandleChange(e);
        handleChange?.(e.target.value);
      },
      [formikHandleChange, handleChange]
    );

    return (
      <label className="flex flex-col gap-2">
        {label && <Text text={label} />}
        <textarea
          type="text"
          name={name}
          onChange={onChange}
          onBlur={handleBlur}
          value={values[name]}
          className={`border  rounded-md px-4 py-2 h-32 bg-inherit placeholder:text-slate-500 ${
            isError ? 'border-red-400' : 'border-slate-500'
          }`}
          {...otherProps}
        />
        {isError ? (
          <Text
            size={TextSize.S}
            theme={TextTheme.ERROR}
            text={errors.search as string}
          />
        ) : null}
      </label>
    );
  }
);
