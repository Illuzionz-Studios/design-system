import classNames from 'classnames';
import { CSSProperties } from 'react';
import styles from './label.module.scss';
import { Box, BoxProps } from '../../layout';

type LabelProps<TElement extends keyof JSX.IntrinsicElements = 'span'> = BoxProps<TElement> & {
    variant: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'button';
    color?: string;
    className?: CSSProperties | string;
    as?: string;
};

export const Label: React.FC<LabelProps> = ({ children, as = 'span', className, variant, color, ...rest }) => {
    // Define styling
    const stylingName = variant === 'button' ? 'button-text' : 'label-' + variant;

    return (
        <Box
            color={color ? 'var(--' + color + ')' : undefined}
            as={as}
            className={classNames(styles[stylingName], className)}
            {...rest}
        >
            {children}
        </Box>
    );
};
