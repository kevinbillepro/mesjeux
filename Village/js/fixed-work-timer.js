(()=>{
function init(){
  let box=document.querySelector('.fixed-global-work-timer');
  if(!box){
    box=document.createElement('div');
    box.className='fixed-global-work-timer';
    box.innerHTML='<span>⚒️</span><div><small>Travail en cours</small><b>Aucune action active</b></div>';
    document.body.appendChild(box);
  }
  const label=box.querySelector('b');
  const selectors=['#cutTimers','#mineTimers','#alchemistTask','#blacksmithTask','#herbalistTask','#breederActiveCare','#hunterTask','#tinkererTask','#cookTask','#farmerTask'];
  const idle=/Aucune tâche|Aucune action|Aucun travail|Aucun soin|Abats un arbre|inspecte la forêt|prépare une grume|disponible|prête|prêt|Une tâche manuelle/i;

  function clean(txt){
    return (txt||'').replace(/\s+/g,' ').trim();
  }
  function scan(){
    let found=null;
    for(const sel of selectors){
      const el=document.querySelector(sel);
      if(!el) continue;
      const txt=clean(el.innerText);
      if(!txt || idle.test(txt)) continue;
      const lines=txt.split(/(?=[🪓⛏️⚗️🔨🌿🌾🐄🏹🛠️🍲])/);
      const candidate=lines.find(x=>/\d+(?:\.\d+)?s/.test(x)) || txt;
      const timer=candidate.match(/(.+?)\s*(\d+(?:\.\d+)?)\s*s(?:\s*restantes?)?/i);
      if(timer){
        found=timer[1].trim()+' · '+timer[2]+'s restantes';
      } else {
        const short=candidate.slice(0,90);
        if(!idle.test(short)) found=short;
      }
      if(found) break;
    }
    box.classList.toggle('active',!!found);
    label.textContent=found || 'Aucune action active';
  }
  scan();
  setInterval(scan,250);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
})();