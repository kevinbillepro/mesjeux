(() => {
  const CONTENT_KEY='village_content_v85';
  const SAVE_KEY='village_save_v85';
  const LEGACY_CONTENT_KEYS=['village_content_v84','village_content_v83','village_content_v82','village_content_v81','village_content_v80','village_content_v79','village_content_v78','village_content_v77','village_content_v76','village_content_v75','village_content_v74','village_content_v73','village_content_v72','village_content_v71','village_content_v70','village_content_v69','village_content_v68','village_content_v67','village_content_v66','village_content_v65','village_content_v64','village_content_v63','village_content_v62','village_content_v61','village_content_v60','village_content_v59','village_content_v58','village_content_v57','village_content_v56','village_content_v55','village_content_v54','village_content_v53','village_content_v52','village_content_v51','village_content_v50','village_content_v49','village_content_v48','village_content_v47','village_content_v46','village_content_v45','village_content_v44','village_content_v43','village_content_v42','village_content_v41','village_content_v40','village_content_v39','village_content_v38','village_content_v37','village_content_v36','village_content_v35','village_content_v34','village_content_v33','village_content_v32','village_content_v31','village_content_v30','village_content_v29','village_content_v28','village_content_v27','village_content_v26','village_content_v25','village_content_v24','village_content_v23','village_content_v22','village_content_v21','village_content_v20','village_content_v19','village_content_v18','village_content_v17','village_content_v16','village_content_v15','village_content_v14','village_content_v13','village_content_v12','village_content_v11','village_content_v10','village_content_v9','village_content_v8','village_content_v7','village_content_v6','village_content_v5','village_content_v4','village_content_v3','village_content_v2','village_content_v1'];
  const LEGACY_SAVE_KEYS=['village_save_v84','village_save_v83','village_save_v82','village_save_v81','village_save_v80','village_save_v79','village_save_v78','village_save_v77','village_save_v76','village_save_v75','village_save_v74','village_save_v73','village_save_v72','village_save_v71','village_save_v70','village_save_v69','village_save_v68','village_save_v67','village_save_v66','village_save_v65','village_save_v64','village_save_v63','village_save_v62','village_save_v61','village_save_v60','village_save_v59','village_save_v58','village_save_v57','village_save_v56','village_save_v55','village_save_v54','village_save_v53','village_save_v52','village_save_v51','village_save_v50','village_save_v49','village_save_v48','village_save_v47','village_save_v46','village_save_v45','village_save_v44','village_save_v43','village_save_v42','village_save_v41','village_save_v40','village_save_v39','village_save_v38','village_save_v37','village_save_v36','village_save_v35','village_save_v34','village_save_v33','village_save_v32','village_save_v31','village_save_v30','village_save_v29','village_save_v28','village_save_v27','village_save_v26','village_save_v25','village_save_v24','village_save_v23','village_save_v22','village_save_v21','village_save_v20','village_save_v19','village_save_v18','village_save_v17','village_save_v16','village_save_v15','village_save_v14','village_save_v13','village_save_v12','village_save_v11','village_save_v10','village_save_v9','village_save_v8','village_save_v7','village_save_v6','village_save_v5','village_save_v4','village_save_v3','village_save_v2','village_save_v1'];
  const clone=o=>JSON.parse(JSON.stringify(o));
  const defaults=clone(window.VILLAGE_DEFAULT_DATA);
  function readFirst(keys){for(const key of keys){try{const raw=localStorage.getItem(key);if(raw)return JSON.parse(raw)||{};}catch{}}return {};}
  function mergeById(base,stored){const out=(Array.isArray(base)?base:[]).map(x=>clone(x));if(!Array.isArray(stored))return out;for(const item of stored){if(!item||!item.id)continue;const idx=out.findIndex(x=>x.id===item.id);if(idx>=0)out[idx]=Object.assign(out[idx],item);else out.push(item);}return out;}
  const stored=readFirst([CONTENT_KEY,...LEGACY_CONTENT_KEYS]);
  const content={...defaults,...stored,
    resources:mergeById(defaults.resources,stored.resources),jobs:mergeById(defaults.jobs,stored.jobs),buildings:mergeById(defaults.buildings,stored.buildings),buildingWorkOrders:mergeById(defaults.buildingWorkOrders,stored.buildingWorkOrders),hunterGrounds:mergeById(defaults.hunterGrounds,stored.hunterGrounds),hunterSpecies:mergeById(defaults.hunterSpecies,stored.hunterSpecies),hunterApproaches:mergeById(defaults.hunterApproaches,stored.hunterApproaches),hunterPreparations:mergeById(defaults.hunterPreparations,stored.hunterPreparations),hunterSkills:mergeById(defaults.hunterSkills,stored.hunterSkills),hunterTechniques:mergeById(defaults.hunterTechniques,stored.hunterTechniques),hunterBiomes:mergeById(defaults.hunterBiomes,stored.hunterBiomes),hunterEcologyRules:mergeById(defaults.hunterEcologyRules,stored.hunterEcologyRules),hunterReputationTiers:mergeById(defaults.hunterReputationTiers,stored.hunterReputationTiers),tinkererRecipes:mergeById(defaults.tinkererRecipes,stored.tinkererRecipes),tinkererKnowledge:mergeById(defaults.tinkererKnowledge,stored.tinkererKnowledge),tinkererSkills:mergeById(defaults.tinkererSkills,stored.tinkererSkills),tinkererActions:mergeById(defaults.tinkererActions,stored.tinkererActions),tinkererTechniques:mergeById(defaults.tinkererTechniques,stored.tinkererTechniques),tinkererTools:mergeById(defaults.tinkererTools,stored.tinkererTools),tinkererGear:mergeById(defaults.tinkererGear,stored.tinkererGear),tinkererSpecializations:mergeById(defaults.tinkererSpecializations,stored.tinkererSpecializations),tinkererMarket:mergeById(defaults.tinkererMarket,stored.tinkererMarket),tinkererAssemblyPatterns:mergeById(defaults.tinkererAssemblyPatterns,stored.tinkererAssemblyPatterns),tinkererQualityProcedures:mergeById(defaults.tinkererQualityProcedures,stored.tinkererQualityProcedures),tinkererRareWorks:mergeById(defaults.tinkererRareWorks,stored.tinkererRareWorks),tinkererExceptionalOrders:mergeById(defaults.tinkererExceptionalOrders,stored.tinkererExceptionalOrders),tinkererMasterySeals:mergeById(defaults.tinkererMasterySeals,stored.tinkererMasterySeals),tinkererMasterCareers:mergeById(defaults.tinkererMasterCareers,stored.tinkererMasterCareers),blacksmithKnowledge:mergeById(defaults.blacksmithKnowledge,stored.blacksmithKnowledge),blacksmithSkills:mergeById(defaults.blacksmithSkills,stored.blacksmithSkills),blacksmithActions:mergeById(defaults.blacksmithActions,stored.blacksmithActions),blacksmithTechniques:mergeById(defaults.blacksmithTechniques,stored.blacksmithTechniques),blacksmithTools:mergeById(defaults.blacksmithTools,stored.blacksmithTools),blacksmithGear:mergeById(defaults.blacksmithGear,stored.blacksmithGear),blacksmithSpecializations:mergeById(defaults.blacksmithSpecializations,stored.blacksmithSpecializations),blacksmithAlloys:mergeById(defaults.blacksmithAlloys,stored.blacksmithAlloys),blacksmithTreatments:mergeById(defaults.blacksmithTreatments,stored.blacksmithTreatments),blacksmithAdvancedStations:mergeById(defaults.blacksmithAdvancedStations,stored.blacksmithAdvancedStations),blacksmithExceptionalOrders:mergeById(defaults.blacksmithExceptionalOrders,stored.blacksmithExceptionalOrders),blacksmithMasterySeals:mergeById(defaults.blacksmithMasterySeals,stored.blacksmithMasterySeals),blacksmithMasterCareers:mergeById(defaults.blacksmithMasterCareers,stored.blacksmithMasterCareers),blacksmithMarket:mergeById(defaults.blacksmithMarket,stored.blacksmithMarket),farmSoils:mergeById(defaults.farmSoils,stored.farmSoils),farmCrops:mergeById(defaults.farmCrops,stored.farmCrops),farmSeasons:mergeById(defaults.farmSeasons,stored.farmSeasons),farmWeather:mergeById(defaults.farmWeather,stored.farmWeather),farmThreats:mergeById(defaults.farmThreats,stored.farmThreats),farmerGestures:mergeById(defaults.farmerGestures,stored.farmerGestures),farmerPuzzles:mergeById(defaults.farmerPuzzles,stored.farmerPuzzles),farmerTools:mergeById(defaults.farmerTools,stored.farmerTools),farmerGear:mergeById(defaults.farmerGear,stored.farmerGear),farmerSpecializations:mergeById(defaults.farmerSpecializations,stored.farmerSpecializations),farmerMarket:mergeById(defaults.farmerMarket,stored.farmerMarket),farmerProcessingRecipes:mergeById(defaults.farmerProcessingRecipes,stored.farmerProcessingRecipes),farmerOutlets:mergeById(defaults.farmerOutlets,stored.farmerOutlets),farmerReputationTiers:mergeById(defaults.farmerReputationTiers,stored.farmerReputationTiers),farmerMasterySeals:mergeById(defaults.farmerMasterySeals,stored.farmerMasterySeals),farmerMasterCareers:mergeById(defaults.farmerMasterCareers,stored.farmerMasterCareers),herbZones:mergeById(defaults.herbZones,stored.herbZones),herbPlants:mergeById(defaults.herbPlants,stored.herbPlants),herbalistSkills:mergeById(defaults.herbalistSkills,stored.herbalistSkills),herbalistActions:mergeById(defaults.herbalistActions,stored.herbalistActions),herbalistTechniques:mergeById(defaults.herbalistTechniques,stored.herbalistTechniques),herbalistReputationTiers:mergeById(defaults.herbalistReputationTiers,stored.herbalistReputationTiers),herbalistTools:mergeById(defaults.herbalistTools,stored.herbalistTools),herbalistGear:mergeById(defaults.herbalistGear,stored.herbalistGear),herbalistSpecializations:mergeById(defaults.herbalistSpecializations,stored.herbalistSpecializations),herbalistMarket:mergeById(defaults.herbalistMarket,stored.herbalistMarket),herbalistSpecimenTraits:mergeById(defaults.herbalistSpecimenTraits,stored.herbalistSpecimenTraits),herbalistRarePrograms:mergeById(defaults.herbalistRarePrograms,stored.herbalistRarePrograms),herbalistUniqueGardens:mergeById(defaults.herbalistUniqueGardens,stored.herbalistUniqueGardens),herbalistMasterySeals:mergeById(defaults.herbalistMasterySeals,stored.herbalistMasterySeals),herbalistMasterCareers:mergeById(defaults.herbalistMasterCareers,stored.herbalistMasterCareers),alchemistSkills:mergeById(defaults.alchemistSkills,stored.alchemistSkills),alchemistActions:mergeById(defaults.alchemistActions,stored.alchemistActions),alchemistTechniques:mergeById(defaults.alchemistTechniques,stored.alchemistTechniques),alchemistMethods:mergeById(defaults.alchemistMethods,stored.alchemistMethods),alchemistRecipes:mergeById(defaults.alchemistRecipes,stored.alchemistRecipes),alchemistReputationTiers:mergeById(defaults.alchemistReputationTiers,stored.alchemistReputationTiers),alchemistTools:mergeById(defaults.alchemistTools,stored.alchemistTools),alchemistGear:mergeById(defaults.alchemistGear,stored.alchemistGear),alchemistSpecializations:mergeById(defaults.alchemistSpecializations,stored.alchemistSpecializations),alchemistMarket:mergeById(defaults.alchemistMarket,stored.alchemistMarket),alchemistCatalysts:mergeById(defaults.alchemistCatalysts,stored.alchemistCatalysts),alchemistResearchProjects:mergeById(defaults.alchemistResearchProjects,stored.alchemistResearchProjects),alchemistAdvancedLabs:mergeById(defaults.alchemistAdvancedLabs,stored.alchemistAdvancedLabs),alchemistScholarlyNetworks:mergeById(defaults.alchemistScholarlyNetworks,stored.alchemistScholarlyNetworks),alchemistExceptionalOrders:mergeById(defaults.alchemistExceptionalOrders,stored.alchemistExceptionalOrders),alchemistMasterySeals:mergeById(defaults.alchemistMasterySeals,stored.alchemistMasterySeals),alchemistMasterCareers:mergeById(defaults.alchemistMasterCareers,stored.alchemistMasterCareers),livestockSpecies:mergeById(defaults.livestockSpecies,stored.livestockSpecies),breederSkills:mergeById(defaults.breederSkills,stored.breederSkills),breederTechniques:mergeById(defaults.breederTechniques,stored.breederTechniques),breederActions:mergeById(defaults.breederActions,stored.breederActions),breederReputationTiers:mergeById(defaults.breederReputationTiers,stored.breederReputationTiers),breederTools:mergeById(defaults.breederTools,stored.breederTools),breederGear:mergeById(defaults.breederGear,stored.breederGear),breederSpecializations:mergeById(defaults.breederSpecializations,stored.breederSpecializations),breederMarket:mergeById(defaults.breederMarket,stored.breederMarket),breederGeneticTraits:mergeById(defaults.breederGeneticTraits,stored.breederGeneticTraits),breederLineageGrades:mergeById(defaults.breederLineageGrades,stored.breederLineageGrades),breederPastures:mergeById(defaults.breederPastures,stored.breederPastures),breederRations:mergeById(defaults.breederRations,stored.breederRations),breederUniquePrograms:mergeById(defaults.breederUniquePrograms,stored.breederUniquePrograms),breederMasterySeals:mergeById(defaults.breederMasterySeals,stored.breederMasterySeals),breederMasterCareers:mergeById(defaults.breederMasterCareers,stored.breederMasterCareers),farmEvents:mergeById(defaults.farmEvents,stored.farmEvents),farmEventConfig:Object.assign({},defaults.farmEventConfig||{},stored.farmEventConfig||{}),mineZones:mergeById(defaults.mineZones,stored.mineZones),mineSites:mergeById(defaults.mineSites,stored.mineSites),mineInstallations:mergeById(defaults.mineInstallations,stored.mineInstallations),mineralDeposits:mergeById(defaults.mineralDeposits,stored.mineralDeposits),miningGestures:mergeById(defaults.miningGestures,stored.miningGestures),miningPuzzles:mergeById(defaults.miningPuzzles,stored.miningPuzzles),mineralRarities:mergeById(defaults.mineralRarities,stored.mineralRarities),miningTools:mergeById(defaults.miningTools,stored.miningTools),miningGear:mergeById(defaults.miningGear,stored.miningGear),miningSpecializations:mergeById(defaults.miningSpecializations,stored.miningSpecializations),miningReputationTiers:mergeById(defaults.miningReputationTiers,stored.miningReputationTiers),miningMasterySeals:mergeById(defaults.miningMasterySeals,stored.miningMasterySeals),miningMasterCareers:mergeById(defaults.miningMasterCareers,stored.miningMasterCareers),miningMarket:mergeById(defaults.miningMarket,stored.miningMarket),trees:mergeById(defaults.trees,stored.trees),forestZones:mergeById(defaults.forestZones,stored.forestZones),forestSites:mergeById(defaults.forestSites,stored.forestSites),forestRarities:mergeById(defaults.forestRarities,stored.forestRarities),lumberTools:mergeById(defaults.lumberTools,stored.lumberTools),lumberGear:mergeById(defaults.lumberGear,stored.lumberGear),lumberSpecializations:mergeById(defaults.lumberSpecializations,stored.lumberSpecializations),lumberReputationTiers:mergeById(defaults.lumberReputationTiers,stored.lumberReputationTiers),lumberMasterySeals:mergeById(defaults.lumberMasterySeals,stored.lumberMasterySeals),lumberMasterCareers:mergeById(defaults.lumberMasterCareers,stored.lumberMasterCareers),lumberMarket:mergeById(defaults.lumberMarket,stored.lumberMarket),lumberOperations:mergeById(defaults.lumberOperations,stored.lumberOperations),lumberPuzzles:mergeById(defaults.lumberPuzzles,stored.lumberPuzzles),professionalRanks:mergeById(defaults.professionalRanks,stored.professionalRanks),jobClients:mergeById(defaults.jobClients,stored.jobClients),jobContracts:mergeById(defaults.jobContracts,stored.jobContracts),achievements:mergeById(defaults.achievements,stored.achievements),prestigeTiers:mergeById(defaults.prestigeTiers,stored.prestigeTiers),prestigeConfig:Object.assign({},defaults.prestigeConfig,stored.prestigeConfig||{}),foodSecurityConfig:Object.assign({},defaults.foodSecurityConfig||{},stored.foodSecurityConfig||{}),village:Object.assign({},defaults.village,stored.village||{}),meta:clone(defaults.meta)};
  if(Number(stored?.meta?.schema||0)<10){const native=defaults.jobs.find(j=>j.id==='lumberjack'),target=content.jobs.find(j=>j.id==='lumberjack');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<11){const native=defaults.jobs.find(j=>j.id==='miner'),target=content.jobs.find(j=>j.id==='miner');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<13){const native=defaults.jobs.find(j=>j.id==='miner'),target=content.jobs.find(j=>j.id==='miner');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<14){const native=defaults.jobs.find(j=>j.id==='miner'),target=content.jobs.find(j=>j.id==='miner');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<15){const native=defaults.jobs.find(j=>j.id==='miner'),target=content.jobs.find(j=>j.id==='miner');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<16){const native=defaults.jobs.find(j=>j.id==='miner'),target=content.jobs.find(j=>j.id==='miner');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<19)content.professionParityAudit=clone(defaults.professionParityAudit);
  if(Number(stored?.meta?.schema||0)<27){const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});content.jobContracts=(content.jobContracts||[]).filter(x=>x&&x.jobId);}
  if(Number(stored?.meta?.schema||0)<28){const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<29){const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<30){const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});}
  if(Number(stored?.meta?.schema||0)<31){
    const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');
    if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});
    content.foodSecurityConfig=Object.assign({},defaults.foodSecurityConfig||{},stored.foodSecurityConfig||{});
    // Les tableaux imbriqués des bâtiments et des paliers étaient remplacés en bloc par le contenu V30.
    // On réinjecte uniquement les nouveaux champs alimentaires afin de préserver les personnalisations existantes.
    for(const bid of ['warehouse','farm']){const base=defaults.buildings.find(b=>b.id===bid),dst=content.buildings.find(b=>b.id===bid),key=bid==='warehouse'?'foodPreservation':'foodReserveTargetBonus';if(!base||!dst)continue;for(const baseLevel of base.levels||[]){const dstLevel=(dst.levels||[]).find(x=>Number(x.level||0)===Number(baseLevel.level||0));if(!dstLevel)continue;if(!dstLevel.effects||typeof dstLevel.effects!=='object')dstLevel.effects={};if(typeof dstLevel.effects[key]!=='number'&&typeof baseLevel.effects?.[key]==='number')dstLevel.effects[key]=Number(baseLevel.effects[key]);}}
    const baseStages=defaults.village?.developmentStages||[],dstStages=content.village?.developmentStages||[];for(const baseStage of baseStages){const dstStage=dstStages.find(x=>Number(x.level||0)===Number(baseStage.level||0)),foodDays=Number(baseStage.requirements?.foodReserveDays||0);if(!dstStage||!foodDays)continue;if(!dstStage.requirements||typeof dstStage.requirements!=='object')dstStage.requirements={};if(typeof dstStage.requirements.foodReserveDays!=='number')dstStage.requirements.foodReserveDays=foodDays;}
  }
  if(Number(stored?.meta?.schema||0)<32){
    const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');
    if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});
    const base=defaults.buildings.find(b=>b.id==='farm'),dst=content.buildings.find(b=>b.id==='farm');
    if(base&&dst)for(const baseLevel of base.levels||[]){const dstLevel=(dst.levels||[]).find(x=>Number(x.level||0)===Number(baseLevel.level||0));if(!dstLevel)continue;if(!dstLevel.effects||typeof dstLevel.effects!=='object')dstLevel.effects={};for(const key of ['processingSlots','processingSpeed'])if(typeof dstLevel.effects[key]!=='number'&&typeof baseLevel.effects?.[key]==='number')dstLevel.effects[key]=Number(baseLevel.effects[key]);}
  }
  if(Number(stored?.meta?.schema||0)<33){
    const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');
    if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});
    content.farmEventConfig=Object.assign({},defaults.farmEventConfig||{},stored.farmEventConfig||{});
  }
  if(Number(stored?.meta?.schema||0)<34){
    const native=defaults.jobs.find(j=>j.id==='farmer'),target=content.jobs.find(j=>j.id==='farmer');
    if(native&&target)Object.assign(target,{xpPerLevel:native.xpPerLevel,maxLevel:native.maxLevel,ranks:clone(native.ranks),manualRanks:true,planned:native.planned,description:native.description});
    content.professionParityAudit=clone(defaults.professionParityAudit);
  }
  if(Number(stored?.meta?.schema||0)<35){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,clone(breederBase));
    const yardBase=defaults.buildings.find(b=>b.id==='livestock_yard'),yardTarget=content.buildings.find(b=>b.id==='livestock_yard');
    if(yardBase&&yardTarget)Object.assign(yardTarget,clone(yardBase));
    const fodderBase=(defaults.farmerProcessingRecipes||[]).find(x=>x.id==='prepare_fodder'),fodderTarget=(content.farmerProcessingRecipes||[]).find(x=>x.id==='prepare_fodder');
    if(fodderBase&&fodderTarget)Object.assign(fodderTarget,clone(fodderBase));
    const outletBase=(defaults.farmerOutlets||[]).find(x=>x.id==='breeder_outlet');
    if(outletBase){content.farmerOutlets=(content.farmerOutlets||[]).filter(x=>x.id!=='breeder_future'&&x.id!=='breeder_outlet');content.farmerOutlets.push(clone(outletBase));}
    const stageBase=(defaults.village?.developmentStages||[]).find(x=>Number(x.level||0)===4),stageTarget=(content.village?.developmentStages||[]).find(x=>Number(x.level||0)===4);
    if(stageBase&&stageTarget){
      // Préserver les éventuelles personnalisations du palier V34 et n'injecter que les nouveaux verrous liés à l'élevage.
      const baseReq=stageBase.requirements||{},dstReq=stageTarget.requirements||{};
      stageTarget.requirements=dstReq;
      dstReq.buildingLevels=Object.assign({},dstReq.buildingLevels||{},baseReq.buildingLevels?.livestock_yard?{livestock_yard:baseReq.buildingLevels.livestock_yard}:{});
      dstReq.jobLevels=Object.assign({},dstReq.jobLevels||{},baseReq.jobLevels?.breeder?{breeder:baseReq.jobLevels.breeder}:{});
      dstReq.produced=Object.assign({},dstReq.produced||{},baseReq.produced?.eggs?{eggs:baseReq.produced.eggs}:{});
    }
  }
  if(Number(stored?.meta?.schema||0)<37){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description,xpPerLevel:breederBase.xpPerLevel,maxLevel:breederBase.maxLevel});
    for(const base of defaults.livestockSpecies||[]){const dst=(content.livestockSpecies||[]).find(x=>x.id===base.id);if(!dst)continue;for(const key of ['knowledgeDifficulty','traits','healthySigns','warningSigns','expertTip'])if(dst[key]===undefined)dst[key]=clone(base[key]);}
    for(const base of defaults.breederActions||[]){const dst=(content.breederActions||[]).find(x=>x.id===base.id);if(!dst)continue;for(const key of ['skillId','skillXp','knowledgeGain'])if(dst[key]===undefined)dst[key]=clone(base[key]);}
    content.breederSkills=mergeById(defaults.breederSkills,stored.breederSkills);
    content.breederTechniques=mergeById(defaults.breederTechniques,stored.breederTechniques);
  }
  if(Number(stored?.meta?.schema||0)<38){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description,xpPerLevel:breederBase.xpPerLevel,maxLevel:breederBase.maxLevel,ranks:clone(breederBase.ranks),manualRanks:true});
    content.breederReputationTiers=mergeById(defaults.breederReputationTiers,stored.breederReputationTiers);
  }
  if(Number(stored?.meta?.schema||0)<39){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description,xpPerLevel:breederBase.xpPerLevel,maxLevel:breederBase.maxLevel,ranks:clone(breederBase.ranks),manualRanks:true});
    content.breederTools=mergeById(defaults.breederTools,stored.breederTools);
    content.breederGear=mergeById(defaults.breederGear,stored.breederGear);
    content.breederSpecializations=mergeById(defaults.breederSpecializations,stored.breederSpecializations);
    content.breederMarket=mergeById(defaults.breederMarket,stored.breederMarket);
  }
  if(Number(stored?.meta?.schema||0)<40){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description});
    for(const base of defaults.livestockSpecies||[]){const dst=(content.livestockSpecies||[]).find(x=>x.id===base.id);if(dst&&dst.breeding===undefined)dst.breeding=clone(base.breeding);}
    content.breederGeneticTraits=mergeById(defaults.breederGeneticTraits,stored.breederGeneticTraits);
    content.breederLineageGrades=mergeById(defaults.breederLineageGrades,stored.breederLineageGrades);
  }
  if(Number(stored?.meta?.schema||0)<41){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description});
    content.breederPastures=mergeById(defaults.breederPastures,stored.breederPastures);
    content.breederRations=mergeById(defaults.breederRations,stored.breederRations);
  }
  if(Number(stored?.meta?.schema||0)<42){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description,xpPerLevel:breederBase.xpPerLevel,maxLevel:breederBase.maxLevel,ranks:clone(breederBase.ranks),manualRanks:true});
    content.resources=mergeById(defaults.resources,stored.resources);
    content.livestockSpecies=mergeById(defaults.livestockSpecies,stored.livestockSpecies);
    content.breederMarket=mergeById(defaults.breederMarket,stored.breederMarket);
    content.breederUniquePrograms=mergeById(defaults.breederUniquePrograms,stored.breederUniquePrograms);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<43){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description,xpPerLevel:breederBase.xpPerLevel,maxLevel:breederBase.maxLevel,ranks:clone(breederBase.ranks),manualRanks:true});
    content.breederMasterySeals=mergeById(defaults.breederMasterySeals,stored.breederMasterySeals);
    content.breederMasterCareers=mergeById(defaults.breederMasterCareers,stored.breederMasterCareers);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<44){
    const breederBase=defaults.jobs.find(j=>j.id==='breeder'),breederTarget=content.jobs.find(j=>j.id==='breeder');
    if(breederBase&&breederTarget)Object.assign(breederTarget,{planned:breederBase.planned,description:breederBase.description,xpPerLevel:breederBase.xpPerLevel,maxLevel:breederBase.maxLevel,ranks:clone(breederBase.ranks),manualRanks:true,contractSpeciesGate:breederBase.contractSpeciesGate});
    content.professionParityAudit=clone(defaults.professionParityAudit);
  }
  if(Number(stored?.meta?.schema||0)<45){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.resources=mergeById(defaults.resources,stored.resources);
    content.buildingWorkOrders=mergeById(defaults.buildingWorkOrders,stored.buildingWorkOrders);
    content.herbZones=mergeById(defaults.herbZones,stored.herbZones);
    content.herbPlants=mergeById(defaults.herbPlants,stored.herbPlants);
    content.herbalistSkills=mergeById(defaults.herbalistSkills,stored.herbalistSkills);
    content.herbalistActions=mergeById(defaults.herbalistActions,stored.herbalistActions);
    content.professionalRanks=mergeById(defaults.professionalRanks,stored.professionalRanks);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<46){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.herbPlants=mergeById(defaults.herbPlants,stored.herbPlants);
    content.herbalistSkills=mergeById(defaults.herbalistSkills,stored.herbalistSkills);
    content.herbalistActions=mergeById(defaults.herbalistActions,stored.herbalistActions);
    content.herbalistTechniques=mergeById(defaults.herbalistTechniques,stored.herbalistTechniques);
    content.professionalRanks=mergeById(defaults.professionalRanks,stored.professionalRanks);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<47){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.herbalistReputationTiers=clone(defaults.herbalistReputationTiers||[]);
    content.professionalRanks=[...content.professionalRanks.filter(x=>x.jobId!=='herbalist'),...clone((defaults.professionalRanks||[]).filter(x=>x.jobId==='herbalist'))];
    content.jobClients=[...content.jobClients.filter(x=>x.jobId!=='herbalist'),...clone((defaults.jobClients||[]).filter(x=>x.jobId==='herbalist'))];
    content.jobContracts=[...content.jobContracts.filter(x=>x.jobId!=='herbalist'),...clone((defaults.jobContracts||[]).filter(x=>x.jobId==='herbalist'))];
  }
  if(Number(stored?.meta?.schema||0)<48){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.herbalistTools=clone(defaults.herbalistTools||[]);
    content.herbalistGear=clone(defaults.herbalistGear||[]);
    content.herbalistSpecializations=clone(defaults.herbalistSpecializations||[]);
    content.herbalistMarket=clone(defaults.herbalistMarket||[]);
  }
  if(Number(stored?.meta?.schema||0)<49){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.herbZones=mergeById(defaults.herbZones,stored.herbZones);
    content.herbPlants=mergeById(defaults.herbPlants,stored.herbPlants);
  }
  if(Number(stored?.meta?.schema||0)<50){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.resources=mergeById(defaults.resources,stored.resources);
    content.herbZones=mergeById(defaults.herbZones,stored.herbZones);
    content.herbPlants=mergeById(defaults.herbPlants,stored.herbPlants);
    content.herbalistMarket=mergeById(defaults.herbalistMarket,stored.herbalistMarket);
    content.herbalistSpecimenTraits=mergeById(defaults.herbalistSpecimenTraits,stored.herbalistSpecimenTraits);
    content.herbalistRarePrograms=mergeById(defaults.herbalistRarePrograms,stored.herbalistRarePrograms);
    content.herbalistUniqueGardens=mergeById(defaults.herbalistUniqueGardens,stored.herbalistUniqueGardens);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<51){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.herbalistMasterySeals=mergeById(defaults.herbalistMasterySeals,stored.herbalistMasterySeals);
    content.herbalistMasterCareers=mergeById(defaults.herbalistMasterCareers,stored.herbalistMasterCareers);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<52){
    const herbBase=defaults.jobs.find(j=>j.id==='herbalist'),herbTarget=content.jobs.find(j=>j.id==='herbalist');
    if(herbBase&&herbTarget)Object.assign(herbTarget,{planned:herbBase.planned,description:herbBase.description,xpPerLevel:herbBase.xpPerLevel,maxLevel:herbBase.maxLevel,manualRanks:true});
    content.herbalistRarePrograms=mergeById(defaults.herbalistRarePrograms,stored.herbalistRarePrograms);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    const gentianBase=(defaults.herbalistRarePrograms||[]).find(x=>x.id==='silver_gentian_program'),gentianTarget=(content.herbalistRarePrograms||[]).find(x=>x.id==='silver_gentian_program');
    if(gentianBase&&gentianTarget){gentianTarget.minLevel=gentianBase.minLevel;gentianTarget.minRank=gentianBase.minRank;}
    const gentianContractBase=(defaults.jobContracts||[]).find(x=>x.id==='herb_rare_gentian_reference'),gentianContractTarget=(content.jobContracts||[]).find(x=>x.id==='herb_rare_gentian_reference');
    if(gentianContractBase&&gentianContractTarget){gentianContractTarget.minLevel=gentianContractBase.minLevel;gentianContractTarget.minRank=gentianContractBase.minRank;}
    content.professionParityAudit=clone(defaults.professionParityAudit);
  }
  if(Number(stored?.meta?.schema||0)<53){
    const baseJob=defaults.jobs.find(j=>j.id==='alchemist'),targetJob=content.jobs.find(j=>j.id==='alchemist');
    if(baseJob&&targetJob)Object.assign(targetJob,{planned:baseJob.planned,description:baseJob.description,xpPerLevel:baseJob.xpPerLevel,maxLevel:baseJob.maxLevel,manualRanks:true});
    const baseLab=defaults.buildings.find(b=>b.id==='alchemy_lab'),targetLab=content.buildings.find(b=>b.id==='alchemy_lab');
    if(baseLab&&targetLab)Object.assign(targetLab,clone(baseLab));
    content.resources=mergeById(defaults.resources,stored.resources);
    content.buildingWorkOrders=mergeById(defaults.buildingWorkOrders,stored.buildingWorkOrders);
    content.alchemistSkills=mergeById(defaults.alchemistSkills,stored.alchemistSkills);
    content.alchemistMethods=mergeById(defaults.alchemistMethods,stored.alchemistMethods);
    content.alchemistRecipes=mergeById(defaults.alchemistRecipes,stored.alchemistRecipes);
    content.alchemistReputationTiers=mergeById(defaults.alchemistReputationTiers,stored.alchemistReputationTiers);
    content.professionalRanks=mergeById(defaults.professionalRanks,stored.professionalRanks);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<54){
    const baseJob=defaults.jobs.find(j=>j.id==='alchemist'),targetJob=content.jobs.find(j=>j.id==='alchemist');
    if(baseJob&&targetJob)Object.assign(targetJob,{planned:baseJob.planned,description:baseJob.description,xpPerLevel:baseJob.xpPerLevel,maxLevel:baseJob.maxLevel,manualRanks:true});
    content.alchemistSkills=mergeById(defaults.alchemistSkills,stored.alchemistSkills);
    content.alchemistActions=mergeById(defaults.alchemistActions,stored.alchemistActions);
    content.alchemistTechniques=mergeById(defaults.alchemistTechniques,stored.alchemistTechniques);
    content.alchemistRecipes=mergeById(defaults.alchemistRecipes,stored.alchemistRecipes);
    content.professionalRanks=mergeById(defaults.professionalRanks,stored.professionalRanks);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<55){
    const baseJob=defaults.jobs.find(j=>j.id==='alchemist'),targetJob=content.jobs.find(j=>j.id==='alchemist');
    if(baseJob&&targetJob)Object.assign(targetJob,{planned:baseJob.planned,description:baseJob.description,xpPerLevel:baseJob.xpPerLevel,maxLevel:baseJob.maxLevel,manualRanks:true});
    content.alchemistReputationTiers=clone(defaults.alchemistReputationTiers||[]);
    content.professionalRanks=[...content.professionalRanks.filter(x=>x.jobId!=='alchemist'),...clone((defaults.professionalRanks||[]).filter(x=>x.jobId==='alchemist'))];
    content.jobClients=[...content.jobClients.filter(x=>x.jobId!=='alchemist'),...clone((defaults.jobClients||[]).filter(x=>x.jobId==='alchemist'))];
    content.jobContracts=[...content.jobContracts.filter(x=>x.jobId!=='alchemist'),...clone((defaults.jobContracts||[]).filter(x=>x.jobId==='alchemist'))];
  }
  if(Number(stored?.meta?.schema||0)<56){
    const baseJob=defaults.jobs.find(j=>j.id==='alchemist'),targetJob=content.jobs.find(j=>j.id==='alchemist');
    if(baseJob&&targetJob)Object.assign(targetJob,{planned:baseJob.planned,description:baseJob.description,xpPerLevel:baseJob.xpPerLevel,maxLevel:baseJob.maxLevel,manualRanks:true});
    content.alchemistRecipes=mergeById(defaults.alchemistRecipes,stored.alchemistRecipes);
    content.alchemistTools=clone(defaults.alchemistTools||[]);
    content.alchemistGear=clone(defaults.alchemistGear||[]);
    content.alchemistSpecializations=clone(defaults.alchemistSpecializations||[]);
    content.alchemistMarket=clone(defaults.alchemistMarket||[]);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<57){
    const baseJob=defaults.jobs.find(j=>j.id==='alchemist'),targetJob=content.jobs.find(j=>j.id==='alchemist');
    if(baseJob&&targetJob)Object.assign(targetJob,{planned:baseJob.planned,description:baseJob.description,xpPerLevel:baseJob.xpPerLevel,maxLevel:baseJob.maxLevel,manualRanks:true});
    content.resources=mergeById(defaults.resources,stored.resources);
    content.alchemistRecipes=mergeById(defaults.alchemistRecipes,stored.alchemistRecipes);
    content.alchemistCatalysts=clone(defaults.alchemistCatalysts||[]);
    content.alchemistResearchProjects=clone(defaults.alchemistResearchProjects||[]);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<58){
    const baseJob=defaults.jobs.find(j=>j.id==='alchemist'),targetJob=content.jobs.find(j=>j.id==='alchemist');
    if(baseJob&&targetJob)Object.assign(targetJob,{planned:baseJob.planned,description:baseJob.description,xpPerLevel:baseJob.xpPerLevel,maxLevel:baseJob.maxLevel,manualRanks:true});
    content.alchemistAdvancedLabs=mergeById(defaults.alchemistAdvancedLabs,stored.alchemistAdvancedLabs);
    content.alchemistScholarlyNetworks=mergeById(defaults.alchemistScholarlyNetworks,stored.alchemistScholarlyNetworks);
    content.alchemistExceptionalOrders=mergeById(defaults.alchemistExceptionalOrders,stored.alchemistExceptionalOrders);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<59){
    const baseJob=defaults.jobs.find(j=>j.id==='alchemist'),targetJob=content.jobs.find(j=>j.id==='alchemist');
    if(baseJob&&targetJob)Object.assign(targetJob,{planned:baseJob.planned,description:baseJob.description,xpPerLevel:baseJob.xpPerLevel,maxLevel:baseJob.maxLevel,manualRanks:true});
    content.alchemistMasterySeals=mergeById(defaults.alchemistMasterySeals,stored.alchemistMasterySeals);
    content.alchemistMasterCareers=mergeById(defaults.alchemistMasterCareers,stored.alchemistMasterCareers);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<60){
    const aj=defaults.jobs.find(j=>j.id==='alchemist'),ai=content.jobs.findIndex(j=>j.id==='alchemist');
    if(aj&&ai>=0)content.jobs[ai]=Object.assign({},content.jobs[ai],{planned:aj.planned,description:aj.description,xpPerLevel:aj.xpPerLevel,maxLevel:aj.maxLevel,manualRanks:true});
    content.professionParityAudit=clone(defaults.professionParityAudit);
  }
  if(Number(stored?.meta?.schema||0)<61){
    const bj=defaults.jobs.find(j=>j.id==='blacksmith'),bi=content.jobs.findIndex(j=>j.id==='blacksmith');
    if(bj&&bi>=0)content.jobs[bi]=clone(bj);
    for(const rid of ['iron_ore','iron_ingot','iron_nails','iron_fittings']){
      const base=defaults.resources.find(r=>r.id===rid),idx=content.resources.findIndex(r=>r.id===rid);
      if(base){if(idx>=0)content.resources[idx]=clone(base);else content.resources.push(clone(base));}
    }
    const fb=defaults.buildings.find(b=>b.id==='forge'),fi=content.buildings.findIndex(b=>b.id==='forge');
    if(fb&&fi>=0)content.buildings[fi]=clone(fb);
    const wo=(defaults.buildingWorkOrders||[]).find(x=>x.id==='blacksmith_iron_shift');
    if(wo){content.buildingWorkOrders=(content.buildingWorkOrders||[]).filter(x=>x.id!==wo.id);content.buildingWorkOrders.push(clone(wo));}
  }
  if(Number(stored?.meta?.schema||0)<63){
    const bj=defaults.jobs.find(j=>j.id==='blacksmith'),bi=content.jobs.findIndex(j=>j.id==='blacksmith');
    if(bj&&bi>=0)content.jobs[bi]=Object.assign({},content.jobs[bi],{planned:bj.planned,description:bj.description,xpPerLevel:bj.xpPerLevel,maxLevel:bj.maxLevel,manualRanks:true,ranks:clone(bj.ranks)});
    content.professionalRanks=mergeById(defaults.professionalRanks,stored.professionalRanks);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
  }
  if(Number(stored?.meta?.schema||0)<64){
    const bj=defaults.jobs.find(j=>j.id==='blacksmith'),bi=content.jobs.findIndex(j=>j.id==='blacksmith');
    if(bj&&bi>=0)content.jobs[bi]=Object.assign({},content.jobs[bi],{planned:bj.planned,description:bj.description,xpPerLevel:bj.xpPerLevel,maxLevel:bj.maxLevel,manualRanks:true,ranks:clone(bj.ranks)});
    content.blacksmithTools=mergeById(defaults.blacksmithTools,stored.blacksmithTools);
    content.blacksmithGear=mergeById(defaults.blacksmithGear,stored.blacksmithGear);
    content.blacksmithSpecializations=mergeById(defaults.blacksmithSpecializations,stored.blacksmithSpecializations);
    content.blacksmithMarket=mergeById(defaults.blacksmithMarket,stored.blacksmithMarket);
  }
  if(Number(stored?.meta?.schema||0)<65){
    const bj=defaults.jobs.find(j=>j.id==='blacksmith'),bi=content.jobs.findIndex(j=>j.id==='blacksmith');
    if(bj&&bi>=0)content.jobs[bi]=Object.assign({},content.jobs[bi],{planned:bj.planned,description:bj.description,xpPerLevel:bj.xpPerLevel,maxLevel:bj.maxLevel,manualRanks:true,ranks:clone(bj.ranks)});
    for(const rid of ['steel_billet','steel_fittings']){const base=defaults.resources.find(r=>r.id===rid),idx=content.resources.findIndex(r=>r.id===rid);if(base){if(idx>=0)content.resources[idx]=clone(base);else content.resources.push(clone(base));}}
    const fb=defaults.buildings.find(b=>b.id==='forge'),fi=content.buildings.findIndex(b=>b.id==='forge');if(fb&&fi>=0)content.buildings[fi]=clone(fb);
    content.blacksmithKnowledge=mergeById(defaults.blacksmithKnowledge,stored.blacksmithKnowledge);
    content.blacksmithAlloys=mergeById(defaults.blacksmithAlloys,stored.blacksmithAlloys);
    content.blacksmithTreatments=mergeById(defaults.blacksmithTreatments,stored.blacksmithTreatments);
    content.blacksmithMarket=mergeById(defaults.blacksmithMarket,stored.blacksmithMarket);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
  }
  if(Number(stored?.meta?.schema||0)<66){
    const bj=defaults.jobs.find(j=>j.id==='blacksmith'),bi=content.jobs.findIndex(j=>j.id==='blacksmith');
    if(bj&&bi>=0)content.jobs[bi]=Object.assign({},content.jobs[bi],{planned:bj.planned,description:bj.description,xpPerLevel:bj.xpPerLevel,maxLevel:bj.maxLevel,manualRanks:true,ranks:clone(bj.ranks)});
    for(const rid of ['silver_ingot','silver_mountings','rare_steel_billet','rare_steel_fittings']){const base=defaults.resources.find(r=>r.id===rid),idx=content.resources.findIndex(r=>r.id===rid);if(base){if(idx>=0)content.resources[idx]=clone(base);else content.resources.push(clone(base));}}
    content.blacksmithKnowledge=mergeById(defaults.blacksmithKnowledge,stored.blacksmithKnowledge);
    content.blacksmithAlloys=mergeById(defaults.blacksmithAlloys,stored.blacksmithAlloys);
    content.blacksmithTreatments=mergeById(defaults.blacksmithTreatments,stored.blacksmithTreatments);
    content.blacksmithAdvancedStations=mergeById(defaults.blacksmithAdvancedStations,stored.blacksmithAdvancedStations);
    content.blacksmithExceptionalOrders=mergeById(defaults.blacksmithExceptionalOrders,stored.blacksmithExceptionalOrders);
    content.blacksmithMarket=mergeById(defaults.blacksmithMarket,stored.blacksmithMarket);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
  }
  if(Number(stored?.meta?.schema||0)<68){
    const bj=defaults.jobs.find(j=>j.id==='blacksmith'),bi=content.jobs.findIndex(j=>j.id==='blacksmith');
    if(bj&&bi>=0)content.jobs[bi]=Object.assign({},content.jobs[bi],{planned:bj.planned,description:bj.description,xpPerLevel:bj.xpPerLevel,maxLevel:bj.maxLevel,manualRanks:true,ranks:clone(bj.ranks)});
    content.achievements=mergeById(defaults.achievements,stored.achievements);
    content.professionParityAudit=clone(defaults.professionParityAudit);
  }
  if(Number(stored?.meta?.schema||0)<69){
    const tj=defaults.jobs.find(j=>j.id==='tinkerer'),ti=content.jobs.findIndex(j=>j.id==='tinkerer');
    if(tj&&ti>=0)content.jobs[ti]=clone(tj);
    for(const rid of ['planks','joinery_parts','timber_frame','repair_kit']){const base=defaults.resources.find(r=>r.id===rid),idx=content.resources.findIndex(r=>r.id===rid);if(base){if(idx>=0)content.resources[idx]=clone(base);else content.resources.push(clone(base));}}
    const tb=defaults.buildings.find(b=>b.id==='tinker_workshop'),tbi=content.buildings.findIndex(b=>b.id==='tinker_workshop');if(tb&&tbi>=0)content.buildings[tbi]=clone(tb);
    const fb69=defaults.buildings.find(b=>b.id==='forge'),fbi69=content.buildings.findIndex(b=>b.id==='forge');if(fb69&&fbi69>=0)content.buildings[fbi69]=clone(fb69);
    const tw=defaults.buildingWorkOrders.find(w=>w.id==='tinker_planks_shift'),twi=content.buildingWorkOrders.findIndex(w=>w.id==='tinker_planks_shift');if(tw){if(twi>=0)content.buildingWorkOrders[twi]=clone(tw);else content.buildingWorkOrders.push(clone(tw));}
    content.tinkererRecipes=mergeById(defaults.tinkererRecipes,stored.tinkererRecipes);
    const stage3=defaults.village?.developmentStages?.find(x=>Number(x.level)===3),cur3=content.village?.developmentStages?.find(x=>Number(x.level)===3);if(stage3&&cur3&&stage3.requirements)cur3.requirements=clone(stage3.requirements);
  }
  if(Number(stored?.meta?.schema||0)<70){
    const tj=defaults.jobs.find(j=>j.id==='tinkerer'),ti=content.jobs.findIndex(j=>j.id==='tinkerer');
    if(tj&&ti>=0)content.jobs[ti]=Object.assign({},content.jobs[ti],{planned:tj.planned,description:tj.description,xpPerLevel:tj.xpPerLevel,maxLevel:tj.maxLevel,ranks:clone(tj.ranks)});
    content.tinkererRecipes=mergeById(defaults.tinkererRecipes,stored.tinkererRecipes);
    content.tinkererKnowledge=mergeById(defaults.tinkererKnowledge,stored.tinkererKnowledge);
    content.tinkererSkills=mergeById(defaults.tinkererSkills,stored.tinkererSkills);
    content.tinkererActions=mergeById(defaults.tinkererActions,stored.tinkererActions);
    content.tinkererTechniques=mergeById(defaults.tinkererTechniques,stored.tinkererTechniques);
  }
  if(Number(stored?.meta?.schema||0)<71){
    const tj=defaults.jobs.find(j=>j.id==='tinkerer'),ti=content.jobs.findIndex(j=>j.id==='tinkerer');
    if(tj&&ti>=0)content.jobs[ti]=Object.assign({},content.jobs[ti],{planned:tj.planned,description:tj.description,xpPerLevel:tj.xpPerLevel,maxLevel:tj.maxLevel,ranks:clone(tj.ranks),manualRanks:true});
    content.professionalRanks=mergeById(defaults.professionalRanks,stored.professionalRanks);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
  }
  if(Number(stored?.meta?.schema||0)<72){
    const tj=defaults.jobs.find(j=>j.id==='tinkerer'),ti=content.jobs.findIndex(j=>j.id==='tinkerer');
    if(tj&&ti>=0)content.jobs[ti]=Object.assign({},content.jobs[ti],{planned:tj.planned,description:tj.description,xpPerLevel:tj.xpPerLevel,maxLevel:tj.maxLevel,ranks:clone(tj.ranks),manualRanks:true});
    content.tinkererTools=mergeById(defaults.tinkererTools,stored.tinkererTools);
    content.tinkererGear=mergeById(defaults.tinkererGear,stored.tinkererGear);
    content.tinkererSpecializations=mergeById(defaults.tinkererSpecializations,stored.tinkererSpecializations);
    content.tinkererMarket=mergeById(defaults.tinkererMarket,stored.tinkererMarket);
  }
  if(Number(stored?.meta?.schema||0)<73){
    const tj=defaults.jobs.find(j=>j.id==='tinkerer'),ti=content.jobs.findIndex(j=>j.id==='tinkerer');
    if(tj&&ti>=0)content.jobs[ti]=Object.assign({},content.jobs[ti],{planned:tj.planned,description:tj.description,xpPerLevel:tj.xpPerLevel,maxLevel:tj.maxLevel,ranks:clone(tj.ranks),manualRanks:true});
    content.tinkererRecipes=mergeById(defaults.tinkererRecipes,stored.tinkererRecipes);
    content.tinkererAssemblyPatterns=mergeById(defaults.tinkererAssemblyPatterns,stored.tinkererAssemblyPatterns);
    content.tinkererQualityProcedures=mergeById(defaults.tinkererQualityProcedures,stored.tinkererQualityProcedures);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
  }
  if(Number(stored?.meta?.schema||0)<74){
    const tj=defaults.jobs.find(j=>j.id==='tinkerer'),ti=content.jobs.findIndex(j=>j.id==='tinkerer');
    if(tj&&ti>=0)content.jobs[ti]=Object.assign({},content.jobs[ti],{planned:tj.planned,description:tj.description,xpPerLevel:tj.xpPerLevel,maxLevel:tj.maxLevel,ranks:clone(tj.ranks),manualRanks:true});
    content.tinkererRareWorks=mergeById(defaults.tinkererRareWorks,stored.tinkererRareWorks);
    content.tinkererExceptionalOrders=mergeById(defaults.tinkererExceptionalOrders,stored.tinkererExceptionalOrders);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<76){
    const tj=defaults.jobs.find(j=>j.id==='tinkerer'),ti=content.jobs.findIndex(j=>j.id==='tinkerer');
    if(tj&&ti>=0)content.jobs[ti]=Object.assign({},content.jobs[ti],{planned:tj.planned,description:tj.description,xpPerLevel:tj.xpPerLevel,maxLevel:tj.maxLevel,ranks:clone(tj.ranks),manualRanks:true});
    content.tinkererMasterySeals=mergeById(defaults.tinkererMasterySeals,stored.tinkererMasterySeals);
    content.tinkererMasterCareers=mergeById(defaults.tinkererMasterCareers,stored.tinkererMasterCareers);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
    content.professionParityAudit=clone(defaults.professionParityAudit);
  }
  if(Number(stored?.meta?.schema||0)<77){
    const hj=defaults.jobs.find(j=>j.id==='hunter'),hi=content.jobs.findIndex(j=>j.id==='hunter');
    if(hj&&hi>=0)content.jobs[hi]=Object.assign({},content.jobs[hi],{planned:hj.planned,description:hj.description,xpPerLevel:hj.xpPerLevel,maxLevel:hj.maxLevel,manualRanks:false});
    content.resources=mergeById(defaults.resources,stored.resources);
    content.buildingWorkOrders=mergeById(defaults.buildingWorkOrders,stored.buildingWorkOrders);
    content.hunterGrounds=mergeById(defaults.hunterGrounds,stored.hunterGrounds);
    content.hunterSpecies=mergeById(defaults.hunterSpecies,stored.hunterSpecies);
    content.hunterApproaches=mergeById(defaults.hunterApproaches,stored.hunterApproaches);
    content.hunterPreparations=mergeById(defaults.hunterPreparations,stored.hunterPreparations);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<78){
    const hj=defaults.jobs.find(j=>j.id==='hunter'),hi=content.jobs.findIndex(j=>j.id==='hunter');
    if(hj&&hi>=0)content.jobs[hi]=Object.assign({},content.jobs[hi],{planned:hj.planned,description:hj.description,xpPerLevel:hj.xpPerLevel,maxLevel:hj.maxLevel,manualRanks:false});
    content.hunterSpecies=mergeById(defaults.hunterSpecies,stored.hunterSpecies);
    content.hunterSkills=mergeById(defaults.hunterSkills,stored.hunterSkills);
    content.hunterTechniques=mergeById(defaults.hunterTechniques,stored.hunterTechniques);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<79){
    const hunterBase=defaults.jobs.find(j=>j.id==='hunter'),hunterTarget=content.jobs.find(j=>j.id==='hunter');
    if(hunterBase&&hunterTarget)Object.assign(hunterTarget,{planned:hunterBase.planned,description:hunterBase.description,xpPerLevel:hunterBase.xpPerLevel,maxLevel:hunterBase.maxLevel,manualRanks:true});
    content.hunterReputationTiers=mergeById(defaults.hunterReputationTiers,stored.hunterReputationTiers);
    content.professionalRanks=mergeById(defaults.professionalRanks,stored.professionalRanks);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }
  if(Number(stored?.meta?.schema||0)<80){
    const hunterBase=defaults.jobs.find(j=>j.id==='hunter'),hunterTarget=content.jobs.find(j=>j.id==='hunter');
    if(hunterBase&&hunterTarget)Object.assign(hunterTarget,{planned:hunterBase.planned,description:hunterBase.description,xpPerLevel:hunterBase.xpPerLevel,maxLevel:hunterBase.maxLevel,manualRanks:true});
    content.hunterTools=mergeById(defaults.hunterTools,stored.hunterTools);
    content.hunterGear=mergeById(defaults.hunterGear,stored.hunterGear);
    content.hunterSpecializations=mergeById(defaults.hunterSpecializations,stored.hunterSpecializations);
    content.hunterMarket=mergeById(defaults.hunterMarket,stored.hunterMarket);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }

  if(Number(stored?.meta?.schema||0)<81){
    const hunterBase=defaults.jobs.find(j=>j.id==='hunter'),hunterTarget=content.jobs.find(j=>j.id==='hunter');
    if(hunterBase&&hunterTarget)Object.assign(hunterTarget,{planned:hunterBase.planned,description:hunterBase.description,xpPerLevel:hunterBase.xpPerLevel,maxLevel:hunterBase.maxLevel,manualRanks:true});
    content.hunterGrounds=mergeById(defaults.hunterGrounds,stored.hunterGrounds);
    content.hunterSpecies=mergeById(defaults.hunterSpecies,stored.hunterSpecies);
    content.hunterBiomes=mergeById(defaults.hunterBiomes,stored.hunterBiomes);
    content.hunterEcologyRules=mergeById(defaults.hunterEcologyRules,stored.hunterEcologyRules);
    content.buildingWorkOrders=mergeById(defaults.buildingWorkOrders,stored.buildingWorkOrders);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }

  if(Number(stored?.meta?.schema||0)<82){
    const hunterBase=defaults.jobs.find(j=>j.id==='hunter'),hunterTarget=content.jobs.find(j=>j.id==='hunter');
    if(hunterBase&&hunterTarget)Object.assign(hunterTarget,{planned:hunterBase.planned,description:hunterBase.description,xpPerLevel:hunterBase.xpPerLevel,maxLevel:hunterBase.maxLevel,manualRanks:true});
    content.resources=mergeById(defaults.resources,stored.resources);
    content.hunterGrounds=mergeById(defaults.hunterGrounds,stored.hunterGrounds);
    content.hunterSpecies=mergeById(defaults.hunterSpecies,stored.hunterSpecies);
    content.hunterBiomes=mergeById(defaults.hunterBiomes,stored.hunterBiomes);
    content.hunterExceptionalHunts=mergeById(defaults.hunterExceptionalHunts,stored.hunterExceptionalHunts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }

  if(Number(stored?.meta?.schema||0)<83){
    const hunterBase=defaults.jobs.find(j=>j.id==='hunter'),hunterTarget=content.jobs.find(j=>j.id==='hunter');
    if(hunterBase&&hunterTarget)Object.assign(hunterTarget,{planned:hunterBase.planned,description:hunterBase.description,xpPerLevel:hunterBase.xpPerLevel,maxLevel:hunterBase.maxLevel,manualRanks:true});
    content.hunterMasterySeals=mergeById(defaults.hunterMasterySeals,stored.hunterMasterySeals);
    content.hunterMasterTrials=mergeById(defaults.hunterMasterTrials,stored.hunterMasterTrials);
    content.hunterMasterCareers=mergeById(defaults.hunterMasterCareers,stored.hunterMasterCareers);
    content.jobClients=mergeById(defaults.jobClients,stored.jobClients);
    content.jobContracts=mergeById(defaults.jobContracts,stored.jobContracts);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }

  if(Number(stored?.meta?.schema||0)<84){
    const hunterBase=defaults.jobs.find(j=>j.id==='hunter'),hunterTarget=content.jobs.find(j=>j.id==='hunter');
    if(hunterBase&&hunterTarget)Object.assign(hunterTarget,{planned:hunterBase.planned,description:hunterBase.description,xpPerLevel:hunterBase.xpPerLevel,maxLevel:hunterBase.maxLevel,manualRanks:true});
    content.professionParityAudit=clone(defaults.professionParityAudit);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }

  if(Number(stored?.meta?.schema||0)<85){
    const cookBase=defaults.jobs.find(j=>j.id==='cook'),cookTarget=content.jobs.find(j=>j.id==='cook');
    if(cookBase&&cookTarget)Object.assign(cookTarget,{planned:cookBase.planned,description:cookBase.description,xpPerLevel:cookBase.xpPerLevel,maxLevel:cookBase.maxLevel,manualRanks:false});
    const cb=defaults.buildings.find(b=>b.id==='cookhouse'),ci=content.buildings.findIndex(b=>b.id==='cookhouse');
    if(cb&&ci>=0)content.buildings[ci]=Object.assign({},content.buildings[ci],{requiresBuildings:clone(cb.requiresBuildings),levels:clone(cb.levels),description:cb.description});
    content.resources=mergeById(defaults.resources,stored.resources);
    content.cookRecipes=mergeById(defaults.cookRecipes,stored.cookRecipes);
    content.cookHeatModes=mergeById(defaults.cookHeatModes,stored.cookHeatModes);
    content.cookMarket=mergeById(defaults.cookMarket,stored.cookMarket);
    content.buildingWorkOrders=mergeById(defaults.buildingWorkOrders,stored.buildingWorkOrders);
    content.achievements=mergeById(defaults.achievements,stored.achievements);
  }

  content.meta=clone(defaults.meta);
  function makePublicId(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let raw='';try{const bytes=new Uint8Array(8);crypto.getRandomValues(bytes);for(const b of bytes)raw+=chars[b%chars.length];}catch{for(let i=0;i<8;i++)raw+=chars[Math.floor(Math.random()*chars.length)];}return `VIL-${raw.slice(0,4)}-${raw.slice(4,8)}`;}
  function blankProfile(){return {created:false,publicId:makePublicId(),playerName:'',villageName:content.village.name||'Village',avatar:'🧑‍🌾',emblem:'🌿',motto:'',createdAt:0,updatedAt:0,prestigePeak:0};}
  const freshState=()=>({level:content.village.startingLevel||1,xp:0,population:content.village.startingPopulation||2,treasury:content.village.startingTreasury||0,resources:Object.fromEntries(content.resources.map(r=>[r.id,Number(r.starting||0)])),materialLots:{wood:[],stone:[],clay:[],iron_ore:[],iron_ingot:[],iron_nails:[],iron_fittings:[],steel_billet:[],steel_fittings:[],silver_ingot:[],silver_mountings:[],rare_steel_billet:[],rare_steel_fittings:[],silver_ore:[],rock_crystal:[],planks:[],joinery_parts:[],timber_frame:[],repair_kit:[],wheat:[],carrot:[],beans:[],sun_spelt:[],ruby_beet:[],moon_bean:[],wheat_flour:[],dried_carrot:[],dried_beans:[],wheat_malt:[],sun_spelt_flour:[],ruby_beet_dried:[],moon_bean_dried:[],wild_game_meat:[],raw_hide:[],animal_bones:[],rare_game_trophy:[],predator_field_mark:[],rustic_flatbread:[],vegetable_pottage:[],hunter_stew:[],bean_cakes:[]},builtBuildings:content.buildings.filter(b=>b.starter).map(b=>b.id),buildingLevels:Object.fromEntries(content.buildings.filter(b=>b.starter).map(b=>[b.id,1])),buildingWork:{},inventoryLedger:content.resources.filter(r=>Number(r.starting||0)>0).map(r=>({t:Date.now(),type:'in',id:r.id,qty:Number(r.starting||0),reason:'Stock fondateur du hameau'})),jobs:{},playerProfile:blankProfile(),achievements:{unlocked:{}},villageStats:{resourceProduced:{},levelsAdvanced:0,buildingUpgrades:0},log:[{t:Date.now(),m:'Le hameau s’éveille. Le Bûcheron, le Mineur, la remise commune et la Mairie sont prêts à servir le village.'}]});
  const currentLoaded=readFirst([SAVE_KEY]),legacyLoaded=readFirst(LEGACY_SAVE_KEYS),loaded=Object.keys(currentLoaded||{}).length?currentLoaded:legacyLoaded,loadedFromLegacy=!Object.keys(currentLoaded||{}).length&&Object.keys(legacyLoaded||{}).length>0;
  let state=Object.assign(freshState(),clone(loaded));
  if(!state.resources)state.resources={};for(const r of content.resources)if(typeof state.resources[r.id]!=='number')state.resources[r.id]=Number(r.starting||0);
  if(!state.materialLots||typeof state.materialLots!=='object')state.materialLots={};for(const id of ['wood','stone','clay','iron_ore','iron_ingot','iron_nails','iron_fittings','steel_billet','steel_fittings','silver_ingot','silver_mountings','rare_steel_billet','rare_steel_fittings','silver_ore','rock_crystal','planks','joinery_parts','timber_frame','repair_kit','wheat','carrot','beans','sun_spelt','ruby_beet','moon_bean','wheat_flour','dried_carrot','dried_beans','wheat_malt','sun_spelt_flour','ruby_beet_dried','moon_bean_dried','wild_game_meat','raw_hide','animal_bones','rare_game_trophy','predator_field_mark','rustic_flatbread','vegetable_pottage','hunter_stew','bean_cakes'])if(!Array.isArray(state.materialLots[id]))state.materialLots[id]=[];
  if(!Array.isArray(state.builtBuildings))state.builtBuildings=[];for(const b of content.buildings.filter(x=>x.starter))if(!state.builtBuildings.includes(b.id))state.builtBuildings.push(b.id);if(!state.buildingLevels||typeof state.buildingLevels!=='object')state.buildingLevels={};for(const id of state.builtBuildings)if(!Number.isFinite(Number(state.buildingLevels[id]))||Number(state.buildingLevels[id])<1)state.buildingLevels[id]=1;if(!Array.isArray(state.inventoryLedger))state.inventoryLedger=[];
  if(!Array.isArray(state.log))state.log=[];if(!state.jobs||typeof state.jobs!=='object')state.jobs={};if(!state.buildingWork||typeof state.buildingWork!=='object')state.buildingWork={};
  {const bs=state.jobs?.blacksmith;if(bs&&bs.blacksmith&&typeof bs.blacksmith==='object'){const nested=bs.blacksmith.stats&&typeof bs.blacksmith.stats==='object'?bs.blacksmith.stats:{};const generic=bs.stats&&typeof bs.stats==='object'?bs.stats:{};bs.stats=Object.assign(generic,nested);bs.blacksmith.stats=bs.stats;}}
  if(!Number.isFinite(Number(state.worldCalendarAnchorAt))){const farmerAnchor=Number(state.jobs?.farmer?.farm?.calendarAnchorAt||0);state.worldCalendarAnchorAt=farmerAnchor>0?farmerAnchor:Date.now();}
  if(!state.villageStats||typeof state.villageStats!=='object')state.villageStats={};if(!state.villageStats.resourceProduced||typeof state.villageStats.resourceProduced!=='object')state.villageStats.resourceProduced={};if(typeof state.villageStats.levelsAdvanced!=='number')state.villageStats.levelsAdvanced=0;if(typeof state.villageStats.buildingUpgrades!=='number')state.villageStats.buildingUpgrades=0;
  if(!state.foodSecurity||typeof state.foodSecurity!=='object')state.foodSecurity={};const _foodCfg=content.foodSecurityConfig||{};state.foodSecurity=Object.assign({active:false,activatedAt:0,lastTickAt:0,policy:'normal',targetDays:Number(_foodCfg.defaultTargetDays||10),graceDaysRemaining:Number(_foodCfg.graceDays||5),seedTargets:{},history:[],stats:{daysProcessed:0,secureDays:0,shortageDays:0,shortageStreak:0,maxShortageStreak:0,foodUnitsConsumed:0,foodUnitsMissing:0,foodQtySpoiled:0,surplusDays:0}},state.foodSecurity||{});if(!state.foodSecurity.seedTargets||typeof state.foodSecurity.seedTargets!=='object')state.foodSecurity.seedTargets={};if(!Array.isArray(state.foodSecurity.history))state.foodSecurity.history=[];if(!state.foodSecurity.stats||typeof state.foodSecurity.stats!=='object')state.foodSecurity.stats={};state.foodSecurity.stats=Object.assign({daysProcessed:0,secureDays:0,shortageDays:0,shortageStreak:0,maxShortageStreak:0,foodUnitsConsumed:0,foodUnitsMissing:0,foodQtySpoiled:0,surplusDays:0},state.foodSecurity.stats);for(const r of content.resources.filter(x=>Number(x.seedReserveDefault||0)>0))if(typeof state.foodSecurity.seedTargets[r.id]!=='number')state.foodSecurity.seedTargets[r.id]=Number(r.seedReserveDefault||0);
  state.playerProfile=Object.assign(blankProfile(),state.playerProfile||{});if(!state.playerProfile.publicId)state.playerProfile.publicId=makePublicId();if(typeof state.playerProfile.created!=='boolean')state.playerProfile.created=false;if(!state.achievements||typeof state.achievements!=='object')state.achievements={};if(!state.achievements.unlocked||typeof state.achievements.unlocked!=='object')state.achievements.unlocked={};if(typeof state.playerProfile.prestigePeak!=='number')state.playerProfile.prestigePeak=0;
  if(loadedFromLegacy){const stages=content.village.developmentStages||[];state.level=Math.max(1,Math.min(Number(content.village.maxLevel||6),Number(state.level||1)));const maxExistingJobLevel=Math.max(1,...Object.values(state.jobs||{}).map(x=>Number(x?.level||1))),neededStage=stages.find(x=>Number(x.jobLevelCap||99)>=maxExistingJobLevel);if(neededStage)state.level=Math.max(state.level,Number(neededStage.level||1));for(const id of ['wood','stone','clay','iron_ore','iron_ingot','iron_nails','iron_fittings','steel_billet','steel_fittings','silver_ingot','silver_mountings','rare_steel_billet','rare_steel_fittings','silver_ore','rock_crystal','mine_waste','wheat','carrot','beans','crop_residue']){const existing=Number(state.villageStats.resourceProduced[id]||0),current=Number(state.resources[id]||0),starter=Number(content.resources.find(r=>r.id===id)?.starting||0);state.villageStats.resourceProduced[id]=Math.max(existing,Math.max(0,current-starter));}const lj=state.jobs?.lumberjack,mn=state.jobs?.miner;if(lj?.stats?.stocked)state.villageStats.resourceProduced.wood=Math.max(Number(state.villageStats.resourceProduced.wood||0),Number(lj.stats.stocked||0));if(mn?.stats?.stored){const inferred=Math.max(0,Number(mn.stats.stored||0));state.villageStats.resourceProduced.stone=Math.max(Number(state.villageStats.resourceProduced.stone||0),Math.round(inferred*.45));state.villageStats.resourceProduced.iron_ore=Math.max(Number(state.villageStats.resourceProduced.iron_ore||0),Math.round(inferred*.2));}log('Migration VIL0.3.5.1 : le développement du village est désormais lié aux carrières de métier.');}
  if(loadedFromLegacy&&state.jobs?.farmer){const fs=state.jobs.farmer,ranks=(content.professionalRanks||[]).filter(r=>r.jobId==='farmer'&&Number(r.minLevel||1)<=Number(fs.level||1)&&Number(r.minVillageLevel||1)<=Number(state.level||1)).sort((a,b)=>Number(b.order||0)-Number(a.order||0));fs.rankOrder=Math.max(Number(fs.rankOrder||0),Number(ranks[0]?.order||0));fs._rankMigrated=true;log(`Migration VIL0.3.13.4 : grade Fermier repris au niveau ${fs.rankOrder||0}.`);}
  if(loadedFromLegacy&&state.jobs?.breeder){const bs=state.jobs.breeder,ranks=(content.professionalRanks||[]).filter(r=>r.jobId==='breeder'&&Number(r.minLevel||1)<=Number(bs.level||1)&&Number(r.minVillageLevel||1)<=Number(state.level||1)).sort((a,b)=>Number(b.order||0)-Number(a.order||0));bs.rankOrder=Math.max(Number(bs.rankOrder||0),Number(ranks[0]?.order||0));bs._rankMigrated=true;log(`Migration VIL0.3.14.2 : grade Éleveur repris au niveau ${bs.rankOrder||0}.`);}
  if(loadedFromLegacy&&state.jobs?.blacksmith){const bs=state.jobs.blacksmith,ranks=(content.professionalRanks||[]).filter(r=>r.jobId==='blacksmith'&&Number(r.minLevel||1)<=Number(bs.level||1)&&Number(r.minVillageLevel||1)<=Number(state.level||1)).sort((a,b)=>Number(b.order||0)-Number(a.order||0));bs.rankOrder=Math.max(Number(bs.rankOrder||0),Number(ranks[0]?.order||0));bs._rankMigrated=true;log(`Migration VIL0.3.18.2 : grade Forgeron repris au niveau ${bs.rankOrder||0}.`);}
  if(loadedFromLegacy&&state.jobs?.tinkerer){const ts=state.jobs.tinkerer,ranks=(content.professionalRanks||[]).filter(r=>r.jobId==='tinkerer'&&Number(r.minLevel||1)<=Number(ts.level||1)&&Number(r.minVillageLevel||1)<=Number(state.level||1)).sort((a,b)=>Number(b.order||0)-Number(a.order||0));ts.rankOrder=Math.max(Number(ts.rankOrder||0),Number(ranks[0]?.order||0));ts._rankMigrated=true;log(`Migration VIL0.3.20.2 : grade Bricoleur repris au niveau ${ts.rankOrder||0}.`);}
  if(loadedFromLegacy&&state.jobs?.hunter){const hs=state.jobs.hunter,ranks=(content.professionalRanks||[]).filter(r=>r.jobId==='hunter'&&Number(r.minLevel||1)<=Number(hs.level||1)&&Number(r.minVillageLevel||1)<=Number(state.level||1)).sort((a,b)=>Number(b.order||0)-Number(a.order||0));hs.rankOrder=Math.max(Number(hs.rankOrder||0),Number(ranks[0]?.order||0));hs._rankMigrated=true;log(`Migration VIL0.3.21.2 : grade Chasseur repris au niveau ${hs.rankOrder||0}.`);}
  if(loadedFromLegacy&&built('warehouse')){const used=storageUsed(),levels=buildingLevels('warehouse'),fit=levels.find(x=>Number(x.effects?.storageCapacity||0)>=used)||levels.at(-1);if(fit&&Number(fit.level||1)>buildingLevel('warehouse')){state.buildingLevels.warehouse=Number(fit.level);log(`Migration VIL0.3.9 : l’Entrepôt est ajusté au niveau ${fit.level} pour préserver ${Math.ceil(used)} unités de stock existant.`);}}
  function save(){evaluateAchievements(false);const score=prestigeScore();state.playerProfile.prestigePeak=Math.max(Number(state.playerProfile.prestigePeak||0),score);try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));}catch{}}
  function log(message){state.log.unshift({t:Date.now(),m:message});state.log=state.log.slice(0,220);}
  function resource(id){return Number(state.resources[id]||0);}
  function recordInventoryEvent(type,id,qty,reason=''){qty=Math.max(0,Number(qty||0));if(!qty)return;state.inventoryLedger.unshift({t:Date.now(),type,id,qty,reason:String(reason||'')});state.inventoryLedger=state.inventoryLedger.slice(0,300);}
  function storageWeight(id){const r=content.resources.find(x=>x.id===id);return Math.max(.01,Number(r?.storageWeight||1));}
  function storageUsed(){return content.resources.reduce((n,r)=>n+resource(r.id)*storageWeight(r.id),0);}
  function buildingLevel(id){return built(id)?Math.max(1,Number(state.buildingLevels?.[id]||1)):0;}
  function buildingLevels(id){const b=building(id);const defs=Array.isArray(b?.levels)?b.levels.slice():[];if(!defs.length&&b)defs.push({level:1,name:b.name,cost:{},effects:{}});return defs.sort((a,b)=>Number(a.level||0)-Number(b.level||0));}
  function buildingLevelDef(id,level=buildingLevel(id)){return buildingLevels(id).find(x=>Number(x.level||0)===Number(level||0))||null;}
  function buildingMaxLevel(id){const b=building(id);return Math.max(1,Number(b?.maxLevel||buildingLevels(id).at(-1)?.level||1));}
  function nextBuildingLevel(id){if(!built(id))return null;const now=buildingLevel(id);return buildingLevels(id).find(x=>Number(x.level||0)===now+1)||null;}
  function buildingEffect(id,key,fallback=0){const def=buildingLevelDef(id);return def?.effects?.[key]??fallback;}
  function storageCapacity(){const fromWarehouse=Number(buildingEffect('warehouse','storageCapacity',0));return Math.max(0,fromWarehouse||Number(content.village.baseStorage||60));}
  function storageFree(){return Math.max(0,storageCapacity()-storageUsed());}
  function addResource(id,qty,reason='Production'){qty=Math.max(0,Number(qty||0));if(!qty)return 0;const weight=storageWeight(id),maxBySpace=Math.max(0,Math.floor((storageFree()+1e-9)/weight)),accepted=Math.min(qty,maxBySpace);if(accepted>0){state.resources[id]=Math.max(0,(state.resources[id]||0)+accepted);state.villageStats.resourceProduced[id]=Math.max(0,Number(state.villageStats.resourceProduced[id]||0)+accepted);recordInventoryEvent('in',id,accepted,reason);}if(accepted<qty)log(`📦 Entrepôt saturé : ${qty-accepted} unité(s) de ${content.resources.find(r=>r.id===id)?.name||id} n’ont pas pu être stockées.`);return accepted;}
  function addMaterialLot(id,lot,reason='Lot stocké'){if(!state.materialLots[id])state.materialLots[id]=[];const wanted=Math.max(0,Number(lot.quantity||0)),accepted=addResource(id,wanted,reason);if(accepted>0){const copy={...lot,quantity:accepted};state.materialLots[id].push(copy);}return accepted;}
  function consumeResource(id,qty,reason='Consommation'){let remaining=Math.max(0,Number(qty||0));if(resource(id)+1e-9<remaining)return false;const lots=state.materialLots[id];if(Array.isArray(lots)&&remaining>0){for(let i=0;i<lots.length&&remaining>1e-9;i++){const take=Math.min(remaining,Number(lots[i].quantity||0));lots[i].quantity=Math.max(0,Number(lots[i].quantity||0)-take);remaining-=take;}state.materialLots[id]=lots.filter(x=>Number(x.quantity||0)>1e-9);}state.resources[id]=Math.max(0,resource(id)-Number(qty||0));recordInventoryEvent('out',id,qty,reason);return true;}
  function foodConfig(){return content.foodSecurityConfig||{};}
  function foodState(){return state.foodSecurity;}
  function foodResources(){return (content.resources||[]).filter(r=>Number(r.foodValue||0)>0);}
  function seedResources(){return (content.resources||[]).filter(r=>Number(r.seedReserveDefault||0)>0);}
  function foodPolicy(id=foodState().policy){const defs=foodConfig().policies||[];return defs.find(x=>x.id===id)||defs[0]||{id:'normal',name:'Ration normale',icon:'🍲',consumptionFactor:1,workModifier:1};}
  function foodBaseDailyNeed(){return Math.max(0,Number(state.population||0)*Number(foodConfig().foodPerPersonPerDay||.38));}
  function foodDailyNeed(){return foodBaseDailyNeed()*Math.max(.2,Number(foodPolicy().consumptionFactor||1));}
  function foodReserveUnits(){return foodResources().reduce((n,r)=>n+resource(r.id)*Number(r.foodValue||0),0);}
  function foodReserveDays(){const need=foodDailyNeed();return need>0?foodReserveUnits()/need:999;}
  function foodNormalReserveDays(){const need=foodBaseDailyNeed();return need>0?foodReserveUnits()/need:999;}
  function foodVarietyGroups(){return [...new Set(foodResources().filter(r=>resource(r.id)>.05).map(r=>r.foodGroup||'autre'))];}
  function seedReserveTarget(id){return Math.max(0,Math.floor(Number(foodState().seedTargets?.[id]||0)));}
  function seedUsable(id){return Math.max(0,resource(id)-seedReserveTarget(id));}
  function seedReserveReadyCount(){return seedResources().filter(r=>resource(r.id)+1e-9>=seedReserveTarget(r.id)&&seedReserveTarget(r.id)>0).length;}
  function foodTargetDays(){return Math.max(2,Math.min(30,Math.floor(Number(foodState().targetDays||foodConfig().defaultTargetDays||10)+Number(buildingEffect('farm','foodReserveTargetBonus',0)))));}
  function foodSecurityStatus(){if(!built('farm'))return{id:'subsistence',label:'Subsistance initiale',icon:'🧺',score:0,days:0,normalDays:0,workModifier:1,description:'Avant l’ouverture de la Ferme, les deux habitants vivent de provisions fondatrices, de cueillette et d’une subsistance locale abstraite. Aucune réserve agricole n’est consommée et aucune pénalité alimentaire ne peut survenir.'};const f=foodState(),days=foodReserveDays(),normalDays=foodNormalReserveDays(),grace=Math.max(0,Number(f.graceDaysRemaining||0)),warning=Number(foodConfig().warningDays||5),critical=Number(foodConfig().criticalDays||2),groups=foodVarietyGroups().length;let id='secure',label='Sécurisée',icon='🟢',baseWork=1.03;if(grace>0){id='grace';label='Mise en réserve';icon='🌱';baseWork=1;}else if(Number(f.stats?.shortageStreak||0)>0||days<.35){id='shortage';label='Pénurie';icon='🔴';baseWork=.78;}else if(days<critical){id='critical';label='Critique';icon='🟠';baseWork=.88;}else if(days<warning){id='fragile';label='Fragile';icon='🟡';baseWork=.95;}else if(days<foodTargetDays()){id='stable';label='Stable';icon='🟢';baseWork=1;}let score=Math.max(0,Math.min(100,Math.round(Math.min(1,normalDays/Math.max(1,foodTargetDays()))*72+Math.min(3,groups)/3*18+(Number(f.stats?.shortageStreak||0)?0:10))));if(grace>0)score=Math.max(score,55);const policy=foodPolicy(),workModifier=Math.max(.45,baseWork*Number(policy.workModifier||1));return{id,label,icon,score,days,normalDays,groups,workModifier,grace,description:id==='secure'?'Les réserves dépassent l’objectif et plusieurs familles d’aliments sont disponibles.':id==='stable'?'Le village est nourri, mais les réserves doivent encore progresser.':id==='fragile'?'Quelques mauvaises récoltes suffiraient à fragiliser le village.':id==='critical'?'Les réserves couvrent très peu de journées. Une production urgente est recommandée.':id==='shortage'?'La population ne reçoit plus la totalité de sa ration. Le travail autonome est fortement ralenti.':'La Ferme vient d’ouvrir : quelques journées sont accordées pour constituer les premiers stocks.'};}
  function foodWorkModifier(){return foodSecurityStatus().workModifier||1;}
  function activateFoodSecurity(at=Date.now()){if(!built('farm'))return false;const f=foodState();if(f.active&&Number(f.lastTickAt||0)>0)return false;f.active=true;f.activatedAt=Number(f.activatedAt||0)||at;f.lastTickAt=at;f.graceDaysRemaining=Math.max(0,Number(f.graceDaysRemaining??foodConfig().graceDays??5));log(`🍲 La sécurité alimentaire du village est activée : ${Math.max(0,Number(f.graceDaysRemaining||0))} journée(s) de mise en réserve précèdent la consommation régulière.`);return true;}
  function consumeFoodUnits(wanted,dayNo){let remaining=Math.max(0,Number(wanted||0)),fed=0;const priority=r=>Number(r.rationPriority??(r.category==='agricole_rare'||r.category==='agricole_transforme_rare'?2:0)),rows=foodResources().slice().sort((a,b)=>priority(a)-priority(b)||Number(b.spoilagePerDay||0)-Number(a.spoilagePerDay||0)||Number(b.foodValue||0)-Number(a.foodValue||0));for(const r of rows){if(remaining<=1e-9)break;const value=Math.max(.01,Number(r.foodValue||0)),available=resource(r.id);if(available<=1e-9)continue;const take=Math.min(available,remaining/value);if(take<=1e-9)continue;consumeResource(r.id,take,`Ration du village · jour ${dayNo}`);const units=take*value;fed+=units;remaining=Math.max(0,remaining-units);}return{fed,missing:Math.max(0,remaining)};}
  function spoilFood(dayNo){const preservation=Math.max(.35,Math.min(1,Number(buildingEffect('warehouse','foodPreservation',1)||1)));let qty=0,units=0;for(const r of foodResources()){const rate=Math.max(0,Number(r.spoilagePerDay||0))*preservation,stock=resource(r.id);if(stock<=.01||rate<=0)continue;const loss=Math.min(stock,stock*rate);if(loss<=.001)continue;consumeResource(r.id,loss,`Pertes de conservation · jour ${dayNo}`);qty+=loss;units+=loss*Number(r.foodValue||0);}return{qty,units};}
  function processFoodSecurity(at=Date.now()){if(!built('farm'))return false;const f=foodState();if(!f.active||!Number(f.lastTickAt||0))activateFoodSecurity(at);const dayMs=Math.max(1000,Number(foodConfig().dayMs||18000)),elapsed=Math.max(0,at-Number(f.lastTickAt||at));let days=Math.floor(elapsed/dayMs);if(days<=0)return false;const maxDays=Math.max(1,Number(foodConfig().maxOfflineDays||120)),capped=days>maxDays;if(capped)days=maxDays;let changed=false;for(let i=0;i<days;i++){const dayNo=Number(f.stats.daysProcessed||0)+1,policy=foodPolicy(),need=foodDailyNeed();let fed=0,missing=0,spoiled={qty:0,units:0},grace=false;if(Number(f.graceDaysRemaining||0)>0){f.graceDaysRemaining=Math.max(0,Number(f.graceDaysRemaining||0)-1);grace=true;}else{const out=consumeFoodUnits(need,dayNo);fed=out.fed;missing=out.missing;spoiled=spoilFood(dayNo);f.stats.foodUnitsConsumed=Number(f.stats.foodUnitsConsumed||0)+fed;f.stats.foodUnitsMissing=Number(f.stats.foodUnitsMissing||0)+missing;f.stats.foodQtySpoiled=Number(f.stats.foodQtySpoiled||0)+spoiled.qty;if(missing>.01){f.stats.shortageDays=Number(f.stats.shortageDays||0)+1;f.stats.shortageStreak=Number(f.stats.shortageStreak||0)+1;f.stats.maxShortageStreak=Math.max(Number(f.stats.maxShortageStreak||0),Number(f.stats.shortageStreak||0));if(Number(f.stats.shortageStreak||0)===1||Number(f.stats.shortageStreak||0)%3===0)log(`🔴 Pénurie alimentaire : il manque ${missing.toFixed(1)} ration(s) équivalente(s) au jour ${dayNo}.`);}else{f.stats.secureDays=Number(f.stats.secureDays||0)+1;f.stats.shortageStreak=0;if(foodNormalReserveDays()>=foodTargetDays())f.stats.surplusDays=Number(f.stats.surplusDays||0)+1;else f.stats.surplusDays=0;if(Number(f.stats.secureDays||0)>0&&Number(f.stats.secureDays||0)%10===0)gainVillageXp(1);}}f.stats.daysProcessed=dayNo;f.history.unshift({at:Number(f.lastTickAt||at)+(i+1)*dayMs,day:dayNo,population:Number(state.population||0),policy:policy.id,need,fed,missing,spoiledQty:spoiled.qty,reserveDays:foodNormalReserveDays(),grace});f.history=f.history.slice(0,50);changed=true;}f.lastTickAt=capped?at:Number(f.lastTickAt||at)+days*dayMs;if(capped)log(`🍲 Rattrapage alimentaire limité à ${maxDays} journées pour éviter une reprise de partie punitive.`);if(changed){evaluateAchievements(false);save();try{window.dispatchEvent(new CustomEvent('village:food',{detail:foodSecurityStatus()}));}catch{}}return changed;}
  function setFoodPolicy(id){if(!(foodConfig().policies||[]).some(x=>x.id===id))return false;foodState().policy=id;log(`${foodPolicy(id).icon||'🍲'} Politique alimentaire : ${foodPolicy(id).name}.`);save();try{window.dispatchEvent(new CustomEvent('village:food',{detail:foodSecurityStatus()}));}catch{}return true;}
  function setFoodTargetDays(days){foodState().targetDays=Math.max(2,Math.min(26,Math.floor(Number(days||10))));log(`🏺 Objectif de réserves fixé à ${foodTargetDays()} jours (bonus de la Ferme inclus).`);save();try{window.dispatchEvent(new CustomEvent('village:food',{detail:foodSecurityStatus()}));}catch{}return foodTargetDays();}
  function setSeedReserveTarget(id,target){const r=content.resources.find(x=>x.id===id);if(!r||Number(r.seedReserveDefault||0)<=0)return false;foodState().seedTargets[id]=Math.max(0,Math.min(8,Math.floor(Number(target||0))));log(`🌱 Réserve protégée : ${r.name} ×${foodState().seedTargets[id]}.`);save();try{window.dispatchEvent(new CustomEvent('village:food',{detail:foodSecurityStatus()}));}catch{}return true;}
  function foodReserveComposition(){return foodResources().map(r=>({id:r.id,name:r.name,icon:r.icon||'🍲',quantity:resource(r.id),foodValue:Number(r.foodValue||0),units:resource(r.id)*Number(r.foodValue||0),group:r.foodGroup||'autre',spoilagePerDay:Number(r.spoilagePerDay||0)}));}
  function built(id){return state.builtBuildings.includes(id);}function building(id){return content.buildings.find(b=>b.id===id);}function job(id){return content.jobs.find(j=>j.id===id);}function tinkererKnowledge(id){return (content.tinkererKnowledge||[]).find(x=>x.id===id)||null;}function tinkererSkill(id){return (content.tinkererSkills||[]).find(x=>x.id===id)||null;}function tinkererAction(id){return (content.tinkererActions||[]).find(x=>x.id===id)||null;}function tinkererTechnique(id){return (content.tinkererTechniques||[]).find(x=>x.id===id)||null;}function tinkererTool(id){return (content.tinkererTools||[]).find(x=>x.id===id)||null;}function tinkererGear(id){return (content.tinkererGear||[]).find(x=>x.id===id)||null;}function tinkererSpecialization(id){return (content.tinkererSpecializations||[]).find(x=>x.id===id)||null;}function tinkererMarketItem(id){return (content.tinkererMarket||[]).find(x=>x.id===id)||null;}function tinkererMasterySeal(id){return (content.tinkererMasterySeals||[]).find(x=>x.id===id)||null;}function tinkererMasterCareer(jobId='tinkerer'){return (content.tinkererMasterCareers||[]).find(x=>x.jobId===jobId)||null;}function blacksmithTool(id){return (content.blacksmithTools||[]).find(x=>x.id===id)||null;}function blacksmithGear(id){return (content.blacksmithGear||[]).find(x=>x.id===id)||null;}function blacksmithSpecialization(id){return (content.blacksmithSpecializations||[]).find(x=>x.id===id)||null;}function blacksmithMarketItem(id){return (content.blacksmithMarket||[]).find(x=>x.id===id)||null;}function blacksmithMasterySeal(id){return (content.blacksmithMasterySeals||[]).find(x=>x.id===id)||null;}function blacksmithMasterCareer(jobId='blacksmith'){return (content.blacksmithMasterCareers||[]).find(x=>x.jobId===jobId)||null;}function farmSoil(id){return (content.farmSoils||[]).find(x=>x.id===id)||null;}function farmCrop(id){return (content.farmCrops||[]).find(x=>x.id===id)||null;}function farmSeason(id){return (content.farmSeasons||[]).find(x=>x.id===id)||null;}function farmWeatherType(id){return (content.farmWeather||[]).find(x=>x.id===id)||null;}function farmThreat(id){return (content.farmThreats||[]).find(x=>x.id===id)||null;}function farmEvent(id){return (content.farmEvents||[]).find(x=>x.id===id)||null;}function farmerGesture(id){return (content.farmerGestures||[]).find(x=>x.id===id)||null;}function farmerPuzzle(id){return (content.farmerPuzzles||[]).find(x=>x.id===id)||null;}function farmerTool(id){return (content.farmerTools||[]).find(x=>x.id===id)||null;}function farmerGear(id){return (content.farmerGear||[]).find(x=>x.id===id)||null;}function farmerSpecialization(id){return (content.farmerSpecializations||[]).find(x=>x.id===id)||null;}function farmerMarketItem(id){return (content.farmerMarket||[]).find(x=>x.id===id)||null;}function farmerReputationTier(id){return (content.farmerReputationTiers||[]).find(x=>x.id===id)||null;}function farmerMasterySeal(id){return (content.farmerMasterySeals||[]).find(x=>x.id===id)||null;}function farmerMasterCareer(jobId='farmer'){return (content.farmerMasterCareers||[]).find(x=>x.jobId===jobId)||null;}function herbZone(id){return (content.herbZones||[]).find(x=>x.id===id)||null;}function herbPlant(id){return (content.herbPlants||[]).find(x=>x.id===id)||null;}function herbalistSkill(id){return (content.herbalistSkills||[]).find(x=>x.id===id)||null;}function herbalistAction(id){return (content.herbalistActions||[]).find(x=>x.id===id)||null;}function herbalistTechnique(id){return (content.herbalistTechniques||[]).find(x=>x.id===id)||null;}function herbalistTool(id){return (content.herbalistTools||[]).find(x=>x.id===id)||null;}function herbalistGear(id){return (content.herbalistGear||[]).find(x=>x.id===id)||null;}function herbalistSpecialization(id){return (content.herbalistSpecializations||[]).find(x=>x.id===id)||null;}function herbalistMarketItem(id){return (content.herbalistMarket||[]).find(x=>x.id===id)||null;}function herbalistMasterySeal(id){return (content.herbalistMasterySeals||[]).find(x=>x.id===id)||null;}function herbalistMasterCareer(jobId='herbalist'){return (content.herbalistMasterCareers||[]).find(x=>x.jobId===jobId)||null;}function alchemistSkill(id){return (content.alchemistSkills||[]).find(x=>x.id===id)||null;}function alchemistAction(id){return (content.alchemistActions||[]).find(x=>x.id===id)||null;}function alchemistTechnique(id){return (content.alchemistTechniques||[]).find(x=>x.id===id)||null;}function alchemistMethod(id){return (content.alchemistMethods||[]).find(x=>x.id===id)||null;}function alchemistRecipe(id){return (content.alchemistRecipes||[]).find(x=>x.id===id)||null;}function alchemistReputationTier(id){return (content.alchemistReputationTiers||[]).find(x=>x.id===id)||null;}function alchemistTool(id){return (content.alchemistTools||[]).find(x=>x.id===id)||null;}function alchemistGear(id){return (content.alchemistGear||[]).find(x=>x.id===id)||null;}function alchemistSpecialization(id){return (content.alchemistSpecializations||[]).find(x=>x.id===id)||null;}function alchemistMarketItem(id){return (content.alchemistMarket||[]).find(x=>x.id===id)||null;}function alchemistCatalyst(id){return (content.alchemistCatalysts||[]).find(x=>x.id===id)||null;}function alchemistResearchProject(id){return (content.alchemistResearchProjects||[]).find(x=>x.id===id)||null;}function alchemistAdvancedLab(id){return (content.alchemistAdvancedLabs||[]).find(x=>x.id===id)||null;}function alchemistScholarlyNetwork(id){return (content.alchemistScholarlyNetworks||[]).find(x=>x.id===id)||null;}function alchemistExceptionalOrder(id){return (content.alchemistExceptionalOrders||[]).find(x=>x.id===id)||null;}function alchemistMasterySeal(id){return (content.alchemistMasterySeals||[]).find(x=>x.id===id)||null;}function alchemistMasterCareer(jobId='alchemist'){return (content.alchemistMasterCareers||[]).find(x=>x.jobId===jobId)||null;}function livestockSpecies(id){return (content.livestockSpecies||[]).find(x=>x.id===id)||null;}function breederSkill(id){return (content.breederSkills||[]).find(x=>x.id===id)||null;}function breederTechnique(id){return (content.breederTechniques||[]).find(x=>x.id===id)||null;}function breederAction(id){return (content.breederActions||[]).find(x=>x.id===id)||null;}function breederReputationTier(id){return (content.breederReputationTiers||[]).find(x=>x.id===id)||null;}function breederTool(id){return (content.breederTools||[]).find(x=>x.id===id)||null;}function breederGear(id){return (content.breederGear||[]).find(x=>x.id===id)||null;}function breederSpecialization(id){return (content.breederSpecializations||[]).find(x=>x.id===id)||null;}function breederMarketItem(id){return (content.breederMarket||[]).find(x=>x.id===id)||null;}function breederPasture(id){return (content.breederPastures||[]).find(x=>x.id===id)||null;}function breederRation(id){return (content.breederRations||[]).find(x=>x.id===id)||null;}function breederMasterySeal(id){return (content.breederMasterySeals||[]).find(x=>x.id===id)||null;}function breederMasterCareer(jobId='breeder'){return (content.breederMasterCareers||[]).find(x=>x.jobId===jobId)||null;}function mineZone(id){return (content.mineZones||[]).find(z=>z.id===id);}function mineSite(id){return (content.mineSites||[]).find(z=>z.id===id);}function mineInstallation(id){return (content.mineInstallations||[]).find(x=>x.id===id);}function mineralDeposit(id){return (content.mineralDeposits||[]).find(d=>d.id===id);}function miningGesture(id){return (content.miningGestures||[]).find(g=>g.id===id);}function miningPuzzle(id){return (content.miningPuzzles||[]).find(g=>g.id===id);}function mineralRarity(id){return (content.mineralRarities||[]).find(g=>g.id===id);}function miningTool(id){return (content.miningTools||[]).find(g=>g.id===id);}function miningGear(id){return (content.miningGear||[]).find(g=>g.id===id);}function miningSpecialization(id){return (content.miningSpecializations||[]).find(g=>g.id===id);}function miningReputationTier(id){return (content.miningReputationTiers||[]).find(g=>g.id===id);}function miningMasterySeal(id){return (content.miningMasterySeals||[]).find(g=>g.id===id);}function miningMasterCareer(jobId='miner'){return (content.miningMasterCareers||[]).find(g=>g.jobId===jobId);}function miningMarketItem(id){return (content.miningMarket||[]).find(g=>g.id===id);}function tree(id){return content.trees.find(t=>t.id===id);}function forestZone(id){return content.forestZones.find(z=>z.id===id);}function forestSite(id){return (content.forestSites||[]).find(z=>z.id===id);}function forestRarity(id){return content.forestRarities.find(r=>r.id===id);}function lumberTool(id){return content.lumberTools.find(t=>t.id===id);}function lumberGear(id){return (content.lumberGear||[]).find(t=>t.id===id);}function lumberSpecialization(id){return (content.lumberSpecializations||[]).find(t=>t.id===id);}function lumberReputationTier(id){return (content.lumberReputationTiers||[]).find(t=>t.id===id);}function lumberMasterySeal(id){return (content.lumberMasterySeals||[]).find(t=>t.id===id);}function lumberMasterCareer(jobId='lumberjack'){return (content.lumberMasterCareers||[]).find(t=>t.jobId===jobId);}function lumberMarketItem(id){return (content.lumberMarket||[]).find(t=>t.id===id);}function lumberOperation(id){return content.lumberOperations.find(o=>o.id===id);}function lumberPuzzle(id){return content.lumberPuzzles.find(p=>p.id===id);}function jobClient(id){return content.jobClients.find(x=>x.id===id);}function jobContract(id){return content.jobContracts.find(x=>x.id===id);}function professionalRanks(jobId){return (content.professionalRanks||[]).filter(r=>r.jobId===jobId).sort((a,b)=>Number(a.order||0)-Number(b.order||0));}
  function jobState(id){if(!state.jobs[id]||typeof state.jobs[id]!=='object')state.jobs[id]={level:1,xp:0,masteryXp:0,tasks:[],stats:{},rankOrder:0,reputation:0,completedContracts:0,failedContracts:0,clientTrust:{},contractOffers:[],activeContracts:[],contractHistory:[]};const s=state.jobs[id];if(!Array.isArray(s.tasks))s.tasks=[];if(!s.stats||typeof s.stats!=='object')s.stats={};if(typeof s.level!=='number')s.level=1;if(typeof s.xp!=='number')s.xp=0;if(typeof s.masteryXp!=='number')s.masteryXp=0;if(typeof s.rankOrder!=='number')s.rankOrder=0;if(typeof s.reputation!=='number')s.reputation=0;if(typeof s.completedContracts!=='number')s.completedContracts=0;if(typeof s.failedContracts!=='number')s.failedContracts=0;if(!s.clientTrust||typeof s.clientTrust!=='object')s.clientTrust={};if(!Array.isArray(s.contractOffers))s.contractOffers=[];if(!Array.isArray(s.activeContracts))s.activeContracts=[];if(!Array.isArray(s.contractHistory))s.contractHistory=[];return s;}
  function migrateManualRank(id){const j=job(id),s=jobState(id),ranks=professionalRanks(id);if(!j?.manualRanks||!ranks.length||s._rankMigrated)return;if(!loaded?.jobs?.[id]||typeof loaded.jobs[id].rankOrder!=='number'){const old=(j.ranks||[]).filter(r=>s.level>=Number(r.level||1)).sort((a,b)=>Number(b.level||1)-Number(a.level||1))[0],match=ranks.find(r=>r.name===old?.name);if(match)s.rankOrder=Number(match.order||0);}s._rankMigrated=true;}
  function jobRank(id){const j=job(id),s=jobState(id),manual=professionalRanks(id);if(j?.manualRanks&&manual.length){migrateManualRank(id);return manual.find(r=>Number(r.order||0)===Number(s.rankOrder||0))?.name||manual[0]?.name||'Novice';}const ranks=Array.isArray(j?.ranks)?j.ranks:[];return ranks.filter(r=>s.level>=Number(r.level||1)).sort((a,b)=>b.level-a.level)[0]?.name||'Novice';}
  function currentProfessionalRank(id){const s=jobState(id);migrateManualRank(id);const ranks=professionalRanks(id);return ranks.find(r=>Number(r.order||0)===Number(s.rankOrder||0))||ranks[0]||null;}
  function nextProfessionalRank(id){const s=jobState(id);migrateManualRank(id);return professionalRanks(id).find(r=>Number(r.order||0)===Number(s.rankOrder||0)+1)||null;}
  function promoteJob(id){const s=jobState(id),next=nextProfessionalRank(id);if(!next)return false;if(Number(state.level||1)<Number(next.minVillageLevel||1))return false;s.rankOrder=Number(next.order||0);log(`${job(id)?.name||id} obtient le grade ${next.name}.`);save();return true;}
  function villageStage(level=state.level){const stages=content.village.developmentStages||[];return stages.find(x=>Number(x.level||1)===Number(level||1))||stages[0]||{level:1,name:'Village',jobLevelCap:99,requirements:{}};}
  function nextVillageStage(){return (content.village.developmentStages||[]).find(x=>Number(x.level||1)===Number(state.level||1)+1)||null;}
  function jobLevelCap(id){const j=job(id),stage=villageStage();return Math.min(Number(j?.maxLevel||99),Number(stage?.jobLevelCap||j?.maxLevel||99));}
  function jobXpCap(id){const j=job(id),s=jobState(id);return Math.max(1,Number(j?.xpPerLevel||60)*s.level);}
  function processJobLevels(id){const j=job(id),s=jobState(id);if(!j)return 0;const per=Math.max(1,Number(j.xpPerLevel||60)),max=Math.max(1,Number(j.maxLevel||10)),cap=jobLevelCap(id);let gained=0;while(s.level<max&&s.level<cap&&s.xp>=per*s.level){s.level++;gained++;log(`${j.name} atteint le niveau ${s.level}.`);}return gained;}
  function jobHasPendingLevel(id){const j=job(id),s=jobState(id);if(!j||s.level>=Number(j.maxLevel||10))return false;return s.level>=jobLevelCap(id)&&s.xp>=Math.max(1,Number(j.xpPerLevel||60))*s.level;}
  function gainJobXp(id,amount){const j=job(id),s=jobState(id);if(!j)return;s.xp+=Math.max(0,Number(amount||0));processJobLevels(id);}
  function masteryLevel(id){return Math.min(10,1+Math.floor(jobState(id).masteryXp/30));}function gainMastery(id,amount){jobState(id).masteryXp+=Math.max(0,Number(amount||0));}
  function gainVillageXp(amount){state.xp+=Math.max(0,Number(amount||0));}
  function uniqueSiteCount(id){const s=jobState(id);if(id==='lumberjack')return Array.isArray(s.unlockedSites)?s.unlockedSites.length:Number(s.stats?.sitesDiscovered||0);if(id==='miner')return Array.isArray(s.knownMineSites)?s.knownMineSites.length:Number(s.stats?.sitesDiscovered||0);if(id==='farmer')return Array.isArray(s.knownUniqueLands)?s.knownUniqueLands.length:Number(s.stats?.uniqueLandsDiscovered||0);return 0;}
  function totalContracts(){return Object.keys(state.jobs||{}).reduce((n,id)=>n+Number(jobState(id).completedContracts||0),0);}
  function mastersTotal(){return ['lumberjack','miner','farmer','breeder','herbalist','alchemist','blacksmith','tinkerer','hunter'].reduce((n,id)=>n+(jobState(id).masterCertified?1:0),0);}
  function jobLegendaryCount(id){const s=jobState(id);return id==='lumberjack'?Number(s.stats?.legendaryTrees||0):id==='miner'?Number(s.stats?.legendaryStrikes||0):id==='farmer'?Number(s.stats?.prestigeHarvests||0):0;}
  function achievement(id){return (content.achievements||[]).find(x=>x.id===id)||null;}
  function achievementProgress(def){if(!def)return{value:0,target:1,progress:0,complete:false};const c=def.criteria||{},target=Math.max(1,Number(c.target||1));let value=0;switch(c.type){case'village_level':value=Number(state.level||1);break;case'building_level':value=buildingLevel(c.ref);break;case'buildings_built':value=state.builtBuildings.filter(id=>!building(id)?.civic).length;break;case'building_upgrades':value=Number(state.villageStats.buildingUpgrades||0);break;case'autonomy_completed':value=Number(state.villageStats.autonomousJobsCompleted||0);break;case'job_level':value=Number(jobState(c.ref).level||1);break;case'job_rank':value=Number(jobState(c.ref).rankOrder||0);break;case'job_reputation':value=Number(jobState(c.ref).reputation||0);break;case'job_contracts':value=Number(jobState(c.ref).completedContracts||0);break;case'job_puzzles_won':value=Number(jobState(c.ref).stats?.puzzlesWon||0);break;case'job_stat':value=Number(jobState(c.ref).stats?.[c.stat]||0);break;case'job_seasons_harvested':value=Object.values(jobState(c.ref).seasonHarvests||{}).filter(v=>Number(v||0)>0).length;break;case'job_sites':value=uniqueSiteCount(c.ref);break;case'job_master':value=jobState(c.ref).masterCertified?1:0;break;case'job_legendary':value=jobLegendaryCount(c.ref);break;case'contracts_total':value=totalContracts();break;case'resource_produced':value=Number(state.villageStats.resourceProduced?.[c.ref]||0);break;case'treasury':value=Number(state.treasury||0);break;case'population':value=Number(state.population||0);break;case'food_reserve_days':value=foodNormalReserveDays();break;case'food_secure_days':value=Number(foodState().stats?.secureDays||0);break;case'seed_reserve_ready':value=built('farm')?seedReserveReadyCount():0;break;case'double_rank':value=Math.min(Number(jobState('lumberjack').rankOrder||0),Number(jobState('miner').rankOrder||0));break;case'masters_total':value=mastersTotal();break;default:value=0;}const progress=Math.max(0,Math.min(100,value/target*100));return{value,target,progress,complete:value>=target};}
  function achievementUnlocked(id){return !!state.achievements.unlocked?.[id];}
  function unlockedAchievements(){return (content.achievements||[]).filter(a=>achievementUnlocked(a.id));}
  function evaluateAchievements(silent=false){const newly=[];for(const a of content.achievements||[]){if(achievementUnlocked(a.id))continue;const p=achievementProgress(a);if(!p.complete)continue;state.achievements.unlocked[a.id]=Date.now();newly.push(a);if(!silent)log(`🏆 Haut-fait débloqué : ${a.name} (+${Number(a.points||0)} prestige).`);}return newly;}
  function prestigeBreakdown(){const caps=Object.assign({development:2000,professions:2500,achievements:2000,exploration:1200,economy:1400,population:900},content.prestigeConfig?.caps||{}),cap=(k,n)=>Math.max(0,Math.min(Number(caps[k]||99999),Math.round(n)));const developmentBuildings=state.builtBuildings.filter(id=>!building(id)?.civic),levelsBuilt=developmentBuildings.reduce((n,id)=>n+Math.max(1,buildingLevel(id)),0),extraLevels=Math.max(0,levelsBuilt-developmentBuildings.length);const development=cap('development',(Number(state.level||1)-1)*220+developmentBuildings.length*45+extraLevels*70+Number(state.villageStats.levelsAdvanced||0)*35);let professionRaw=0;for(const id of ['lumberjack','miner','farmer','breeder','herbalist','alchemist','blacksmith','tinkerer','hunter']){if(id==='farmer'&&!built('farm'))continue;if(id==='breeder'&&!built('livestock_yard'))continue;if(id==='herbalist'&&!built('herbalist_garden'))continue;if(id==='alchemist'&&!built('alchemy_lab'))continue;if(id==='blacksmith'&&!built('forge'))continue;if(id==='tinkerer'&&!built('tinker_workshop'))continue;if(id==='hunter'&&!built('hunter_lodge'))continue;const s=jobState(id);professionRaw+=Number(s.level||1)*45+Number(s.rankOrder||0)*80+Number(s.reputation||0)*2.5+(Array.isArray(s.masterySeals)?s.masterySeals.length:0)*35+(s.masterCertified?350:0);}const professions=cap('professions',professionRaw);const achievementPoints=unlockedAchievements().reduce((n,a)=>n+Number(a.points||0),0),achievements=cap('achievements',achievementPoints);const lj=jobState('lumberjack'),mn=jobState('miner'),fm=jobState('farmer'),hb=jobState('herbalist'),hu=jobState('hunter'),sites=uniqueSiteCount('lumberjack')+uniqueSiteCount('miner')+uniqueSiteCount('farmer'),legends=jobLegendaryCount('lumberjack')+jobLegendaryCount('miner')+jobLegendaryCount('farmer'),rares=Number(lj.stats?.rareTrees||0)+Number(mn.stats?.rareStrikes||0)+Number(fm.stats?.rareHarvests||0)+Number(hb.stats?.rareHarvests||0)+Number(hb.stats?.remarkableSpecimens||0)+Number(hu.stats?.exceptionalHuntsCompleted||0);const exploration=cap('exploration',sites*110+legends*150+Math.min(320,rares*14));const produced=Object.values(state.villageStats.resourceProduced||{}).reduce((n,v)=>n+Math.max(0,Number(v||0)),0),revenue=Number(lj.stats?.marketRevenue||0)+Number(mn.stats?.marketRevenue||0)+Number(fm.stats?.marketRevenue||0)+Number(jobState('breeder').stats?.marketRevenue||0)+Number(hb.stats?.marketRevenue||0)+Number(jobState('alchemist').stats?.marketRevenue||0)+Number(jobState('blacksmith').stats?.marketRevenue||0)+Number(jobState('tinkerer').stats?.marketRevenue||0)+Number(jobState('hunter').stats?.marketRevenue||0),contracts=totalContracts(),auto=Number(state.villageStats.autonomousJobsCompleted||0);const economy=cap('economy',Math.min(550,contracts*22)+Math.min(260,auto*4)+Math.min(300,Math.sqrt(produced)*18)+Math.min(290,Math.sqrt(Math.max(0,revenue))*10));const population=cap('population',Math.max(0,Number(state.population||0)-2)*140);return{development,professions,achievements,exploration,economy,population};}
  function prestigeScore(){return Object.values(prestigeBreakdown()).reduce((n,v)=>n+Number(v||0),0);}
  function prestigeTier(score=prestigeScore()){const tiers=(content.prestigeTiers||[]).slice().sort((a,b)=>Number(a.minScore||0)-Number(b.minScore||0));return tiers.filter(t=>score>=Number(t.minScore||0)).pop()||tiers[0]||{name:'Village',icon:'🏘️',minScore:0};}
  function updatePlayerProfile(patch={}){const p=state.playerProfile;for(const key of ['playerName','villageName','avatar','emblem','motto'])if(key in patch)p[key]=String(patch[key]??'').trim().slice(0,key==='motto'?120:48);if(patch.created===true){p.created=true;if(!p.createdAt)p.createdAt=Date.now();}p.updatedAt=Date.now();if(!p.villageName)p.villageName=content.village.name||'Village';if(!p.avatar)p.avatar='🧑‍🌾';if(!p.emblem)p.emblem='🌿';save();return p;}
  function rankingSnapshot(){evaluateAchievements(true);const score=prestigeScore(),tier=prestigeTier(score),breakdown=prestigeBreakdown();return{schema:'village-ranking-v1',scoreVersion:Number(content.prestigeConfig?.scoreVersion||1),gameVersion:content.meta?.version||'',playerId:state.playerProfile.publicId,playerName:state.playerProfile.playerName||'Joueur',villageName:state.playerProfile.villageName||content.village.name,avatar:state.playerProfile.avatar,emblem:state.playerProfile.emblem,motto:state.playerProfile.motto||'',prestigeScore:score,prestigeTier:tier.name,prestigeBreakdown:breakdown,villageLevel:Number(state.level||1),population:Number(state.population||0),achievementsUnlocked:unlockedAchievements().length,achievementsTotal:(content.achievements||[]).length,masters:['lumberjack','miner','farmer','breeder','herbalist','alchemist','blacksmith','tinkerer','hunter'].filter(id=>jobState(id).masterCertified),generatedAt:new Date().toISOString()};}

  function villageRequirements(stage=nextVillageStage()){if(!stage)return[];const req=stage.requirements||{},rows=[],add=(key,label,have,need)=>rows.push({key,label,have:Number(have||0),need:Number(need||0),ok:Number(have||0)>=Number(need||0)});if(Number(req.xp||0)>0)add('xp','Expérience du village',state.xp,req.xp);if(Number(req.population||0)>0)add('population','Population',state.population,req.population);for(const [rid,need] of Object.entries(req.produced||{})){const r=content.resources.find(x=>x.id===rid);add(`produced:${rid}`,`${r?.icon||'📦'} ${r?.name||rid} produit`,state.villageStats.resourceProduced[rid]||0,need);}for(const bid of req.buildings||[])rows.push({key:`building:${bid}`,label:`🏠 ${building(bid)?.name||bid}`,have:built(bid)?1:0,need:1,ok:built(bid)});for(const [bid,need] of Object.entries(req.buildingLevels||{})){const b=building(bid);add(`buildingLevel:${bid}`,`${b?.icon||'🏠'} ${b?.name||bid} niveau`,buildingLevel(bid),need);}for(const [jid,need] of Object.entries(req.jobLevels||{})){const j=job(jid),s=jobState(jid);add(`jobLevel:${jid}`,`${j?.icon||'🛠️'} ${j?.name||jid} niveau`,s.level,need);}for(const [jid,need] of Object.entries(req.jobRanks||{})){const j=job(jid),s=jobState(jid);add(`jobRank:${jid}`,`${j?.icon||'🎖️'} ${j?.name||jid} grade`,s.rankOrder||0,need);}if(Number(req.contractsTotal||0)>0){const total=Object.keys(state.jobs||{}).reduce((n,id)=>n+Number(jobState(id).completedContracts||0),0);add('contracts','Contrats métiers réussis',total,req.contractsTotal);}if(Number(req.foodReserveDays||0)>0)add('foodReserveDays','🍲 Jours de réserve alimentaire',foodNormalReserveDays(),req.foodReserveDays);for(const [jid,need] of Object.entries(req.uniqueSites||{})){const j=job(jid);add(`sites:${jid}`,`${j?.icon||'🗺️'} Lieux uniques ${j?.name||jid}`,uniqueSiteCount(jid),need);}return rows;}
  function canAdvanceVillage(){const next=nextVillageStage();return !!next&&villageRequirements(next).every(x=>x.ok);}
  function advanceVillage(){const next=nextVillageStage();if(!next||!canAdvanceVillage())return false;state.level=Number(next.level||state.level+1);state.villageStats.levelsAdvanced=Number(state.villageStats.levelsAdvanced||0)+1;log(`${next.icon||'🏘️'} Le village devient « ${next.name} » (niveau ${state.level}).`);for(const id of Object.keys(state.jobs||{}))processJobLevels(id);save();return true;}
  function canBuild(b){if(!b||built(b.id))return false;if((state.level||1)<Number(b.villageXp||1))return false;if((b.requiresBuildings||[]).some(id=>!built(id)))return false;for(const [id,qty] of Object.entries(b.cost||{}))if(resource(id)<qty)return false;return true;}
  function missingForBuilding(b){const out=[];if((state.level||1)<Number(b.villageXp||1))out.push(`Village niv. ${b.villageXp}`);for(const req of b.requiresBuildings||[])if(!built(req))out.push(building(req)?.name||req);for(const [id,qty] of Object.entries(b.cost||{})){const have=resource(id);if(have<qty)out.push(`${content.resources.find(r=>r.id===id)?.name||id} ${have}/${qty}`);}return out;}
  function missingForBuildingUpgrade(id){const next=nextBuildingLevel(id),out=[];if(!next)return out;if(Number(state.level||1)<Number(next.villageLevel||1))out.push(`Village niv. ${next.villageLevel}`);for(const [rid,qty] of Object.entries(next.cost||{})){const have=resource(rid);if(have<Number(qty||0))out.push(`${content.resources.find(r=>r.id===rid)?.name||rid} ${have}/${qty}`);}return out;}
  function canUpgradeBuilding(id){return !!nextBuildingLevel(id)&&missingForBuildingUpgrade(id).length===0;}
  function upgradeBuilding(id){const b=building(id),next=nextBuildingLevel(id);if(!b||!next||!canUpgradeBuilding(id))return false;for(const [rid,qty] of Object.entries(next.cost||{}))consumeResource(rid,qty,`Amélioration : ${b.name}`);state.buildingLevels[id]=Number(next.level||buildingLevel(id)+1);state.villageStats.buildingUpgrades=Number(state.villageStats.buildingUpgrades||0)+1;gainVillageXp(Math.max(12,Math.round(Object.values(next.cost||{}).reduce((a,n)=>a+Number(n||0),0)*.6)));log(`${b.icon||'🏠'} ${b.name} passe au niveau ${state.buildingLevels[id]} — ${next.name||'amélioration'}.`);save();return true;}
  function build(id){const b=building(id);if(!canBuild(b))return false;for(const [rid,qty] of Object.entries(b.cost||{}))consumeResource(rid,qty,`Construction : ${b.name}`);state.builtBuildings.push(id);state.buildingLevels[id]=1;state.population+=Number(b.population||0);gainVillageXp(Math.max(20,Object.values(b.cost||{}).reduce((a,n)=>a+Number(n||0),0)));log(`${b.name} construit — niveau 1.`);if(id==='farm')activateFoodSecurity(Date.now());save();return true;}
  function reset(){
    const fresh=freshState();
    try{
      const keys=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&/^village_save_v\d+$/.test(k))keys.push(k);}for(const k of keys)localStorage.removeItem(k);
      for(const k of [SAVE_KEY,...LEGACY_SAVE_KEYS])localStorage.removeItem(k);
    }catch{}
    for(const k of Object.keys(state))delete state[k];Object.assign(state,fresh);
    try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));}catch{return false;}
    return true;
  }
  if(built('farm')&&!state.foodSecurity.active)activateFoodSecurity(Date.now());
  evaluateAchievements(true);state.playerProfile.prestigePeak=Math.max(Number(state.playerProfile.prestigePeak||0),prestigeScore());
  window.VillageCore={content,state,save,log,resource,addResource,addMaterialLot,consumeResource,recordInventoryEvent,storageWeight,storageUsed,storageCapacity,storageFree,foodConfig,foodState,foodResources,seedResources,foodPolicy,foodBaseDailyNeed,foodDailyNeed,foodReserveUnits,foodReserveDays,foodNormalReserveDays,foodVarietyGroups,seedReserveTarget,seedUsable,seedReserveReadyCount,foodTargetDays,foodSecurityStatus,foodWorkModifier,activateFoodSecurity,processFoodSecurity,setFoodPolicy,setFoodTargetDays,setSeedReserveTarget,foodReserveComposition,built,building,buildingLevel,buildingLevels,buildingLevelDef,buildingMaxLevel,nextBuildingLevel,buildingEffect,canUpgradeBuilding,missingForBuildingUpgrade,upgradeBuilding,job,tinkererKnowledge,tinkererSkill,tinkererAction,tinkererTechnique,tinkererTool,tinkererGear,tinkererSpecialization,tinkererMarketItem,tinkererMasterySeal,tinkererMasterCareer,blacksmithTool,blacksmithGear,blacksmithSpecialization,blacksmithMarketItem,blacksmithMasterySeal,blacksmithMasterCareer,farmSoil,farmCrop,farmSeason,farmWeatherType,farmThreat,farmEvent,farmerGesture,farmerPuzzle,farmerTool,farmerGear,farmerSpecialization,farmerMarketItem,farmerReputationTier,farmerMasterySeal,farmerMasterCareer,herbZone,herbPlant,herbalistSkill,herbalistAction,herbalistTechnique,herbalistTool,herbalistGear,herbalistSpecialization,herbalistMarketItem,herbalistMasterySeal,herbalistMasterCareer,alchemistSkill,alchemistAction,alchemistTechnique,alchemistMethod,alchemistRecipe,alchemistReputationTier,alchemistTool,alchemistGear,alchemistSpecialization,alchemistMarketItem,alchemistCatalyst,alchemistResearchProject,alchemistAdvancedLab,alchemistScholarlyNetwork,alchemistExceptionalOrder,alchemistMasterySeal,alchemistMasterCareer,livestockSpecies,breederSkill,breederTechnique,breederAction,breederReputationTier,breederTool,breederGear,breederSpecialization,breederMarketItem,breederPasture,breederRation,breederMasterySeal,breederMasterCareer,mineZone,mineSite,mineInstallation,mineralDeposit,miningGesture,miningPuzzle,mineralRarity,miningTool,miningGear,miningSpecialization,miningReputationTier,miningMasterySeal,miningMasterCareer,miningMarketItem,tree,forestZone,forestSite,forestRarity,lumberTool,lumberGear,lumberSpecialization,lumberReputationTier,lumberMasterySeal,lumberMasterCareer,lumberMarketItem,lumberOperation,lumberPuzzle,jobClient,jobContract,professionalRanks,currentProfessionalRank,nextProfessionalRank,promoteJob,jobState,jobRank,jobXpCap,jobLevelCap,jobHasPendingLevel,processJobLevels,gainJobXp,masteryLevel,gainMastery,gainVillageXp,villageStage,nextVillageStage,villageRequirements,canAdvanceVillage,advanceVillage,canBuild,missingForBuilding,build,achievement,achievementProgress,achievementUnlocked,unlockedAchievements,evaluateAchievements,prestigeBreakdown,prestigeScore,prestigeTier,updatePlayerProfile,rankingSnapshot,totalContracts,mastersTotal,reset,SAVE_KEY,CONTENT_KEY};
})();
