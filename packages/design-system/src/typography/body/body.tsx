import classNames from 'classnames';
import { CSSProperties } from 'react';
import styles from './body.module.scss';
import { Box } from '../../layout';

type BodyProps<TElement extends keyof JSX.IntrinsicElements = 'p'> = React.ComponentPropsWithoutRef<TElement> & {
    variant: 'xl' | 'lg' | 'md' | 'sm';
    color?: string;
    highlight?: boolean;
    className?: CSSProperties | string;
};

export const Body: React.FC<BodyProps> = ({ children, className, variant, color, highlight = false, ...rest }) => {
    // Define styling
    const stylingName = 'body-' + variant + (highlight ? '-highlight' : '');

    return (
        <Box
            color={color ? 'var(--' + color + ')' : undefined}
            as="p"
            className={classNames(styles[stylingName], className)}
            {...rest}
        >
            {children}
        </Box>
    );
};
