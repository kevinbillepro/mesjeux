# Village — VIL0.3.22

## Cuisinier : boucle fondamentale

Cette version ouvre le **10e métier de Village**, le Cuisinier. Il reste volontairement hors de la matrice des métiers finalisés jusqu’à **VIL0.3.22.7 — Grand audit Cuisinier** : VIL0.3.22 pose uniquement une boucle fondamentale complète et jouable, sur laquelle les couches de connaissance, carrière, équipement, recettes complexes, banquets et consécration pourront ensuite être construites.

## Boucle jouable

La Cuisine commune propose désormais une vraie chaîne active :

**choisir une recette → régler le feu → consommer les ingrédients → surveiller la cuisson → produire un lot qualitatif → nourrir le village ou vendre le repas**

La cuisson active utilise le stock partagé du village et produit des lots traçables conservant recette, régime de feu, qualité, heure de cuisson et niveau de la Cuisine.

### Recettes fondamentales

Quatre recettes servent de socle :

1. **Galettes du foyer** — farine + bois, feu régulier ;
2. **Potée du potager** — carottes + haricots + bois, feu doux ;
3. **Ragoût de gibier** — viande de gibier + carotte + bois, feu doux ;
4. **Galettes de haricots** — haricots + farine + bois, feu vif.

Elles créent quatre nouvelles ressources alimentaires : Galettes rustiques, Potée du potager, Ragoût du chasseur et Galettes de haricots.

## Feu, qualité et énergie

Trois régimes de feu sont disponibles : **doux, régulier et vif**. Chaque recette possède un feu conseillé. Le mauvais choix peut réduire la qualité ou provoquer une cuisson imparfaite ; le feu vif accélère le travail mais augmente le risque de brûler la préparation.

Le Cuisinier dispose également d’une énergie propre qui se régénère avec le temps. Les améliorations de la Cuisine commune apportent progressivement qualité de cuisson, efficacité et emplacements de travail supplémentaires.

## Alimentation du village

Les repas cuisinés sont de vraies ressources du système alimentaire :

- ils possèdent une valeur nutritive ;
- ils se périment selon leur nature ;
- ils sont intégrés au stock commun ;
- le rationnement leur donne une priorité légèrement supérieure aux denrées brutes afin de consommer les préparations périssables avant de gaspiller leur transformation.

La valeur alimentaire totale de chaque recette fondamentale est au moins égale à celle de ses ingrédients alimentaires. La cuisson apporte donc une petite valorisation alimentaire en échange du combustible, du temps et de l’énergie du Cuisinier.

## Économie de base

Chaque repas possède un débouché simple. Les lots issus de la cuisine active peuvent recevoir une prime liée à leur qualité. Cette économie reste volontairement légère : demande dynamique, équipement, entretien et spécialisations sont réservés à **VIL0.3.22.3**.

## Autonomie

La Cuisine commune reçoit deux activités autonomes :

- Cuire des galettes communes ;
- Préparer une potée commune.

Comme pour les autres métiers, l’autonomie produit du stock courant sans reproduire les avantages qualitatifs de l’action manuelle. La cuisine active reste donc la voie privilégiée pour les meilleurs lots.

## Interface & éditeur

La page `jobs/cook.html` contient les sections :

- Cuisine ;
- Repas ;
- Réserves ;
- Débouchés ;
- Progression ;
- Autonomie ;
- À venir.

L’Éditeur global expose les **recettes Cuisinier**, **modes de feu** et **débouchés Cuisinier** sous forme de données éditables.

## Hauts-faits

Quatre premiers jalons accompagnent la fondation du métier : construction de la Cuisine, première préparation, niveau 3 et vingt portions préparées.

## Sauvegarde & migration

- Schéma courant : **85**.
- Clés courantes : `village_content_v85` et `village_save_v85`.
- Migration automatique depuis VIL0.3.21.7 / schéma 84.
- Les anciennes progressions, trésorerie, stocks, métiers et personnalisations de l’Éditeur sont conservés.
- Les nouvelles recettes, ressources, modes de feu et activités autonomes sont injectés sans écraser les personnalisations existantes des autres métiers.

## Validation VIL0.3.22

- Audit de fondation Cuisinier : **10/10**.
- Matrice des neuf métiers déjà finalisés : **180/180 piliers**.
- Test moteur migration + cuisine + alimentation + vente + autonomie : **20/20**.
- **25 fichiers JavaScript** syntaxiquement valides.
- **16 pages HTML** contrôlées.
- **149 références locales** contrôlées, aucune manquante.
- Aucun ID HTML dupliqué.

Le rapport est disponible dans `audit.html` et `VIL0.3.22-audit-metiers.json`.

## Suite de la roadmap

- **VIL0.3.22.1 — Connaissance culinaire, gestes & progression**
- VIL0.3.22.2 — Grades, contrats & commanditaires
- VIL0.3.22.3 — Équipement, économie & spécialisations
- VIL0.3.22.4 — Recettes complexes, conservation & qualité
- VIL0.3.22.5 — Banquets, recettes rares & commandes exceptionnelles
- VIL0.3.22.6 — Consécration du Cuisinier
- VIL0.3.22.7 — Grand audit Cuisinier
