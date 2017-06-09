// could not figure out how to add multiple items to the table with handlebars

$('#formButtons').hide();
$('#addItem').show();

var tableTemplate = Handlebars.compile( $('#tableTemplate').html() );
var formTemplate = Handlebars.compile( $('#formTemplate').html() );

$('#showTable').on( 'click', showTable );
$('#showForm').on( 'click', showForm );
$('#cancel').on('click', showTable )


function showTable( ) {
  var data = { 
    items: [
      {
        item: $('#item').val(),
        quantity: $('#quantity').val()
      }
    ]};
  var html = tableTemplate(data);
  $('#main').html(html);
  $('#formButtons').hide();
  $('#addItem').show();
};

    
function showForm( ) {
  event.preventDefault();
  var data = {};
  $('#addItem').hide();
  $('#formButtons').show();
  var html = formTemplate( data );
  $('#main').html( html );
};

