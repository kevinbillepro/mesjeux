(() => {
  const C=window.VillageCore;
  const jobId=document.body.dataset.job;
  const job=C.job(jobId);
  document.getElementById('jobName').textContent=job?.name||'Métier';
  document.getElementById('jobIcon').textContent=job?.icon||'🧰';
  document.getElementById('jobDesc').textContent=job?.description||'';
  document.getElementById('jobPlanned').textContent=job?.planned||'future version';
  document.getElementById('sharedStock').innerHTML=C.content.resources.map(r=>`<div class="resource-chip"><span>${r.icon||'◌'}</span><b>${r.name}</b><strong>${C.resource(r.id)}</strong></div>`).join('');
})();
