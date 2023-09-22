import classNames from 'classnames';
import { CSSProperties } from 'react';
import styles from './body.module.scss';
import { Box } from '../../layout';
import React from 'react';

type BodyProps<TElement extends keyof JSX.IntrinsicElements = 'p'> = React.ComponentPropsWithRef<TElement> & {
    variant: 'xl' | 'lg' | 'md' | 'sm';
    highlight?: boolean;
    className?: CSSProperties | string;
};

export const Body: React.FC<BodyProps> = React.forwardRef(
    ({ children, className, variant, highlight = false, ...rest }, ref) => {
        // Define styling
        const stylingName = 'body-' + variant + (highlight ? '-highlight' : '');

        return (
            <Box ref={ref} as="p" className={classNames(styles[stylingName], className)} {...rest}>
                {children}
            </Box>
        );
    }
);
