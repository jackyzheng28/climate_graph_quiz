(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const translations = {
    en: {
      learningMode:'Mode',easyMode:'Easy',mediumMode:'Medium',hardMode:'Hard',customMode:'Custom',classification:'Classification',answerFormat:'Answer format',easyTaxonomy:'Easy',mediumTaxonomy:'Medium',hardTaxonomy:'Hard',climateOnly:'Climate only',climateCity:'Climate & City',practiceOrder:'Practice order',
      climateOnlyStep:'Climate identification · Stage 1 of 1',climateCorrect:'Climate answer recorded.',climateWrong:'Not quite. Climate type: {answer}.',
      headline:'Read the rhythm of a place.',intro:'Study a monthly climate graph, identify its climate type, then match it to a city around the world.',eyebrow:'WORLD CLIMATE PRACTICE',prepare:'Set up your practice',setupHint:'Choose a mode and session size, then start.',cardBank:'practice cards',start:'Start test',setupTip:'Easy is climate only; Medium and Hard also ask you to match a city. Custom lets you choose.',offline:'Runs offline · no account needed',changeSetup:'Setup',gameFooter:'Question graph values are illustrative teaching approximations.',languageButton:'Switch language',themeButton:'Cycle color theme',themeDefault:'System',themeLight:'Light',themeDark:'Dark',
      chartTitle:'Monthly climate profile',precip:'Precipitation (mm)',temp:'Mean temperature (°C)',practice:'Practice controls',modeLabel:'Question mode',practiceMode:'Practice mode',random:'Random practice',reviewMode:'Wrong answers only',lengthLabel:'Session length',fullBank:'Full set (25,000)',start:'Start / restart session',correct:'Correct',answered:'Answered',accuracy:'Accuracy',questionCards:'Question cards',wrongReview:'Wrong-answer review',dataAbout:'About the data',dataText:'The 5,000 city names and coordinates come from the World Cities dataset, based on GeoNames. Climate classes and monthly graph values are coordinate-based teaching approximations, not observed station normals or official classifications. Each city has five generated practice variants; the variants are exercises, not five separate measured climate records.',tipline:'Tip: check the hemisphere, temperature range, and rainfall season.',footer:'Works offline after the files are saved together.',
      climateStep:'Climate identification · Stage 1 of 2',cityStep:'City match · Stage 2 of 2',question:'Question {n} of {total}',askClimate:'Which climate type best matches this annual pattern?',askCity:'Which city is the best match for this profile?',continue:'Continue to city match',next:'Next question',results:'See results',skip:'Skip',correctMsg:'Correct.',wrongClimate:'Not quite. Climate type: {answer}.',wrongCity:'Not quite. The city is {answer}.',climateSuccess:'Climate identified. Now match the city.',correctCity:'Correct city match.',selectOne:'Choose an answer to continue.',emptyReview:'Your review queue is empty. Miss a question in practice first.',noMisses:'No missed questions yet.',sessionComplete:'Session complete',scoreText:'{score} correct answer(s) out of {total}.',reviewCount:'Your wrong-answer queue has {count} card(s).',practiceAgain:'Practice again',chartAlt:'Monthly precipitation bars and temperature line',months:['January','February','March','April','May','June','July','August','September','October','November','December'],monthsShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],precipAxis:'Precipitation (mm)',tempAxis:'Temperature (°C)',
    },
    zh: {
      learningMode:'模式',easyMode:'简单',mediumMode:'中等',hardMode:'困难',customMode:'自定义',classification:'难度选择',answerFormat:'答题类型',easyTaxonomy:'简单',mediumTaxonomy:'中等',hardTaxonomy:'困难',climateOnly:'只判断气候',climateCity:'判断气候与城市',practiceOrder:'练习顺序',
      climateOnlyStep:'判断气候 · 第 1 步 / 共 1 步',climateCorrect:'回答正确！',climateWrong:'再想想。气候类型是：{answer}。',
      headline:'读懂一座地方的气候节律。',intro:'观察每月气候图，先判断气候类型，再从全球城市中找出对应城市。',eyebrow:'全球气候图练习',prepare:'设置练习',setupHint:'选择练习模式和题量，然后开始。',setupTip:'简单模式只判断气候；中等和困难模式还需匹配城市；自定义可自行选择。',cardBank:'张练习题卡',start:'开始测试',offline:'离线运行 · 无需账号',changeSetup:'设置',gameFooter:'题目中的气候曲线为教学示意模型。',languageButton:'切换语言',themeButton:'循环切换主题',themeDefault:'跟随系统',themeLight:'浅色',themeDark:'深色',
      chartTitle:'月度气候特征',precip:'降水量（毫米）',temp:'平均气温（°C）',practice:'练习设置',modeLabel:'题目模式',practiceMode:'练习模式',random:'随机练习',reviewMode:'只复习错题',lengthLabel:'本轮题量',fullBank:'全部题库（25,000）',start:'开始 / 重新开始',correct:'答对',answered:'已作答',accuracy:'正确率',questionCards:'题卡总数',wrongReview:'错题复习',dataAbout:'数据说明',dataText:'5,000 个城市名称与坐标来自基于 GeoNames 的 World Cities 数据集。气候类型和月度图表数值是依据坐标生成的教学近似值，并非气象站实测常年值或官方气候分类。每个城市生成 5 张练习变体；它们是练习题，不代表 5 份独立实测气候记录。',tipline:'提示：先看南北半球、气温范围和降水季节。',footer:'将这些文件保存在同一文件夹后，可离线使用。',
      climateStep:'判断气候 · 第 1 步 / 共 2 步',cityStep:'匹配城市 · 第 2 步 / 共 2 步',question:'第 {n} 题 / 共 {total} 题',askClimate:'哪一种气候类型最符合这张年变化图？',askCity:'这张气候图最符合哪座城市？',continue:'继续匹配城市',next:'下一题',results:'查看结果',skip:'跳过',correctMsg:'回答正确！',wrongClimate:'再想想。气候类型是：{answer}。',wrongCity:'再想想。对应城市是：{answer}。',climateSuccess:'气候类型正确。现在来匹配城市。',correctCity:'城市匹配正确。',selectOne:'请选择一个答案后继续。',emptyReview:'错题列表为空。先在练习中答错几题吧。',noMisses:'目前没有错题。',sessionComplete:'本轮完成',scoreText:'共答对 {score} 题/ {total} 题。',reviewCount:'错题列表中有 {count} 张题卡。',practiceAgain:'再练一轮',chartAlt:'每月降水柱状图与气温折线图',months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],monthsShort:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],precipAxis:'降水量（毫米）',tempAxis:'气温（°C）',
    }
  };

  const templates = {
    Af:{t:[26,26,27,27,27,27,27,27,27,27,27,26],p:[210,190,220,230,205,180,170,185,220,240,230,220]},
    Am:{t:[26,27,29,30,30,29,28,28,28,28,27,26],p:[12,18,35,75,160,260,310,280,210,120,50,18]},
    Aw:{t:[25,27,30,31,30,28,27,27,28,29,28,26],p:[5,8,18,45,110,170,160,130,100,65,30,12]},
    BWh:{t:[13,16,21,26,31,35,37,36,32,26,19,14],p:[8,10,6,4,3,2,6,5,2,3,5,8]},
    BWk:{t:[-2,2,8,15,21,26,29,27,21,13,5,0],p:[5,6,8,12,18,22,28,20,12,8,6,5]},
    BSh:{t:[14,17,22,27,31,33,32,30,28,24,19,15],p:[4,5,9,18,35,70,100,85,45,20,8,4]},
    BSk:{t:[-4,0,7,14,20,25,28,26,20,12,4,-2],p:[8,10,15,25,45,70,80,65,38,20,12,8]},
    Csa:{t:[10,11,13,16,20,25,28,28,24,19,14,11],p:[80,65,55,40,25,10,2,5,25,60,90,85]},
    Cfb:{t:[5,6,9,12,16,19,21,20,17,13,9,6],p:[70,55,60,55,65,70,75,75,70,80,80,75]},
    Cfa:{t:[8,10,14,18,22,25,27,27,24,19,14,10],p:[80,85,100,110,120,130,120,110,100,90,85,80]},
    Dfb:{t:[-8,-6,0,8,15,20,22,21,15,8,0,-6],p:[35,30,35,45,65,80,85,75,60,50,45,40]},
    ET:{t:[-18,-19,-16,-11,-5,1,4,3,-1,-7,-12,-16],p:[30,25,25,30,35,45,55,60,50,45,35,30]}
  };

  const cities = Array.isArray(window.CITY_DATA) ? window.CITY_DATA : [];
  if (cities.length !== 5000) {
    document.body.innerHTML = `<main class="load-error"><h1>City data could not be loaded</h1><p>Keep index.html, styles.css, app.js, and cities.js together in one folder.</p></main>`;
    return;
  }
  cities.forEach((c,i) => { c.climate=window.ClimateQuizCore.sourceClimateFor(c); c.index=i; });
  const totalCards = cities.length * 5;
  const countryNames = new Intl.DisplayNames(['en'], {type:'region'});
  let lang = localStorage.getItem('climate-quiz-language') || 'en';
  let theme = localStorage.getItem('climate-quiz-theme') || 'default';
  let session = [], index = 0, score = 0, answered = 0, missed = new Map(), q = null, stage = 'climate', locked = false, selectedValue = null;
  let sessionConfig = window.ClimateQuizCore.resolveMode('easy');
  const t = () => translations[lang];
  const usesCityStep = () => sessionConfig.includeCity;
  function updateModeFields(){
    const custom=$('learningMode').value==='custom';
    $('customTaxonomyField').classList.toggle('hidden',!custom);
    $('answerFormatField').classList.toggle('hidden',!custom);
  }
  function clearPendingSession(){
    session=[];index=0;score=0;answered=0;q=null;stage='climate';locked=false;selectedValue=null;
    $('mode').value='random';$('length').value='10';$('setupMessage').textContent='';
    $('reviewOverlay').classList.add('hidden');renderStats();
  }
  const cardById = id => { const n=id-1, city=cities[Math.floor(n/5)]; return {id,city,variant:n%5}; };
  const cardId = (cityIndex,variant) => cityIndex*5+variant+1;
  const countryName = (code) => { try { return countryNames.of(code) || code; } catch { return code; } };
  const cityLabel = (city) => `${city.name}, ${countryName(city.country)}`;
  const climateLabel = (key,family=sessionConfig.family) => {
    if(family==='hard')return `${key} — ${window.ClimateQuizCore.koppenNames[key]?.[lang==='zh'?1:0]||key}`;
    const row=window.ClimateQuizCore.taxonomies[family].find(item=>item[0]===key);
    return row?.[lang==='zh'?2:1]||String(key);
  };
  const shuffle = (arr) => { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; };
  const tr = (key, values={}) => Object.entries(values).reduce((s,[k,v])=>s.replaceAll(`{${k}}`,String(v)),t()[key]);

  function applyLanguage(){
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(t()[key])el.textContent=t()[key];});
    $('languageMark').textContent=lang==='en'?'EN':'中文';
    document.querySelectorAll('.languageMarkMirror').forEach(el=>el.textContent=lang==='en'?'EN':'中文');
    ['languageToggle','languageToggleGame'].forEach(id=>{const el=$(id);if(el){el.setAttribute('aria-label',t().languageButton);el.title=t().languageButton;}});
    ['themeToggle','themeToggleGame'].forEach(id=>{const el=$(id);if(el){el.setAttribute('aria-label',t().themeButton);el.title=t().themeButton;}});
    if(q){
      $('chart').setAttribute('aria-label',t().chartAlt); $('prompt').textContent=stage==='climate'?t().askClimate:t().askCity; updateStep();
      if(!$('end').classList.contains('hidden')){finish();}
      else showChoices(stage==='climate'?climateChoices(q):cityChoices(q));
      if(locked&&selectedValue!==null){
        document.querySelectorAll('.choice').forEach(b=>{b.disabled=true;if(b.dataset.value===String(selectedValue))b.classList.add((stage==='climate'?selectedValue===q.answerClimate:Number(selectedValue)===q.city.index)?'correct':'wrong');});
        $('feedback').textContent=stage==='climate'?(usesCityStep()?(selectedValue===q.answerClimate?t().climateSuccess:tr('wrongClimate',{answer:climateLabel(q.answerClimate)})):(selectedValue===q.answerClimate?t().climateCorrect:tr('climateWrong',{answer:climateLabel(q.answerClimate)}))):(Number(selectedValue)===q.city.index?t().correctCity:tr('wrongCity',{answer:cityLabel(q.city)}));
      }
    }
    renderReview();
    updateModeFields();
  }
  function applyTheme(){
    document.documentElement.dataset.theme=theme==='default'?'':theme;
    document.documentElement.classList.toggle('system-theme',theme==='default');
    const effectiveDark=theme==='dark'||(theme==='default'&&window.matchMedia('(prefers-color-scheme: dark)').matches);
    const icon=theme==='default'?'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>':effectiveDark?'<path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/>':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>';
    $('themeIcon').innerHTML=icon;
    document.querySelectorAll('.themeIconMirror').forEach(el=>el.innerHTML=icon);
  }
  function updateStep(){
    $('step').textContent=stage==='climate'?(usesCityStep()?t().climateStep:t().climateOnlyStep):t().cityStep;
    $('round').textContent=tr('question',{n:index+1,total:session.length});
    $('progress').style.width=`${session.length?index/session.length*100:0}%`;
  }
  function start(){
    sessionConfig=window.ClimateQuizCore.resolveMode($('learningMode').value,$('customTaxonomy').value,$('answerFormat').value);
    const mode=$('mode').value;
    let ids;
    if(mode==='review') ids=[...missed.keys()];
    else { ids=Array.from({length:totalCards},(_,i)=>i+1); if(mode==='random')ids=shuffle(ids); }
    if(!ids.length){$('setupMessage').textContent=t().emptyReview;return;}
    const requested=$('length').value==='all'?ids.length:Number($('length').value);
    session=ids.slice(0,requested);index=0;score=0;answered=0;renderStats();
    $('setupMessage').textContent='';$('setup').classList.add('hidden');$('game').classList.remove('hidden');$('reviewOverlay').classList.add('hidden');
    $('quiz').classList.remove('hidden');$('end').classList.add('hidden');showCard();
  }
  function showCard(){
    if(index>=session.length){finish();return;}
    q=window.ClimateQuizCore.createQuestionRecord(cardById(session[index]),sessionConfig.family);stage='climate';locked=false;selectedValue=null;
    $('quiz').classList.remove('hidden');$('end').classList.add('hidden');
    $('prompt').textContent=t().askClimate;$('feedback').textContent='';$('next').disabled=true;$('next').textContent=usesCityStep()?t().continue:(index===session.length-1?t().results:t().next);$('skip').textContent=t().skip;
    updateStep();drawChart(makeProfile(q));showChoices(climateChoices(q));
  }
  function climateChoices(question){
    return window.ClimateQuizCore.climateOptions(question,sessionConfig.family,Math.random,lang);
  }
  function cityChoices(question){
    return window.ClimateQuizCore.cityOptions(question,cities,sessionConfig.family,Math.random).map(item=>({value:item.value,label:cityLabel(item.city)}));
  }
  function showChoices(choices){
    $('answers').replaceChildren();
    choices.forEach(item=>{const b=document.createElement('button');b.className='choice';b.dataset.value=String(item.value);b.textContent=item.label;b.onclick=()=>choose(b,item.value);$('answers').appendChild(b);});
  }
  function choose(button,value){
    if(locked)return;locked=true;selectedValue=value;
    const correct=stage==='climate'?window.ClimateQuizCore.answerIsCorrect(value,q.answerClimate):window.ClimateQuizCore.answerIsCorrect(value,q.city.index);
    document.querySelectorAll('.choice').forEach(b=>b.disabled=true);
    button.classList.add(correct?'correct':'wrong');
    if(correct)score++;else missed.set(q.id,q);
    answered++;renderStats();renderReview();
    if(stage==='climate'){
      $('feedback').textContent=usesCityStep()?(correct?t().climateSuccess:tr('wrongClimate',{answer:climateLabel(q.answerClimate)})):(correct?t().climateCorrect:tr('climateWrong',{answer:climateLabel(q.answerClimate)}));
      $('next').disabled=false;$('next').textContent=usesCityStep()?t().continue:(index===session.length-1?t().results:t().next);
    }else{
      $('feedback').textContent=correct?t().correctCity:tr('wrongCity',{answer:cityLabel(q.city)});
      $('next').disabled=false;$('next').textContent=index===session.length-1?t().results:t().next;
    }
  }
  function advance(){
    if(!locked){$('feedback').textContent=t().selectOne;return;}
    if(window.ClimateQuizCore.advanceFlow(stage,usesCityStep())==='city'){
      stage='city';locked=false;selectedValue=null;$('prompt').textContent=t().askCity;$('feedback').textContent='';$('next').disabled=true;$('next').textContent=t().next;
      updateStep();showChoices(cityChoices(q));return;
    }
    index++;showCard();
  }
  function skip(){index++;showCard();}
  function renderStats(){
    $('score').textContent=score.toLocaleString();$('done').textContent=answered.toLocaleString();$('accuracy').textContent=answered?`${Math.round(score/answered*100)}%`:'—';$('bank').textContent=totalCards.toLocaleString();
  }
  function renderReview(){
    const list=$('review');if(!list)return;
    if(!missed.size){list.innerHTML=`<div class="small">${t().noMisses}</div>`;return;}
    list.innerHTML=[...missed.values()].slice(-18).reverse().map(item=>{
      const reviewCard=window.ClimateQuizCore.createQuestionRecord(item,sessionConfig.family);
      return `<div class="review-item"><b>${escapeHtml(cityLabel(reviewCard.city))}</b><span>${escapeHtml(climateLabel(reviewCard.answerClimate,sessionConfig.family))} · #${reviewCard.id.toLocaleString()}</span></div>`;
    }).join('');
  }
  function finish(){
    $('quiz').classList.add('hidden');$('end').classList.remove('hidden');$('progress').style.width='100%';
    $('end').innerHTML=`<div class="step">${t().sessionComplete}</div><h2>${score.toLocaleString()} / ${answered.toLocaleString()}</h2><p>${tr('scoreText',{score:score.toLocaleString(),total:answered.toLocaleString()})}</p><p class="small">${tr('reviewCount',{count:missed.size.toLocaleString()})}</p><button class="btn" id="again">${t().practiceAgain}</button>`;
    $('again').onclick=start;
  }
  function escapeHtml(value){return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');}
  function makeProfile(card){
    const source=templates[card.city.climate],lat=card.city.lat,variant=card.variant,cityIdx=card.city.index;
    const hemisphere=lat<0,latAdjustment=Math.max(-10,Math.min(12,(34-Math.abs(lat))*.17));
    let temp=source.t.map((v,m)=>{
      const month=hemisphere?(m+6)%12:m;
      const wave=Math.sin((month+cityIdx%13)*1.17)*(.45+(variant*.035));
      return Math.round((source.t[month]+latAdjustment+(variant-2)*.8+wave)*10)/10;
    });
    let rain=source.p.map((v,m)=>{
      const month=hemisphere?(m+6)%12:m;
      const wave=1+.12*Math.sin((month+cityIdx%17+variant)*.91)+.025*variant;
      return Math.max(0,Math.round(source.p[month]*wave));
    });
    return {temp,rain};
  }
  function drawChart(profile){
    const svg=$('chart'),W=760,H=330,L=58,R=59,T=18,B=43,plotW=W-L-R,plotH=H-T-B;
    const maxP=Math.max(50,Math.ceil(Math.max(...profile.rain)/50)*50),minT=Math.floor(Math.min(...profile.temp)/5)*5,maxT=Math.ceil(Math.max(...profile.temp)/5)*5||5;
    let out='';
    for(let n=0;n<=4;n++){const y=T+plotH*n/4,p=Math.round(maxP*(1-n/4)),tv=Math.round(maxT-(maxT-minT)*n/4);out+=`<line class="gridline" x1="${L}" y1="${y}" x2="${W-R}" y2="${y}"/><text class="axis" x="${L-9}" y="${y+4}" text-anchor="end">${p}</text><text class="axis" x="${W-R+9}" y="${y+4}">${tv}°</text>`;}
    const points=[];
    for(let i=0;i<12;i++){
      const x=L+plotW*(i+.5)/12,y=T+plotH*(1-(profile.temp[i]-minT)/(maxT-minT||1)),height=plotH*profile.rain[i]/maxP,bx=L+plotW*i/12+plotW*.2/12,bw=plotW*.6/12,by=T+plotH-height;
      out+=`<rect class="precip" x="${bx}" y="${by}" width="${bw}" height="${height}" data-month="${i}"/><text class="axis" x="${x}" y="${H-15}" text-anchor="middle">${t().monthsShort[i]}</text>`;points.push([x,y]);
    }
    out+=`<polyline class="temp-line" points="${points.map(p=>p.join(',')).join(' ')}"/>`;
    points.forEach(([x,y],i)=>{out+=`<circle class="temp-point" cx="${x}" cy="${y}" r="4.5" data-month="${i}"/>`;});
    out+=`<text class="axis" transform="translate(16 ${T+plotH/2}) rotate(-90)" text-anchor="middle">${t().precipAxis}</text><text class="axis" transform="translate(${W-8} ${T+plotH/2}) rotate(90)" text-anchor="middle">${t().tempAxis}</text>`;
    svg.innerHTML=out;svg.setAttribute('aria-label',t().chartAlt);
    svg.querySelectorAll('[data-month]').forEach(el=>{
      const show=e=>{const i=Number(el.dataset.month),wrap=svg.parentElement.getBoundingClientRect();$('tip').style.display='block';$('tip').style.left=`${Math.max(0,Math.min(wrap.width-142,e.clientX-wrap.left+9))}px`;$('tip').style.top=`${Math.max(0,e.clientY-wrap.top-38)}px`;$('tip').innerHTML=`<b>${t().months[i]}</b><br>${profile.temp[i]} °C · ${profile.rain[i]} mm`;};
      el.addEventListener('pointermove',show);el.addEventListener('pointerleave',()=>$('tip').style.display='none');el.addEventListener('click',show);
    });
  }

  const toggleLanguage=()=>{lang=lang==='en'?'zh':'en';localStorage.setItem('climate-quiz-language',lang);applyLanguage();if(q)drawChart(makeProfile(q));};
  const toggleTheme=()=>{const systemTheme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';theme=theme==='default'?(systemTheme==='dark'?'light':'dark'):theme===systemTheme?'default':systemTheme;localStorage.setItem('climate-quiz-theme',theme);applyTheme();applyLanguage();};
  $('languageToggle').addEventListener('click',toggleLanguage);$('languageToggleGame').addEventListener('click',toggleLanguage);
  $('learningMode').addEventListener('change',()=>{clearPendingSession();updateModeFields();});
  $('customTaxonomy').addEventListener('change',clearPendingSession);$('answerFormat').addEventListener('change',clearPendingSession);
  $('themeToggle').addEventListener('click',toggleTheme);$('themeToggleGame').addEventListener('click',toggleTheme);
  $('next').addEventListener('click',advance);$('skip').addEventListener('click',skip);$('restart').addEventListener('click',start);
  $('newSession').addEventListener('click',()=>{$('game').classList.add('hidden');$('setup').classList.remove('hidden');});
  $('openReview').addEventListener('click',()=>{$('reviewOverlay').classList.remove('hidden');$('closeReview').focus();});
  $('closeReview').addEventListener('click',()=>$('reviewOverlay').classList.add('hidden'));
  $('reviewOverlay').addEventListener('click',e=>{if(e.target===$('reviewOverlay'))$('reviewOverlay').classList.add('hidden');});
  window.addEventListener('keydown',e=>{if(e.key==='Escape')$('reviewOverlay').classList.add('hidden');});
  const systemThemeQuery=window.matchMedia('(prefers-color-scheme: dark)');
  systemThemeQuery.addEventListener?.('change',()=>{if(theme==='default')applyTheme();});
  applyTheme();applyLanguage();updateModeFields();renderStats();renderReview();
})();
