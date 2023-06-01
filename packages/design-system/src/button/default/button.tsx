import { CSSProperties } from 'react';
import { ColorValues, useTheme } from '../../theme';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import styles from './button.module.scss';
import classNames from 'classnames';

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
    let variantClass = 'button-' + variant;

    return (
        <BaseButton
            className={classNames(styles[variantClass], className)}
            paddingTop={sizeDef[size]}
            paddingBottom={sizeDef[size]}
            paddingLeft={4}
            paddingRight={4}
            {...rest}
        >
            {children}
        </BaseButton>
    );
};
