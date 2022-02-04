$(function () {
    let header = {
        'Content-Type': 'application/json;charset=utf-8'
    };
    $.ajax({
        headers: header,
        url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=f5a4130ffbf5af6a0dc17e45671898d0&language=pt-BR&page=1&region=br',
        /*api_key=5c00458ad31f79492cdae66271d31da4*/
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $('.filmes').html('<div class="col-md-12">Carregando...</div>')
        },
        success: function (json) {
            console.log(json.results);
            let html = '';
            for (let i in json.results) {
                if (json.results[i].poster_path) {
                    html += `<div class="col-6 col-sm-6 col-md-3 d-flex"><div class="filme text-center"><img class="img-fluid img-thumbnail" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2${json.results[i].poster_path}"/><h5>${json.results[i].title}</h5></div></div>`
                }
            }
            $('.filmes').html(html);
        }
    })
})