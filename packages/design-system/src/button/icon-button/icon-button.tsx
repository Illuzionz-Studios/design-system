import { ReactNode } from 'react';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import styled from 'styled-components';
import React from 'react';

type ButtonProps = {
    icon: ReactNode;
} & BaseButtonProps;

const IconButtonWrapper = styled(BaseButton)`
    transition: background 0.1s ease-in-out;

    &:hover {
        border: 1px solid var(--color-button-icon-border-hover);
    }
`;

export const IconButton: React.FC<ButtonProps> = React.forwardRef(({ icon, ...rest }, ref) => {
    return (
        <IconButtonWrapper
            ref={ref}
            padding={2}
            background="transparent"
            color="color-button-icon"
            borderColor="color-button-icon-border"
            startIcon={icon}
            {...rest}
        />
    );
});
