import { CSSProperties } from 'react';
import { ColorValues, cssColorShade, useTheme } from '../../theme';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import styles from './button.module.scss';

type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
    className?: CSSProperties | string;
    variant: ButtonVariants;
    size?: 'sm' | 'md' | 'lg';
    colorScheme?: ColorValues;
} & BaseButtonProps;

const sizeDef = {
    sm: 1,
    md: 2,
    lg: 3,
};

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant,
    size = 'md',
    colorScheme,
    ...rest
}) => {
    // Different color styles
    let buttonVariantStyles: BaseButtonProps = {};

    if (variant === 'primary') {
        let focusStyles = {
            background: cssColorShade(colorScheme, 400),
        };

        buttonVariantStyles = {
            background: colorScheme + '500',
            color: 'white',
            whileHover: focusStyles,
            whileFocus: focusStyles,
        };
    } else if (variant === 'secondary') {
        let focusStyles = {
            background: cssColorShade(colorScheme, 200),
        };

        buttonVariantStyles = {
            background: colorScheme + '100',
            color: colorScheme + '600',
            whileHover: focusStyles,
            whileFocus: focusStyles,
        };
    } else if (variant === 'tertiary') {
        let focusStyles = {
            background: cssColorShade(colorScheme, 100),
        };

        buttonVariantStyles = {
            background: undefined,
            borderColor: colorScheme + '300',
            color: colorScheme + '600',
            whileHover: focusStyles,
            whileFocus: focusStyles,
        };
    }

    return (
        <BaseButton
            // transition={{ type: 'spring', bounce: 0.6 }}
            className={className}
            paddingTop={sizeDef[size]}
            paddingBottom={sizeDef[size]}
            paddingLeft={4}
            paddingRight={4}
            {...buttonVariantStyles}
            {...rest}
        >
            {children}
        </BaseButton>
    );
};
