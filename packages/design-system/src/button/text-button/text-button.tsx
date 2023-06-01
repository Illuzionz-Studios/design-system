import { ColorValues } from '../../theme';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import styles from './text-button.module.scss';

type ButtonProps = {
    colorScheme?: ColorValues;
} & BaseButtonProps;

export const TextButton: React.FC<ButtonProps> = ({
    children,
    colorScheme = 'primary',
    ...rest
}) => {
    return (
        <BaseButton
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={4}
            paddingRight={4}
            className={styles.textButton}
            {...rest}
        >
            {children}
        </BaseButton>
    );
};
