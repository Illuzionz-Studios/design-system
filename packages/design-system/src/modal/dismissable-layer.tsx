import { PropsWithChildren, useCallback, useEffect } from 'react';

type DismissableLayerProps = {
    onEscapeKeyDown: (event: KeyboardEvent) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const DismissableLayer: React.FC<PropsWithChildren<DismissableLayerProps>> = ({
    children,
    onEscapeKeyDown,
    ...rest
}) => {
    const onEscapeKeyDownHandler = useCallback(onEscapeKeyDown, [onEscapeKeyDown]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onEscapeKeyDownHandler(event);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onEscapeKeyDownHandler]);

    return <div {...rest}>{children}</div>;
};
