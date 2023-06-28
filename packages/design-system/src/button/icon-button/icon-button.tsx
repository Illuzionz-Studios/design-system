import { ReactNode } from 'react';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import { styled } from 'styled-components';

type ButtonProps = {
    icon: ReactNode;
} & BaseButtonProps;

const IconButtonWrapper = styled(BaseButton)`
    transition: 0.1s ease-in-out;

    &:hover {
        border: 1px solid var(--color-button-icon-border-hover);
    }
`;

export const IconButton: React.FC<ButtonProps> = ({ icon, ...rest }) => {
    return (
        <IconButtonWrapper
            padding={2}
            background="transparent"
            color="color-button-icon"
            borderColor="color-button-icon-border"
            startIcon={icon}
            {...rest}
        />
    );
};
