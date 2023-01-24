import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cssColorShade } from '../../theme';
import { BaseButton, BaseButtonProps } from '../base/base-button';

type ButtonProps = {
    icon: ReactNode;
} & BaseButtonProps;

export const IconButton: React.FC<ButtonProps> = ({ icon, ...rest }) => {
    return (
        <BaseButton
            transition={{ type: 'spring', bounce: 0.6 }}
            className="test"
            padding={2}
            background={undefined}
            color="neutral800"
            borderColor="neutral200"
            startIcon={icon}
            whileHover={{
                borderColor: cssColorShade('neutral', 300),
            }}
            {...rest}
        />
    );
};
