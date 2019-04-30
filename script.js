function draw(nSquares){
    $('body').append('<div id="container"></div>');
    for(let i = 0; i < nSquares; i++){
        $('#container').append(`<div class='row' id='row${i}'></div>`)
        for(let j = 0; j < nSquares; j++){
            $(`#row${i}`).append(`<div class='col' id='col${j}'></div>`)
        }
    }
    $('.col').hover((e) => {
        $(e.target).css('background-color', 'blue');
    });
}

function clear(){
    $('#container').remove();
}

$(() => {
    let nSquares = 16;
    draw(16);

    $('#reset').click(() => {
        $('.col').css('background-color', 'white');
        let nSquares = prompt('How many squares per side to make the new grid?');
        clear();
        draw(nSquares);
    });
});
