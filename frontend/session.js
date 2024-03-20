let speech= new SpeechSynthesisUtterance();

let voices =[];
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[1];
}
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}) 

voice_Text.addEventListener('click',()=>{
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
        console.log(transcript);
        document.querySelector("textarea").value=transcript;
    });
    
    if (speech == true) {
        recognition.start();
    }
})
let giveAns=document.getElementById("give-ans");
giveAns.addEventListener("click",function(){
    let stringIn=document.querySelector("textarea").value;
stringIn=stringIn.trim();
stringIn+=" ";
stringIn=stringIn.toLowerCase();
let stringImpWord="";
var c=0;
var keyCount=0;
for(let i=0;i<stringIn.length;i++)
{
    if(stringIn[i]===' ')
    { 
      let key= stringIn.substring(c,i);
      c=i+1;
    if(key==='i'||key==='some'|| key==='hi' || key==='are' || key==='is' || key==='am' ||key==='in' || key==='a' || key==='what' 
    || key==='define' || key==='explain' || key==='elaborate' || key==='was' || key==='has' || key==='have'|| key==='describe' ||
    key==='how' || key==='if'|| key==='whatif' || key==='inshort' || key==='of'|| key==='will'|| key==='been'|| key==='be'||key==='on'||key==='give'||key==='few'||key==='examples'||key==='example'||key==='some')
      continue;
      else
      {
        keyCount++;
        stringImpWord+=key+"_";
      }
    }
}
stringImpWord=stringImpWord.slice(0,(stringImpWord.length)-1);
console.log(stringImpWord);
let ans={
    modern_methods_irrigation:"Modern methods of irrigation help us to use water economically. The main methods used are as follows:-\n(i) Sprinkler System: This system is more useful on the uneven land where sufficient water is not available.Theperpendicular pipes, having rotating nozzles on top, are joined to the main pipeline at regular intervals.When water is allowed to flow through the main pipe under pressure with the help of a pump, it escapes from the rotating nozzlesIt gets sprinkled on the crop as if it is raining. Sprinkler is very useful for lawns,coffee plantation and several other crops.\n(ii) Drip system : In this system, the water falls drop by drop directly near the roots. So it is called drip system. Itis the best technique for watering fruit plants, gardens and trees. Water is not wasted at all. It is a boon in  regions where availability of water is poor",

    sprinkler_system:"Sprinkler System: This system is more useful on the uneven land where sufficient water is not available. Theperpendicular pipes, having rotating nozzles on top, are joined to the main pipeline at regular intervals.  When water is allowed to flow through the main pipe under pressure with the help of a pump, it escapes from the rotating nozzles. It gets sprinkled on the crop as if it is raining. Sprinkler is very useful for lawns,  coffee plantation and several other crops", 

    sprinkler_irrigation:"Sprinkler System: This system is more useful on the uneven land where sufficient water is not available. Theperpendicular pipes, having rotating nozzles on top, are joined to the main pipeline at regular intervals.  When water is allowed to flow through the main pipe under pressure with the help of a pump, it escapes from the rotating nozzles. It gets sprinkled on the crop as if it is raining. Sprinkler is very useful for lawns,  coffee plantation and several other crops", 

    drip_system:"Drip system : In this system, the water falls drop by drop directly near the roots. So it is called drip system. It is the best technique for watering fruit plants, gardens and trees. Water is not wasted at all. It is a boon in regions where availability of water is poor ",

    drip_irrigation:"Drip system : In this system, the water falls drop by drop directly near the roots. So it is called drip system. It is the best technique for watering fruit plants, gardens and trees. Water is not wasted at all. It is a boon in regions where availability of water is poor ",

    protection_from_weeds:"In a field many other undesirable plants may grow naturally along with the crop. These undesirable plants are called weeds.\n The removal of weeds is called weeding.\n  Weeding is necessary since weeds compete with the crop plants for water, nutrients, space and light. Thus, they affect the growth of the crop. Some weeds interfere even in harvesting and may be poisonous for animals and human beings.\n \n Farmers adopt many ways to remove weeds and control their growth. \n Tilling before sowing of crops helps in uprooting and killing of weeds, which may then dry up and get mixed with the soil. The best time for the removal of weeds is before they produce flowers and seeds.\n\n The manual removal includes physical removal of weeds by uprooting or cutting them close to the ground, from time to time \n. This is done with the help of a khurpi. A seed drill is also used to uproot weeds. Weeds are also controlled by using certain chemicals, called weedicides, like 2,4-D. These are sprayed in the fields to kill the weeds. They do not damage the crops. The weedicides are diluted with water to the extent required and sprayed in the fields with a sprayer.  As already mentioned, the weedicides are sprayed during the vegetative growth of weeds before flowering and seed formation. Spraying of weedicides may affect the health of farmers. So they should use these chemicals very carefully.They should cover their nose and mouth with a piece of cloth during spraying of these chemicals",

    weeding:"The removal of weeds is called weeding.\n Weeding is necessary since weeds compete with the crop plants for water, nutrients, space and light. Thus, they affect the growth of the crop. Some weeds interfere even in harvesting and may be poisonous for animals and human beings.",

    remove_weeds :"Farmers adopt many ways to remove weeds and control their growth. \n\nTilling before sowing of crops helps in uprooting and killing of weeds, which may then dry up and get mixed with the soil. The best time for the removal of weeds is before they produce flowers and seeds.\n The manual removal includes physical removal of weeds by uprooting or cutting them close to the ground, from time to time. This is done with the help of a khurpi. A seed drill is also used to uproot weeds. Weeds are also controlled by using certain chemicals, called weedicides, like 2,4-D. These are sprayed in the fields to kill the weeds. They do not damage the crops. The weedicides are    diluted with water to the extent required and sprayed in the fields with a sprayer",

    control_weeds_growth:"Farmers adopt many ways to remove weeds and control their growth. \n\nTilling before sowing of crops helps in uprooting and killing of weeds, which may then dry up and get mixed with the soil. The best time for the removal of weeds is before they produce flowers and seeds.\n The manual removal includes physical removal of weeds by uprooting or cutting them close to the ground, from time to time. This is done with the help of a khurpi. A seed drill is also used to uproot weeds. Weeds are also controlled by using certain chemicals, called weedicides, like 2,4-D. These are sprayed in the fields to kill the weeds. They do not damage the crops. The weedicides are    diluted with water to the extent required and sprayed in the fields with a sprayer",   

    manual_remova_weeds:"Farmers adopt many ways to remove weeds and control their growth. \n\nTilling before sowing of crops helps in uprooting and killing of weeds, which may then dry up and get mixed with the soil. The best time for the removal of weeds is before they produce flowers and seeds.\n The manual removal includes physical removal of weeds by uprooting or cutting them close to the ground, from time to time. This is done with the help of a khurpi. A seed drill is also used to uproot weeds. Weeds are also controlled by using certain chemicals, called weedicides, like 2,4-D. These are sprayed in the fields to kill the weeds. They do not damage the crops. The weedicides are    diluted with water to the extent required and sprayed in the fields with a sprayer",

    weedicides:"Weeds are also controlled by using certain chemicals,    called weedicides, like 2,4-D. These are sprayed in the fields to kill the weeds. They do not damage the crops. The weedicides are diluted with water to the extent required and sprayed in the fields with a sprayer.",

    weedicides_effect_person:"As we know , the weedicides are sprayed during the vegetative growth of weeds before flowering and seed formation. Spraying of weedicides may affect the health of farmers. So they should use these chemicals very carefully.They should cover their nose and mouth with a piece of cloth during spraying of these chemicals.",

    effect_weedicides_person:"As we know , the weedicides are sprayed during the vegetative growth of weeds before flowering and seed formation. Spraying of weedicides may affect the health of farmers. So they should use these chemicals very carefully.They should cover their nose and mouth with a piece of cloth during spraying of these chemicals.",

    harmfull_effect_weedicides_person:"As we know , the weedicides are sprayed during the vegetative growth of weeds before flowering and seed formation. Spraying of weedicides may affect the health of farmers. So they should use these chemicals very carefully.They should cover their nose and mouth with a piece of cloth during spraying of these chemicals.",
    
    harvesting:"Harvesting of a crop is an important task. The cutting of crop after it is mature is called harvesting. In harvesting, crops are pulled out or cut close to the ground. It usually takes 3 to 4 months for a cereal crop to mature. Harvesting in our country is either done manually by sickle or by a machine called harvester",

    thresher:"In the harvested crop, the grain seeds need to be separated from the chaff. This process is called threshing. This is carried out with the help of a machine called \‘combine\’ which is in fact a harvester as well as a thresher",

    harvest_festivals:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu",

    harvesting_festivals:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu",

    harvesting_festival:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu",

    harvest_festival:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu",

    pongal:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu",

    baisakhi:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu",
    
    holi:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu", 
    
    diwali:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu", 

    nabanya:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu", 

    bihu:"After three or four months of hard work there comes the day of the harvest. The sight of golden fields of standing crop, laden with grain, fills the hearts of farmers with joy and a sense of well -being. The efforts of the past season have borne fruit and it is time to relax and enjoy a little. The period of harvest is, thus, of great joy and happiness in all parts of India. Men and women celebrate it with great enthusiasm. Special festivals associated with the harvest season are Pongal, Baisakhi, Holi, Diwali, Nabanya and Bihu",
    
    storage:"Storage of produce is an important task. If the harvested grains are to be kept for longer time, they should be safe from moisture, insects, rats and microorganisms. Harvested grains have more moisture. If freshly harvested  grains (seeds) are stored without drying, they may get spoilt or attacked by organisms, making them unfit for use or for germination. Hence, before storing them, the grains are properly dried in the sun to reduce the moisture in them. This prevents the attack by insect pests, bacteria and fungi. Farmers store grains in jute bags or metallic bins. However, large scale storage of grains is done in silos and granaries to protect them from pests like rats and insects Dried neem leaves are used for storing food grains at home. For storing large quantities of grains in big godowns, specific chemical treatments are required to protect them from pests and microorganisms",

    grains_seeds_stored_without:"If freshly harvested grains (seeds) are stored without drying, they may get spoilt or attacked by organisms, making them unfit for use or for germination. Hence, before storing them, the grains are properly dried in the sun to reduce the moisture in them. This prevents the attack by insect pests, bacteria and fungi",

    method_storage:"Farmers store grains in jute bags or metallic bins. However, large scale storage of grains is done in silos and granaries to protect them from pests like rats and insects Dried neem leaves are used for storing food grains at home. For storing large quantities of grains in big godowns, specific chemical treatments are required to protect them from pests    and microorganisms.",

    storage_method:"Farmers store grains in jute bags or metallic bins. However, large scale storage of grains is done in silos and granaries to protect them from pests like rats and insects Dried neem leaves are used for storing food grains at home. For storing large quantities of grains in big godowns, specific chemical treatments are required to protect them from pests    and microorganisms.",

    animal_husbandry:" like plants, animals also provide us with different kinds of food. Many people living in the coastal areas consume fish as a major part of their diet. We know that the process of crop production involves a number of steps like selection of seeds, sowing, etc. Similarly, animals reared at home or in farms, have to be provided with proper food, shelter and care. When this is done on a large scale, it is called animal husbandr"

}
document.querySelector("textarea").value=ans[stringImpWord];
})