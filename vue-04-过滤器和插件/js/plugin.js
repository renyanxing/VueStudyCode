(function(Vue) {
    const MyPlugin = {};
    MyPlugin.install = function(Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function() {
            // 逻辑...
            alert("MyPlugin全局方法调用");
        };

        // 2. 添加全局指令
        Vue.directive("my-directive", {
            inserted(el, binding) {
                // 逻辑...
                el.innerHTML =
                    "MyPlugi.my-directive全局指令调用:" + binding.value;
            }
        });

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function(methodOptions) {
            // 逻辑...
            alert("MyPlugin实例方法调用:" + methodOptions);
        };
    };
    window.MyPlugin = MyPlugin;
})(Vue);
