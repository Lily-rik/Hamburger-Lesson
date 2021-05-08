$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');
    // .toggleClass()は指定されているclassをトグル処理するメソッド
    // トグル処理では該当のclass属性がある場合には削除、ない場合には追加される
    // 追加されるとcss.actionの処理が実行される(ハンバーガーから×になる)
    // 削除されると×からハンバーガー(activeのない処理)に戻る
    $('#sp-menu').fadeToggle();
    // .fadeToggle()は要素のフェードイン・アウトを切り替えるメソッド
    // ハンバーガーメニューがクリックされた時、#sp-menuのフェードイン・アウトが
    // 交互に実施されるようになる
    // 最初はdisplay: none;で表示されていないため、クリックするとフェードインする
    event.preventDefault();
  });
});