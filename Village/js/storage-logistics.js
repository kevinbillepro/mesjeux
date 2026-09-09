(() => {
window.VillageStorage = {
 KEY:'village_local_storages_v1',
 defaults:{
  warehouse:{capacity:1000,items:{}},
  buildings:{
   cookhouse:{name:'Cuisine',capacity:80,items:{}},
   forge:{name:'Forge',capacity:80,items:{}},
   farm:{name:'Ferme',capacity:120,items:{}},
   mine:{name:'Mine',capacity:80,items:{}},
   lumberjack:{name:'Bûcheron',capacity:80,items:{}}
  }
 },
 load(){let d=JSON.parse(localStorage.getItem(this.KEY)||'null'); if(!d){d=this.defaults;this.save(d)} return d},
 save(d){localStorage.setItem(this.KEY,JSON.stringify(d)); return d},
 capacity(stock){return stock.capacity||0},
 used(stock){return Object.values(stock.items||{}).reduce((a,b)=>a+Number(b||0),0)},
 add(type,id,qty){
  let d=this.load(), s=type==='warehouse'?d.warehouse:d.buildings[type];
  if(!s)return false;
  s.items[id]=(s.items[id]||0)+qty;
  this.save(d);return true;
 },
 transfer(from,to,id,qty){
  let d=this.load(), a=from==='warehouse'?d.warehouse:d.buildings[from], b=to==='warehouse'?d.warehouse:d.buildings[to];
  if(!a||!b||Number(a.items[id]||0)<qty)return false;
  a.items[id]-=qty;b.items[id]=(b.items[id]||0)+qty;this.save(d);return true;
 }
};
})();
