import classNames from 'classnames';
import { CSSProperties, PropsWithChildren } from 'react';
import styles from './label.module.scss';
import { Box, BoxProps } from '../../layout';
import React from 'react';

export type LabelProps<TElement extends keyof JSX.IntrinsicElements = 'p'> = React.ComponentPropsWithRef<TElement> & {
    variant: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'button';
    className?: CSSProperties | string;
    as?: string;
};

export const Label: React.FC<PropsWithChildren<LabelProps>> = React.forwardRef(
    ({ children, as = 'p', className, variant, ...rest }, ref) => {
        // Define styling
        const stylingName = variant === 'button' ? 'button-text' : 'label-' + variant;

        return (
            <Box ref={ref} as={as} className={classNames(styles[stylingName], className)} {...rest}>
                {children}
            </Box>
        );
    }
);
