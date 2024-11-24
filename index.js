$(document).ready(function () {
    const $slider = $('#animation-slider');
    const $label = $('#slider-label');
    const $frame = $('.frame');
    const $imageContainer = $('.image-container');
    const $banner = $('#banner')
  
    // Update animation-duration based on slider value
    $slider.on('input', function () {
      const duration = $(this).val();
      $frame.css('animation-duration', `${duration}s`);
      $label.text(`Breath Duration: ${duration}s`);
    });
  
    // Set the default animation duration
    $frame.css('animation-duration', `${$slider.val()}s`);

  let timeout;
  const greyOutExtras = () => {
    $slider.css('opacity', 0.1);
    $label.css('opacity', 0.1);
    $banner.css('opacity', 0.1);
  };

  const restoreExtras = () => {
    clearTimeout(timeout);
    $slider.css('opacity', 1);
    $label.css('opacity', 1);
    $banner.css('opacity', 1);
    timeout = setTimeout(greyOutExtras
, 2000);
  };

  $slider.on('mouseover input', restoreExtras);
  $imageContainer.on('mouseover', restoreExtras);
  $banner.on('mouseover', restoreExtras);

  timeout = setTimeout(greyOutExtras, 2000);
  });
  