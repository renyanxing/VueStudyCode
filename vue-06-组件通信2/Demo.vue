<template>
    <div class="col-sm-3 col-md-2 sidebar">
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
    </div>
</template>