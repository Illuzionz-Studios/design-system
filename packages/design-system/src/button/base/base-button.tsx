import { PropsWithChildren, ReactNode, forwardRef } from 'react';
import { Label } from '../../typography';
import { styled } from 'styled-components';
import { Flex } from '../../layout';
import { FlexProps } from '../../layout/flex/flex';

export type BaseButtonProps<TElement extends keyof JSX.IntrinsicElements = 'button'> = FlexProps<TElement> & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
};

// Wrapper for a button icon to size it correctly
const IconWrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <Flex height="16px" width="auto" justifySelf="center" alignItems="center">
        {children}
    </Flex>
);

export const BaseButtonWrapper = styled(Flex)<{ $fullWidth: boolean | undefined }>`
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};

    &[aria-disabled='true'] {
        pointer-events: none;
        cursor: default;
        background-color: var(--color-button-disabled-bg);
        border: 1px solid var(--color-button-disabled-bg);
        color: var(--color-button-disabled-text);
    }
`;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ children, disabled = false, startIcon, endIcon, fullWidth, ...rest }, ref) => {
        return (
            <BaseButtonWrapper
                ref={ref}
                as="button"
                type="button"
                disabled={disabled}
                aria-disabled={disabled}
                radius="sm"
                cursor="pointer"
                alignItems="center"
                padding={4}
                gap={2}
                justifyContent="center"
                $fullWidth={fullWidth}
                {...rest}
            >
                {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
                <Label variant="button">{children}</Label>
                {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
            </BaseButtonWrapper>
        );
    }
);
