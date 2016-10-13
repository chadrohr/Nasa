function NasaController (){
var nasaService = new NasaService();


nasaService.photoOfTheDay()
    .then(function (data) {
        var template = $('#nasaTemplate').html();

        template = template.replace('{{ url }}', data.url)
        template = template.replace('{{ title }}', data.title)
        template = template.replace('{{ copyright }}', data.copyright)
        template = template.replace('{{ date }}', data.date)
        template = template.replace('{{ explanation }}', data.explanation)

        $('#myTemplate').append($(template));
    })
}
NasaController()