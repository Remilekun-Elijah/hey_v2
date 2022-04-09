$(document).ready(function() {
 setInterval(e => {
  //  $('.alert p')
  if ($('.ci-two').hasClass('active')) $('.alert p').text('Now in Dallas. Get your freight delivered same-day in the Dallas-Fort Worth region.')
  else if ($('.ci-three').hasClass('active')) $('.alert p').text('Now in Nigeria. Get your freight delivered same-day in the Dallas-Fort Worth region.')
  else if ($('.ci-one').hasClass('active')) $('.alert p').text('Now in Lagos. Get your freight delivered same-day in the whole district of Lagos')

}, 100)
});


