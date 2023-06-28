import classNames from 'classnames';
import { ChangeEventHandler, CSSProperties } from 'react';
import { useField } from '../../field/field-context';
import styles from './text-input.module.scss';
import styled from 'styled-components';
import { Box } from '../../layout';

type TextInputProps = {
    className?: CSSProperties | string;
    disabled?: boolean;
    value: string;
    hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInputWrapper = styled(Box)<{ $hasError?: boolean }>`
    background: transparent;
    width: 100%;

    &::placeholder {
        color: var(--color-textfield-placeholder);
    }

    &:focus {
        border: 1px solid var(--color-textfield-focus-border);
    }

    &:disabled {
        background-color: var(--color-textfield-disabled-bg);

        color: var(--color-textfield-disabled-text);

        &::placeholder {
            color: var(--color-textfield-disabled-placeholder);
        }
    }

    ${({ $hasError }) => ($hasError ? 'border: 1px solid var(--color-textfield-error-border);' : '')}
`;

/**
 * The raw styled text input
 */
export const TextInput: React.FC<TextInputProps> = ({ className, value, hasError, disabled, ...rest }) => {
    const { id, name, error } = useField();

    let ariaDesc;

    if (hasError) {
        ariaDesc = `${id}-error`;
    }

    return (
        <TextInputWrapper
            as="input"
            radius="sm"
            className={classNames(styles.input, className)}
            paddingTop={2}
            paddingBottom={2}
            paddingLeft={4}
            paddingRight={4}
            borderColor="color-textfield-border"
            color="color-textfield-text"
            $hasError={hasError}
            type="text"
            name={name}
            disabled={disabled}
            aria-disabled={disabled}
            aria-describedby={ariaDesc}
            value={value}
            {...rest}
        />
    );
};
