document.addEventListener("DOMContentLoaded", function(){
  const kyoonMoreBtn = document.getElementById('kyoon-more-btn')
  const tdnMoreBtn = document.getElementById('tdn-more-btn')
  const tgMoreBtn = document.getElementById('tg-more-btn')
  // 京音サイト詳細ボタンクリック
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
  // TDN詳細ボタンクリック
  tdnMoreBtn.addEventListener('click', function() {
    const target = document.getElementById('tdn-info-hide');
    if (target.style.display == 'block') {
      target.style.display = 'none';
      tdnMoreBtn.textContent = '▼ 詳細を表示'
    }
    else {
      target.style.display = 'block';
      tdnMoreBtn.textContent = '▲ 詳細を閉じる'
    };
  })
  // TG詳細ボタンクリック
  tgMoreBtn.addEventListener('click', function() {
    const target = document.getElementById('tg-info-hide');
    if (target.style.display == 'block') {
      target.style.display = 'none';
      tgMoreBtn.textContent = '▼ 詳細を表示'
    }
    else {
      target.style.display = 'block';
      tgMoreBtn.textContent = '▲ 詳細を閉じる'
    };
  })
}, false);