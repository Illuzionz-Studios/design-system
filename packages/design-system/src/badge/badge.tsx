import classNames from 'classnames';
import { Box, BoxProps } from '../layout/box';
import styles from './badge.module.scss';
import { PrimaryColorValues } from '../theme';
import React from 'react';

type BadgeProps = {
    variant: PrimaryColorValues;
} & BoxProps;

export const Badge: React.FC<BadgeProps> = React.forwardRef(({ children, variant, ...rest }, ref) => {
    const variantClass = 'badge-' + variant;

    return (
        <Box
            ref={ref}
            paddingLeft={2}
            paddingRight={2}
            className={classNames(styles.badge, styles[variantClass])}
            {...rest}
        >
            {children}
        </Box>
    );
});
