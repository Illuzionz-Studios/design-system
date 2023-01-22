import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import styles from './full-section.module.scss';

export const FullSection: React.FC<HTMLMotionProps<'div'>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <motion.div
            className={classNames(styles.fullSection, className)}
            {...rest}
        >
            {children}
        </motion.div>
    );
};
