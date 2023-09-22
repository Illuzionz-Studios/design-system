import classNames from 'classnames';
import { CSSProperties, PropsWithChildren } from 'react';
import styles from './heading.module.scss';
import { Box } from '../../layout';
import React from 'react';

type HeadingProps<TElement extends keyof JSX.IntrinsicElements = 'h1'> = React.ComponentPropsWithRef<TElement> & {
    element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
    variant: 'hero' | 'display' | 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5';
    regular?: boolean;
    className?: CSSProperties | string;
};

export const Heading: React.FC<PropsWithChildren<HeadingProps>> = React.forwardRef(
    ({ children, className, element = 'h1', variant, regular = false, ...rest }, ref) => {
        // Define styling
        const stylingName = variant + (regular ? '-regular' : '');

        return (
            <Box ref={ref} as={element} className={classNames(styles[stylingName], className)} {...rest}>
                {children}
            </Box>
        );
    }
);
