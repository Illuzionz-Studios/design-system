import { ColorValues, cssColorShade } from '../../theme';
import { BaseButton, BaseButtonProps } from '../base/base-button';

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
            transition={{ type: 'spring', bounce: 0.6 }}
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={4}
            paddingRight={4}
            background="transparent"
            color={colorScheme + '600'}
            whileHover={{
                background: cssColorShade(colorScheme, 100),
            }}
            {...rest}
        >
            {children}
        </BaseButton>
    );
};
