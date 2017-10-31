<template>
    <div id="tabContainer" 
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
        <div class="wrap-tab-container" 
             ref="wrapConItems">
             <!-- v-show="displayPos == 0 || isTouch" -->
            <div class="container-item">
                <ul>
                    <li v-for="n in 6" :key="n">{{n}}</li>
                </ul>
            </div>
            <div class="container-item">
                <ul>
                    <li v-for="n in 7" :key="n">{{n}}</li>
                </ul>
            </div>
            <div class="container-item">
                <ul>
                    <li v-for="n in 8" :key="n">{{n}}</li>
                </ul>
            </div>
            <div class="container-item">
                <ul>
                    <li v-for="n in 9" :key="n">{{n}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabContainer',
    data(){
        return {
             displayPos: 0,       //当前展示的自容器

             startTouchPoint: '', //touch初始点
             container: '',       //".wrap-tab-container"节点
             chilren: '',         //所有子容器的节点
             pageWidth: '',       //容器宽度
             minTouchWidth: '',   //切换所需滑动的最小距离
             isTouch: false,      //点击状态
             distance: ''         //拖动的距离
        }
    },
    mounted: function(){
        this.container = this.$refs.wrapConItems;
        this.pageWidth = this.container.clientWidth;
        this.minTouchWidth = this.pageWidth / 4;   
        this.children = Array.prototype.slice.call(this.container.children);
    },
    methods: {
        touchStart(evt){
            this.startTouchPoint = evt.touches[0].pageX;
            this.isTouch = true;
        },
        touchMove(evt){
            if(!this.isTouch) return;
            evt.preventDefault();

            let distance = evt.touches[0].pageX - this.startTouchPoint,
                currentItemPos = -this.displayPos * this.pageWidth + distance;

            // 排序为(第一/最后的)子容器在(右/左)滑时距离不超过父容器宽度的1/8
            if((Math.abs(distance) > this.minTouchWidth / 2)){
                if(distance > 0 && this.displayPos == 0) return;
                if(distance < 0 && this.displayPos == this.children.length-1) return;
            }

            this.distance = distance;
            this.container.style.webkitTransform = `translateX(${currentItemPos}px)`;
        },
        touchEnd(){
            this.isTouch = false;

            if(Math.abs(this.distance) > this.minTouchWidth){
                this.distance > 0 ? this.displayPos-- : this.displayPos++;
            }
            this.container.classList.add('transition');
            this.container.style.webkitTransform = `translateX(${-this.displayPos * this.pageWidth}px)`;

            console.log(this.displayPos);
            setTimeout(()=>{
                this.container.classList.remove('transition');
            } , 100);
        }
    }
}
</script>

<style scoped>
#tabContainer{
    position: relative;
    overflow: hidden;
}
.wrap-tab-container{
    display: flex;
    transform: translateX(0);
}
.container-item{
    width: 100%;
    flex-shrink: 0;
    background-color: lightblue;
}
.transition{
    transition: transform .1s linear;
}
</style>
