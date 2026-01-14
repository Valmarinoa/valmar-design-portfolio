// components/pageDetailComponents/RosaGlitchShader.tsx
"use client";

import { useEffect, useRef } from "react";
import { rosaGlitchFrag as frag } from "@/components/shaders/rosaGlitchFrag";

declare global {
    interface Window {
        GlslCanvas: any;
    }
}

type Props = {
    image: string;
    className?: string;
    fixed?: boolean;

    seed?: number;
    speed?: number;
    amount?: number;

    bgColor?: [number, number, number];
    imageSize?: number; // 0.66 ≈ 2/3 screen
};

export default function RosaGlitchShader({
    image,
    className = "",
    fixed = false,
    seed,
    speed = 1,
    amount = 0.8,
    bgColor = [15, 115, 242],
    imageSize = 0.66,
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let sandbox: any = null;

        const resizeCanvasToCover = () => {
            const dpi = window.devicePixelRatio || 1;

            const el = fixed ? document.documentElement : canvas.parentElement;
            if (!el) return;

            const w = fixed ? window.innerWidth : (el as HTMLElement).clientWidth;
            const h = fixed ? window.innerHeight : (el as HTMLElement).clientHeight;

            canvas.width = Math.floor(w * dpi);
            canvas.height = Math.floor(h * dpi);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
        };

        const init = () => {
            if (!window.GlslCanvas) return;

            sandbox = new window.GlslCanvas(canvas);
            sandbox.load(frag);

            sandbox.setUniform("seed", seed ?? Math.random());
            sandbox.setUniform("u_speed", speed);
            sandbox.setUniform("u_amount", amount);
            sandbox.setUniform("u_imageSize", imageSize);

            sandbox.setUniform(
                "u_bg",
                bgColor[0] / 255,
                bgColor[1] / 255,
                bgColor[2] / 255
            );

            sandbox.setUniform("image", image);

            resizeCanvasToCover();
            window.addEventListener("resize", resizeCanvasToCover);

            return () => window.removeEventListener("resize", resizeCanvasToCover);
        };

        if (!window.GlslCanvas) {
            const script = document.createElement("script");
            script.src = "/shaders/glslcanvas.min.js";
            script.async = true;
            script.onload = () => {
                const cleanup = init();
                (canvas as any).__shaderCleanup = cleanup;
            };
            document.body.appendChild(script);
        } else {
            const cleanup = init();
            (canvas as any).__shaderCleanup = cleanup;
        }

        return () => {
            const cleanup = (canvas as any).__shaderCleanup;
            if (typeof cleanup === "function") cleanup();
            if (sandbox?.destroy) sandbox.destroy();
        };
    }, [image, fixed, seed, speed, amount, bgColor, imageSize]);

    const wrapperClass = fixed
        ? "fixed inset-0 w-screen h-screen overflow-hidden"
        : "absolute inset-0 w-full h-full overflow-hidden";

    return (
        <div className={`${wrapperClass} ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
