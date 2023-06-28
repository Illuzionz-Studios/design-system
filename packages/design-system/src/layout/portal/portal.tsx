import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
    wrapperId: string;
};

export const Portal: React.FC<PropsWithChildren<PortalProps>> = ({
    children,
    wrapperId,
}) => {
    const [wrapperElement, setWrapperElement] = useState<Element | null>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        // if element is not found with wrapperId or wrapperId is not provided,
        // create and append to body
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // delete the programatically created element
            if (systemCreated && element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);
    // wrapperElement state will be null on the very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
};

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    wrapperElement.setAttribute('data-react-portal', 'true');
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}
