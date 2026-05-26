console.log('JSが読み込まれたよ！');

window.addEventListener('scroll', function () {
  const nav = document.getElementById('js-nav');
  const headerHeight = 400; // ここを実際のヘッダーの高さ（px）に合わせてね！

  if (window.scrollY > headerHeight) {
    // スクロール量がヘッダーの高さを超えたらクラス追加
    nav.classList.add('is-fixed');
  } else {
    // 戻ったら外す
    nav.classList.remove('is-fixed');
  }
});



// フェードイン効果

document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.js-fade'); // 監視対象を選択

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面内に入ったらクラスを付ける
        entry.target.classList.add('is-show');
      }
    });
  }, {
    threshold: 0.2 // 要素が20%見えたら実行する
  });

  // すべての対象を監視開始
  targets.forEach(target => observer.observe(target));
});

// フロートボタン
window.onscroll = () => {
  const btn = document.getElementById('toTop');
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
};


document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-global-nav');
  const overlay = document.getElementById('js-overlay');

  if (btn && nav && overlay) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('is-active');
      nav.classList.toggle('is-open');
      overlay.classList.toggle('is-active');
      document.body.classList.toggle('is-fixed'); // 背景固定用
    });

    overlay.addEventListener('click', function () {
      btn.classList.remove('is-active');
      nav.classList.remove('is-open');
      overlay.classList.remove('is-active');
      document.body.classList.remove('is-fixed');
    });
  }
});
