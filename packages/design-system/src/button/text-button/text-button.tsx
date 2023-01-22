import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Box } from '../../layout/box';
import { useTheme } from '../../theme';
import { Label } from '../../typography';
import styles from './text-button.module.scss';

type ButtonProps = {
    color?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
} & HTMLMotionProps<'button'>;

export const TextButton: React.FC<ButtonProps> = ({
    children,
    color,
    startIcon,
    endIcon,
    disabled,
    fullWidth,
    ...rest
}) => {
    const { theme, toggleTheme } = useTheme();

    const colors = {
        color: color ? 'var(--' + color + ')' : undefined,
    };

    return (
        <motion.button
            style={colors}
            className={classNames(
                styles.baseButton,
                fullWidth ? styles.fullWidth : ''
            )}
            disabled={disabled}
            aria-disabled={disabled}
            {...rest}
        >
            {startIcon && <Box className={styles.iconWrapper}>{startIcon}</Box>}
            <Label variant="button">{children}</Label>
            {endIcon && <Box className={styles.iconWrapper}>{endIcon}</Box>}
        </motion.button>
    );
};
