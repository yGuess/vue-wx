<template>
    <div id="letter-sequence" :style="'transform: translateX('+transFormX+'px)'">
        <a href="#"><span class="icon-up-1"></span></a>
        <ul>
            <li><a href="#A">A</a></li>
            <li><a href="#B">B</a></li>
            <li><a href="#C">C</a></li>
            <li><a href="#D">D</a></li>
            <li><a href="#E">E</a></li>
            <li><a href="#F">F</a></li>
            <li><a href="#G">G</a></li>
            <li><a href="#H">H</a></li>
            <li><a href="#I">I</a></li>
            <li><a href="#J">J</a></li>
            <li><a href="#K">K</a></li>
            <li><a href="#L">L</a></li>
            <li><a href="#M">M</a></li>
            <li><a href="#N">N</a></li>
            <li><a href="#O">O</a></li>
            <li><a href="#P">P</a></li>
            <li><a href="#Q">Q</a></li>
            <li><a href="#R">R</a></li>
            <li><a href="#S">S</a></li>
            <li><a href="#T">T</a></li>
            <li><a href="#U">U</a></li>
            <li><a href="#V">V</a></li>
            <li><a href="#W">W</a></li>
            <li><a href="#X">X</a></li>
            <li><a href="#V">Y</a></li>
            <li><a href="#W">Z</a></li>
            <li><a href="#\#">#</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'letterSequence',
    props: {
        transFormX: {
            type: [Number , String],
            default: 0,
            required: false
        }
    }
}
</script>

<style scoped>
#letter-sequence{
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    width: 0.8rem;
    font-size: 12px;
}
#letter-sequence:active{
    background-color: rgba(144, 144, 144, .2);
}
#letter-sequence a{
    color: #666;
    padding: 3px;
    text-align: center;
    display: block;
}
</style>
