<template>
    <div id="tabContainer" 
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
        <div class="wrap-tab-container" 
             ref="wrapConItems">
             <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabContainer',
    props: {
        selected: [Number,String]       
    },
    data(){
        return {
            displayPos: this.selected,        //当前展示的子容器
            startTouchPoint: '', //touch初始点
            container: '',       //子节点的父元素
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

        console.log(this.pageWidth);
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
        touchEnd(evt){
            this.isTouch = false;

            if(Math.abs(this.distance) > this.minTouchWidth){
                this.distance > 0 ? this.displayPos-- : this.displayPos++;
                this.$parent.selected = this.displayPos;
            }
            this.transformSwitch();

            // 阻止点击切换子容器
            this.startTouchPoint = 0;
            this.distance = 0;
        },
        transformSwitch(isSilde=true){
            if(isSilde){
                this.container.classList.add('transition');
                setTimeout(()=>{
                    this.container.classList.remove('transition');
                } , 100);
            }

            this.container.style.webkitTransform = `translateX(${-this.displayPos * this.pageWidth}px)`;
        }
    },
    watch: {
        selected: function(nv){
            this.displayPos = nv;
            this.transformSwitch(false);
        }
    }
}
</script>

<style scoped>
#tabContainer{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 1.25rem;
    box-sizing: border-box;
}
.wrap-tab-container{
    width: 100%;
    height: 100%;
    display: flex;
    transform: translateX(0);
}
.container-item{
    width: 100%;
    overflow: scroll;
    flex-shrink: 0;
    margin-bottom: calc(1.2rem + 14px);
    margin-bottom: -webkit-calc(1.2rem + 14px);
}
.transition{
    transition: transform .1s linear;
}
</style>
