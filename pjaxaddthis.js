$(document).on('pjax:end', function() {
  if (addthis) {
    addthis.toolbox('.addthis_toolbox');
    addthis.counter('.addthis_counter');
  }
});

