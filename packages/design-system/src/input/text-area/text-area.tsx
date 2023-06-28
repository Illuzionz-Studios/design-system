import classNames from 'classnames';
import { ChangeEventHandler, CSSProperties } from 'react';
import { useField } from '../../field/field-context';
import styles from './text-area.module.scss';
import { TextInput } from '../text/text-input';
import styled from 'styled-components';
import { Box } from '../../layout';

type TextAreaProps = {
    className?: CSSProperties | string;
    required?: boolean;
    disabled?: boolean;
    value: string;
    hasError?: boolean;
} & React.HTMLAttributes<HTMLTextAreaElement>;

const TextAreaWrapper = styled(Box)<{ hasError?: boolean }>`
    background: transparent;

    width: 100%;

    &::placeholder {
        color: var(--color-textfield-placeholder);
    }

    &:focus {
        border: 1px solid
            ${({ hasError }) =>
                hasError ? 'var(--color-textfield-error-focus-border);' : 'var(--color-textfield-focus-border);'};
    }

    &:disabled {
        background-color: var(--color-textfield-disabled-bg);

        color: var(--color-textfield-disabled-text);

        &::placeholder {
            color: var(--color-textfield-disabled-placeholder);
        }
    }

    resize: vertical;

    ${({ hasError }) => (hasError ? 'border: 1px solid var(--color-textfield-error-border);' : '')}
`;

/**
 * The raw styled text input
 */
export const TextArea: React.FC<TextAreaProps> = ({ className, value, hasError, required, disabled, ...rest }) => {
    const { id, name, error } = useField();

    let ariaDesc;

    if (hasError) {
        ariaDesc = `${id}-error`;
    }

    return (
        <TextAreaWrapper
            as="textarea"
            radius="sm"
            className={classNames(styles.input, className)}
            paddingTop={2}
            paddingBottom={2}
            paddingLeft={4}
            paddingRight={4}
            borderColor="color-textfield-border"
            color="color-textfield-text"
            hasError={hasError}
            name={name}
            required={required}
            rows={4}
            cols={50}
            disabled={disabled}
            aria-disabled={disabled}
            aria-describedby={ariaDesc}
            value={value}
            {...rest}
        />
    );
};
