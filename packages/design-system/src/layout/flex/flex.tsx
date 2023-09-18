import { CSSProperties } from 'react';
import { Box, BoxProps } from '../box';
import styled from 'styled-components';

export type FlexProps<TElement extends keyof JSX.IntrinsicElements = 'div'> = BoxProps<TElement> & {
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    justifySelf?: CSSProperties['justifySelf'];
    inline?: boolean;

    direction?: CSSProperties['flexDirection'];
    wrap?: CSSProperties['flexWrap'];
    gap?: number;
};

const transientProps: Partial<Record<keyof FlexProps, boolean>> = {
    alignItems: true,
    justifyContent: true,
    justifySelf: true,
    inline: true,
    direction: true,
    wrap: true,
    gap: true,
};

/**
 * A box container that acts as a flex parent. Allows properties of a box
 * but also allows you to align content
 */
export const Flex = styled(Box).withConfig({
    shouldForwardProp: (prop) => !transientProps[prop as keyof FlexProps],
})<FlexProps>`
    align-items: ${({ alignItems = 'flex-start' }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    justify-self: ${({ justifySelf }) => justifySelf};
    display: ${({ display = 'flex', inline }) => (inline ? 'inline-flex' : display)};

    flex-direction: ${({ direction = 'row' }) => direction};
    flex-wrap: ${({ wrap }) => wrap};
    gap: ${({ theme, gap }) => (gap ? theme.spaces[gap] : undefined)};
`;
