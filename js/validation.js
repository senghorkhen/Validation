// First trategies
// $(document).ready(function() {
//     $('button').on('click', function() {
//         var username = $('#user').val();
//         var password = $('#pass').val();
    
//         if(username == ""){
//             $('#user').addClass('border-danger').removeClass('border-success');
//         }else {
//             $('#user').addClass('border-success').removeClass('border-danger');
//         }
//         if(password == ""){
//             $('#pass').addClass('border-danger').removeClass('border-success');
//         }else {
//             $('#pass').addClass('border-success').removeClass('border-danger');
//         }
//     });
// });

// Second stategies
// $(document).ready(function() {
//     $('button').on('click', function() {
//         var username = $('#user').val();
//         var password = $('#pass').val();
//         username == ""? setError('user'):setSuccess('user');
//         password == ""? setError('pass'):setSuccess('pass');
//     });
// });
// function setSuccess(success) {
//     $('#' + success).addClass('border-success').removeClass('border-danger');
// } 
// function setError(error) {
//     $('#' + error).addClass('border-danger').removeClass('border-success');
// }

 // Third stategies
//  $(document).ready(function() {
//     $('button').on('click', function() {
//         var username = $('#user').val();
//         var password = $('#pass').val();
//         isUser(username);
//         isPass(password);
//     });
// });
// function setSuccess(success) {
//     $('#' + success).addClass('border-success').removeClass('border-danger');
// } 
// function setError(error) {
//     $('#' + error).addClass('border-danger').removeClass('border-success');
// }

// var isUser = (u) => {
//     u == ""? setError('user') : setSuccess('user');
// }
// var isPass = (p) => {
//     p == ""? setError('pass') : setSuccess('pass');
// }

 // Four stategies
 $(document).ready(function() {
    $('button').on('click', function() {
        var username = $('#user').val();
        var password = $('#pass').val();
        (username != "")? setSuccess('user') : setError('user');
        (password != "")? setSuccess('pass') : setError('pass');
    });
});
function setSuccess(success) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
} 
function setError(error) {
    $('#' + error).addClass('border-danger').removeClass('border-success');
}