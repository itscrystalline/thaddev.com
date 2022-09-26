import * as React from "react";
import {ForwardedRef, useCallback, useImperativeHandle, useLayoutEffect, useRef, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import axios from "axios";

type CanvasProps = {
    canvasWidth: number;
    canvasHeight: number;
    dots: Point[];
    ref: ForwardedRef<any>;
    pois: POIData[];
};

type POIData = {
    id: number;
    name: string;
    level: number;
    type: string;
    x: number;
    y: number;
}

enum PointType {
    WATER_DISPENER = "#4ba2cd",
    TRASH_CAN = "#2c2f2f",
    RESTROOM_MEN = "#535b44",
    RESTROOM_WOMEN = "#e78bb6",
}

type Point = {
    x: number;
    y: number;
};

const mapDimensions = [[13.295347629227313, 101.16223001293424], [13.289546252661156, 101.16088169244172],
    [13.289013253478164, 101.16321321626707], [13.294826029463868, 101.16473221332163]];

//TL: 13.295347629227313, 101.16223001293424
// BL: 13.289546252661156, 101.16088169244172
// TR: 13.294826029463868, 101.16473221332163
// BR: 13.289013253478164, 101.16321321626707

const ORIGIN = Object.freeze({x: 0, y: 0});

function diffPoints(p1: Point, p2: Point) {
    return {x: p1.x - p2.x, y: p1.y - p2.y};
}

function addPoints(p1: Point, p2: Point) {
    return {x: p1.x + p2.x, y: p1.y + p2.y};
}

function scalePoint(p1: Point, scale: number) {
    return {x: p1.x / scale, y: p1.y / scale};
}

const ZOOM_SENSITIVITY = 500; // bigger for lower zoom per scroll

function MapCanvas(props: CanvasProps, ref: ForwardedRef<any>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [mousePos, setMousePos] = useState<Point>(ORIGIN);
    const isResetRef = useRef<boolean>(false);
    let [clickPos, setClickPos] = useState<Point>(null);
    let [targetPos, setTargetPos] = useState<Point>(null);

    useImperativeHandle(ref, () => ({
        refreshMap() {
            reloadMap()
        },
        async findAndDrawPath(toFind: string) {
            if (context && clickPos !== null) {
                console.log("finding path...")
                const path = await axios.get('https://api.thaddev.com/api-v1/locator/shortest?targetType=' + toFind + '&posX=' + clickPos.x + '&posY=' + clickPos.y)
                const data = path.data
                targetPos = {x: data.x, y: data.y}
                setTargetPos(targetPos)
            }
        },
    }));

    // reset
    const reset = useCallback(
        (context: CanvasRenderingContext2D) => {
            if (context && !isResetRef.current) {
                console.log("reset!")
                // adjust for device pixel density
                context.canvas.width = props.canvasWidth;
                context.canvas.height = props.canvasHeight;
                context.canvas.style.width = `100%`;
                context.canvas.style.height = `100%`;
                // reset state and refs
                setContext(context);
                setMousePos(ORIGIN);

                // this thing is so multiple resets in a row don't clear canvas
                isResetRef.current = true;

                reloadMap()
            }
        },
        [props.canvasWidth, props.canvasHeight]
    );

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
            if (context) {
                console.log("device pixel ratio: " + window.devicePixelRatio)
                const x = (event.clientX - context.canvas.getBoundingClientRect().left);
                const y = (event.clientY - context.canvas.getBoundingClientRect().top);
                console.log("clicked at:" + x, ", " + y)
                clickPos = {x: x, y: y};
                setClickPos(clickPos)
                reloadMap()
            }
        },
        [
            context
        ]
    );

    // setup canvas and set context
    useLayoutEffect(() => {
        if (canvasRef.current) {
            console.log("set up!")
            // get new drawing context
            reloadMap()

            const renderCtx = canvasRef.current.getContext("2d");
            if (renderCtx) {
                reset(renderCtx);
            }
        }
    }, [reset, props.canvasHeight, props.canvasWidth]);

    // draw
    useLayoutEffect(() => {
        reloadMap()
    }, [
        props.canvasWidth,
        props.canvasHeight,
        context
    ]);

    const reloadMap = useCallback(
        () => {
            if (context) {
                console.log("reload!")

                const map = new Image()
                map.src = '/images/pccchon.png';
                map.onload = function () {
                    context.drawImage(map, 0, 0, context.canvas.width, context.canvas.height);
                    //dots
                    for (let i = 0; i < props.pois.length; i++) {
                        context.fillStyle = getColorFromType(props.pois[i].type);
                        context.fillRect((props.pois[i].x) - 5, (props.pois[i].y) - 5, 10, 10)
                    }

                    //pos
                    if (clickPos !== null) {
                        console.log("draw pos at " + clickPos.x + ", " + clickPos.y)
                        context.fillStyle = "#005eff";
                        context.fillRect((clickPos.x) - 5, (clickPos.y) - 5, 10, 10)
                    }

                    // path
                    if (targetPos !== null) {
                        context.beginPath()
                        context.moveTo(clickPos.x, clickPos.y)
                        context.lineTo(targetPos.x, targetPos.y)
                        context.fillStyle = "#005eff";
                        context.lineWidth = 10;
                        context.stroke()
                    }
                }
            }
        }, [
            props.canvasWidth,
            props.canvasHeight,
            context
        ]);

    return (
        <div>
            <canvas
                onClick={handleClick}
                ref={canvasRef}
                style={{
                    border: "5px solid #2e2e2e",
                    backgroundColor: "#2e2e2e",
                }}
            />
        </div>
    );
}

function getColorFromType(type: string): string {
    switch (type) {
        case PointType[PointType.RESTROOM_MEN]:
            return PointType.RESTROOM_MEN;
        case PointType[PointType.RESTROOM_WOMEN]:
            return PointType.RESTROOM_WOMEN;
        case PointType[PointType.TRASH_CAN]:
            return PointType.TRASH_CAN;
        default:
            return PointType.WATER_DISPENER;
    }
}

export default React.forwardRef(MapCanvas)
