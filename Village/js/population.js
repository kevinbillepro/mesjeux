/* VIL0.3.26 - Population, travailleurs & spécialisation des habitants */
(() => {
  const C = window.VillageCore;
  if (!C) return;
  const KEY = "village_population_v0326";

  const defaultPopulation = [
    {id:"villager_1", name:"Aline", age:28, job:"farmer", rank:"Apprentie", skills:{agriculture:12}},
    {id:"villager_2", name:"Marcel", age:41, job:"lumberjack", rank:"Confirmé", skills:{forest:28}},
    {id:"villager_3", name:"Émile", age:35, job:"cook", rank:"Apprenti", skills:{cuisine:18}}
  ];

  function load(){
    try { return JSON.parse(localStorage.getItem(KEY)) || defaultPopulation; }
    catch(e){ return defaultPopulation; }
  }
  function save(p){ localStorage.setItem(KEY, JSON.stringify(p)); }

  window.VillagePopulation = {
    get(){ return load(); },
    assign(id, job){
      const p=load(); const v=p.find(x=>x.id===id);
      if(v){v.job=job; save(p);}
      return v;
    },
    train(id, skill, amount=1){
      const p=load(); const v=p.find(x=>x.id===id);
      if(v){v.skills[skill]=(v.skills[skill]||0)+amount; save(p);}
      return v;
    },
    availableWorkers(){
      return load().filter(v=>v.job==="none");
    }
  };
})();
