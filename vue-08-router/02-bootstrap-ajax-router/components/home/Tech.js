;
(function () {
    const template = `<!--科技栏目-->
    <div>
        <ul >
            <li v-for="tech in techArray" :key="tech.id">
                <span>{{tech.title}} </span>
                <button @click="pushTech(tech.id)" class="btn  btn-default btn-xs">查看(Push)</button>&nbsp;
                <button @click="replaceTech(tech.id)" class="btn btn-default btn-xs">查看(replace)</button>
            </li>
            <button @click="$router.back()">back后退</button>
            <button @click="$router.go(-1)">go后退</button>
            <button @click="$router.go(1)">前进</button>
        </ul>
        <router-view></router-view>
    </div>`;
    window.Tech = {
        template,
        data() {
            return {
                techArray: {}
            }
        },
        created() {
            this.getTechArray()
        },
        methods: {
            getTechArray() {
                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/tech.json')
                    .then(response => {
                        this.techArray = response.data;

                    })
                    .catch(error => {

                    })
                    .finally(() => {

                    });
            },
            pushTech(id){
                this.$router.push(`/news/tech/detail/${id}`);
            },
            replaceTech(id){
                this.$router.replace(`/news/tech/detail/${id}`);
            } 
        },
    }
})()