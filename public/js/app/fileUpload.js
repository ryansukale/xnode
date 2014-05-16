require(
	['main'], 
	function () {
    require(
		['jquery','underscore'],
			function ($,_,Backbone) {

				$(function(){

					var maxAllowedUploads = 2;

					//Begin your code here!
					$('form#fileUploader').submit(function (e) {
						
						var $this = $(this),
						files = $this.find('[name="filesToUpload[]"]')[0].files;

						// Do some basic validation as per your use case
						if(files.length>maxAllowedUploads){
							
							alert('you cannot upload more than '+ maxAllowedUploads + ' files' );
							return false;

						}else{

							// Upload the files
							console.log('uploading');
							
						}

					})

				});

		  }
		);
});