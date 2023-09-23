import classNames from 'classnames';
import { CSSProperties, ForwardedRef } from 'react';
import { Field } from '../field/field';
import { FieldError } from '../error/field-error';
import { FieldLabel } from '../label/field-label';
import { useField } from '../field-context';
import { TextInput, TextInputProps } from '../../input/text';
import { Flex } from '../../layout/flex';
import { Box } from '../../layout';
import React from 'react';

type FieldInputProps = {
    required?: boolean;
} & TextInputProps;

/**
 * Expose all variables to a field
 */
export const FieldInput: React.FC<FieldInputProps> = React.forwardRef<HTMLInputElement, FieldInputProps>(
    ({ required, disabled, value, ...rest }, ref) => {
        const { id, name, error } = useField();

        return <TextInput ref={ref} required={required} value={value} hasError={Boolean(error)} id={id} {...rest} />;
    }
);

type TextFieldProps = {
    name: string;
    id: string;
    label?: string;
    error?: string;
} & FieldInputProps;

/**
 * Master component for a field of text
 */
export const TextField: React.FC<TextFieldProps> = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ className, required, disabled, value, name, id, label, error, ...rest }, ref) => {
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
                    <FieldInput ref={ref} value={value} required={required} disabled={disabled} {...rest} />
                    <FieldError />
                </Flex>
            </Field>
        );
    }
);
