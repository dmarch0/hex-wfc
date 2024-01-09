<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fabric } from 'fabric';

const CANVAS_ID = 'editor-canvas';

const fabricCanvas = ref();
const canvasRef = ref();

onMounted(() => {
    canvasRef.value.width = window.innerWidth;
    canvasRef.value.height = window.innerHeight;

    fabricCanvas.value = new fabric.Canvas(CANVAS_ID);
});
</script>

<template>
    <canvas :id="CANVAS_ID" ref="canvasRef" />
</template>