/*
function getProfileInfo(pId){
    var arrUser = getAllUsers();
    var profileInfo = [];
    for(var i = 0; i < arrUser.length; i++){
      if(arrUser[i].id_user == pId){
        profileInfo = arrUser[i];
        break;
      }
    }
    return profileInfo;
  }

function getUserProfiles(){
  var arrUser = JSON.parse(localStorage.getItem('arrUser'));
  if(arrUser == null){
    arrUser = [];
  }
  return arrUser;
  replaced by getAllUsers
}

function modProfile(pProfile){
  var arrProfiles = getAllUsers();
  for(var i = 0; i < arrProfiles.length; i++){
    if(arrProfiles[i][0] == pProfile[0]){
      arrProfiles[i] = pProfile;
    }
  }
  localStorage.setItem('arrUser', JSON.stringify(arrProfiles));
  replaced by UpdateUserData / UpdateTeacher / UpdateAthelte
}

*/
//Array getters for student profile
function getAcademyInfo(pAcademyId){
  var acInfo = [];
  var arrAcademies = getAcademyDB();
  if(arrAcademies == null){
    arrAcademies = [];
  }
  for(var i = 0; i < arrAcademies.length; i++){
    if(arrAcademies[i].id_academy == pAcademyId){
      acInfo = arrAcademies[i];
    }
  }
  return acInfo;
}
/*
function getGrades(){
  var arrGrades = JSON.parse(localStorage.getItem('arrCategoryLevel'));
  if(arrGrades == null){
    arrGrades = [];
  }
  return arrGrades;
}
replaced by getCategoryLevel
*/
function getGradeInfo(pGradeId){
  var grade = [];
  var arrGrade = getCategoryLevel();
  for(var i = 0; i < arrGrade.length; i++){
    if(arrGrade[i].id_category_level == pGradeId){
      grade = arrGrade[i];
      break;
    }
  }
  return grade;
}
/*
function getWeightCatInfo(pWeightCatId){
  var weightCat = [];
  var arrWeightCats = JSON.parse(localStorage.getItem('arrCategoryWeight'));
  for(var i = 0;  i < arrWeightCats.length; i++){
    if(arrWeightCats[0][i] == pWeightCatId){
      weightCat = arrWeightCats[i];
    }
  }
  return weightCat;
  replaced by getCategoryWeight

}

function getAgeCatInfo(pAgeCatId){
  var ageCat = [];
  var arrAgeCats = JSON.parse(localStorage.getItem('arrCategoryAge'));
  for(var i = 0; i < arrAgeCats.length; i++){
    if(arrAgeCats[i][0] == pAgeCatId){
      ageCat = arrAgeCats[i];
    }
  }
  return ageCat;
}
replaced by getCategoryByAge
*/
//Function to get all url segments
  function getUrlVars() {
       var vars = {};
       var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
       });
       return vars;
  }

//validation functions
function validateText(TextToValidate) {
	var returnBool = true;
	if (TextToValidate == "") {
        returnBool = false;
    }
	return returnBool;
}

function validateNumber(NumberToValidate){
	var returnBool = true;
	if (isNaN(NumberToValidate) || NumberToValidate < 1 || NumberToValidate > 99999999) {
        returnBool = false;
    }
	return returnBool;
}

function validateEmail(EmailToValidate){
	var atPos = EmailToValidate.indexOf("@");
    var dotPos = EmailToValidate.lastIndexOf(".");
	var returnBool = true;
    if (atPos<1 || dotPos<atPos+2 || dotPos+2>=x.length) {
        returnBool = false;
    }
	return returnBool;
}
/*
function getAcademies(){
  var arrAcademies = JSON.parse(localStorage.getItem('arrAcademy'));
  if(arrAcademies == null){
    arrAcademies = [];
  }
  return arrAcademies;
}
replaced by getAcademyDB
*/
function getAcademyId(name){
  var id;
  var academies = getAcademyDB();
  for(var i = 0; i < academies.length; i++){
    if(academies[i].name == name){
      id = academies[i].id_academy;
      break;
    }
  }
  return id;
}

function getAcademyName(id){
  var name = 'Ninguna';
  var academies = getAcademyDB();
  for(var i = 0; i < academies.length; i++){
    if(academies[i].id_academy == id){
      name = academies[i].name;
    }
  }
  return name;
}
/*
function getUserType(){
  var type = JSON.parse(localStorage.getItem('usertype'));
  return type;
}
replaced by getUserTypeDB
*/
function getGradeID(name){
  var grades = getCategoryLevel();
  var id = ' ';
  for(var i = 0; i < grades.length; i++){
    if(grades[i].name_category_level == name){
      id = grades[i].id_category_level;
    }
  }
  return id;
}
//new php functions
