/* Módulo de defesa das páginas AUDIPER (padrão desde 08/10/2026; origem: Gleba Gurupá). Ver README.md.
   Plugar:  <script src="defesa.js" defer data-endpoint="…" data-emblema="…" data-wa="5586994010525" data-wa-texto="…"
                    data-wa-rotulo="Falar com a AUDIPER" data-volta="./" data-tema="claro" data-ev="…" data-video="1"></script>
   - data-endpoint (obrigatório): POST tipo=… → {"nivel":1|2}. O SERVIDOR decide aviso × ban (defesa.php).
   - data-ev + data-video="1": vigia do vídeo (play, ponto máximo assistido, saída) → POST ev, p, det, s, t, d.
   No COMPUTADOR (mouse): botão direito, F12, Ctrl+Shift+I/J/C, Cmd+Opt+I/J/C/U, Ctrl+U → card. Celular: menu some, sem strike.
   Também: Ctrl/Cmd+P e impressão (tela vazia + aviso), seleção/cópia bloqueadas fora de campos, window.AUMarca(el)/[data-marca] = marca d'água do visitante (window.AU_QUEM).
   🔴 Dissuasão + registro, não cofre. */
(function(){
  var S=document.currentScript, D=function(k,v){ return (S&&S.dataset[k])||v; };
  var EP=D('endpoint',''), EV=D('ev',''), EMB=D('emblema',''), VOLTA=D('volta','./'), TEMA=D('tema','claro');
  var WA='https://wa.me/'+D('wa','5586994010525')+'?text='+encodeURIComponent(D('waTexto','Olá! Gostaria de falar com a AUDIPER.'));
  var WAR=D('waRotulo','Falar no WhatsApp');
  var DEV='https://wa.me/5586994010525?text='+encodeURIComponent('Olá! Vi uma página da AUDIPER e quero um projeto neste formato.');
  if(window.top!==window) return;                      // dentro de iframe da própria página: a janela de cima cuida
  var ultimo='', aberto=false, enviando=false;
  addEventListener('pointerdown',function(e){ ultimo=e.pointerType; },true);
  function desktop(){ return ultimo!=='touch' && ultimo!=='pen' && matchMedia('(hover:hover) and (pointer:fine)').matches; }
  var esc=TEMA==='escuro';
  var css=document.createElement('style');
  css.textContent='#pv{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.38);-webkit-backdrop-filter:blur(18px) saturate(140%);backdrop-filter:blur(18px) saturate(140%);opacity:0;transition:opacity .25s;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue","Segoe UI",Roboto,sans-serif}'
   +'#pv.on{opacity:1}#pv .c{width:min(380px,100%);background:'+(esc?'rgba(28,28,30,.9)':'rgba(250,250,252,.9)')+';-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);border-radius:22px;padding:28px 24px 20px;text-align:center;color:'+(esc?'#f5f5f7':'#1d1d1f')+';box-shadow:0 24px 70px rgba(0,0,0,.35);transform:scale(.94);transition:transform .3s cubic-bezier(.2,.9,.3,1.2)}'
   +'#pv.on .c{transform:scale(1)}#pv .i{position:relative;width:76px;height:76px;margin:0 auto 14px}'
   +'#pv .i img{width:76px;height:76px;border-radius:50%;display:block;position:relative;z-index:2;animation:pvBate 1.6s ease-in-out infinite}'
   +'#pv .i:before,#pv .i:after{content:"";position:absolute;inset:0;border-radius:50%;border:3px solid #E1261C;z-index:1;animation:pvOnda 1.6s ease-out infinite}#pv .i:after{animation-delay:.8s}'
   +'#pv .i .cad{position:absolute;right:-4px;bottom:-4px;z-index:3;width:28px;height:28px;border-radius:50%;background:#E1261C;color:#fff;display:grid;place-items:center;border:2.5px solid #fafafc}'
   +'@keyframes pvOnda{0%{transform:scale(1);opacity:.9}100%{transform:scale(1.5);opacity:0}}@keyframes pvBate{0%,100%{transform:scale(1)}12%{transform:scale(1.07)}24%{transform:scale(1)}36%{transform:scale(1.05)}}'
   +'@media (prefers-reduced-motion:reduce){#pv .i img,#pv .i:before,#pv .i:after{animation:none}}'
   +'#pv .dev{margin-top:16px;padding-top:14px;border-top:1px solid rgba(127,127,127,.2);display:flex;align-items:center;gap:10px;text-align:left}'
   +'#pv .dev img{width:30px;height:30px;border-radius:50%;flex:none}#pv .dev span{font-size:12.5px;line-height:1.35;opacity:.85;flex:1}'
   +'#pv a.dw{display:inline-block;width:auto;margin:0;padding:8px 12px;border-radius:999px;background:#1d1d1f;color:#fff;font-size:12.5px;flex:none}'
   +'#pv h2{font-size:19px;font-weight:600;letter-spacing:-.01em;margin:0 0 8px}#pv p{font-size:14.5px;line-height:1.45;opacity:.85;margin:0 0 6px}#pv p.f{font-size:12.5px;opacity:.65;margin-top:10px}'
   +'#pv a,#pv button{display:block;width:100%;margin-top:12px;padding:12px;border-radius:12px;border:0;font:600 15px inherit;font-family:inherit;cursor:pointer;text-decoration:none}'
   +'#pv a:not(.dw){background:#25D366;color:#fff}#pv button{background:rgba(127,127,127,.12);color:#0071e3}';
  document.head.appendChild(css);
  var cad='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/></svg>';
  var ICONE='<div class="i">'+(EMB?'<img src="'+EMB+'" alt="AUDIX">':'')+'<span class="cad">'+cad+'</span></div>';
  var ASSINA='<div class="dev">'+(EMB?'<img src="'+EMB+'" alt="">':'')+'<span><b>Desenvolvido pela AUDIX.</b> Quer um projeto seu neste formato? Fale com o desenvolvedor.</span><a class="dw" href="'+DEV+'" target="_blank" rel="noopener">WhatsApp</a></div>';
  function card(nivel){
    var d=document.createElement('div'); d.id='pv';
    d.innerHTML = nivel===2
      ? '<div class="c" role="alertdialog" aria-modal="true">'+ICONE+'<h2>Acesso bloqueado</h2><p>Houve uma nova tentativa de acessar o código deste conteúdo protegido.</p><p>Sua sessão foi encerrada e o acesso a esta página foi bloqueado.</p><a href="'+WA+'" target="_blank" rel="noopener">'+WAR+'</a>'+ASSINA+'</div>'
      : '<div class="c" role="alertdialog" aria-modal="true">'+ICONE+'<h2>Este conteúdo é protegido</h2><p>Se precisar de alguma informação ou de material adicional, fale conosco no WhatsApp que enviamos para você.</p><a href="'+WA+'" target="_blank" rel="noopener">'+WAR+'</a><button type="button">Entendi, continuar</button><p class="f">Uma nova tentativa encerrará sua sessão e bloqueará seu acesso.</p>'+ASSINA+'</div>';
    var dw=d.querySelector('a.dw'); if(dw) dw.addEventListener('click',function(){ ev('dev_wa',''); });
    document.body.appendChild(d); aberto=true; requestAnimationFrame(function(){ d.classList.add('on'); });
    if(nivel===2){ document.querySelectorAll('video,audio').forEach(function(v){ try{v.pause();}catch(e){} });
      setTimeout(function(){ location.replace(VOLTA); }, 9000); return; }
    d.querySelector('button').onclick=function(){ d.classList.remove('on'); setTimeout(function(){ d.remove(); aberto=false; },250); };
  }
  function strike(tipo){
    if(aberto||enviando) return;
    if(!EP){ card(1); return; }
    enviando=true;
    fetch(EP,{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'tipo='+encodeURIComponent(tipo)+'&p='+encodeURIComponent(location.pathname)})
      .then(function(r){return r.json();}).then(function(d){ enviando=false; card(d&&d.nivel===2?2:1); })
      .catch(function(){ enviando=false; card(1); });
  }
  addEventListener('contextmenu',function(e){ e.preventDefault(); if(desktop()) strike('botao direito'); },true);
  addEventListener('keydown',function(e){
    var k=(e.key||'').toLowerCase(), m=e.ctrlKey||e.metaKey;
    var t = e.key==='F12' ? 'F12' : (m&&e.shiftKey&&(k==='i'||k==='j'||k==='c')) ? 'Ctrl+Shift+'+k.toUpperCase()
          : (m&&e.altKey&&(k==='i'||k==='j'||k==='c'||k==='u')) ? 'Cmd+Opt+'+k.toUpperCase() : (m&&k==='u') ? 'Ctrl+U' : (m&&k==='s') ? 'Ctrl+S' : '';
    if(t){ e.preventDefault(); e.stopPropagation(); strike(t); }
  },true);
  addEventListener('dragstart',function(e){ if(e.target&&/^(IMG|VIDEO)$/.test(e.target.tagName)) e.preventDefault(); },true);


  /* ---------- 08/10/2026 (sala 9:16): impressão, seleção e marca d'água do visitante ---------- */
  var cp=document.createElement('style');
  cp.textContent='@media print{html,body{background:#fff!important}body>*{display:none!important}body:before{content:"Conteúdo confidencial. Impressão não permitida. Fale com a AUDIPER pelo WhatsApp (86) 9 9401-0525.";display:block!important;padding:48mm 20mm;font:600 20px/1.4 system-ui,sans-serif;color:#7a1220;text-align:center}}'
    +'#pvt{position:fixed;left:50%;bottom:64px;transform:translateX(-50%);z-index:2147483646;max-width:calc(100vw - 32px);padding:10px 16px;border-radius:999px;background:rgba(29,29,31,.92);color:#fff;font:600 13px/1.3 system-ui,sans-serif;text-align:center;opacity:0;transition:opacity .2s;pointer-events:none}#pvt.on{opacity:1}'
    +'.au-mk{position:absolute;inset:0;pointer-events:none;z-index:6;opacity:.12;mix-blend-mode:multiply;background-repeat:repeat}';
  document.head.appendChild(cp);
  var tt=0;
  function toast(t){ var e=document.getElementById('pvt'); if(!e){ e=document.createElement('div'); e.id='pvt'; e.setAttribute('role','status'); document.body.appendChild(e); }
    e.textContent=t; e.classList.add('on'); clearTimeout(tt); tt=setTimeout(function(){ e.classList.remove('on'); },3200); }
  addEventListener('keydown',function(e){ var k=(e.key||'').toLowerCase();
    if((e.ctrlKey||e.metaKey)&&k==='p'){ e.preventDefault(); e.stopPropagation(); toast('Impressão não permitida neste conteúdo.'); ev('impressao','tentou imprimir'); } },true);
  addEventListener('beforeprint',function(){ ev('impressao','beforeprint'); });
  addEventListener('selectstart',function(e){ var t=e.target&&e.target.nodeType===1?e.target:(e.target&&e.target.parentElement);
    if(t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return; e.preventDefault(); },true);
  addEventListener('copy',function(e){ var t=document.activeElement; if(t&&/^(INPUT|TEXTAREA)$/.test(t.tagName)) return; e.preventDefault(); },true);
  /* Marca d'água: window.AU_QUEM (o servidor injeta o final do número + data) repetida em diagonal, sobre o elemento (position:relative). */
  window.AUMarca=function(el){
    var q=window.AU_QUEM; if(!q||!el||el.querySelector(':scope>.au-mk')) return;
    var t=String(q).replace(/[<>&"']/g,'');
    /* 12/10/2026 (revisão externa): menos densa — ladrilho maior, uma linha por ladrilho, mais leve; segue identificando o visitante */
    var svg='<svg xmlns="http://www.w3.org/2000/svg" width="560" height="340"><text x="40" y="190" transform="rotate(-24 280 170)" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#5a0d15">CONFIDENCIAL · '+t+'</text></svg>';
    var d=document.createElement('div'); d.className='au-mk'; d.setAttribute('aria-hidden','true');
    d.style.backgroundImage='url("data:image/svg+xml;utf8,'+encodeURIComponent(svg)+'")';
    if(getComputedStyle(el).position==='static') el.style.position='relative';
    el.appendChild(d);
  };
  document.addEventListener('DOMContentLoaded',function(){ document.querySelectorAll('[data-marca]').forEach(window.AUMarca); });

  /* ---------- vigia do vídeo (opcional): play, ponto máximo assistido e saída ---------- */
  var sid=Math.random().toString(36).slice(2,12);
  function ev(nome,det,extra){
    if(!EV) return;
    var b='ev='+encodeURIComponent(nome)+'&p='+encodeURIComponent(location.pathname)+'&det='+encodeURIComponent(det||'')+'&s='+sid+(extra||'');
    try{ if(navigator.sendBeacon){ navigator.sendBeacon(EV,new Blob([b],{type:'application/x-www-form-urlencoded'})); return; } }catch(e){}
    try{ fetch(EV,{method:'POST',credentials:'same-origin',keepalive:true,headers:{'Content-Type':'application/x-www-form-urlencoded'},body:b}); }catch(e){}
  }
  window.AUDefesaEvento=ev;
  if(D('video','')==='1'){
    var mmss=function(s){ s=Math.max(0,Math.round(s)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); };
    document.addEventListener('DOMContentLoaded',function(){
      document.querySelectorAll('video').forEach(function(v){
        var max=0, deu=false, resumiu=false;
        v.addEventListener('timeupdate',function(){ if(v.currentTime>max) max=v.currentTime; });
        v.addEventListener('play',function(){ if(!deu){ deu=true; ev('video_play','',''); } });
        function resumo(){ if(!deu||resumiu) return; resumiu=true; var d=v.duration||0;
          ev('video_resumo','assistiu '+mmss(max)+' de '+mmss(d)+(d?' ('+Math.round(max/d*100)+'%)':''),'&t='+max.toFixed(1)+'&d='+d.toFixed(1)); }
        v.addEventListener('ended',resumo);
        addEventListener('pagehide',resumo);
        document.addEventListener('visibilitychange',function(){ if(document.visibilityState==='hidden') resumo(); });
      });
    });
  }
})();
