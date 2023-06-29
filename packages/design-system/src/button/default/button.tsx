import { PropsWithChildren, forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import { ButtonVariants, getHoverStyle, getVariantStyle } from './utils';
import styled from 'styled-components';

type ButtonProps = {
    variant: ButtonVariants;
    size?: 'sm' | 'md' | 'lg';
} & BaseButtonProps;

export const ButtonWrapper = styled(BaseButton)<{ $variant: ButtonVariants }>`
    transition: background 0.1s ease-in-out;

    &:hover {
        ${({ $variant }) => getHoverStyle($variant)}
    }

    ${({ $variant }) => getVariantStyle($variant)}
`;

const sizeDef = {
    sm: 1,
    md: 2,
    lg: 3,
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, variant, size = 'md', ...rest }) => {
    return (
        <ButtonWrapper
            $variant={variant}
            paddingTop={sizeDef[size]}
            paddingBottom={sizeDef[size]}
            paddingLeft={4}
            paddingRight={4}
            {...rest}
        >
            {children}
        </ButtonWrapper>
    );
};
