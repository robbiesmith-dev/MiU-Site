//Project 2
//MiU 1207
//Robert Smith
 var parseAssignmentForm = function(data){
 	//uses form data here:
 };
 $(document).bind('pageinit', function(){

 	var addItem = $('#addassignmentform');

 	addItem.validate({
 		submitHandler: function(){
 			var data = addItem.serialize();
 			parseAssignmentForm(data);
 		}
 	});


 });

