(function() {
    const template = `<div>
    <!--头部导航区域-->
    <app-navbar></app-navbar>
    <!--核心区域:分左右两边-->
    <div class="container-fluid">
        <div class="row">
            <!--左边菜单栏区域-->
            <app-left></app-left>
            <!--<app-home>
            <h1 slot="dashboard" class="page-header">{{title}}</h1>
            </app-home>-->
            <!--右边主页面区域: 分上下两个区域-->
            //配置路由渲染组件出口
            <keep-alive>
            <router-view>
            <h1 slot="dashboard" class="page-header">{{title}}</h1>
            </router-view>
            </keep-alive>
        </div>
    </div></div>`;
    window.App = {
        data(){return {
            title:'仪表盘'
        }},
        template,
        components: {
            AppNavbar,
            AppHome,
            AppLeft
        }
    };
})();
