import classNames from 'classnames';
import { ChangeEventHandler, CSSProperties, ReactNode } from 'react';
import { useField } from '../../field/field-context';
import styles from './text-input.module.scss';
import styled from 'styled-components';
import { Box, Flex } from '../../layout';

type TextInputProps = {
    className?: CSSProperties | string;
    disabled?: boolean;
    value: string;
    hasError?: boolean;
    icon?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInputWrapper = styled(Box)`
    background: transparent;
    width: 100%;

    &::placeholder {
        color: var(--color-textfield-placeholder);
    }

    &:disabled {
        color: var(--color-textfield-disabled-text);

        &::placeholder {
            color: var(--color-textfield-disabled-placeholder);
        }
    }
`;

const InputWrapper = styled(Flex)<{ $hasError?: boolean }>`
    background: transparent;
    width: 100%;

    &:disabled {
        background-color: var(--color-textfield-disabled-bg);
    }

    &:focus {
        border: 1px solid var(--color-textfield-focus-border);
    }

    ${({ $hasError }) => ($hasError ? 'border: 1px solid var(--color-textfield-error-border);' : '')}
`;

/**
 * The raw styled text input
 */
export const TextInput: React.FC<TextInputProps> = ({ className, value, hasError, icon, disabled, ...rest }) => {
    const { id, name, error } = useField();

    let ariaDesc;

    if (hasError) {
        ariaDesc = `${id}-error`;
    }

    return (
        <InputWrapper
            borderColor="color-textfield-border"
            $hasError={hasError}
            justifyContent="space-between"
            alignItems="center"
            radius="sm"
        >
            {icon && (
                <Flex paddingLeft={3} paddingRight={2} alignItems="center">
                    {icon}
                </Flex>
            )}

            <TextInputWrapper
                as="input"
                className={classNames(styles.input, className)}
                paddingTop={2}
                paddingBottom={2}
                paddingLeft={icon ? 0 : 4}
                paddingRight={4}
                color="color-textfield-text"
                type="text"
                name={name}
                disabled={disabled}
                aria-disabled={disabled}
                aria-describedby={ariaDesc}
                value={value}
                {...rest}
            />
        </InputWrapper>
    );
};
