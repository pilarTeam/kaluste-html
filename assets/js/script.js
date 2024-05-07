$(document).ready(function(){
    var currentStep = 1;
    var totalSteps = $(".step").length;
    var $prevBtn = $("#prevBtn");
    var $nextBtn = $("#nextBtn");
    var $cartBtn = $('#cartBtn')

    // Show the current step
    showStep(currentStep);
    showBreadcrumb(currentStep);
    
    // Previous button click event
    $prevBtn.click(function(){
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        showBreadcrumb(currentStep);
        $nextBtn.removeClass("disabled").text("Seuraava");
        $cartBtn.addClass("disabled");
      }
    });
    
    // Next button click event
    $nextBtn.click(function(){
      if (currentStep < totalSteps) {
        // Mark the previous step as done
        markStepAsDone(currentStep);
        
        currentStep++;
        showStep(currentStep);
        showBreadcrumb(currentStep);
        if (currentStep === totalSteps) {
          $nextBtn.addClass("disabled").text("Valmis");
          $cartBtn.removeClass("disabled");
        }
      } else if (currentStep === totalSteps + 1) {
        // Special handling for the extra last step
        alert("Extra last step completed!");
      }
    });
    
    // Function to show the current step and hide others
    function showStep(step) {
      $(".step").hide();
      if (step <= totalSteps) {
        $("#step" + step).show();
      } else {
        // Show the extra last step
        $("#step_last").show();
      }
    }

    // Function to show the active breadcrumb
    function showBreadcrumb(step) {
      $(".breadcrumbs li").removeClass("active");
      $(".breadcrumbs li:nth-child(-n+" + step + ")").addClass("active");
    }

    // Function to mark the step as done in breadcrumbs
    function markStepAsDone(step) {
      $(".breadcrumbs li:nth-child(" + step + ")").removeClass("active").addClass("done");
    }
});