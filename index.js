$(document).ready(function () {
    const $slider = $('#animation-slider');
    const $label = $('#slider-label');
    const $frame = $('.frame');
  
    // Update animation-duration based on slider value
    $slider.on('input', function () {
      const duration = $(this).val();
      $frame.css('animation-duration', `${duration}s`);
      $label.text(`Breath Duration: ${duration}s`);
    });
  
    // Set the default animation duration
    $frame.css('animation-duration', `${$slider.val()}s`);

  let timeout;
  const greyOutSlider = () => {
    $slider.css('opacity', 0.1);
    $label.css('opacity', 0.1);
  };

  const restoreSlider = () => {
    clearTimeout(timeout);
    $slider.css('opacity', 1);
    $label.css('opacity', 1);
    timeout = setTimeout(greyOutSlider, 2000);
  };

  $slider.on('mouseover input', restoreSlider);

  timeout = setTimeout(greyOutSlider, 2000);
  });
  