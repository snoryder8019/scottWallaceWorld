const techHistory = document.getElementById('techHistoryDiv');
const leadership = document.getElementById('leadershipDiv');
const techSkills = document.getElementById('teckSkillsDiv');
const backgroundDiv = document.getElementById('backgroundDiv');
const abstractDiv = document.getElementById('abstractDiv');
const mygoalsDiv = document.getElementById('mygoalsDiv');





function collapse($zzy){
    console.log('collapse')
    if($zzy.style.display==="block"){
$zzy.style.display="none";
}else{
    $zzy.style.display="block"
}
}