import { CSSProperties } from 'react';
import styled from 'styled-components';

// Allow css rules
export type BoxProps<TElement extends keyof JSX.IntrinsicElements = 'div'> = React.ComponentPropsWithoutRef<TElement> &
    Pick<
        CSSProperties,
        | 'pointerEvents'
        | 'display'
        | 'position'
        | 'zIndex'
        | 'overflow'
        | 'cursor'
        | 'transition'
        | 'transform'
        | 'animation'
        | 'textAlign'
        | 'textTransform'
    > & {
        // Colors
        background?: string;
        color?: string;

        // Border
        borderColor?: string;
        borderSize?: CSSProperties['borderWidth'];
        borderStyle?: CSSProperties['borderStyle'];
        radius?: 'sm' | 'md' | 'lg';

        // Padding & margin
        padding?: number | string;
        paddingBottom?: number;
        paddingLeft?: number;
        paddingTop?: number;
        paddingRight?: number;
        margin?: number | string;
        marginBottom?: number;
        marginLeft?: number;
        marginTop?: number;
        marginRight?: number;

        // Flex child properties
        basis?: CSSProperties['flexBasis'];
        grow?: CSSProperties['flexGrow'];
        shrink?: CSSProperties['flexShrink'];
        flex?: CSSProperties['flex'];
        textAlign?: CSSProperties['textAlign'];

        // Sizing
        width?: CSSProperties['width'];
        minWidth?: CSSProperties['minWidth'];
        maxWidth?: CSSProperties['maxWidth'];
        height?: CSSProperties['height'];
        minHeight?: CSSProperties['minHeight'];
        maxHeight?: CSSProperties['maxHeight'];

        children?: React.ReactNode;
    };

const transientProps: Partial<Record<keyof BoxProps, boolean>> = {
    color: true,
    cursor: true,
    height: true,
    width: true,
};

/**
 * A div container that maintains the specs of our design system.
 * Use this for in place of a div where we need consistent spacing, colours
 * etc. This will auto convert input to the specs of our design system.
 */
export const Box = styled.div.withConfig({
    shouldForwardProp: (prop) => !transientProps[prop as keyof BoxProps],
})<BoxProps>`
    // Color
    background: ${({ background }) => (background ? 'var(--' + background + ')' : undefined)};
    color: ${({ color }) => (color ? 'var(--' + color + ')' : undefined)};

    // Border
    border: ${(props) =>
        props.borderColor
            ? (props.borderSize ? props.borderSize : '1px') +
              ' ' +
              (props.borderStyle ? props.borderStyle : 'solid') +
              ' ' +
              (props.borderColor ? 'var(--' + props.borderColor + ')' : 'transparent')
            : 'none'};
    border-radius: ${({ theme, radius }) => (radius ? theme.borderRadius[radius] : undefined)};

    // Padding
    padding: ${({ theme, padding }) => (padding && Number.isFinite(padding) ? theme.spaces[padding] : padding)};
    padding-bottom: ${({ theme, paddingBottom }) => (paddingBottom ? theme.spaces[paddingBottom] : undefined)};
    padding-left: ${({ theme, paddingLeft }) => (paddingLeft ? theme.spaces[paddingLeft] : undefined)};
    padding-top: ${({ theme, paddingTop }) => (paddingTop ? theme.spaces[paddingTop] : undefined)};
    padding-right: ${({ theme, paddingRight }) => (paddingRight ? theme.spaces[paddingRight] : undefined)};

    // Margin
    margin: ${({ theme, margin }) => (margin && Number.isFinite(margin) ? theme.spaces[margin] : margin)};
    margin-bottom: ${({ theme, marginBottom }) => (marginBottom ? theme.spaces[marginBottom] : undefined)};
    margin-left: ${({ theme, marginLeft }) => (marginLeft ? theme.spaces[marginLeft] : undefined)};
    margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spaces[marginTop] : undefined)};
    margin-right: ${({ theme, marginRight }) => (marginRight ? theme.spaces[marginRight] : undefined)};

    // If clickable
    pointer-events: ${({ pointerEvents }) => pointerEvents};

    // Display
    display: ${({ display }) => display};

    // Positon
    position: ${({ position }) => position};
    z-index: ${({ zIndex }) => zIndex};
    overflow: ${({ overflow }) => overflow};

    // Size
    width: ${({ width }) => width};
    max-width: ${({ maxWidth }) => maxWidth};
    min-width: ${({ minWidth }) => minWidth};
    height: ${({ height }) => height};
    max-height: ${({ maxHeight }) => maxHeight};
    min-height: ${({ minHeight }) => minHeight};

    // Animation
    transition: ${({ transition }) => transition};
    transform: ${({ transform }) => transform};
    animation: ${({ animation }) => animation};

    // Flex
    flex-shrink: ${({ shrink }) => shrink};
    flex-grow: ${({ grow }) => grow};
    flex-basis: ${({ basis }) => basis};
    flex: ${({ flex }) => flex};

    // Text
    text-align: ${({ textAlign }) => textAlign};
    text-transform: ${({ textTransform }) => textTransform};

    // Cursor
    cursor: ${({ cursor }) => cursor};
`;
