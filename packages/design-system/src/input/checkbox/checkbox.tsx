import { ChangeEventHandler, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Flex } from '../../layout/flex';
import styles from './checkbox.module.scss';

type CheckboxInputProps = {
    id: string;
    name: string;
    checked: boolean;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
} & React.HTMLAttributes<HTMLInputElement>;

/**
 * Base check box styling. Exposes control variables
 */
export const CheckboxInput: React.FC<CheckboxInputProps> = ({
    id,
    name,
    checked,
    disabled,
    onChange,
    ...rest
}) => {
    const checkBox = useRef<HTMLInputElement>(null);

    return (
        <Flex>
            {checked && (
                <FaCheck
                    className={styles.check}
                    aria-disabled={disabled}
                    onClick={() => checkBox?.current?.click()}
                />
            )}
            <input
                type="checkbox"
                ref={checkBox}
                className={styles.checkbox}
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                {...rest}
            />
        </Flex>
    );
};
