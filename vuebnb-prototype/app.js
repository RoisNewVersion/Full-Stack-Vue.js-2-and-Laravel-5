var app = new Vue({
    el: "#app",
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image': 'url(sample/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false,
        message: 'Hello world'
    },
    watch: {
        message: function (newVal, oldVal) {
            console.log(oldVal, ', ', newVal);
        },
        modalOpen: function () {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className)
            } else {
                document.body.classList.remove(className)
            }
        }
    },
    created: function () {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function () {
        document.removeEventListener('keyup', this.escapeKeyListener);
    },
    methods: {
        escapeKeyListener: function (evt) {
            if (evt.keyCode === 27 && app.modalOpen) {
                app.modalOpen = false;
            }
        }
    }
});

// setTimeout(function(){
//     app.message = 'Good Bye';
// }, 2000);
// function escapeKeyListener(evt) {
//     if (evt.keyCode === 27 && app.modalOpen) {
//         app.modalOpen = false;
//     }
// }