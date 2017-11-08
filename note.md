data对象中，属性如果是对象，则该对象的属性并非响应式.
> \<div>{{obj.value}}\</div>    
> obj = { value: 1 };    
> this.obj.value = 2;

此时，标签中的内容还是1，即使实际obj.value的值已经改变了。因为vue.js在处理属性时,只将data对象的属性进行侦听与订阅，而不会对该对象的属性进行处理


