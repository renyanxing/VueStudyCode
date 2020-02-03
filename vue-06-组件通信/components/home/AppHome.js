(function() {
    window.AppHome = {
        template: `<div
        class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
    >
        <!--右边上半区域-->
        <!--<h1 class="page-header">Dashboard</h1>-->
        <slot name="dashboard"></slot>
        <Dashboard :hobbies='hobbies' @delete_hobby="deleteHobby"></Dashboard>
        <!--右边下半区域-->
        <h2 class="sub-header">Section title</h2>
        <section-title :emplist="emplist" :deleteEmp="deleteEmp" ></section-title>
    </div>`,
    data(){
        return {
            hobbies:['吃饭','睡觉','看书','打游戏'],
            emplist:[
                {id:'1',name:'小任',salary:'8000'},
                {id:'2',name:'小王',salary:'9000'},
                {id:'3',name:'小刘',salary:'10000'},
                {id:'4',name:'小李',salary:'12000'},
                {id:'5',name:'小林',salary:'13000'}
            ]
        }
    },
    components  :{
        Dashboard,
        SectionTitle
    },
    methods:{
        deleteEmp(index){
            this.emplist.splice(index,1);
        },
        deleteHobby(index){
            this.hobbies.splice(index,1);
        }
    }
    };
})();
