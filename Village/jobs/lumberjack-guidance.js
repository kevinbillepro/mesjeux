(()=>{
  const $=s=>document.querySelector(s);
  const HELP={
    zone:{title:'Zone forestière',text:'La zone influence la densité, la santé du peuplement et la qualité potentielle. Une parcelle trop exploitée doit récupérer avant une nouvelle coupe.'},
    tree:{title:'Essence',text:'Chaque essence possède ses propres usages, sa dureté et ses risques. Ta connaissance de l’essence s’améliore en l’observant et en la travaillant.'},
    tool:{title:'Outil d’abattage',text:'L’état et la maîtrise de la hache influencent la vitesse de travail et le risque de défaut. Un outil usé devient moins fiable.'},
    technique:{title:'Type de coupe',text:'Prudente favorise la qualité, Standard équilibre temps et résultat, Rapide privilégie la vitesse au prix d’un risque de défaut supérieur.'},
    duration:{title:'Durée',text:'Temps nécessaire avant le résultat. Le type de coupe, l’outil et ta maîtrise peuvent la modifier.'},
    quality:{title:'Qualité de coupe',text:'Estimation avant l’abattage. Une meilleure coupe aide à obtenir un tronc plus droit et plus intéressant pour les usages exigeants.'},
    defect:{title:'Risque de défaut',text:'Probabilité d’obtenir un défaut de coupe ou de matière. Les défauts peuvent limiter la valeur et les usages du tronc.'},
    density:{title:'Densité de la parcelle',text:'Réserve forestière disponible. Chaque abattage consomme une partie de cette densité ; la parcelle se régénère avec le temps et la replantation.'},
    action:{title:'Abattage actif',text:'Commence l’abattage puis réalise trois entailles maîtrisées. Charge la force avec Frapper et valide avec Abattre lorsque la jauge traverse la zone dorée.'}
  };
  const GUIDE=[
    {target:'.lumberjack-setup-card:nth-child(1)',title:'1. Choisis une parcelle',text:'Commence par la zone forestière. Les parcelles ne sont pas équivalentes : densité, âge et pression d’exploitation comptent.'},
    {target:'.lumberjack-setup-card:nth-child(2)',title:'2. Choisis une essence',text:'Sélectionne ensuite l’arbre que tu veux travailler. Les essences se distinguent par leur dureté, leurs usages et leurs défauts possibles.'},
    {target:'.lumberjack-setup-card:nth-child(3)',title:'3. Vérifie ta hache',text:'L’outil modifie la durée et la fiabilité du travail. Surveille surtout son état et ta maîtrise.'},
    {target:'#techniqueChoices',title:'4. Adapte ta coupe',text:'Prudente, standard ou rapide : le bon choix dépend de ce que tu recherches maintenant, pas d’une réponse unique valable partout.'},
    {target:'#startCutBtn',title:'5. Passe au geste',text:'Quand tout est prêt, commence l’abattage. Tu devras ensuite charger ta frappe et valider trois entailles dans la zone idéale.'}
  ];
  let guideIndex=0;
  const pop=$('#lumberContextPopover'),popTitle=$('#lumberPopoverTitle'),popText=$('#lumberPopoverText');
  const guide=$('#lumberGuide'),guideStep=$('#lumberGuideStep'),guideTitle=$('#lumberGuideTitle'),guideText=$('#lumberGuideText');
  const GUIDE_KEY='village_lumberjack_context_guide_v1';

  function hidePopover(){ if(pop) pop.classList.add('hidden'); }
  function showPopover(btn,key){
    const data=HELP[key]; if(!data||!pop)return;
    popTitle.textContent=data.title; popText.textContent=data.text; pop.classList.remove('hidden');
    const r=btn.getBoundingClientRect();
    const w=Math.min(330,window.innerWidth-24);
    let left=Math.max(12,Math.min(window.innerWidth-w-12,r.left+r.width/2-w/2));
    let top=r.bottom+9;
    if(top+170>window.innerHeight) top=Math.max(12,r.top-160);
    pop.style.width=w+'px'; pop.style.left=left+'px'; pop.style.top=top+'px';
  }
  function bindHelp(root=document){
    root.querySelectorAll('.context-help[data-help]').forEach(btn=>{
      if(btn.dataset.helpBound)return; btn.dataset.helpBound='1';
      btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation(); const open=!pop.classList.contains('hidden')&&pop.dataset.key===btn.dataset.help; hidePopover(); if(!open){pop.dataset.key=btn.dataset.help;showPopover(btn,btn.dataset.help);}});
    });
  }
  function decoratePreview(){
    const labels=$$('#cutPreview .preview-grid > div > span');
    const map={'Durée':'duration','Qualité de coupe':'quality','Risque défaut':'defect','Densité':'density'};
    labels.forEach(label=>{
      const key=map[label.childNodes[0]?.textContent?.trim()||label.textContent.trim()];
      if(!key||label.querySelector('.context-help'))return;
      const b=document.createElement('button'); b.type='button'; b.className='context-help metric-help'; b.dataset.help=key; b.setAttribute('aria-label','Aide'); b.textContent='?'; label.appendChild(b);
    });
    bindHelp($('#cutPreview'));
  }
  function $$(s){return [...document.querySelectorAll(s)]}

  function clearGuideHighlight(){ document.querySelectorAll('.lumber-guide-target').forEach(el=>el.classList.remove('lumber-guide-target')); }
  function showGuideStep(){
    if(!guide)return; clearGuideHighlight();
    const s=GUIDE[guideIndex],target=$(s.target); if(!target)return finishGuide(false);
    target.classList.add('lumber-guide-target'); target.scrollIntoView({behavior:'smooth',block:'center'});
    guideStep.textContent=`Étape ${guideIndex+1}/${GUIDE.length}`; guideTitle.textContent=s.title; guideText.textContent=s.text;
    $('#lumberGuideNext').textContent=guideIndex===GUIDE.length-1?'Terminer':'Suivant'; guide.classList.remove('hidden');
  }
  function finishGuide(remember=true){clearGuideHighlight();guide?.classList.add('hidden');if(remember)try{localStorage.setItem(GUIDE_KEY,'1')}catch{} }
  function startGuide(){guideIndex=0;hidePopover();showGuideStep();}

  function init(){
    bindHelp();
    $('#lumberPopoverTitle');
    $('.lumber-popover-close')?.addEventListener('click',hidePopover);
    document.addEventListener('click',e=>{if(pop&&!pop.classList.contains('hidden')&&!pop.contains(e.target)&&!e.target.closest('.context-help'))hidePopover();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){hidePopover();finishGuide(false);}});
    $('#lumberHelpStart')?.addEventListener('click',startGuide);
    $('#lumberGuideClose')?.addEventListener('click',()=>finishGuide(false));
    $('#lumberGuideSkip')?.addEventListener('click',()=>finishGuide(true));
    $('#lumberGuideNext')?.addEventListener('click',()=>{if(guideIndex>=GUIDE.length-1)finishGuide(true);else{guideIndex++;showGuideStep();}});
    const preview=$('#cutPreview'); if(preview){const mo=new MutationObserver(decoratePreview);mo.observe(preview,{childList:true,subtree:true});decoratePreview();}
    let seen=false;try{seen=localStorage.getItem(GUIDE_KEY)==='1'}catch{}
    if(!seen)setTimeout(startGuide,650);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
