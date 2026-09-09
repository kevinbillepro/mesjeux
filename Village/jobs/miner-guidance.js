(()=>{
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const HELP={
    zone:{title:'Zone minière',text:'La zone détermine la profondeur, la réserve, la stabilité et les dangers du chantier. Commence par un front accessible et suffisamment sûr.'},
    deposit:{title:'Gisement',text:'Le gisement fixe la matière visée, sa dureté, sa richesse potentielle et la difficulté d’extraction. Il faut d’abord le prospecter avant de l’extraire.'},
    gesture:{title:'Geste d’extraction',text:'Le geste représente ta technique de Mineur. Sa maîtrise progresse avec l’usage et peut modifier durée, pureté, rendement ou sécurité.'},
    prospect:{title:'Prospection',text:'Prospecter révèle une estimation de la richesse et de la pureté du front. Sans prospection valide, l’extraction ne peut pas démarrer.'},
    method:{title:'Méthode d’extraction',text:'Propre favorise la pureté et la sécurité, Régulière équilibre le chantier, Forcer le front privilégie vitesse et rendement mais augmente les risques et la gangue.'},
    depth:{title:'Profondeur active',text:'La profondeur modifie la difficulté, les risques et parfois le rendement. Les fronts profonds demandent davantage de sécurité et d’infrastructure.'},
    hardness:{title:'Dureté',text:'Plus la roche est dure, plus l’outil s’use et plus l’extraction exige de maîtrise.'},
    reserve:{title:'Réserve du front',text:'Quantité exploitable restante dans cette zone. Chaque extraction consomme une partie de cette réserve.'},
    extraction:{title:'Temps et énergie',text:'L’extraction consomme de l’énergie et prend du temps après le geste de précision. L’outil, la méthode et la maîtrise modifient ces valeurs.'},
    energy:{title:'Énergie du Mineur',text:'Prospection, extraction et certains travaux consomment de l’énergie. Lorsque tu fatigues, utilise Reprendre des forces avant de poursuivre.'},
    rest:{title:'Reprendre des forces',text:'Le repos lance une courte tâche de récupération. Pendant ce temps, le Mineur ne peut pas effectuer une autre tâche manuelle.'},
    action:{title:'Extraction active',text:'Commence l’extraction, puis charge la frappe avec Frapper et valide Miner dans la bande dorée. Un geste réussi déclenche ensuite le timer réel d’extraction.'}
  };
  const GUIDE=[
    {target:'.miner-setup-grid .lumberjack-setup-card:nth-child(1)',title:'1. Choisis un front',text:'Commence par la zone minière. Profondeur, réserve et sécurité changent d’une zone à l’autre.'},
    {target:'.miner-setup-grid .lumberjack-setup-card:nth-child(2)',title:'2. Choisis un gisement',text:'Sélectionne la matière que tu veux rechercher. Sa dureté et sa richesse influencent le chantier.'},
    {target:'.miner-prospect-inline',title:'3. Prospecte avant d’extraire',text:'La prospection est une vraie étape du métier : elle révèle le front et autorise l’extraction tant que l’observation reste valable.'},
    {target:'.miner-setup-grid .lumberjack-setup-card:nth-child(3)',title:'4. Adapte ton geste',text:'Ton geste d’extraction représente ta technique. Sa maîtrise progresse et influence le résultat.'},
    {target:'#mineMethodChoices',title:'5. Choisis ta méthode',text:'Extraction propre, régulière ou agressive : le bon choix dépend du rendement recherché, de la fatigue et du risque.'},
    {target:'#extractBtn',title:'6. Passe au geste',text:'Quand le front est prospecté et prêt, commence l’extraction. Réussis la frappe de précision : le timer du vrai travail minier démarrera ensuite.'}
  ];
  let guideIndex=0;
  const pop=$('#minerContextPopover'),popTitle=$('#minerPopoverTitle'),popText=$('#minerPopoverText');
  const guide=$('#minerGuide'),guideStep=$('#minerGuideStep'),guideTitle=$('#minerGuideTitle'),guideText=$('#minerGuideText');
  const GUIDE_KEY='village_miner_context_guide_v1';
  function hidePopover(){if(pop)pop.classList.add('hidden');}
  function showPopover(btn,key){const data=HELP[key];if(!data||!pop)return;popTitle.textContent=data.title;popText.textContent=data.text;pop.classList.remove('hidden');const r=btn.getBoundingClientRect(),w=Math.min(330,window.innerWidth-24);let left=Math.max(12,Math.min(window.innerWidth-w-12,r.left+r.width/2-w/2)),top=r.bottom+9;if(top+170>window.innerHeight)top=Math.max(12,r.top-160);pop.style.width=w+'px';pop.style.left=left+'px';pop.style.top=top+'px';}
  function bindHelp(root=document){root.querySelectorAll('.context-help[data-help]').forEach(btn=>{if(btn.dataset.helpBound)return;btn.dataset.helpBound='1';btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const open=!pop.classList.contains('hidden')&&pop.dataset.key===btn.dataset.help;hidePopover();if(!open){pop.dataset.key=btn.dataset.help;showPopover(btn,btn.dataset.help);}});});}
  function decoratePreview(){const map={'Profondeur active':'depth','Dureté':'hardness','Réserve du front':'reserve','Extraction':'extraction'};$$('#mineSelectionPreview .preview-grid > div > span').forEach(label=>{const text=(label.childNodes[0]?.textContent||label.textContent).trim(),key=map[text];if(!key||label.querySelector('.context-help'))return;const b=document.createElement('button');b.type='button';b.className='context-help metric-help';b.dataset.help=key;b.setAttribute('aria-label','Aide');b.textContent='?';label.appendChild(b);});bindHelp($('#mineSelectionPreview')||document);}
  function clearGuideHighlight(){document.querySelectorAll('.lumber-guide-target').forEach(el=>el.classList.remove('lumber-guide-target'));}
  function showGuideStep(){if(!guide)return;clearGuideHighlight();const s=GUIDE[guideIndex],target=$(s.target);if(!target)return finishGuide(false);target.classList.add('lumber-guide-target');target.scrollIntoView({behavior:'smooth',block:'center'});guideStep.textContent=`Étape ${guideIndex+1}/${GUIDE.length}`;guideTitle.textContent=s.title;guideText.textContent=s.text;$('#minerGuideNext').textContent=guideIndex===GUIDE.length-1?'Terminer':'Suivant';guide.classList.remove('hidden');}
  function finishGuide(remember=true){clearGuideHighlight();guide?.classList.add('hidden');if(remember)try{localStorage.setItem(GUIDE_KEY,'1')}catch{}}
  function startGuide(){guideIndex=0;hidePopover();showGuideStep();}
  function init(){bindHelp();$('.lumber-popover-close')?.addEventListener('click',hidePopover);document.addEventListener('click',e=>{if(pop&&!pop.classList.contains('hidden')&&!pop.contains(e.target)&&!e.target.closest('.context-help'))hidePopover();});document.addEventListener('keydown',e=>{if(e.key==='Escape'){hidePopover();finishGuide(false);}});$('#minerHelpStart')?.addEventListener('click',startGuide);$('#minerGuideClose')?.addEventListener('click',()=>finishGuide(false));$('#minerGuideSkip')?.addEventListener('click',()=>finishGuide(true));$('#minerGuideNext')?.addEventListener('click',()=>{if(guideIndex>=GUIDE.length-1)finishGuide(true);else{guideIndex++;showGuideStep();}});const preview=$('#mineSelectionPreview');if(preview){const mo=new MutationObserver(decoratePreview);mo.observe(preview,{childList:true,subtree:true});decoratePreview();}let seen=false;try{seen=localStorage.getItem(GUIDE_KEY)==='1'}catch{}if(!seen)setTimeout(startGuide,650);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
