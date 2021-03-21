document.addEventListener("DOMContentLoaded", function(){
  const kyoonMoreBtn = document.getElementById('kyoon-more-btn')
  kyoonMoreBtn.addEventListener('click', function() {
    const target = document.getElementById('product-info--hide');
    if (target.style.display == 'block') {
      target.style.display = 'none';
      kyoonMoreBtn.textContent = '▼ 詳細を表示'
    }
    else {
      target.style.display = 'block';
      kyoonMoreBtn.textContent = '▲ 詳細を閉じる'
    };
  })
}, false);