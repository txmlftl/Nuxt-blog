<template>  
    <div>  
      <svg :width="svgWidth" :height="svgHeight" style="background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.9c53b408a17d5a5729dfb18896769e48?rik=t3j0fCDHxyOfoQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd2020326s%2f120%2fw1440h1080%2f20200326%2fba0a-irkazzv4003483.jpg&ehk=QFySXVdZK6o%2bpQ3WFFTF2xwBWFJeUwK4cEaap1iQThM%3d&risl=&pid=ImgRaw&r=0');">  
        <rect  
          :x="square.x"  
          :y="square.y"  
          :width="square.width"  
          :height="square.width"  
          fill="blue"  
          opacity="0.5"  
          @mousedown="dragStart"  
          @touchstart.prevent="dragStart"  
          :style="{ cursor: dragging ? 'grabbing' : 'grab' }"  
        />  
      </svg>  
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        svgWidth: 500,  
        svgHeight: 500,  
        square: {  
          x: 50,  
          y: 50,  
          width: 100,  
          dragging: false  
        },  
        initialMouseX: 0,  
        initialMouseY: 0,  
        initialX: 0,  
        initialY: 0  
      };  
    },  
    methods: {  
      dragStart(event) {  
        this.dragging = true;  
        this.initialMouseX = event.clientX - this.square.x;  
        this.initialMouseY = event.clientY - this.square.y;  
        this.initialX = this.square.x;  
        this.initialY = this.square.y;  
    
        document.addEventListener('mousemove', this.drag);  
        document.addEventListener('mouseup', this.dragEnd);  
        // 添加对touch事件的监听（如果需要）  
        // ...  
      },  
      drag(event) {  
        if (!this.dragging) return;  
        this.square.x = event.clientX - this.initialMouseX;  
        this.square.y = event.clientY - this.initialMouseY;  
    
        // 确保正方形保持在SVG内部  
        if (this.square.x < 0) this.square.x = 0;  
        if (this.square.y < 0) this.square.y = 0;  
        if (this.square.x + this.square.width > this.svgWidth) this.square.x = this.svgWidth - this.square.width;  
        if (this.square.y + this.square.width > this.svgHeight) this.square.y = this.svgHeight - this.square.width;  
      },  
      dragEnd() {  
        this.dragging = false;  
        document.removeEventListener('mousemove', this.drag);  
        document.removeEventListener('mouseup', this.dragEnd);  
        // 移除对touch事件的监听（如果需要）  
        // ...  
      }  
    }  
  };  
  </script>  
    
  <style scoped>  
  /* 你可以在这里添加一些样式 */  
  </style>