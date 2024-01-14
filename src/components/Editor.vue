<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fabric } from 'fabric';
import { Hex } from '../geometry/Hex';
import { Vector2 } from '../geometry/Vector2';

const CANVAS_ID = 'editor-canvas';

const fabricCanvas = ref();
const canvasRef = ref();

const SIZE = 50;
const HEIGHT = SIZE * 2;
const WIDTH = Math.sqrt(3) * SIZE;
const X_HEXES = 5;
const Y_HEXES = 5;

onMounted(() => {
    canvasRef.value.width = window.innerWidth;
    canvasRef.value.height = window.innerHeight;

    const hexes: Hex[] = [];
    for (let i = 0; i < X_HEXES; i++) {
        for (let j = 0; j < Y_HEXES; j++) {
            const x = (i % 2 === 0 ? WIDTH / 2 : 0) + j * WIDTH + WIDTH / 2;
            const y = HEIGHT / 2 + i * HEIGHT * 3 / 4;
            const center = new Vector2(x, y);
            const hex = new Hex(center, SIZE);
            hexes.push(hex);
        }
    }

    fabricCanvas.value = new fabric.Canvas(CANVAS_ID);

    for (let hex of hexes) {
        console.log(hex)
        const polygon = new fabric.Polygon(hex.points);
        polygon.set('fill', `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
        fabricCanvas.value.add(polygon)
    }
});
</script>

<template>
    <canvas :id="CANVAS_ID" ref="canvasRef" />
</template>