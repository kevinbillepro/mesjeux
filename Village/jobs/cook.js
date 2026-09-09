/* VIL0.3.22.3-R - Refonte profondeur Cuisinier */
(function(){
 const state={
  complexRecipes:[
   {name:'Civet de cerf ancien',difficulty:'Avancée',quality:65,ingredients:['viande de gibier','vin','herbes rares'],conservation:'3 jours'},
   {name:'Tourte forestière royale',difficulty:'Expert',quality:80,ingredients:['farine','gibier','champignons rares'],conservation:'5 jours'},
   {name:'Banquet des anciens',difficulty:'Légendaire',quality:95,ingredients:['viandes nobles','épices rares','produits affinés'],conservation:'1 jour'}
  ],
  conservation:[
   {name:'Séchage',effect:'Augmente la durée de conservation'},
   {name:'Fumage',effect:'Conserve les viandes et développe des variantes'},
   {name:'Affinage',effect:'Améliore les produits avec le temps'},
   {name:'Cellier froid',effect:'Réduit les pertes alimentaires'}
  ],
  qualityFactors:[
   {name:'Qualité ingrédients',effect:'Influence la base du plat'},
   {name:'Maîtrise du cuisinier',effect:'Augmente le potentiel maximal'},
   {name:'Équipement',effect:'Réduit les erreurs de fabrication'},
   {name:'Conservation',effect:'Préserve la qualité dans le temps'}
  ],
  knowledge:[
   {name:'Soupe paysanne',family:'Cuisine quotidienne',rarity:'Commune',mastery:35,variants:['Rustique']},
   {name:'Ragoût forestier',family:'Cuisine de chasse',rarity:'Peu commune',mastery:10,variants:[]},
   {name:'Tourte du village',family:'Cuisine régionale',rarity:'Rare',mastery:0,variants:[]}
  ],
  mastery:[
   {name:'Découpe',value:25,effect:'Rendement et qualité des morceaux'},
   {name:'Préparation',value:20,effect:'Transformation des ingrédients'},
   {name:'Cuisson',value:30,effect:'Qualité finale des plats'},
   {name:'Dressage',value:10,effect:'Prestige et commandes nobles'},
   {name:'Créativité',value:5,effect:'Création de variantes'}
  ],
  equipment:[
   {name:'Couteaux affûtés',tier:1,effect:'Meilleure découpe'},
   {name:'Four amélioré',tier:2,effect:'Cuisson plus régulière'},
   {name:'Cuisine professionnelle',tier:3,effect:'Commandes importantes'},
   {name:'Cellier d’affinage',tier:4,effect:'Conservation avancée'},
   {name:'Grande cuisine',tier:5,effect:'Banquets prestigieux'}
  ],
  banquets:[
   {name:'Banquet du village',client:'Mairie',difficulty:'Intermédiaire',reward:'Réputation locale + ressources'},
   {name:'Festin noble',client:'Maison noble',difficulty:'Expert',reward:'Prestige gastronomique'},
   {name:'Célébration royale',client:'Cour régionale',difficulty:'Légendaire',reward:'Titre culinaire rare'}
  ],
  rareRecipes:[
   {name:'Soufflé des hautes terres',rarity:'Rare',condition:'Maîtrise cuisson élevée'},
   {name:'Ragoût ancestral',rarity:'Très rare',condition:'Ingrédients régionaux exceptionnels'},
   {name:'Menu du fondateur',rarity:'Unique',condition:'Création personnelle du maître cuisinier'}
  ],
  clients:[
   {name:'Auberge locale',demand:'Repas réguliers'},
   {name:'Mairie',demand:'Événements collectifs'},
   {name:'Noblesse',demand:'Plats de prestige'},
   {name:'Explorateurs',demand:'Rations spécialisées'}
  ],
  consecration:{
   title:'Grand Maître Cuisinier',
   requirements:[
    'Maîtriser plusieurs recettes rares',
    'Organiser des banquets prestigieux',
    'Développer une réputation gastronomique élevée'
   ],
   signatureRecipe:{
    unlocked:false,
    name:'Recette signature personnelle',
    description:'Création unique du maître cuisinier, reconnue par le village et les grands commanditaires.'
   },
   transmission:[
    'Former un apprenti',
    'Transmettre des recettes',
    'Créer une tradition culinaire locale'
   ],
   influence:[
    'Renommée locale',
    'Renommée régionale',
    'Renommée nationale',
    'Renommée légendaire'
   ],
   legendaryOrders:[
    'Banquet diplomatique',
    'Mariage noble',
    'Célébration historique',
    'Commande royale'
   ]
  },
  specializations:[
   {name:'Cuisine communautaire',bonus:'Production et moral du village'},
   {name:'Gastronomie',bonus:'Prestige et clients riches'},
   {name:'Cuisine naturelle',bonus:'Synergie Herboriste/Fermier'},
   {name:'Cuisine d’aventure',bonus:'Rations longue durée'},
   {name:'Cuisine expérimentale',bonus:'Recettes uniques'}
  ]
 };
 function cards(arr){return arr.map(x=>`<div class="card"><b>${x.name}</b><br>${x.effect||x.bonus||''}${x.mastery!==undefined?`<br>Maîtrise : ${x.mastery}%`:''}</div>`).join('')}
 function updateCookScene(active=false,label){const scene=document.getElementById('cookScene'),status=document.getElementById('cookSceneStatus');if(scene)scene.classList.toggle('is-working',!!active);if(status)status.textContent=label||(active?'🍲 Préparation en cours':'🍲 Le foyer attend la prochaine préparation');}
 function triggerCookPulse(){const scene=document.getElementById('cookScene');if(scene){scene.classList.remove('scene-burst');void scene.offsetWidth;scene.classList.add('scene-burst');scene.classList.add('is-working');setTimeout(()=>{scene.classList.remove('scene-burst');scene.classList.remove('is-working');updateCookScene(false);},420);}updateCookScene(true,'🔥 Le foyer monte en température…');}
 function render(){
  const ids={cookEquipment:cards(state.equipment),cookSpecializations:cards(state.specializations),cookKnowledge:cards(state.knowledge),cookMastery:cards(state.mastery),cookComplexRecipes:cards(state.complexRecipes),cookConservation:cards(state.conservation),cookQuality:cards(state.qualityFactors),cookBanquets:cards(state.banquets),cookRareRecipes:cards(state.rareRecipes),cookClients:cards(state.clients),cookConsecration:cards(state.consecration.requirements.map(x=>({name:x,effect:'Condition de consécration'}))),cookSignature:cards([state.consecration.signatureRecipe]),cookTransmission:cards(state.consecration.transmission.map(x=>({name:x,effect:'Transmission du savoir'}))),cookInfluence:cards(state.consecration.influence.map(x=>({name:x,effect:'Niveau de renommée'}))),cookLegendaryOrders:cards(state.consecration.legendaryOrders.map(x=>({name:x,effect:'Commande exceptionnelle'})))};
  Object.entries(ids).forEach(([id,html])=>{let e=document.getElementById(id);if(e)e.innerHTML=html});
  const future=document.getElementById('cookFuture');
  if(future) future.innerHTML='<b>VIL0.3.22.6 :</b> consécration du Grand Maître Cuisinier intégrée.';
 }
 document.addEventListener('DOMContentLoaded',()=>{render();updateCookScene(false);const host=document.querySelector('section.job-workshop, .job-work-grid');if(host)host.addEventListener('click',ev=>{if(ev.target.closest('button'))triggerCookPulse();});});
})();
