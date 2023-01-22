import classNames from 'classnames';
import { HTMLMotionProps } from 'framer-motion';
import { CSSProperties } from 'react';
import { Field } from '../field/field';
import { FieldError } from '../error/field-error';
import { FieldLabel } from '../label/field-label';
import styles from './text-field.module.scss';
import { useField } from '../field-context';
import { TextInput } from '../../input/text';
import { Flex } from '../../layout/flex';

type FieldInputProps = {
    required?: boolean;
    disabled?: boolean;
    value: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Expose all variables to a field
 */
export const FieldInput: React.FC<FieldInputProps> = ({
    required,
    disabled,
    value,
    ...rest
}) => {
    const { id, name, error } = useField();

    return (
        <TextInput
            required={required}
            value={value}
            hasError={Boolean(error)}
            id={id}
            {...rest}
        />
    );
};

type TextFieldProps = {
    className?: CSSProperties | string;
    required?: boolean;
    disabled?: boolean;
    value: string;
    name: string;
    id: string;
    label?: string;
    error?: string;
    motion?: HTMLMotionProps<'div'>;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Master component for a field of text
 */
export const TextField: React.FC<TextFieldProps> = ({
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
                <FieldInput
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
