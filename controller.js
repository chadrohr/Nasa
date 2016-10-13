
function NasaService() {
    this.photoOfTheDay = function (data) {

        var baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
        var key = 'LW8jHnw3EjJ9JiBkdMxt2HRtbkTw4x1xXwe2AAt6';
        var url = baseUrl + key;


        return new Promise(function (resolve, reject) {
            $.get(url).then(
                function (data) {
                    resolve(data);
                },
                function (error) {
                    reject(error);
                }
            );
        })
    }
}