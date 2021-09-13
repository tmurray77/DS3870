$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decHours = $('#txtHours').val() ;
    let decRate = $('#txtPayRate').val() ;
    console.log(decHours * decRate);
});
//$('#txtPayRate').change(function(){
//    alert($('#txtPayRate').val());
//});
$('#cboEmployeeType').change(function(){
    if($('#cboEmployeeType').val() == 'FULL'){
       // $('#divHours').slideUp();
       // $('#divHours').css('display', 'none');
       $('#divHours').addClass('d-none');
    }else{
        //$('#divHours').slideDown();
        $('#divHours').removeClass('d-none').slideDown();
    }
});