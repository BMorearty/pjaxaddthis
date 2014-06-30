$(document).on('pjax:end', function() {
  var url = document.location.toString().replace('body','');
  $('.addthis_toolbox')
    .attr('addthis:url', url)
    .attr('addthis:title', document.title);
  $('.note').text('Setting location to ' + url + ' and title to "' + document.title + '"');
  addthis.toolbox('.addthis_toolbox');
  addthis.counter('.addthis_counter');
});

