/* Quiz classifications, compatibility mappings, question records, and answer helpers. */
(() => {
  'use strict';
  const easy = [
    ['tropical-rainforest','Tropical Rainforest Climate','热带雨林气候'],['tropical-monsoon','Tropical Monsoon Climate','热带季风气候'],
    ['tropical-savanna','Tropical Savanna Climate','热带稀树草原气候'],['tropical-desert','Tropical Desert Climate','热带沙漠气候'],
    ['subtropical-monsoon','Subtropical Monsoon Climate','亚热带季风气候'],['subtropical-mediterranean','Subtropical Mediterranean Climate','亚热带地中海气候'],
    ['temperate-oceanic','Temperate Oceanic Climate','温带海洋性气候'],['temperate-continental','Temperate Continental Climate','温带大陆性气候'],
    ['tundra','Tundra Climate','寒带苔原气候'],['ice-cap','Ice Cap Climate','寒带冰原气候']
  ];
  const medium = [
    ['tropical-rainforest','Tropical Rainforest Climate','热带雨林气候'],['tropical-desert','Tropical Desert Climate','热带沙漠气候'],
    ['tropical-savanna','Tropical Savanna Climate','热带稀树草原气候'],['tropical-monsoon','Tropical Monsoon Climate','热带季风气候'],
    ['subtropical-monsoon','Subtropical Monsoon Climate','亚热带季风气候'],['humid-subtropical','Humid Subtropical Climate','亚热带季风性湿润气候'],
    ['subtropical-steppe-desert','Subtropical Steppe and Desert Climate','亚热带草原和沙漠气候'],['subtropical-mediterranean','Subtropical Mediterranean Climate','亚热带地中海气候'],
    ['subarctic-coniferous','Subarctic Coniferous Forest Climate','亚寒带针叶林气候'],['temperate-deciduous','Temperate Deciduous Broadleaf Forest Climate','温带落叶阔叶林气候'],
    ['temperate-steppe','Temperate Steppe Climate','温带草原气候'],['temperate-desert','Temperate Desert Climate','温带沙漠气候'],
    ['temperate-oceanic','Temperate Oceanic Climate','温带海洋性气候'],['temperate-monsoon','Temperate Monsoon Climate','温带季风气候'],
    ['tundra','Tundra Climate','寒带苔原气候'],['ice-cap','Ice Cap Climate','寒带冰原气候'],['highland','Highland Climate','高原高山气候']
  ];
  const koppenCodes = ['Af','Am','Aw','As','BWh','BWk','BSh','BSk','Csa','Csb','Csc','Cwa','Cwb','Cwc','Cfa','Cfb','Cfc','Dsa','Dsb','Dsc','Dsd','Dwa','Dwb','Dwc','Dwd','Dfa','Dfb','Dfc','Dfd','ET','EF'];
  const koppenNames = {
    Af:['Tropical rainforest climate','热带雨林气候'],Am:['Tropical monsoon climate','热带季风气候'],Aw:['Tropical savanna climate','热带稀树草原气候'],As:['Tropical savanna climate, dry summers','热带夏干型稀树草原气候'],
    BWh:['Hot desert climate','热带沙漠气候'],BWk:['Cold desert climate','温带沙漠气候'],BSh:['Hot semi-arid climate','热带半干旱气候'],BSk:['Cold semi-arid climate','温带半干旱气候'],
    Csa:['Hot-summer Mediterranean climate','炎热夏季地中海气候'],Csb:['Warm-summer Mediterranean climate','暖夏地中海气候'],Csc:['Cold-summer Mediterranean climate','冷夏地中海气候'],
    Cwa:['Monsoon-influenced humid subtropical climate, dry winter','冬干型湿润亚热带气候'],Cwb:['Subtropical highland climate, dry winter','冬干型亚热带高地气候'],Cwc:['Cold subtropical highland climate, dry winter','冬干型冷亚热带高地气候'],
    Cfa:['Humid subtropical climate','湿润亚热带气候'],Cfb:['Temperate oceanic climate','温带海洋性气候'],Cfc:['Subpolar oceanic climate','亚寒带海洋性气候'],
    Dsa:['Hot-summer continental climate, dry summer','夏干型炎热夏季大陆性气候'],Dsb:['Warm-summer continental climate, dry summer','夏干型暖夏大陆性气候'],Dsc:['Subarctic climate, dry summer','夏干型亚寒带气候'],Dsd:['Extremely cold subarctic climate, dry summer','夏干型严寒亚寒带气候'],
    Dwa:['Hot-summer continental climate, dry winter','冬干型炎热夏季大陆性气候'],Dwb:['Warm-summer continental climate, dry winter','冬干型暖夏大陆性气候'],Dwc:['Subarctic climate, dry winter','冬干型亚寒带气候'],Dwd:['Extremely cold subarctic climate, dry winter','冬干型严寒亚寒带气候'],
    Dfa:['Hot-summer humid continental climate','炎热夏季湿润大陆性气候'],Dfb:['Warm-summer humid continental climate','暖夏湿润大陆性气候'],Dfc:['Subarctic climate','亚寒带气候'],Dfd:['Extremely cold subarctic climate','严寒亚寒带气候'],ET:['Tundra climate','苔原气候'],EF:['Ice cap climate','冰原气候']
  };
  const easyContinentalMerge = [
    ['subarctic-coniferous','Subarctic Coniferous Forest Climate','亚寒带针叶林气候'],
    ['temperate-deciduous','Temperate Deciduous Broadleaf Forest Climate','温带落叶阔叶林气候'],
    ['temperate-steppe','Temperate Steppe Climate','温带草原气候'],
    ['temperate-desert','Temperate Desert Climate','温带沙漠气候']
  ];
  const mediumToEasy = Object.freeze({
    'tropical-rainforest':'tropical-rainforest','tropical-desert':'tropical-desert','tropical-savanna':'tropical-savanna','tropical-monsoon':'tropical-monsoon',
    'subtropical-monsoon':'subtropical-monsoon','humid-subtropical':'subtropical-monsoon','subtropical-steppe-desert':'tropical-desert','subtropical-mediterranean':'subtropical-mediterranean',
    'subarctic-coniferous':'temperate-continental','temperate-deciduous':'temperate-continental','temperate-steppe':'temperate-continental','temperate-desert':'temperate-continental',
    'temperate-oceanic':'temperate-oceanic','temperate-monsoon':'temperate-continental','tundra':'tundra','ice-cap':'ice-cap','highland':'tundra'
  });
  const mediumBySource = {
    Af:['tropical-rainforest'],Am:['tropical-monsoon'],Aw:['tropical-savanna'],BWh:['tropical-desert'],
    BWk:['temperate-desert'],BSh:['subtropical-steppe-desert','temperate-steppe'],BSk:['temperate-steppe'],Csa:['subtropical-mediterranean'],
    Cfb:['temperate-oceanic','highland'],Cfa:['subtropical-monsoon','humid-subtropical','temperate-deciduous','temperate-monsoon'],
    Dfb:['subarctic-coniferous','temperate-deciduous','temperate-monsoon'],ET:['tundra','ice-cap','highland']
  };
  const hardBySource = {
    Af:['Af'],Am:['Am'],Aw:['Aw','As'],BWh:['BWh'],BWk:['BWk'],BSh:['BSh'],BSk:['BSk'],
    Csa:['Csa','Csb','Csc'],Cfa:['Cwa','Cwb','Cwc','Cfa'],Cfb:['Cfb','Cfc'],
    Dfb:['Dsa','Dsb','Dsc','Dsd','Dwa','Dwb','Dwc','Dwd','Dfa','Dfb','Dfc','Dfd'],ET:['ET','EF']
  };
  function sourceClimateFor(c) {
    const a=Math.abs(c.lat),lon=c.lon,n=c.name.toLowerCase();
    if(a>=66)return 'ET';
    if(a>=52)return 'Dfb';
    const southwestUS=lon>-125&&lon<-105&&c.lat>23&&c.lat<40;
    const atacama=lon>-79&&lon<-67&&c.lat<-12&&c.lat>-37;
    const saharaArabia=lon>-18&&lon<62&&c.lat>15&&c.lat<35;
    const centralAsia=lon>45&&lon<112&&c.lat>35&&c.lat<50;
    const australianInterior=lon>115&&lon<145&&c.lat<-18&&c.lat>-36;
    const desertWest=southwestUS||atacama||saharaArabia||centralAsia||australianInterior;
    if(desertWest)return a>34?(c.lat>0?'BWk':'BSk'):(a>25?'BWh':'BSh');
    if(a<12){
      if((lon>=90&&lon<=155&&n.length%2===0)||(lon<=-40&&lon>=-80&&a<7))return 'Af';
      return (lon>65&&lon<125)||(lon>-10&&lon<55)?'Am':'Aw';
    }
    if(a<23)return (lon>-20&&lon<55&&a<18)?'BSh':'Aw';
    if(a<37){
      if((lon>-12&&lon<38)||(lon>-130&&lon<-112)||(lon>108&&lon<122))return 'Csa';
      return (lon<-45||lon>110)?'Cfa':'Cfb';
    }
    if(a<52)return (lon>-12&&lon<30)||(lon>-135&&lon<-122)?'Cfb':'Cfa';
    return 'Dfb';
  }
  const taxonomies = Object.freeze({ easy, medium, hard: koppenCodes.map(code => [code,...koppenNames[code]]) });
  function shuffle(items, rng = Math.random) {
    const out=[...items];
    for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
    return out;
  }
  function options(correct,candidates,key=x=>x,rng=Math.random,count=4) {
    const seen=new Set([String(key(correct))]);
    const unique=[];
    for(const item of candidates){const value=String(key(item));if(!seen.has(value)){seen.add(value);unique.push(item);}}
    return shuffle([correct,...shuffle(unique,rng).slice(0,count-1)],rng);
  }
  function resolveMode(mode,taxonomy='easy',format='climate') {
    const family=mode==='custom'?taxonomy:mode;
    if(!taxonomies[family])throw new Error(`Unknown climate mode: ${family}`);
    return Object.freeze({family,includeCity:mode==='custom'?format==='city':mode!=='easy'});
  }
  function advanceFlow(stage,includeCity){return stage==='climate'&&includeCity?'city':'next';}
  function classForCard(family,sourceClimate,cardId) {
    const id=Math.abs(Number(cardId)||0);
    if(family==='hard'){
      const classes=hardBySource[sourceClimate]||hardBySource.Dfb;
      return classes[id%classes.length];
    }
    const mediumClasses=mediumBySource[sourceClimate]||mediumBySource.Dfb;
    const mediumClass=mediumClasses[id%mediumClasses.length];
    return family==='easy'?(mediumToEasy[mediumClass]||'temperate-continental'):mediumClass;
  }
  function createQuestionRecord(base,family) {
    const sourceClimate=base.city.climate;
    return {...base,family,sourceClimate,answerClimate:classForCard(family,sourceClimate,base.id)};
  }
  function climateOptions(question,family,rng=Math.random,lang='en') {
    const catalog=taxonomies[family];
    return options(question.answerClimate,catalog.map(x=>x[0]),x=>x,rng).map(id=>{
      const row=catalog.find(x=>x[0]===id);
      const label=family==='hard'?`${id} — ${lang==='zh'?koppenNames[id][1]:koppenNames[id][0]}`:row[lang==='zh'?2:1];
      return {value:id,label};
    });
  }
  function cityOptions(question,cities,family,rng=Math.random) {
    const correct=question.city;
    const displayKey=c=>`${c.name}\u0000${c.country}`;
    const correctLabel=displayKey(correct);
    const uniqueCities=new Map();
    for(const city of cities){
      if(city.index===correct.index)continue;
      const key=displayKey(city);
      if(key===correctLabel)continue;
      if(uniqueCities.has(key))continue;
      const matches=Array.from({length:5},(_,v)=>classForCard(family,city.climate,city.index*5+v+1)).includes(question.answerClimate);
      if(matches)uniqueCities.set(key,city);
    }
    let pool=[...uniqueCities.values()];
    if(pool.length<3){
      const all=new Map();
      for(const city of cities)if(city.index!==correct.index&&displayKey(city)!==correctLabel&&!all.has(displayKey(city)))all.set(displayKey(city),city);
      pool=[...all.values()];
    }
    return options(correct,pool,c=>c.index,rng).map(city=>({value:String(city.index),city}));
  }
  function answerIsCorrect(selected,answer){return String(selected)===String(answer);}
  window.ClimateQuizCore=Object.freeze({easy,medium,koppenCodes,koppenNames,easyContinentalMerge,mediumToEasy,taxonomies,shuffle,options,resolveMode,advanceFlow,sourceClimateFor,classForCard,createQuestionRecord,climateOptions,cityOptions,answerIsCorrect});
})();
