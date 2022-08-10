// nav close
$('.nav-close').on('click', function (){
  $('#nav').addClass('close')
})

// nav menu
$('.depth1').on('click', function (){
  $('.depth1').parent('li').removeClass('show')
  $(this).parent('li').addClass('show')

  if( $(this).parent('li').find('ul').length === 1 ){
    $(this).parent('li').find('ul').slideDown()
    $('.depth2 li').removeClass('on')
  } else {
    $('.depth2').slideUp()
  }
})
$('.depth2 li').on('click', function (){
  $('.depth2 li').removeClass('on')
  $(this).addClass('on')
})


for(let i = 0; i < 4; i++){
  for(let i = 0; i < 5; i++){
    $('.nft-card-container').append(`
    <div class="nft-card"><img src="/img/dragonz${i+1}.png" alt="dragonz"></div>
  `)
  }
}
for(let i = 0; i < 4; i++) {
  $('.m-nft-card-container').append(`
    <div class="m-nft-card"><img src="/img/dragonz${i + 1}.png" alt="dragonz"></div>
  `)
}

$('.m-nft-card-container .more').on('click', function () {
  $('.m-nft-card-container').html('')
  for(let i = 0; i < 4; i++){
    for(let i = 0; i < 5; i++){
      $('.m-nft-card-container').append(`
    <div class="nft-card"><img src="/img/dragonz${i+1}.png" alt="dragonz"></div>
  `)
    }
  }
})