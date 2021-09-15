var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
    $.each(result,function(i,person){
        console.log(person.FirstName);
        console.log(person.FirstName + ' ' + person.LastName);
        $('#txtEmail').val(person.Email);
    })
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
          let strHTML= '<div class="card col-3 mt-5 ml-3 mr-3">';
          strHTML += '<img src="images/Profile'+person.FirstName+'.jpg" alt="Profile Image" class= "rounded" style="margin:auto; max-width:100%;">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Postion +'</h4>';
            strHTML += '<h4 class="mt-3">Employee Details</h4>';
            strHTML += '<p>Hire Date: ' + person.HireDate + '</p>';
            strHTML += '<p class="txtHourlyRate" data-rate="'+ person.HourlyRate + '">Hourly Rate: ' + person.HourlyRate + '</p>';
            strHTML += '<h4 class="mt-3">Calculate Employee Pay</h4>';
            strHTML += '<div class="input-group">';
            //strHTML += '<label for="txtPay">Total Pay:</label>';
            strHTML += '<span class="input-group-text">Hours Worked: </span>';
            strHTML += '<input class="txtHours">';
            strHTML += '</div>';
            strHTML += '<button class="btn btn-primary btn-block mt-3 mb-3 btnCalcPay">Calculate Pay</button>';
            strHTML += '<div class="input-group txtPayHidden">';
            strHTML += '<span class="input-group-text">Total Pay: </span>';
            strHTML += '<span class="input-group-text">$</span>';
            strHTML += '<input class="txtTotalPay" disabled>';
            strHTML += '</div>';
            strHTML += '</div>';
            $('#divCardContainer').append(strHTML);
            $('.txtPayHidden').hide();
}); };


$(document).on('click','.btnCalcPay',function(){
	let decHours = $(this).closest('.card').find('.txtHours').val();
	let decRate = $(this).closest('.card').find('.txtHourlyRate').text().split(': ')[1];
	$(this).closest('.card').find('.txtTotalPay').val(decHours*decRate);
    $(this).closest('.card').find('.txtPayHidden').show();
    
});

