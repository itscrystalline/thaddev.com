import * as React from "react";
import {ForwardedRef, useCallback, useImperativeHandle, useLayoutEffect, useRef, useState} from "react";

type CanvasProps = {
    canvasWidth: number;
    canvasHeight: number;
    ref: ForwardedRef<any>;
    pois: POIData[];
    targetPos: Point;
    resetTarget: () => void;
    handleClick: (clickpos) => void;
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
    WATER_DISPENSER = "#4ba2cd",
    TRASH_CAN = "#2c2f2f",
    RESTROOM_MEN = "#535b44",
    RESTROOM_WOMEN = "#e78bb6",
}

type Point = {
    x: number;
    y: number;
};

const ORIGIN = Object.freeze({x: 0, y: 0});

function MapCanvas(props: CanvasProps, ref: ForwardedRef<any>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [mousePos, setMousePos] = useState<Point>(ORIGIN);
    const isResetRef = useRef<boolean>(false);
    let [clickPos, setClickPos] = useState<Point>(null);
    let [targetPos, setTargetPos] = useState<Point>(null);

    useImperativeHandle(ref, () => ({
        refreshMap(targetPosRef: Point) {
            targetPos = targetPosRef;
            setTargetPos(targetPos);
            console.log("refreshing map with targetPosRef ", JSON.stringify(targetPosRef));
            reloadMapWithPos(targetPos)
        }
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
                const x = (event.clientX - context.canvas.getBoundingClientRect().left) * window.devicePixelRatio;
                const y = (event.clientY - context.canvas.getBoundingClientRect().top) * window.devicePixelRatio;
                console.log("clicked at:" + x, ", " + y)
                clickPos = {x: x, y: y};
                setClickPos(clickPos)
                props.handleClick(clickPos)

                props.resetTarget()

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
                console.log("reloading map!")
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
                        context.fillStyle = "#005eff";
                        context.fillRect((clickPos.x) - 5, (clickPos.y) - 5, 10, 10)
                        console.log("Drawing clickPos: " + clickPos.x + ", " + clickPos.y)

                        // path
                        console.log(targetPos)
                        if (targetPos) {
                            console.log("draw path from " + clickPos.x + ", " + clickPos.y + " to " + targetPos.x + ", " + targetPos.y)
                            context.beginPath()
                            context.moveTo(clickPos.x, clickPos.y)
                            context.lineTo(targetPos.x, targetPos.y)

                            const colorData = context.getImageData(targetPos.x, targetPos.y, 1, 1).data;
                            const color = "#" + ("000000" + rgbToHex(colorData[0], colorData[1], colorData[2])).slice(-6);
                            console.log("color: " + color)

                            const gradient = context.createLinearGradient(clickPos.x, clickPos.y, targetPos.x, targetPos.y);

                            gradient.addColorStop(0, "#005eff");
                            gradient.addColorStop(1, color);
                            context.strokeStyle = gradient;
                            context.lineWidth = 10;
                            context.stroke()
                        }
                    }
                }
            }
        }, [
            props.canvasWidth,
            props.canvasHeight,
            context
        ]);

    const reloadMapWithPos = useCallback(
        (pos: Point) => {
            if (context) {
                console.log("reloading map!")
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
                        context.fillStyle = "#005eff";
                        context.fillRect((clickPos.x) - 5, (clickPos.y) - 5, 10, 10)

                        // path
                        console.log(pos)
                        console.log("draw path from " + clickPos.x + ", " + clickPos.y + " to " + pos.x + ", " + pos.y)
                        context.beginPath()
                        context.moveTo(clickPos.x, clickPos.y)
                        context.lineTo(pos.x, pos.y)
                        context.strokeStyle = "#005eff";
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
        case "RESTROOM_MEN":
            return PointType.RESTROOM_MEN;
        case "RESTROOM_WOMEN":
            return PointType.RESTROOM_WOMEN;
        case "TRASH_CAN":
            return PointType.TRASH_CAN;
        default:
            return PointType.WATER_DISPENSER;
    }
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

export default React.forwardRef(MapCanvas)
