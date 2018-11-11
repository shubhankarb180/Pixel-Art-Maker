// Select color input
// Select size input

var heigth,width,colors;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) {
    event.preventDefault();

    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
   
    makeGrid(height,width);
    // console.log("Height: " + height + "and width: " + width );


});

function makeGrid(x,y)
{
    $('tr').remove();

    for( var i = 1; i <=x; i++)
    {
        $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
        for(var j = 1; j <=y; j++)
        {
            $('#row' + i).append('<td></td>');
        }
    }

    // adding color to the pixels 
    $('td').click(function addColor(){
    colors = $('#colorPicker').val();
    if($(this).attr('style'))
    {
        $(this).removeAttr('style');
    }
    else{
        $(this).attr('style','background-color:' + colors);
    }
    });

}


