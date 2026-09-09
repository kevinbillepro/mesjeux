/* ============================================================
   VIL0.3.19 — Atelier du joueur : liaison des contrôles
   Chargé après job-ui.js / autonomy-ui.js, avant le script du métier.
   1. Les boutons .workshop-method pilotent le <select> d'origine (masqué)
      et émettent 'change' : aucune logique métier à réécrire.
   2. La carte latérale d'automatisation reflète en direct le contenu
      réel de #jobAutonomy (emplacements, file, ordres en cours).
   3. Les boutons principaux des cartes de formule (Alchimiste) reçoivent
      le style d'action d'atelier.
   ============================================================ */
(function () {
  'use strict';

  var GROUPS = [
    { choices: '#mineMethodChoices', target: '#mineMethodSelect', attr: 'data-method' },
    { choices: '#techniqueChoices',  target: '#techniqueSelect',  attr: 'data-technique' }
  ];

  function markSelected(container, button) {
    var buttons = container.querySelectorAll('.workshop-method');
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i] === button;
      buttons[i].classList.toggle('selected', on);
      buttons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function apply(target, value) {
    if (!target || value == null || target.value === value) return;
    target.value = value;
    target.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function wire(group) {
    var container = document.querySelector(group.choices);
    var target = document.querySelector(group.target);
    if (!container || !target) return;

    var initial = container.querySelector('.workshop-method.selected');
    if (initial) apply(target, initial.getAttribute(group.attr));
    else {
      var match = container.querySelector('.workshop-method[' + group.attr + '="' + target.value + '"]');
      if (match) markSelected(container, match);
    }

    container.addEventListener('click', function (event) {
      var button = event.target.closest ? event.target.closest('.workshop-method') : null;
      if (!button || !container.contains(button)) return;
      event.preventDefault();
      markSelected(container, button);
      apply(target, button.getAttribute(group.attr));
    });

    target.addEventListener('change', function () {
      var match = container.querySelector('.workshop-method[' + group.attr + '="' + target.value + '"]');
      if (match) markSelected(container, match);
    });
  }

  /* --- Miroir de l'automatisation dans la carte latérale --- */
  function mirrorAutonomy() {
    var source = document.getElementById('jobAutonomy');
    var aside = document.querySelector('.autonomy-aside');
    if (!source || !aside) return;

    var stats = source.querySelectorAll('.autonomy-summary > div');
    var slots = aside.querySelector('[data-autonomy-slots]');
    var queue = aside.querySelector('[data-autonomy-queue]');
    for (var i = 0; i < stats.length; i++) {
      var label = (stats[i].querySelector('span') || {}).textContent || '';
      var value = (stats[i].querySelector('b') || {}).textContent || '';
      if (slots && /Emplacements/i.test(label)) slots.textContent = value;
      if (queue && /File/i.test(label)) queue.textContent = value;
    }

    var list = aside.querySelector('[data-autonomy-orders]');
    if (!list) return;
    var orders = source.querySelectorAll('.autonomy-active');
    if (!orders.length) {
      list.innerHTML = '<div class="autonomy-aside-order idle"><span>💤</span><div><b>Aucun job autonome</b><small>Le travail manuel reste disponible.</small></div></div>';
      return;
    }
    var html = '';
    for (var j = 0; j < orders.length && j < 3; j++) {
      var order = orders[j];
      var icon = (order.querySelector('span') || {}).textContent || '⚙️';
      var name = (order.querySelector('b') || {}).textContent || '';
      var state = (order.querySelector('small') || {}).textContent || '';
      var cls = order.classList.contains('queued') ? ' queued'
        : order.classList.contains('waiting_storage') ? ' blocked' : '';
      html += '<div class="autonomy-aside-order' + cls + '"><span>' + icon + '</span><div><b>' + name + '</b><small>' + state + '</small></div></div>';
    }
    list.innerHTML = html;
  }

  /* --- Alchimiste : le bouton de chaque formule devient l'action d'atelier --- */
  function promoteRecipeButtons(root) {
    var cards = root.querySelectorAll('.blacksmith-recipe, .alchemist-recipe, .processing-recipe');
    for (var i = 0; i < cards.length; i++) {
      var main = cards[i].querySelector('.blacksmith-big-action, .btn.primary, .btn');
      if (!main || main.classList.contains('workshop-action')) continue;
      main.classList.add('workshop-action');
      if (!main.querySelector('span')) main.innerHTML = '<span>' + main.innerHTML + '</span><i></i>';
    }
  }

  function watchRecipes() {
    var host = document.getElementById('alchemistRecipes');
    if (!host) return;
    promoteRecipeButtons(host);
    if (typeof MutationObserver === 'undefined') return;
    new MutationObserver(function () { promoteRecipeButtons(host); }).observe(host, { childList: true, subtree: true });
  }

  /* --- Étiquettes de scène : reflètent des indicateurs réels de la page --- */
  function mirrorSceneTags() {
    var hosts = document.querySelectorAll('[data-scene-mirror]');
    for (var i = 0; i < hosts.length; i++) {
      var pairs = hosts[i].getAttribute('data-scene-mirror').split('|');
      var html = '';
      for (var j = 0; j < pairs.length; j++) {
        var parts = pairs[j].split('@');
        var label = parts[0] || '';
        var source = document.querySelector(parts[1] || '');
        var value = source ? (((source.matches && source.matches('.job-standard-status,.standard-metrics')) ? ((source.querySelector('b') || source).textContent) : source.textContent) || '').trim() : '';
        if (!value || value === '—') continue;
        html += '<span' + (j === 1 ? ' class="ok"' : '') + '>' + label + ' ' + value + '</span>';
      }
      hosts[i].innerHTML = html;
    }
  }

  /* --- Lien « Gérer les jobs autonomes » : ouvre l'onglet dédié --- */
  function wireAutonomyLink() {
    var links = document.querySelectorAll('[data-open-autonomy]');
    var tab = document.querySelector('.job-nav .tab[data-tab="autonomy"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (event) {
        event.preventDefault();
        if (tab) { tab.click(); tab.focus(); }
      });
    }
  }



  /* --- VIL0.3.19 final : harmonisation des ateliers supplémentaires --- */
  function promoteWorkshopCards() {
    var selectors = [
      '#blacksmithRecipes .btn.primary',
      '#herbalistPlants .btn.primary',
      '#breederCareActions .btn',
      '#farmPlotGrid .btn.primary'
    ];
    for (var s = 0; s < selectors.length; s++) {
      var buttons = document.querySelectorAll(selectors[s]);
      for (var i = 0; i < buttons.length; i++) buttons[i].classList.add('workshop-card-action');
    }
  }

  function watchWorkshopCards() {
    promoteWorkshopCards();
    if (typeof MutationObserver === 'undefined') return;
    ['blacksmithRecipes','herbalistPlants','breederCareActions','farmPlotGrid'].forEach(function(id){
      var host=document.getElementById(id); if(!host) return;
      new MutationObserver(promoteWorkshopCards).observe(host,{childList:true,subtree:true});
    });
  }

  /* Les liens secondaires de l'atelier ouvrent vraiment l'onglet visé. */
  function wireWorkshopTabLinks() {
    var links=document.querySelectorAll('.job-workshop a[href^="#"][href$="Tab"]');
    for(var i=0;i<links.length;i++) links[i].addEventListener('click',function(event){
      var id=(this.getAttribute('href')||'').slice(1).replace(/Tab$/,'');
      var tab=document.querySelector('.job-nav .tab[data-tab="'+id+'"]');
      if(!tab) return;
      event.preventDefault(); tab.click(); tab.focus();
      var workspace=document.querySelector('.job-workspace'); if(workspace) workspace.scrollIntoView({behavior:'smooth',block:'start'});
    });
  }

  function init() {
    wireAutonomyLink();
    for (var i = 0; i < GROUPS.length; i++) wire(GROUPS[i]);
    mirrorSceneTags();
    setInterval(mirrorSceneTags, 700);
    watchRecipes();
    watchWorkshopCards();
    wireWorkshopTabLinks();
    mirrorAutonomy();
    setInterval(mirrorAutonomy, 700);
    window.addEventListener('village:autonomy', mirrorAutonomy);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
