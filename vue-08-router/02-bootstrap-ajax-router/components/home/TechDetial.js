;(function(){
    const template = `<!--详情-->
    <div class="jumbotron">
    <h1>{{id}}</h1>
        <h2>{{techDetial.title}}</h2>
        <p>{{techDetial.content}}</p>
    </div>`;
    window.TechDetail={
        template,
        data(){
            return {
                id:1,
                techDetial:{}
            }
        },
        created() {
            this.getReportById()
        },
        methods: {
            getReportById() {
                this.id = this.$route.params.id - 0;
                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/tech.json')
                    .then(response => {
                        const techArray = response.data;
                        this.techDetial = techArray.find(detail => {
                            return detail.id === this.id;
                        })
                    })
                    .catch(error => {
    
                    })
                    .finally(() => {
    
                    });
            }
        },
        watch: {
            '$route': function () {
                this.getReportById()
            }
        },
    }
})()