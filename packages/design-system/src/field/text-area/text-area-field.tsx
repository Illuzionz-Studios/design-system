import classNames from 'classnames';
import { HTMLMotionProps } from 'framer-motion';
import { CSSProperties } from 'react';
import { Field } from '../field/field';
import { FieldError } from '../error/field-error';
import { FieldLabel } from '../label/field-label';
import styles from './text-area-field.module.scss';
import { useField } from '../field-context';
import { TextArea } from '../../input/text-area';
import { Flex } from '../../layout/flex';

type FieldAreaInputProps = {
    required?: boolean;
    disabled?: boolean;
    value: string;
} & React.HTMLAttributes<HTMLTextAreaElement>;

/**
 * Expose all variables to a field
 */
export const FieldAreaInput: React.FC<FieldAreaInputProps> = ({
    required,
    disabled,
    value,
    ...rest
}) => {
    const { id, name, error } = useField();

    return (
        <TextArea
            required={required}
            value={value}
            hasError={Boolean(error)}
            id={id}
            {...rest}
        />
    );
};

type TextAreaFieldProps = {
    className?: CSSProperties | string;
    required?: boolean;
    disabled?: boolean;
    value: string;
    name: string;
    id: string;
    label?: string;
    error?: string;
    motion?: HTMLMotionProps<'div'>;
} & React.HTMLAttributes<HTMLTextAreaElement>;

/**
 * Master component for a field of text
 */
export const TextAreaField: React.FC<TextAreaFieldProps> = ({
    className,
    required,
    disabled,
    value,
    name,
    id,
    label,
    error,
    motion,
    ...rest
}) => {
    return (
        <Field
            id={id}
            name={name}
            error={error}
            className={classNames(styles.field, className)}
            {...motion}
        >
            <Flex direction="column" gap={1}>
                {label && (
                    <FieldLabel htmlFor={id}>
                        {label}
                        {required && <span style={{ color: 'red' }}>*</span>}
                    </FieldLabel>
                )}
                <FieldAreaInput
                    id={id}
                    value={value}
                    required={required}
                    disabled={disabled}
                    {...rest}
                />
                <FieldError />
            </Flex>
        </Field>
    );
};
