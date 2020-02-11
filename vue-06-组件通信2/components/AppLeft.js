;
(function () {
    const template = `<div class="col-sm-3 col-md-2 sidebar">
                        <ul class="nav nav-sidebar">
                            <li class="active">
                                <a href="#"
                                    >Overview
                                    <span v-show="delNum">({{delNum }})</span></a
                                >
                            </li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Analytics</a></li>
                            <li><a href="#">Export</a></li>
                        </ul>
                    </div>`;
    window.AppLeft = {
        template,
        data() {
            return {
                delNum: 0
            }
        },
        created() {
            PubSub.subscribe('changeNum',  (event, data) => {
                this.delNum += data;
            })
        }
    }
})();