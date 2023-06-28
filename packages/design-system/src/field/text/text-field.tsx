import classNames from 'classnames';
import { CSSProperties } from 'react';
import { Field } from '../field/field';
import { FieldError } from '../error/field-error';
import { FieldLabel } from '../label/field-label';
import { useField } from '../field-context';
import { TextInput } from '../../input/text';
import { Flex } from '../../layout/flex';
import { Box } from '../../layout';

type FieldInputProps = {
    required?: boolean;
    disabled?: boolean;
    value: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Expose all variables to a field
 */
export const FieldInput: React.FC<FieldInputProps> = ({ required, disabled, value, ...rest }) => {
    const { id, name, error } = useField();

    return <TextInput required={required} value={value} hasError={Boolean(error)} id={id} {...rest} />;
};

type TextFieldProps = {
    required?: boolean;
    disabled?: boolean;
    value: string;
    name: string;
    id: string;
    label?: string;
    error?: string;
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
    ...rest
}) => {
    return (
        <Field id={id} name={name} error={error} width="100%">
            <Flex direction="column" gap={1}>
                {label && (
                    <FieldLabel htmlFor={id}>
                        {label}
                        {required && (
                            <Box as="span" style={{ color: 'red' }}>
                                *
                            </Box>
                        )}
                    </FieldLabel>
                )}
                <FieldInput value={value} required={required} disabled={disabled} {...rest} />
                <FieldError />
            </Flex>
        </Field>
    );
};
