import { PropsWithChildren } from 'react';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import styled from 'styled-components';
import React from 'react';

const TextButtonWrapper = styled(BaseButton)`
    transition: background 0.1s ease-in-out;

    &[aria-disabled='true'] {
        cursor: default;
        background-color: transparent;
        border: 1px solid transparent;
        color: var(--color-button-disabled-text);

        &:hover {
            background-color: transparent;
        }

        &:focus,
        &:active {
            background-color: transparent;
            border: 1px solid transparent;
        }
    }

    &:hover {
        background-color: var(--color-elevation-primary-1);
    }
`;

export const TextButton: React.FC<PropsWithChildren<BaseButtonProps>> = React.forwardRef(
    ({ children, ...rest }, ref) => {
        return (
            <TextButtonWrapper
                ref={ref}
                color="color-button-primary"
                background="transparent"
                paddingTop={1}
                paddingBottom={1}
                paddingLeft={4}
                paddingRight={4}
                {...rest}
            >
                {children}
            </TextButtonWrapper>
        );
    }
);
