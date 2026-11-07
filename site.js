/* Edibrew shared features: floating buttons, socials, analytics, reviews, tracking helpers */
(function(){
var EB=window.EB||{};
var $=function(s,r){return (r||document).querySelector(s)};
var cartCount=function(){try{return JSON.parse(localStorage.getItem('edibrewCart')||'[]').reduce(function(a,x){return a+x.qty},0)}catch(e){return 0}};
EB.stars=function(n){n=Math.round(n);return '\u2605'.repeat(n)+'\u2606'.repeat(5-n)};
EB.etaFor=function(o){
  if(o&&o.type&&o.type!=='Individual')return '7 days';
  var c=((o&&o.city)||'').toLowerCase(),p=((o&&o.province)||'').toLowerCase();
  if(c.indexOf('lahore')>-1)return '2 to 3 days';
  if(p==='punjab')return '5 days';
  return '7 days';
};
/* analytics (only when IDs are set) */
if(EB.GA_ID){var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(EB.GA_ID);document.head.appendChild(g);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',EB.GA_ID);}
if(EB.PIXEL_ID){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src='https://connect.facebook.net/en_US/fbevents.js';s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script');fbq('init',EB.PIXEL_ID);fbq('track','PageView');}
window.ebTrack=function(name,d){d=d||{};
  try{if(window.gtag){var m={add_to_cart:'add_to_cart',begin_checkout:'begin_checkout',purchase:'purchase'};gtag('event',m[name]||name,{currency:'PKR',value:d.value||0,transaction_id:d.id,items:d.items})}
  if(window.fbq){var f={add_to_cart:'AddToCart',begin_checkout:'InitiateCheckout',purchase:'Purchase'};if(f[name])fbq('track',f[name],{currency:'PKR',value:d.value||0})}}catch(e){}
};
function ready(fn){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn):fn()}
ready(function(){
  var body=document.body,page=(location.pathname.split('/').pop()||'index.html').replace('.html','')||'index';
  /* shell behaviour for pages that have no cart script (policy pages etc.) */
  if(body.dataset.shell){
    var b=$('#burger'),nav=$('#nav');
    if(b&&nav){b.addEventListener('click',function(){nav.classList.toggle('open');b.setAttribute('aria-expanded',nav.classList.contains('open'))});}
    var cc=$('#cart-count');if(cc)cc.textContent=cartCount();
  }
  /* floating buttons */
  var wa=document.createElement('a');wa.className='eb-fab eb-wa';wa.target='_blank';wa.rel='noopener';wa.href='https://wa.me/'+(EB.WHATSAPP||'923234162041');wa.setAttribute('aria-label','Chat on WhatsApp');wa.innerHTML='\uD83D\uDCAC <span class="t">Chat with us</span>';body.appendChild(wa);
  if(page!=='checkout'&&page!=='thankyou'){
    var c=document.createElement('a');c.className='eb-fab eb-cart';c.href='checkout.html';c.setAttribute('aria-label','View cart');c.innerHTML='\uD83D\uDED2 <span class="t">Cart</span> (<span class="eb-fcount">'+cartCount()+'</span>)';body.appendChild(c);
  }
  /* footer extras */
  var soc=$('#eb-social');
  if(soc){var S=EB.SOCIAL||{},L={instagram:'Instagram',facebook:'Facebook',tiktok:'TikTok',youtube:'YouTube'};Object.keys(L).forEach(function(k){if(S[k]){var a=document.createElement('a');a.href=S[k];a.target='_blank';a.rel='noopener';a.textContent=L[k];soc.appendChild(a)}})}
  var h=$('#eb-hours');if(h&&EB.HOURS)h.textContent='Support hours: '+EB.HOURS;
  /* reviews */
  var R=EB.REVIEWS||[];
  if(R.length){
    var avg=R.reduce(function(a,r){return a+r.rating},0)/R.length;
    document.querySelectorAll('.rating-summary').forEach(function(e){e.innerHTML='<span class="rating"><span class="st">'+EB.stars(avg)+'</span> '+avg.toFixed(1)+' ('+R.length+' review'+(R.length===1?'':'s')+') <a href="reviews.html">Read reviews</a></span>'});
  }
  var list=$('#reviews-list');
  if(list){
    if(!R.length){list.innerHTML='<p class="note">No reviews yet. Be the first to share your experience using the form below.</p>'}
    else{list.innerHTML=R.map(function(r){var d=document.createElement('div');d.textContent=r.text;var t=document.createElement('div');t.textContent=r.name+(r.city?', '+r.city:'')+(r.product?' \u00B7 '+r.product:'');return '<div class="rev"><div class="st">'+EB.stars(r.rating)+'</div><p>'+d.innerHTML+'</p><small><strong>'+t.innerHTML+'</strong></small></div>'}).join('')}
  }
  if(page==='checkout'&&cartCount()>0)window.ebTrack('begin_checkout',{});
});
})();
