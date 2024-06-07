import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/TextArea';
import { Form, Formik } from 'formik';
import { ProfileInputField } from '../../model/constants';
import { IProfile } from '../../model/types';
import { profileValidationSchema } from '../../model/validation/profileValidationSchema';
import { memo, useCallback } from 'react';

interface IProps {
  handleChange?: (name: ProfileInputField, value: string) => void;
  initialValues?: IProfile;
  onCancel: () => void;
  isEdit?: boolean;
  onSubmit: (value: IProfile) => void;
}

export const ProfileCard = memo((props: IProps) => {
  const {
    handleChange,
    initialValues,
    onCancel,
    isEdit = false,
    onSubmit,
  } = props;

  const handleChangeName = useCallback(
    (value: string) => {
      handleChange?.(ProfileInputField.NAME, value);
    },
    [handleChange]
  );
  const handleChangeDesiredJob = useCallback(
    (value: string) => {
      handleChange?.(ProfileInputField.DESIRED_JOB, value);
    },
    [handleChange]
  );
  const handleChangeAboutMe = useCallback(
    (value: string) => {
      handleChange?.(ProfileInputField.ABOUT_ME, value);
    },
    [handleChange]
  );

  return (
    <Formik
      initialValues={{
        name: initialValues?.name,
        desiredJob: initialValues?.desiredJob,
        aboutMe: initialValues?.aboutMe,
      }}
      onSubmit={onSubmit}
      validationSchema={profileValidationSchema}
      enableReinitialize
    >
      <Form className=" flex flex-col gap-4">
        <Input
          disabled={!isEdit}
          name={ProfileInputField.NAME}
          handleChange={handleChangeName}
          label="Name"
          placeholder="For example: Anatolii Fenin"
        />
        <Input
          disabled={!isEdit}
          name={ProfileInputField.DESIRED_JOB}
          handleChange={handleChangeDesiredJob}
          label="Desired job"
          placeholder="For example: Junior Frontend Developer"
        />
        <Textarea
          disabled={!isEdit}
          name={ProfileInputField.ABOUT_ME}
          handleChange={handleChangeAboutMe}
          label="About me"
          placeholder="For example: I'm a motivated junior front-end developer looking for a full-time role. With a strong sense of
responsibility, autonomy and collaboration, I'm dedicated to clean, accessible, efficient and
reusable code. My skills include a solid foundation in HTML, CSS, JS, TS, React and Next.js. I
am also well-versed in SOLID and DRY principles, have experience with Nest, Docker and
work with both SQL and NoSQL databases."
        />
        {isEdit && (
          <div className="flex gap-4">
            <Button
              theme={ButtonTheme.OUTLINED}
              onClick={onCancel}
              disabled={!isEdit}
              type="button"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!isEdit}>
              Save
            </Button>
          </div>
        )}
      </Form>
    </Formik>
  );
});
