(() => {
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  function initTabs({tabs=[],renderers={},storageKey='village_job_tab'}={}){
    const buttons=[...document.querySelectorAll('.job-nav .tab')];
    const allowed=tabs.length?tabs:buttons.map(b=>b.dataset.tab).filter(Boolean);
    const open=id=>{
      if(!allowed.includes(id))id=allowed[0];
      buttons.forEach(b=>{const active=b.dataset.tab===id;b.classList.toggle('active',active);b.setAttribute('aria-selected',active?'true':'false');b.tabIndex=active?0:-1;});
      allowed.forEach(key=>{const panel=document.getElementById(`${key}Tab`);if(panel)panel.classList.toggle('hidden',key!==id);});
      try{sessionStorage.setItem(storageKey,id)}catch{}
      if(typeof renderers[id]==='function')renderers[id]();
      const label=buttons.find(b=>b.dataset.tab===id)?.querySelector('.job-nav-label')?.textContent||buttons.find(b=>b.dataset.tab===id)?.textContent||id;
      const crumb=document.querySelector('[data-job-current-section]');if(crumb)crumb.textContent=label.trim();
    };
    buttons.forEach((b,i)=>{
      b.setAttribute('role','tab'); b.setAttribute('aria-controls',`${b.dataset.tab}Tab`);
      b.onclick=()=>open(b.dataset.tab);
      b.onkeydown=e=>{if(!['ArrowDown','ArrowUp','Home','End'].includes(e.key))return;e.preventDefault();let n=i;if(e.key==='ArrowDown')n=(i+1)%buttons.length;if(e.key==='ArrowUp')n=(i-1+buttons.length)%buttons.length;if(e.key==='Home')n=0;if(e.key==='End')n=buttons.length-1;buttons[n].focus();open(buttons[n].dataset.tab);};
    });
    const panels=allowed.map(id=>document.getElementById(`${id}Tab`)).filter(Boolean);panels.forEach(p=>p.setAttribute('role','tabpanel'));
    let remembered='';try{remembered=sessionStorage.getItem(storageKey)||''}catch{}
    open(allowed.includes(remembered)?remembered:(buttons.find(b=>b.classList.contains('active'))?.dataset.tab||allowed[0]));
    return {open};
  }
  window.VillageJobUI={initTabs,esc};
})();
