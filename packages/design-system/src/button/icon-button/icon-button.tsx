import styles from './icon-button.module.scss';
import { ReactNode } from 'react';
import { BaseButton, BaseButtonProps } from '../base/base-button';

type ButtonProps = {
    icon: ReactNode;
} & BaseButtonProps;

export const IconButton: React.FC<ButtonProps> = ({ icon, ...rest }) => {
    return (
        <BaseButton
            padding={2}
            background={'transparent'}
            className={styles.iconButton}
            color="color-button-icon"
            borderColor="color-button-icon-border"
            startIcon={icon}
            {...rest}
        />
    );
};
