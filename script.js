let app = {
    data(){
        return{
            assignments: [
                {id:1, name: 'Finish Project', complete: false},
                {id:2, name: 'Read Chapter 4', complete: false},
                {id:3, name: 'Turn In Homework', complete: false},
            ]
        };
    }
};

Vue.createApp(app).mount('#app');