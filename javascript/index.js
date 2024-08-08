$(document).ready(function () {

    $('#carousel-image').slick({
        autoplay: true,
        arrows: false
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            menssagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            telefone: 'Por favor, insira o seu telefone.',
            email: 'Por favor, insira o seu E-mail',
            veiculoDeInteresse: 'Por favor, informe o Carro de seu Interesse.'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem $(campoIncorretos) campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})