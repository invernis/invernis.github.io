/* Language switch (German by default) and theme switch (light by default, independent of the device setting).
   A short inline script in <head> applies the saved choices before the page is drawn; this file connects the buttons. */
(function(){
  var root=document.documentElement,btns=document.querySelectorAll('.lang button');
  var titles={de:document.querySelector('meta[name="title-de"]'),en:document.querySelector('meta[name="title-en"]')};
  function set(l,save){root.setAttribute('data-lang',l);root.setAttribute('lang',l==='de'?'de-CH':'en');
    btns.forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.set===l));});
    if(titles[l]){document.title=titles[l].content;}
    if(save){try{localStorage.setItem('inv-lang',l);}catch(e){}}}
  var l='de';try{l=localStorage.getItem('inv-lang')||'de';}catch(e){}
  set(l==='en'?'en':'de',false);
  btns.forEach(function(b){b.addEventListener('click',function(){set(b.dataset.set,true);});});
  var tb=document.getElementById('theme');
  var tc=document.querySelector('meta[name="theme-color"]');
  function theme(d,save){root.setAttribute('data-theme',d?'dark':'light');
    if(tc){tc.setAttribute('content',d?'#211D3F':'#FFFFFF');}
    tb.setAttribute('aria-pressed',String(d));
    if(save){try{localStorage.setItem('inv-theme',d?'dark':'light');}catch(e){}}}
  var th='light';try{th=localStorage.getItem('inv-theme')||'light';}catch(e){}
  theme(th==='dark',false);
  tb.addEventListener('click',function(){theme(root.getAttribute('data-theme')!=='dark',true);});
})();
