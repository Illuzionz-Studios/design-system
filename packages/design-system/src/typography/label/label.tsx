import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'framer-motion';
import { CSSProperties } from 'react';
import { useTheme } from '../../theme';
import styles from './label.module.scss';

type LabelProps = {
    variant: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'button';
    color?: string;
    className?: CSSProperties | string;
} & HTMLMotionProps<'span'>;

export const Label: React.FC<LabelProps> = ({
    children,
    className,
    variant,
    color,
    ...rest
}) => {
    // Define styling
    const stylingName =
        variant === 'button' ? 'button-text' : 'label-' + variant;
    const colors = {
        color: color ? 'var(--' + color + ')' : undefined,
    };

    return (
        <motion.span
            style={colors}
            className={classNames(styles[stylingName], className)}
            {...rest}
        >
            {children}
        </motion.span>
    );
};
