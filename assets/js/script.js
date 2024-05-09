$(document).ready(function(){
    var currentStep = 1;
    var totalSteps = $(".pilar_step").length;
    var $prevBtn = $("#prevBtn");
    var $nextBtn = $("#nextBtn");
    var $cartBtn = $('#cartBtn')

    // Show the current step
    showStep(currentStep);
    showBreadcrumb(currentStep);
    
    // Previous button click event
    $prevBtn.click(function(event){
		event.preventDefault();
		if (currentStep > 1) {
			currentStep--;
			showStep(currentStep);
			showBreadcrumb(currentStep);
			$cartBtn.addClass("disabled");
			// Remove the previous step as done
			removeStepAsDone(currentStep);
			nexPrevBtnTextChang()
		}
    });
    
    // Next button click event
    $nextBtn.click(function(event){
		event.preventDefault();
		if (currentStep < totalSteps) {
			// Mark the previous step as done
			markStepAsDone(currentStep);
			
			currentStep++;
			showStep(currentStep);
			showBreadcrumb(currentStep);
			nexPrevBtnTextChang();
		}
    });
    
    // Function to show the current step and hide others
    function showStep(step) {
		$(".pilar_step").hide();
		if (step <= totalSteps) {
			$("#step" + step).show();
		} else {
			// Show the extra last step
			$("#step_last").show();
		}
    }

	function nexPrevBtnTextChang(){
		if (currentStep === totalSteps) {
			$nextBtn.addClass("disabled").text("Valmis");
			$cartBtn.removeClass("disabled");
		}else if (currentStep === totalSteps - 1) {
			$nextBtn.removeClass("disabled").text('Viimeistellä');
		}else {
			$nextBtn.removeClass("disabled").html('Seuraava <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14"><defs><clipPath><rect id="Rectangle_99" data-name="Rectangle 99" width="14" height="14" transform="translate(872.819 813.819)" fill="#f0f5f3"/></clipPath></defs><g id="chevion-next" transform="translate(-872.819 -813.819)"><g id="layer1" transform="translate(875.423 814)"><path id="path9429" d="M12.72,1726.66a.97.97,0,0,0-.638,1.718l5.935,5.085-5.935,5.083a.97.97,0,1,0,1.26,1.468l6.8-5.814a.97.97,0,0,0,0-1.476l-6.8-5.82a.969.969,0,0,0-.621-.245Z" transform="translate(-11.686 -1726.66)" fill="#f0f5f3"/></g></g></svg>');
		}
	}

    // Function to show the active breadcrumb
    function showBreadcrumb(step) {
      	$(".breadcrumbs li").removeClass("active");
      	$(".breadcrumbs li:nth-child(-n+" + step + ")").addClass("active");
    }

    // Mark the step as done in breadcrumbs
    function markStepAsDone(step) {
      	$(".breadcrumbs li:nth-child(" + step + ")").addClass("done");
    }

    // Remove the step as done in breadcrumbs
	function removeStepAsDone(step) {
		$(".breadcrumbs li:nth-child(" + step + ")").removeClass("done");
    }



	// Click event for opening the modal
	$(".pilar_modal_opener").click(function(event){
        event.preventDefault();
        var modalParent = $(this).closest(".modal");
        var modalBox = modalParent.find(".pilar_modal_box");
        modalParent.find(".pilar_modal_box").removeClass("active");
        modalBox.toggleClass("active");
    });

    // Click event to close the modal
    $(".pilar_modal_hide").click(function(event){
        event.preventDefault();
        var modalBox = $(this).closest(".pilar_modal_box");
        modalBox.removeClass("active");
    });
});


$(document).ready(function() {

	// Image Changer from modal
	$('.pilar_replicate').each(function() {
		$(this).find('li:first-child').addClass('active');
	});

	// Add click event to each replicate image
	$('.pilar_replicate img').on('click', function() {
		$(this).closest('.pilar_replicate').find('li').removeClass('active');
		$(this).closest('li').addClass('active');
		var newSrc = $(this).attr('src');
		$('.pilar_preview_image img').attr('src', newSrc);
	});

	$('.pilar_replicate').each(function() {
		$(this).find('li:first-child img').trigger('click');
	});


	// Reload the page when the anchor tag is clicked
    $('#reloadPage').on('click', function(event) {
        event.preventDefault();
        window.location.reload();
    });
});