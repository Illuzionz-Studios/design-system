import React, { ChangeEventHandler, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Flex } from '../../layout/flex';
import styled from 'styled-components';
import { Box } from '../../layout';
import { FieldLabel } from '../../field/label/field-label';

type CheckboxInputProps = {
    id: string;
    name: string;
    checked: boolean;
    checkedBg?: string;
    label?: string;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

const CheckboxWrapper = styled(Box)<{
    $checkedBg: string;
}>`
    height: 1.25rem;
    width: 1.25rem;
    cursor: pointer;

    padding: 0.5rem;

    border: 1px solid var(--color-checkbox-border);
    background: transparent;

    &:checked {
        background-color: ${({ $checkedBg }) => 'var(--' + $checkedBg + ')'};
        border: 1px solid ${({ $checkedBg }) => 'var(--' + $checkedBg + ')'};
    }

    &:disabled {
        cursor: default;
        background-color: var(--color-checkbox-disabled-bg);
        border: 1px solid var(--color-checkbox-disabled-border);
    }

    &:focus {
        border: 1px solid var(--color-checkbox-focus-border);
    }

    // We use our own styling
    appearance: none;
`;

const CheckWrapper = styled(FaCheck)`
    cursor: pointer;

    // Put ontop
    position: absolute;

    // Same size as box
    height: 1.25rem;
    width: 1.25rem;

    // Center in box
    transform: scale(0.5);

    color: var(--color-checkbox-check);

    // Disabled icon
    &[aria-disabled='true'] {
        color: var(--color-checkbox-disabled-check);
    }
`;

/**
 * Base check box styling. Exposes control variables
 */
export const CheckboxInput: React.FC<CheckboxInputProps> = React.forwardRef<HTMLDivElement, CheckboxInputProps>(
    ({ id, name, checked, checkedBg = 'color-checkbox-active-bg', label, disabled, onChange, ...rest }, ref) => {
        const checkBox = useRef<HTMLInputElement>(null);

        return (
            <Flex ref={ref} gap={2}>
                {checked && <CheckWrapper aria-disabled={disabled} onClick={() => checkBox?.current?.click()} />}
                <CheckboxWrapper
                    as="input"
                    radius="sm"
                    type="checkbox"
                    ref={checkBox}
                    id={id}
                    name={name}
                    checked={checked}
                    $checkedBg={checkedBg}
                    disabled={disabled}
                    onChange={onChange}
                    {...rest}
                />
                {label && <FieldLabel>{label}</FieldLabel>}
            </Flex>
        );
    }
);
