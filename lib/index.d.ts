import React from "react";
export declare type xarrowPropsType = {
    start: any;
    end: any;
    startAnchor?: any;
    endAnchor?: any;
    label?: any;
    color?: string;
    lineColor?: string | null;
    headColor?: string | null;
    strokeWidth?: number;
    headSize?: number;
    path?: "smooth" | "grid" | "straight";
    curveness?: number;
    dashness?: boolean | {
        strokeLen?: number;
        nonStrokeLen?: number;
        animation?: boolean | number;
    };
    passProps?: React.SVGProps<SVGPathElement>;
    extendSVGcanvas?: number;
    SVGcanvasProps?: React.SVGAttributes<SVGSVGElement>;
    arrowBodyProps?: React.SVGProps<SVGPathElement>;
    arrowHeadProps?: React.SVGProps<SVGPathElement>;
    divContainerProps?: React.HTMLProps<HTMLDivElement>;
};
export declare type anchorType = anchorPositionType | anchorCustomPositionType;
export declare type anchorPositionType = "middle" | "left" | "right" | "top" | "bottom" | "auto";
export declare type anchorCustomPositionType = {
    position: anchorPositionType;
    offset: {
        rightness: number;
        bottomness: number;
    };
};
export declare type reactRefType = {
    current: null | HTMLElement;
};
export declare type refType = reactRefType | string;
export declare type labelsType = {
    start?: labelType;
    middle?: labelType;
    end?: labelType;
};
export declare type labelType = JSX.Element;
export declare type domEventType = keyof GlobalEventHandlersEventMap;
export declare type registerEventsType = {
    ref: refType;
    eventName: domEventType;
    callback?: CallableFunction;
};
declare const Xarrow: React.FC<xarrowPropsType>;
export default Xarrow;
//# sourceMappingURL=index.d.ts.map