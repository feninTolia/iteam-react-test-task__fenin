import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/TextArea';
import { Form, Formik } from 'formik';
import { ProfileInputField } from '../../model/constants';
import { IProfile } from '../../model/types';
import { profileValidationSchema } from '../../model/validation/profileValidationSchema';

interface IProps {
  handleChange?: (name: ProfileInputField, value: string) => void;
  initialValues?: IProfile;
  onSave: (values: IProfile) => void;
  onCancel: () => void;
  isEdit?: boolean;
  setIsEdit?: (value: boolean) => void;
}

export const ProfileCard = (props: IProps) => {
  const {
    handleChange,
    initialValues,
    onSave,
    onCancel,
    isEdit = false,
    setIsEdit,
  } = props;

  return (
    <Formik
      initialValues={{
        name: initialValues?.name,
        desiredJob: initialValues?.desiredJob,
        aboutMe: initialValues?.aboutMe,
      }}
      onSubmit={(value) => {
        setIsEdit?.(false);
        onSave(value);
      }}
      validationSchema={profileValidationSchema}
      enableReinitialize
    >
      <Form className=" flex flex-col gap-4">
        <Input
          disabled={!isEdit}
          name={ProfileInputField.NAME}
          handleChange={(value) =>
            handleChange?.(ProfileInputField.NAME, value)
          }
          label="Name"
          placeholder="For example: Anatolii Fenin"
        />
        <Input
          disabled={!isEdit}
          name={ProfileInputField.DESIRED_JOB}
          handleChange={(value) =>
            handleChange?.(ProfileInputField.DESIRED_JOB, value)
          }
          label="Desired job"
          placeholder="For example: Junior Frontend Developer"
        />
        <Textarea
          disabled={!isEdit}
          name={ProfileInputField.ABOUT_ME}
          handleChange={(value) =>
            handleChange?.(ProfileInputField.ABOUT_ME, value)
          }
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
};
