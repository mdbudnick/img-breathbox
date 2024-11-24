$(document).ready(function () {
    const $slider = $('#animation-slider');
    const $label = $('#slider-label');
    const $frame = $('.frame');
  
    // Update animation-duration based on slider value
    $slider.on('input', function () {
      const duration = $(this).val();
      $frame.css('animation-duration', `${duration}s`);
      $label.text(`Animation Duration: ${duration}s`);
    });
  
    // Set the default animation duration
    $frame.css('animation-duration', `${$slider.val()}s`);
  });
  