/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function () {
    const error404 = document.getElementById('error-404')

    if (error404) {
        error404.addEventListener('click', function () {
            window.location.href('index.html')
        })
    }

})