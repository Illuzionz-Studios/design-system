import { FaTimes } from 'react-icons/fa';
import { IconButton } from '../../button';
import { Box, BoxProps } from '../../layout/box';
import { Flex } from '../../layout/flex';
import { useModal } from '../context/modal-context';
import styles from './modal-header.module.scss';

export const ModalHeader: React.FC<BoxProps> = ({ children, ...rest }) => {
    const { onClose } = useModal();

    return (
        <Box
            className={styles.modalHeader}
            paddingTop={4}
            paddingBottom={4}
            paddingLeft={5}
            paddingRight={5}
            background="color-modal-header-border"
            {...rest}
        >
            <Flex direction="row" alignItems="center" justifyContent="space-between">
                {children}
                <IconButton icon={<FaTimes />} onClick={onClose} />
            </Flex>
        </Box>
    );
};
