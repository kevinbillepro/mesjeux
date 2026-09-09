(() => {
  const C=window.VillageCore;
  const $=s=>document.querySelector(s);
  const esc=s=>String(s??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]||c));
  if(!C.state.playerProfile?.created){window.location.href='profile.html';return;}

  function renderTop(){
    $('#villageName').textContent=C.state.playerProfile?.villageName||C.content.village.name||'Village';
    $('#levelLabel').textContent=`Niveau ${C.state.level}`;
    $('#populationLabel').textContent=C.state.population;const aut=C.autonomyStats?C.autonomyStats():{workersBusy:0,workersTotal:C.state.population};const wl=$('#workersLabel');if(wl)wl.textContent=`${aut.workersBusy} / ${aut.workersTotal}`;
    $('#buildingLabel').textContent=`${C.state.builtBuildings.length}/${C.content.buildings.length}`;
    $('#treasuryLabel').textContent=`${Math.round(Number(C.state.treasury||0))} couronne${Math.round(Number(C.state.treasury||0))>1?'s':''}`;const ps=C.prestigeScore?.()||0,pt=C.prestigeTier?.(ps);const pl=$('#prestigeLabel');if(pl)pl.textContent=`${Math.round(ps)} · ${pt?.name||'Village discret'}`;
    const stage=C.villageStage(),next=C.nextVillageStage(),target=Number(next?.requirements?.xp||C.state.xp||1),prev=Number(stage?.requirements?.xp||0);
    $('#levelLabel').textContent=`Niveau ${C.state.level} · ${stage?.name||'Village'}`;
    $('#xpText').textContent=next?`${Math.floor(C.state.xp)} / ${target}`:`${Math.floor(C.state.xp)} · palier maximal`;
    $('#xpFill').style.width=next?`${Math.max(0,Math.min(100,(C.state.xp-prev)/Math.max(1,target-prev)*100))}%`:'100%';
  }
  function resourceText(obj){return Object.entries(obj||{}).map(([id,q])=>`${C.content.resources.find(r=>r.id===id)?.icon||'📦'} ${q} ${C.content.resources.find(r=>r.id===id)?.name||id}`).join(' · ')||'—';}
  function renderAutonomy(){const host=$('#villageAutonomy');if(!host||!C.buildingWorkStatus)return;C.processBuildingWork();const stats=C.autonomyStats(),buildings=C.content.buildings.filter(b=>C.built(b.id)&&C.buildingWorkDefs(b.id).length);host.innerHTML=`<div class="autonomy-summary village"><div><span>Travailleurs occupés</span><b>${stats.workersBusy}/${stats.workersTotal}</b></div><div><span>Jobs actifs</span><b>${stats.active}</b></div><div><span>En file</span><b>${stats.queued}</b></div><div><span>Bloqués par stockage</span><b>${stats.blocked}</b></div></div><div class="autonomy-building-grid">${buildings.map(b=>{const st=C.buildingWorkStatus(b.id),defs=C.buildingWorkDefs(b.id);return `<article class="autonomy-building ${st.blocked.length?'blocked':st.active.length?'working':''}"><div class="autonomy-building-head"><span>${b.icon||'🏠'}</span><div><b>${esc(b.name)}</b><small>Niv. ${C.buildingLevel(b.id)} · ${st.active.length+st.blocked.length}/${st.slots} emplacement(s) occupé(s)</small></div></div>${st.orders.length?`<div class="autonomy-active-list">${st.orders.map(o=>{const d=C.workDef(o.defId);if(!d)return'';const txt=o.status==='running'?C.autonomyFormatDuration(o.endsAt-Date.now()):o.status==='waiting_storage'?'📦 Entrepôt plein / insuffisant':'En file';return `<div class="autonomy-active ${o.status}"><span>${d.icon||'⚙️'}</span><div><b>${esc(d.name)}</b><small>${esc(txt)}</small></div>${o.status==='queued'?`<button class="mini-link" data-cancel-auto="${b.id}|${o.id}">Retirer</button>`:''}</div>`;}).join('')}</div>`:'<div class="empty-state compact"><b>Inactif</b><span>Aucun ordre dans la file.</span></div>'}<div class="autonomy-quick-orders">${defs.map(d=>{const hard=C.autonomyRequirementMessages(d).filter(x=>x.startsWith('Bâtiment')||x.includes(' niv. '));return `<button class="btn" data-queue-auto="${b.id}|${d.id}" ${hard.length||st.orders.length>=12?'disabled':''}>${d.icon||'⚙️'} ${esc(d.name)}</button>`;}).join('')}</div></article>`;}).join('')}</div><div class="notice subtle"><b>Règle :</b> les bâtiments partagent la population disponible, mais leurs files et emplacements sont indépendants. Les jobs autonomes produisent du commun ; les puzzles, raretés et qualités élevées restent du ressort du joueur.</div>`;host.querySelectorAll('[data-queue-auto]').forEach(x=>x.onclick=()=>{const [bid,did]=x.dataset.queueAuto.split('|');C.queueBuildingWork(bid,did,1);renderAutonomy();renderTop();renderScene();});host.querySelectorAll('[data-cancel-auto]').forEach(x=>x.onclick=()=>{const [bid,oid]=x.dataset.cancelAuto.split('|');C.cancelBuildingWork(bid,oid);renderAutonomy();renderTop();renderScene();});}
  function renderFoodSecurity(){
    const host=$('#villageFoodSecurity');if(!host||!C.foodSecurityStatus)return;
    const st=C.foodSecurityStatus(),f=C.foodState(),policy=C.foodPolicy(),active=C.built('farm'),target=C.foodTargetDays(),need=C.foodDailyNeed(),normalNeed=C.foodBaseDailyNeed(),days=st.normalDays||0,groups=C.foodVarietyGroups?.()||[];
    if(!active){host.innerHTML=`<div class="food-inactive"><span>🧺</span><div><b>Subsistance initiale</b><p>Au niveau 1, les deux habitants vivent de provisions fondatrices et de subsistance locale. La consommation agricole ne commence qu’après la construction de la Ferme au niveau 2.</p></div></div>`;return;}
    const grace=Number(st.grace||0),pct=Math.max(0,Math.min(100,days/Math.max(1,target)*100));
    host.innerHTML=`<div class="village-food-summary ${st.id}"><div class="food-status-mark"><span>${st.icon}</span><div><small>État alimentaire</small><b>${esc(st.label)}</b><em>${Math.round(st.score||0)}/100</em></div></div><div class="food-reserve-main"><div><small>Autonomie</small><b>${days.toFixed(days<10?1:0)} jours</b><span>objectif ${target} j.</span></div><div class="progress food-progress"><i style="width:${pct}%"></i></div></div><div class="food-kpis"><span>👥 Besoin <b>${need.toFixed(1)}</b>/jour</span><span>${policy.icon||'🍲'} <b>${esc(policy.name)}</b></span><span>🥕 Diversité <b>${groups.length}/3</b></span><span>⚙️ Travail <b>${Math.round((st.workModifier||1)*100)}%</b></span></div></div><p class="food-status-description">${esc(st.description||'')}${grace?` <b>${grace} journée${grace>1?'s':''} de mise en réserve restante${grace>1?'s':''}.</b>`:''}</p><div class="food-village-stats"><span>Jours nourris <b>${Number(f.stats?.secureDays||0)}</b></span><span>Jours de pénurie <b>${Number(f.stats?.shortageDays||0)}</b></span><span>Pertes <b>${Number(f.stats?.foodQtySpoiled||0).toFixed(1)} u.</b></span><span>Besoin normal <b>${normalNeed.toFixed(1)}/j.</b></span></div>`;
  }
  function renderDevelopment(){
    const stage=C.villageStage(),next=C.nextVillageStage(),cap=C.jobLevelCap('lumberjack');
    $('#developmentTitle').textContent=next?`Village niv. ${C.state.level} → niv. ${next.level}`:`${stage?.icon||'🏘️'} ${stage?.name||'Village'}`;
    $('#developmentCap').textContent=`Métiers : plafond niv. ${cap}`;
    if(!next){$('#villageDevelopment').innerHTML=`<div class="village-stage-complete"><b>👑 Développement maximal actuel atteint</b><span>Aucun nouveau palier de village n’est disponible dans cette version.</span></div>`;return;}
    const rows=C.villageRequirements(next),ready=rows.every(r=>r.ok);
    $('#villageDevelopment').innerHTML=`<div class="village-development-quick-grid"><div class="village-quick-stage"><span class="village-quick-icon">${next.icon||'🏘️'}</span><div><small>Prochain déblocage</small><b>Niveau ${next.level} — ${esc(next.name)}</b><span>${esc(next.description||'')}</span></div></div><div class="village-quick-reqs">${rows.map(r=>`<div class="village-quick-req ${r.ok?'ok':'missing'}"><span>${r.ok?'✓':'○'} ${esc(r.label)}</span><b>${Math.floor(r.have)} / ${r.need}</b></div>`).join('')}</div><div class="village-quick-action"><button class="btn primary ${ready?'ready':''}" id="advanceVillageBtn" ${ready?'':'disabled'}>${ready?'🏘️ Faire évoluer le village':'🔒 Palier non prêt'}</button><small>${ready?'Toutes les conditions sont remplies.':'Les conditions restantes sont visibles ici, sans descendre dans la page.'}</small></div></div>`;
    const btn=$('#advanceVillageBtn');if(btn)btn.onclick=()=>{if(C.advanceVillage()){render();selectBuilding(C.content.buildings[0].id);}};
  }
  function renderResources(){
    $('#resources').innerHTML=`<a class="resource-chip warehouse-chip ${C.storageFree()<=0?'full':''}" href="warehouse.html" title="Ouvrir l’Entrepôt"><span>📦</span><b>Stockage</b><strong>${Math.round(C.storageUsed())}/${Math.round(C.storageCapacity())}</strong></a>`+C.content.resources.filter(r=>!r.future||C.resource(r.id)>0).map(r=>`<div class="resource-chip" title="${esc(r.description||'')}"><span>${r.icon||'◌'}</span><b>${esc(r.name)}</b><strong>${C.resource(r.id)}</strong></div>`).join('');
  }
  const MAP_DONE_WINDOW=15000;
  function manualTaskLabel(jobId,t){
    const kind=String(t?.kind||t?.type||'').toLowerCase();
    if(jobId==='lumberjack'){
      if(kind==='cut'){const tree=C.tree?.(t.treeId);return `Abattage${tree?.name?` — ${tree.name}`:''}`;}
      if(kind==='survey'){const z=C.forestZone?.(t.zoneId);return `Inspection${z?.name?` — ${z.name}`:' forestière'}`;}
      if(kind==='expedition')return 'Reconnaissance forestière';
      if(kind==='process'){const op=C.lumberOperation?.(t.opId);return op?.name||'Préparation de tronc';}
    }
    if(jobId==='miner'){
      if(kind==='prospect')return 'Prospection minière';
      if(kind==='extract')return 'Extraction minière';
      if(kind==='sort')return 'Tri du minerai';
      if(kind==='site')return 'Reconnaissance minière';
      if(kind==='infrastructure')return 'Travaux miniers';
      if(kind==='advance')return 'Avancement du front';
      if(kind==='rest')return 'Récupération';
    }
    const names={care:'Soin en cours',harvest:'Récolte en cours',craft:'Fabrication en cours',cook:'Préparation en cours',research:'Étude en cours'};
    return names[kind]||'Action manuelle en cours';
  }
  function manualTaskInfoFor(b,at=Date.now()){
    if(!C.built(b.id)||!b.jobId)return null;
    const tasks=C.state.jobs?.[b.jobId]?.tasks;
    if(!Array.isArray(tasks)||!tasks.length)return null;
    const rows=tasks.map(t=>{
      const end=Number(t.end??t.endsAt??t.endAt??0);
      const start=Number(t.start??t.startedAt??0);
      let durationMs=Number(t.durationMs||0);
      if(!durationMs&&Number(t.duration||0)>0)durationMs=Number(t.duration)*1000;
      if(!durationMs&&end>start)durationMs=end-start;
      return {t,end,start,durationMs:Math.max(1,durationMs||1)};
    }).filter(x=>x.end>at).sort((a,z)=>a.end-z.end);
    const x=rows[0];if(!x)return null;
    const left=Math.max(0,x.end-at),elapsed=Math.max(0,x.durationMs-left),progress=Math.max(0,Math.min(100,elapsed/x.durationMs*100));
    return {task:x.t,left,progress,detail:manualTaskLabel(b.jobId,x.t),count:rows.length};
  }
  function statusFor(b,at=Date.now()){
    if(C.built(b.id)){
      const manual=manualTaskInfoFor(b,at);
      if(manual)return {cls:'built working',label:'Action manuelle',kind:'working'};
      const w=C.buildingWorkStatus?C.buildingWorkStatus(b.id):null,defs=C.buildingWorkDefs?C.buildingWorkDefs(b.id):[],recent=w?.history?.[0]&&at-Number(w.history[0].completedAt||0)<=MAP_DONE_WINDOW;
      if(b.id==='warehouse'&&C.storageFree()<=.001)return {cls:'built blocked-work warehouse-alert',label:'Entrepôt plein',kind:'blocked'};
      if(w?.blocked?.length)return {cls:'built blocked-work',label:'Stockage bloqué',kind:'blocked'};
      if(w?.active?.length)return {cls:'built working',label:`En travail · ${w.active.length}`,kind:'working'};
      if(w?.queued?.length)return {cls:'built queued-work',label:`En file · ${w.queued.length}`,kind:'queued'};
      if(recent)return {cls:'built completed-work',label:'Travail terminé',kind:'completed'};
      if(defs.length)return {cls:'built idle-work',label:'Inactif',kind:'idle'};
      return {cls:'built',label:'Accessible',kind:'built'};
    }
    if(C.canBuild(b)) return {cls:'available',label:'À construire',kind:'available'};
    return {cls:'locked',label:'Verrouillé',kind:'locked'};
  }
  function liveInfoFor(b,at=Date.now()){
    if(!C.built(b.id))return {badge:'',queue:'',progress:0,detail:''};
    const manual=manualTaskInfoFor(b,at),w=C.buildingWorkStatus?C.buildingWorkStatus(b.id):{active:[],queued:[],blocked:[],history:[]};
    if(manual){
      const autoCount=(w.active?.length||0)+(w.queued?.length||0);
      return {badge:`⚒ ${Math.max(1,Math.ceil(manual.left/1000))}s`,queue:manual.count>1?`+${manual.count-1} manuel${manual.count>2?'s':''}`:autoCount?`+${autoCount} auto`:'',progress:manual.progress,detail:manual.detail};
    }
    const next=w.active?.slice().sort((a,z)=>Number(a.endsAt||0)-Number(z.endsAt||0))[0];
    if(w.blocked?.length)return {badge:'📦 Stockage',queue:w.queued.length?`+${w.queued.length}`:'',progress:100,detail:`${w.blocked.length} production${w.blocked.length>1?'s':''} à ranger`};
    if(next){const def=C.workDef(next.defId),left=Math.max(0,Number(next.endsAt||0)-at),duration=Math.max(1,Number(next.durationMs||1)),elapsed=Math.max(0,duration-left),progress=Math.max(0,Math.min(100,elapsed/duration*100));return {badge:C.autonomyFormatDuration(left),queue:(w.active.length>1?`+${w.active.length-1} actif${w.active.length>2?'s':''}`:w.queued.length?`+${w.queued.length} file`:''),progress,detail:def?.name||'Travail en cours'};}
    if(w.queued?.length){const def=C.workDef(w.queued[0].defId);return {badge:`⏳ ${w.queued.length}`,queue:'',progress:0,detail:def?.name||'En attente de travailleur'};}
    const recent=w.history?.[0]&&at-Number(w.history[0].completedAt||0)<=MAP_DONE_WINDOW;if(recent){const def=C.workDef(w.history[0].defId);return {badge:'✓ Terminé',queue:'',progress:100,detail:def?.name||'Travail terminé'};}
    if(b.id==='warehouse'){const used=C.storageUsed(),cap=Math.max(1,C.storageCapacity());return {badge:`${Math.round(used)}/${Math.round(cap)}`,queue:C.storageFree()<=.001?'PLEIN':'',progress:Math.max(0,Math.min(100,used/cap*100)),detail:'Occupation de l’Entrepôt'};}
    return {badge:'',queue:'',progress:0,detail:''};
  }
  function openOrSelectBuilding(id){
    const b=C.building(id);
    if(!b) return;
    const j=C.job(b.jobId),page=b.page||j?.page;
    if(C.built(id) && page){
      window.location.href=page;
      return;
    }
    selectBuilding(id);
  }
  function renderScene(){
    const at=Date.now();
    $('#villageScene').innerHTML=C.content.buildings.map(b=>{
      const st=statusFor(b,at),live=liveInfoFor(b,at),j=C.job(b.jobId);
      const style=`left:${b.x||50}%;top:${b.y||50}%;--job-color:${j?.color||'#8d7655'};--map-progress:${Math.round(live.progress||0)}%`;
      const aria=C.built(b.id)?`${b.name}, ${st.label}${live.detail?`, ${live.detail}`:''}. Ouvrir ${j?.name||'le bâtiment'}`:`${b.name}, ${st.label}`;
      return `<button class="building-node ${st.cls}" style="${style}" data-building="${esc(b.id)}" data-map-kind="${esc(st.kind||'')}" aria-label="${esc(aria)}" title="${esc(b.name)} — ${esc(st.label)}${live.detail?` · ${esc(live.detail)}`:''}">
        <span class="building-icon">${b.icon||j?.icon||'🏠'}</span>
        <span class="building-label"><span class="building-name">${esc(b.name)}</span><span class="building-state">${esc(st.label)}${C.built(b.id)?` · Niv. ${C.buildingLevel(b.id)}`:''}</span></span>
        <span class="map-live-stack" aria-hidden="true"><span class="map-live-badge">${esc(live.badge)}</span><span class="map-live-queue">${esc(live.queue)}</span></span>
      </button>`;
    }).join('');
    document.querySelectorAll('[data-building]').forEach(el=>el.onclick=()=>openOrSelectBuilding(el.dataset.building));
    updateMapActivityHud(at);
  }
  function updateMapActivityHud(at=Date.now()){
    const host=$('#mapActivityHud');if(!host||!C.autonomyStats)return;
    const stats=C.autonomyStats(),running=[],manualRunning=[];
    for(const b of C.content.buildings){
      if(!C.built(b.id))continue;
      const m=manualTaskInfoFor(b,at);if(m)manualRunning.push({b,m});
      if(!C.buildingWorkStatus)continue;const st=C.buildingWorkStatus(b.id);for(const o of st.active||[])running.push({b,o,d:C.workDef(o.defId)});
    }
    running.sort((a,z)=>Number(a.o.endsAt||0)-Number(z.o.endsAt||0));manualRunning.sort((a,z)=>a.m.left-z.m.left);
    const autoNext=running[0],manualNext=manualRunning[0],useManual=manualNext&&(!autoNext||manualNext.m.left<=Math.max(0,Number(autoNext.o.endsAt||0)-at)),free=Math.max(0,stats.workersTotal-stats.workersBusy),storagePct=Math.round(C.storageUsed()/Math.max(1,C.storageCapacity())*100);
    const nextHtml=useManual?`<div class="map-hud-next"><small>Prochaine fin · action manuelle</small><b>⚒️ ${esc(manualNext.m.detail)} · ${Math.max(1,Math.ceil(manualNext.m.left/1000))}s</b></div>`:autoNext?`<div class="map-hud-next"><small>Prochaine fin</small><b>${autoNext.d?.icon||'⚙️'} ${esc(autoNext.d?.name||'Travail')} · ${esc(C.autonomyFormatDuration(Number(autoNext.o.endsAt||0)-at))}</b></div>`:'';
    host.innerHTML=`<div class="map-hud-title"><span class="live-pulse"></span><b>Village en activité</b></div><div class="map-hud-grid"><span>👥 ${free} libre${free>1?'s':''}</span><span>⚒️ ${manualRunning.length} manuel${manualRunning.length>1?'s':''}</span><span>⚙️ ${stats.active} auto</span><span class="${stats.blocked?'warn':''}">📦 ${storagePct}%${stats.blocked?` · ${stats.blocked} bloqué${stats.blocked>1?'s':''}`:''}</span></div>${nextHtml}`;
  }
  function refreshLiveMap(){
    if(!$('#villageScene'))return;C.processBuildingWork?.();const at=Date.now();
    for(const b of C.content.buildings){const el=document.querySelector(`[data-building="${CSS.escape(b.id)}"]`);if(!el)continue;const st=statusFor(b,at),live=liveInfoFor(b,at),j=C.job(b.jobId);el.className=`building-node ${st.cls}`;el.dataset.mapKind=st.kind||'';el.style.setProperty('--map-progress',`${Math.round(live.progress||0)}%`);const stateEl=el.querySelector('.building-state');if(stateEl)stateEl.textContent=`${st.label}${C.built(b.id)?` · Niv. ${C.buildingLevel(b.id)}`:''}`;const badge=el.querySelector('.map-live-badge');if(badge)badge.textContent=live.badge||'';const queue=el.querySelector('.map-live-queue');if(queue)queue.textContent=live.queue||'';el.title=`${b.name} — ${st.label}${live.detail?` · ${live.detail}`:''}`;el.setAttribute('aria-label',C.built(b.id)?`${b.name}, ${st.label}${live.detail?`, ${live.detail}`:''}. Ouvrir ${j?.name||'le bâtiment'}`:`${b.name}, ${st.label}`);}
    updateMapActivityHud(at);renderTop();
  }
  function selectBuilding(id){
    const b=C.building(id),j=C.job(b.jobId),page=b.page||j?.page,isBuilt=C.built(id),can=C.canBuild(b),missing=C.missingForBuilding(b),lvl=C.buildingLevel(id),max=C.buildingMaxLevel(id),curDef=C.buildingLevelDef(id),next=C.nextBuildingLevel(id),upgradeMissing=isBuilt?C.missingForBuildingUpgrade(id):[];
    const cost=Object.entries(b.cost||{}).map(([rid,q])=>`${C.content.resources.find(r=>r.id===rid)?.icon||''} ${C.content.resources.find(r=>r.id===rid)?.name||rid} ×${q}`).join(' · ')||'Aucun coût';
    const upgradeCost=next?Object.entries(next.cost||{}).map(([rid,q])=>`${C.content.resources.find(r=>r.id===rid)?.icon||''} ${C.content.resources.find(r=>r.id===rid)?.name||rid} ×${q}`).join(' · ')||'Aucun coût':'';
    const effectEntries=Object.entries(curDef?.effects||{}),effectLabel=effectEntries.map(([k,v])=>k==='storageCapacity'?`Capacité ${v}`:k==='jobSlots'?`${v} emplacement${v>1?'s':''} de travail`:k==='workEfficiency'?`Efficacité ×${Number(v).toFixed(2)}`:k==='safetyBonus'?`Sécurité +${v}`:`${k}: ${v}`).join(' · ');
    $('#detail').innerHTML=`
      <div class="detail-hero"><span class="detail-icon">${b.icon||'🏠'}</span><div><div class="eyebrow">${esc(j?.name||'Bâtiment communal')}</div><h3>${esc(b.name)}</h3></div></div>
      <p>${esc(b.description||'')}</p>
      <div class="detail-row"><span>État</span><b>${isBuilt?'Accessible':can?'Constructible':'Verrouillé'}</b></div>
      ${isBuilt?`<div class="detail-row"><span>Niveau du bâtiment</span><b>${lvl} / ${max} · ${esc(curDef?.name||'')}</b></div>${effectLabel?`<div class="detail-row"><span>Effets actuels</span><b>${esc(effectLabel)}</b></div>`:''}`:''}
      <div class="detail-row"><span>Population</span><b>+${b.population||0}</b></div>
      ${!isBuilt?`<div class="detail-row"><span>Coût construction</span><b>${esc(cost)}</b></div>`:''}
      ${missing.length?`<div class="requirements"><b>Prérequis manquants</b>${missing.map(m=>`<span>• ${esc(m)}</span>`).join('')}</div>`:''}
      ${isBuilt&&next?`<div class="building-upgrade-card"><small>Amélioration suivante</small><b>Niv. ${next.level} — ${esc(next.name||'Amélioration')}</b><p>${esc(next.description||'')}</p><span>${esc(upgradeCost)}</span>${upgradeMissing.length?`<div class="requirements compact">${upgradeMissing.map(m=>`<span>• ${esc(m)}</span>`).join('')}</div>`:''}</div>`:''}
      ${isBuilt&&!next?`<div class="notice subtle">✓ Niveau maximal actuel atteint pour ce bâtiment.</div>`:''}
      ${isBuilt?`<div class="map-open-hint">✓ Ce lieu est accessible directement depuis la carte.</div>`:`<div class="map-locked-hint">${can?'Ce lieu peut être construit maintenant.':'Progresse dans le village pour débloquer ce lieu.'}</div>`}
      <div class="detail-actions">
        ${isBuilt&&page?`<a class="btn primary" href="${esc(page)}">${b.id==='warehouse'?'Ouvrir l’Entrepôt':j?'Entrer dans le métier':'Ouvrir le bâtiment'}</a>`:''}
        ${isBuilt&&next?`<button class="btn" id="upgradeSelected" ${C.canUpgradeBuilding(id)?'':'disabled'}>⬆ Améliorer au niveau ${next.level}</button>`:''}
        ${!isBuilt?`<button class="btn primary" id="buildSelected" ${can?'':'disabled'}>Construire</button>`:''}
      </div>`;
    const btn=$('#buildSelected'); if(btn)btn.onclick=()=>{if(C.build(id)){render();selectBuilding(id);}};
    const up=$('#upgradeSelected'); if(up)up.onclick=()=>{if(C.upgradeBuilding(id)){render();selectBuilding(id);}};
  }
  function renderJobs(){
    $('#jobs').innerHTML=C.content.jobs.map(j=>{
      const b=C.content.buildings.find(x=>x.jobId===j.id),open=b&&C.built(b.id);
      return `<div class="job-row ${open?'open':'closed'}"><span class="job-icon">${j.icon||'◌'}</span><div><b>${esc(j.name)}</b><small>${open?'Disponible':b?'Lieu verrouillé':`Prévu : ${esc(j.planned||'plus tard')}`}</small></div>${open?`<a class="mini-link" href="${esc(j.page)}">Ouvrir</a>`:'<span class="lock">🔒</span>'}</div>`;
    }).join('');
  }
  function renderBuildList(){
    const list=C.content.buildings.filter(b=>!C.built(b.id));
    $('#buildList').innerHTML=list.length?list.map(b=>{
      const can=C.canBuild(b),miss=C.missingForBuilding(b);
      return `<button class="build-card ${can?'ready':''}" data-open-building="${esc(b.id)}"><span>${b.icon||'🏠'}</span><div><b>${esc(b.name)}</b><small>${can?'Prêt à construire':esc(miss.slice(0,2).join(' · '))}</small></div></button>`;
    }).join(''):'<p class="muted">Tous les bâtiments connus sont construits.</p>';
    document.querySelectorAll('[data-open-building]').forEach(b=>b.onclick=()=>selectBuilding(b.dataset.openBuilding));
  }
  function renderLog(){
    $('#log').innerHTML=C.state.log.map(x=>`<div>${new Date(x.t).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})} — ${esc(x.m)}</div>`).join('');
  }
  function render(){renderTop();renderResources();renderFoodSecurity();renderAutonomy();renderDevelopment();renderScene();renderJobs();renderBuildList();renderLog();}
  $('#saveBtn').onclick=()=>{C.save();C.log('Sauvegarde locale effectuée.');renderLog();};
  const resetModal=$('#resetModal'),resetOpen=$('#resetBtn'),resetCancel=$('#resetCancelBtn'),resetConfirm=$('#resetConfirmBtn');
  const closeReset=()=>resetModal?.classList.add('hidden');
  if(resetOpen)resetOpen.onclick=()=>{resetModal?.classList.remove('hidden');setTimeout(()=>resetConfirm?.focus(),0);};
  if(resetCancel)resetCancel.onclick=closeReset;
  if(resetModal)resetModal.onclick=e=>{if(e.target===resetModal)closeReset();};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!resetModal?.classList.contains('hidden'))closeReset();});
  if(resetConfirm)resetConfirm.onclick=()=>{resetConfirm.disabled=true;resetConfirm.textContent='Réinitialisation…';const ok=C.reset();if(ok){window.location.replace(`profile.html?new=${Date.now()}`);}else{resetConfirm.disabled=false;resetConfirm.textContent='Réessayer';alert('La sauvegarde locale n’a pas pu être réinitialisée. Vérifie que le stockage du navigateur est autorisé.');}};
  render();
  selectBuilding(C.content.buildings[0].id);
  setInterval(()=>{renderAutonomy();renderResources();renderFoodSecurity();},1500);
  window.addEventListener('village:autonomy',()=>refreshLiveMap());
  window.addEventListener('village:food',()=>{renderFoodSecurity();renderTop();renderDevelopment();});
  setInterval(refreshLiveMap,500);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshLiveMap();});

})();
