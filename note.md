data对象中，属性如果是对象，则该对象的属性并非响应式.
> \<div>{{obj.value}}\</div>    
> obj = { value: 1 };    
> this.obj.value = 2;

此时，标签中的内容还是1，即使实际obj.value的值已经改变了。因为vue.js在处理属性时,只将data对象的属性进行侦听与订阅，而不会对该对象的属性进行处理。[检测变化的注意事项原文：](https://cn.vuejs.org/v2/guide/reactivity.html#检测变化的注意事项)
>受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的


