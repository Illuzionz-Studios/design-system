import classNames from 'classnames';
import { Box, BoxProps } from '../layout/box';
import styles from './badge.module.scss';
import { PrimaryColorValues } from '../theme';

type BadgeProps = {
    variant: PrimaryColorValues;
} & BoxProps;

export const Badge: React.FC<BadgeProps> = ({ children, variant, ...rest }) => {
    const variantClass = 'badge-' + variant;

    return (
        <Box paddingLeft={2} paddingRight={2} className={classNames(styles.badge, styles[variantClass])} {...rest}>
            {children}
        </Box>
    );
};
