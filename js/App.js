$('.banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000
});

// if (window.innerWidth < 673) {
//     $('.produtos').slick({
//         slide: "li",
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 2,
//         autoplay: false,
//         autoplaySpeed: 3000
//     });
// }



$.ajax({
    type: 'GET',
    url: 'https://corebiz-test.herokuapp.com/api/v1/products',
    dataType: 'json',
}).done(function (data) {
    console.log('imageUrl', data[0].imageUrl);
    $('.vitrine-0 img').attr('src', data[0].imageUrl);
    console.log('installments', data[0].installments[0])
    $('.vitrine-0 .vitrine-parcela .parcelas').text(data[0].installments[0].quantity);
    $('.vitrine-0 .vitrine-parcela .valor-da-parcela').text(data[0].installments[0].value);
    $('.vitrine-0 .vitrine-por .valorReal').text(data[0].price)
    console.log('listPrice', data[0].listPrice)
    $('.vitrine-0 .vitrine-de').text(data[0].listPrice)
    $('.vitrine-0 .vitrine-nome').text(data[0].productName);


    $('vitrine-1 img').attr('src', data[1].imageUrl);
    $('.vitrine-1 .vitrine-parcela .parcelas').text(data[1].installments[0].quantity);
    $('.vitrine-1 .vitrine-parcela .valor-da-parcela').text(data[1].installments[0].value);
    $('.vitrine-1 .vitrine-por .valorReal').text(data[1].price)
    $('.vitrine-1 .vitrine-de').text(data[1].listPrice)
    $('.vitrine-1 .vitrine-nome').text(data[1].productName);


    $('vitrine-2 img').attr('src', data[2].imageUrl);
    $('.vitrine-2 .vitrine-parcela .parcelas').text(data[2].installments[0].quantity);
    $('.vitrine-2 .vitrine-parcela .valor-da-parcela').text(data[2].installments[0].value);
    $('.vitrine-2 .vitrine-por .valorReal').text(data[2].price)
    $('.vitrine-2 .vitrine-de').text(data[2].listPrice)
    $('.vitrine-2 .vitrine-nome').text(data[2].productName);


    $('vitrine-3 img').attr('src', data[3].imageUrl);
    $('.vitrine-3 .vitrine-por .valorReal').text(data[3].price)
    $('.vitrine-3 .vitrine-nome').text(data[3].productName);

})