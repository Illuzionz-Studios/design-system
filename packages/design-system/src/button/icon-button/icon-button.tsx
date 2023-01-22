import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Box } from '../../layout/box';
import { useTheme } from '../../theme';
import styles from './icon-button.module.scss';

type ButtonProps = {
    icon: ReactNode;
    disabled?: boolean;
} & HTMLMotionProps<'button'>;

export const IconButton: React.FC<ButtonProps> = ({
    icon,
    disabled,
    ...rest
}) => {
    return (
        <motion.button
            className={classNames(styles.baseButton)}
            disabled={disabled}
            aria-disabled={disabled}
            {...rest}
        >
            <Box className={styles.iconWrapper}>{icon}</Box>
        </motion.button>
    );
};
