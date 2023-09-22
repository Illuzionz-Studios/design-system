import { CSSProperties, ForwardedRef } from 'react';
import { Field } from '../field/field';
import { FieldError } from '../error/field-error';
import { FieldLabel } from '../label/field-label';
import { useField } from '../field-context';
import { TextArea } from '../../input/text-area';
import { Flex } from '../../layout/flex';
import React from 'react';

type FieldAreaInputProps = {
    required?: boolean;
    disabled?: boolean;
    value: string;
    inputRef?: ForwardedRef<HTMLTextAreaElement>;
} & React.HTMLAttributes<HTMLTextAreaElement>;

/**
 * Expose all variables to a field
 */
export const FieldAreaInput: React.FC<FieldAreaInputProps> = React.forwardRef<HTMLTextAreaElement, FieldAreaInputProps>(
    ({ required, disabled, value, inputRef, ...rest }, ref) => {
        const { id, name, error } = useField();

        return <TextArea ref={ref} required={required} value={value} hasError={Boolean(error)} id={id} {...rest} />;
    }
);

type TextAreaFieldProps = {
    className?: CSSProperties | string;
    name: string;
    id: string;
    label?: string;
    error?: string;
} & FieldAreaInputProps;

/**
 * Master component for a field of text
 */
export const TextAreaField: React.FC<TextAreaFieldProps> = React.forwardRef<HTMLDivElement, TextAreaFieldProps>(
    ({ className, required, disabled, value, name, id, label, error, inputRef, ...rest }, ref) => {
        return (
            <Field ref={ref} id={id} name={name} error={error} width="100%">
                <Flex direction="column" gap={1}>
                    {label && (
                        <FieldLabel htmlFor={id}>
                            {label}
                            {required && <span style={{ color: 'red' }}>*</span>}
                        </FieldLabel>
                    )}
                    <FieldAreaInput
                        inputRef={inputRef}
                        value={value}
                        required={required}
                        disabled={disabled}
                        {...rest}
                    />
                    <FieldError />
                </Flex>
            </Field>
        );
    }
);
