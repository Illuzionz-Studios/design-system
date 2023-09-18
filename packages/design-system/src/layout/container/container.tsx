import { CSSProperties, PropsWithChildren } from 'react';
import styles from './container.module.scss';
import { Box, BoxProps } from '../box';
import classNames from 'classnames';

type ContainerProps = BoxProps & {
    className?: CSSProperties;
};

export const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
    return (
        <Box className={classNames(styles.container, className)} {...rest}>
            {children}
        </Box>
    );
};

// Container that wraps content tightly
export const TightContainer: React.FC<ContainerProps> = ({ children, className, ...rest }) => {
    return (
        <Box className={classNames(styles.container, className)} {...rest}>
            {children}
        </Box>
    );
};
