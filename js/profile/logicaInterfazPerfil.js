var usertype = getUserName();
var id = getUrlVars()["id"];
var profileInfo = getUserToModify(id)[0];


fillProfileForm();
function fillProfileForm(){
  var id = getUrlVars()["id"];
  var profileInfo = getUserToModify(id)[0];
  //var academyInfo = [];
  //var div = document.querySelector('#profileImageInput').parentElement;
  //var divSelect = document.querySelector('#dropDownAcademy').parentElement;
  //var labelSelect = document.createElement('label');
  //labelSelect.for = 'dropDownAcademy';

  if(profileInfo.length == 0){
    var notify = document.getElementById('alert');
    notify.innerHTML = ' ';

    var textN = document.createTextNode("No hay usuarios registrados...");
    var pTag = document.createElement("P");

    pTag.appendChild(textN);
    notify.appendChild(pTag);
    notify.classList.add('error');
  }else{
    //var imgDisplay = document.createElement('img');
    //var imgName = getImgSrcPNG(profileInfo[0]);
    //var academyName = getAcademyName(profileInfo[9]);
    //var imgSrc = '../../images/profile/' + imgName;
    //imgDisplay.src = imgSrc;
    //for(var i = 0; i < profileInfo.length; i++){
    document.querySelector('#userID').value = profileInfo.user_identification;
    document.querySelector('#userID').disabled = 'true';
    document.querySelector('#txtUserName').value = profileInfo.user_first_name + ' ' + profileInfo.user_second_name;
    document.querySelector('#txtUserName').disabled = true;
    document.querySelector('#txtLastName').value = profileInfo.user_lastname1 + ' ' + profileInfo.user_lastname2;
    document.querySelector('#txtLastName').disabled = true;
    document.querySelector('#birthDate').value = profileInfo.dateBirth;
    document.querySelector('#birthDate').disabled = true;
    document.querySelector('#txtAge').value = profileInfo.user_age;
    document.querySelector('#txtAge').disabled = true;
    document.querySelector('#txtPhone').value = profileInfo.phone;
    document.querySelector('#txtPhone').disabled = true;
    document.querySelector('#txtEmailUser').value = profileInfo.user_mail;
    document.querySelector('#txtEmailUser').disabled = true;
    document.querySelector('#txtGender').value = profileInfo.user_gender;
    document.querySelector('#txtGender').disabled = true;
    //drawImgInput();

      var fatherElement = document.getElementById('right');
      var childmodifybtn = document.getElementById('space_modify_photo');
      var chilmodifyPassword = document.getElementById('space_modify_password');
      var goBackBtn= document.createElement('input');
      
     

    if (usertype[1] == 3 && profileInfo.UserType_id_user_type == 4) {
        document.getElementById('btnModProfile').style.display = 'none';
        fatherElement.removeChild(childmodifybtn);
        fatherElement.removeChild(chilmodifyPassword);
      drowProfilJustTo();
      fillStudentFields(id);
      goBackBtn.setAttribute("type", "button");
      goBackBtn.setAttribute("value","Regresar");
      goBackBtn.addEventListener('click',goBack);
      goBackBtn.classList.add('btn','btnImportant');
      document.getElementById('footerbtmn').appendChild(goBackBtn);



    }
    else if(profileInfo.UserType_id_user_type == 4){
      drawStudentFields();
      fillStudentFields(id);
    }
    else if(profileInfo.UserType_id_user_type == 3){
      drawTeacherFields(id);
    }

  }
}

function drawStudentFields(){
  var divColLeft = document.querySelector('.column-left');
  var divColRight = document.querySelector('.column-right');

  var divGroup1 = document.createElement('div');
  divGroup1.classList.add('group');
  var divGroup2 = document.createElement('div');
  divGroup2.classList.add('group');
  var divGroup3 = document.createElement('div');
  divGroup3.classList.add('group');
  var divGroup4 = document.createElement('div');
  divGroup4.classList.add('group');
  var divGroup5 = document.createElement('div');
  divGroup5.classList.add('group');
  var divGroup6 = document.createElement('div');
  divGroup6.classList.add('group');
  var divGroup7 = document.createElement('div');
  divGroup7.classList.add('group');
  var divGroup8 = document.createElement('div');
  divGroup8.classList.add('group');

  var weightLbl = document.createElement('label');
  var heightLbl = document.createElement('label');
  var winsLbl = document.createElement('label');
  var exhibitionsLbl = document.createElement('label');
  var eventsLbl = document.createElement('label');
  var gradeLbl = document.createElement('label');
  var catWeightLbl = document.createElement('label');
  var catAgeLbl = document.createElement('label');
  var exhibitionsLbl = document.createElement('label');
  var tournamentsLbl = document.createElement('label');
  var tournamentsWonLbl = document.createElement('label');

  var weightInput = document.createElement('input');
  var heightInput = document.createElement('input');
  var winsInput = document.createElement('input');
  var exhibitionsInput = document.createElement('input');
  var eventsInput = document.createElement('input');
  var gradeInput = document.createElement('input');
  var catWeightInput = document.createElement('input');
  var catAgeInput = document.createElement('input');
  var exhibitionsInput = document.createElement('input');
  var tournamentsInput = document.createElement('input');
  var tournamentsWonInput = document.createElement('input');

  weightLbl.for = 'txtWeight';
  weightLbl.innerHTML = 'Peso';

  heightLbl.for = 'txtHeight';
  heightLbl.innerHTML = 'Altura';

  winsLbl.for = 'txtWins';
  winsLbl.innerHTML = 'Victorias';

  exhibitionsLbl.for = 'txtExhibitions';
  exhibitionsLbl.innerHTML = 'Exhibiciones';

  eventsLbl.for = 'txtEvents';
  eventsLbl.innerHTML = 'Torneos';

  gradeLbl.for = 'txtGrade';
  gradeLbl.innerHTML = 'Grado';

  catWeightLbl.for = 'txtCatWeight';
  catWeightLbl.innerHTML = 'Categoría por peso';

  catAgeLbl.for = 'txtCatAge';
  catAgeLbl.innerHTML = 'Categoría por edad';


  weightInput.id = 'txtWeight';
  weightInput.type = 'text';

  heightInput.id = 'txtHeight';
  heightInput.type = 'text';
  heightInput.required = true;

  winsInput.id = 'txtWins';
  winsInput.type = 'text';

  exhibitionsInput.id = 'txtExhibitions';
  exhibitionsInput.type = 'text';

  eventsInput.id = 'txtEvents';
  eventsInput.type = 'text';

  gradeInput.id = 'txtGrade';
  gradeInput.type = 'text';

  catWeightInput.id = 'txtCatWeight';
  catWeightInput.type = 'text';

  catAgeInput.id = 'txtCatAge';
  catAgeInput.type = 'text';


  divColLeft.appendChild(divGroup1);
  divColLeft.appendChild(divGroup2);
  divColLeft.appendChild(divGroup3);
  divColLeft.appendChild(divGroup4);

  divColRight.appendChild(divGroup5);
  divColRight.appendChild(divGroup6);
  divColRight.appendChild(divGroup7);
  divColRight.appendChild(divGroup8);

  divGroup1.appendChild(weightLbl);
  divGroup1.appendChild(weightInput);

  divGroup2.appendChild(heightLbl);
  divGroup2.appendChild(heightInput);

  divGroup3.appendChild(winsLbl);
  divGroup3.appendChild(winsInput);

  divGroup4.appendChild(exhibitionsLbl);
  divGroup4.appendChild(exhibitionsInput);

  divGroup5.appendChild(eventsLbl);
  divGroup5.appendChild(eventsInput);

  divGroup6.appendChild(gradeLbl);
  divGroup6.appendChild(gradeInput);

  divGroup7.appendChild(catWeightLbl);
  divGroup7.appendChild(catWeightInput);

  divGroup8.appendChild(catAgeLbl);
  divGroup8.appendChild(catAgeInput);



  drawAcademiesDropdown();
}

function fillStudentFields(pId){
  var profileInfo =  getUserToModify(pId)[0];
  var student = getStudentToModify(pId)[0];
  var gradeInfo = getGradeInfo(student.CategoryLevel_id_category_level);
  var categoryWeight = getUserWeightCate(student.weight)[0];
  var categoryAge = getCategoryAge(profileInfo.user_age)[0];

  document.querySelector('#txtWeight').value = student.weight;
  document.querySelector('#txtWeight').disabled = true;
  document.querySelector('#txtHeight').value = student.height;
  document.querySelector('#txtHeight').disabled = true;
  document.querySelector('#txtWins').value = student.won_tornaments;
  document.querySelector('#txtWins').disabled = true;
  document.querySelector('#txtExhibitions').value = student.exibitions_participated;
  document.querySelector('#txtExhibitions').disabled = true;
  document.querySelector('#txtEvents').value = student.tornaments_participated;
  document.querySelector('#txtEvents').disabled = true;
  document.querySelector('#txtGrade').value = gradeInfo.name_category_level;
  document.querySelector('#txtGrade').disabled = true;
  document.querySelector('#txtCatWeight').value = categoryWeight.name_category_weight;
  document.querySelector('#txtCatWeight').disabled = true;
  document.querySelector('#txtCatAge').value = categoryAge.name_category;
  document.querySelector('#txtCatAge').disabled = true;

}

function drawTeacherFields(pId){
  drawAcademiesDropdown();
  

}

function sendToStudentsList(){
  var id = this.id;
  window.location.href = '../../views/students/list_students_academy.php?id=' + id;
}

function getStudentsByAcademy(pId){
  var profileInfo = getProfileInfo(pId);
  var userStudents = [];
  var userProfiles = getAllUsers();
  if(userProfiles.length == 0){

  }else{
    for(var i = 0; i < userProfiles.length; i++){
      if(userProfiles[i][9] == profileInfo[9] && userProfiles[i][10] == true){
        userStudents.push(userProfiles[i]);
      }
    }
  }
  return userStudents;
}


function drowProfilJustTo(){

  var divColLeft = document.querySelector('.column-left');
  var divColRight = document.querySelector('.column-right');

  var divGroup1 = document.createElement('div');
  divGroup1.classList.add('group');
  var divGroup2 = document.createElement('div');
  divGroup2.classList.add('group');
  var divGroup3 = document.createElement('div');
  divGroup3.classList.add('group');
  var divGroup4 = document.createElement('div');
  divGroup4.classList.add('group');
  var divGroup5 = document.createElement('div');
  divGroup5.classList.add('group');
  var divGroup6 = document.createElement('div');
  divGroup6.classList.add('group');
  var divGroup7 = document.createElement('div');
  divGroup7.classList.add('group');
  var divGroup8 = document.createElement('div');
  divGroup8.classList.add('group');

  var weightLbl = document.createElement('label');
  var heightLbl = document.createElement('label');
  var winsLbl = document.createElement('label');
  var exhibitionsLbl = document.createElement('label');
  var eventsLbl = document.createElement('label');
  var gradeLbl = document.createElement('label');
  var catWeightLbl = document.createElement('label');
  var catAgeLbl = document.createElement('label');
  var exhibitionsLbl = document.createElement('label');
  var tournamentsLbl = document.createElement('label');
  var tournamentsWonLbl = document.createElement('label');

  var weightInput = document.createElement('input');
  var heightInput = document.createElement('input');
  var winsInput = document.createElement('input');
  var exhibitionsInput = document.createElement('input');
  var eventsInput = document.createElement('input');
  var gradeInput = document.createElement('input');
  var catWeightInput = document.createElement('input');
  var catAgeInput = document.createElement('input');
  var exhibitionsInput = document.createElement('input');
  var tournamentsInput = document.createElement('input');
  var tournamentsWonInput = document.createElement('input');

  weightLbl.for = 'txtWeight';
  weightLbl.innerHTML = 'Peso';

  heightLbl.for = 'txtHeight';
  heightLbl.innerHTML = 'Altura';

  winsLbl.for = 'txtWins';
  winsLbl.innerHTML = 'Victorias';

  exhibitionsLbl.for = 'txtExhibitions';
  exhibitionsLbl.innerHTML = 'Exhibiciones';

  eventsLbl.for = 'txtEvents';
  eventsLbl.innerHTML = 'Torneos';

  gradeLbl.for = 'txtGrade';
  gradeLbl.innerHTML = 'Grado';

  catWeightLbl.for = 'txtCatWeight';
  catWeightLbl.innerHTML = 'Categoría por peso';

  catAgeLbl.for = 'txtCatAge';
  catAgeLbl.innerHTML = 'Categoría por edad';


  weightInput.id = 'txtWeight';
  weightInput.type = 'text';

  heightInput.id = 'txtHeight';
  heightInput.type = 'text';
  heightInput.required = true;

  winsInput.id = 'txtWins';
  winsInput.type = 'text';

  exhibitionsInput.id = 'txtExhibitions';
  exhibitionsInput.type = 'text';

  eventsInput.id = 'txtEvents';
  eventsInput.type = 'text';

  gradeInput.id = 'txtGrade';
  gradeInput.type = 'text';

  catWeightInput.id = 'txtCatWeight';
  catWeightInput.type = 'text';

  catAgeInput.id = 'txtCatAge';
  catAgeInput.type = 'text';


  divColLeft.appendChild(divGroup1);
  divColLeft.appendChild(divGroup2);
  divColLeft.appendChild(divGroup3);
  divColLeft.appendChild(divGroup4);

  divColRight.appendChild(divGroup5);
  divColRight.appendChild(divGroup6);
  divColRight.appendChild(divGroup7);
  divColRight.appendChild(divGroup8);

  divGroup1.appendChild(weightLbl);
  divGroup1.appendChild(weightInput);

  divGroup2.appendChild(heightLbl);
  divGroup2.appendChild(heightInput);

  divGroup3.appendChild(winsLbl);
  divGroup3.appendChild(winsInput);

  divGroup4.appendChild(exhibitionsLbl);
  divGroup4.appendChild(exhibitionsInput);

  divGroup5.appendChild(eventsLbl);
  divGroup5.appendChild(eventsInput);

  divGroup6.appendChild(gradeLbl);
  divGroup6.appendChild(gradeInput);

  divGroup7.appendChild(catWeightLbl);
  divGroup7.appendChild(catWeightInput);

  divGroup8.appendChild(catAgeLbl);
  divGroup8.appendChild(catAgeInput);




}
function goBack(){

  window.history.back();

}
//modify profile
function modSaveProfileInfo(){
  var id = getUrlVars()["id"];
  var previousProfile =  getUserToModify(id)[0];
  var types = getuserTypeDB();
  var usertype = [];
  for(var i = 0; i < types.length; i++){
    if(types[i].id_user_type == previousProfile.UserType_id_user_type){
      usertype = types[i];
      break;
    }
  }
  var btnModSave = document.querySelector('#btnModProfile');
  if(document.querySelector('#txtUserName').disabled == true){
    if(previousProfile.UserType_id_user_type == 3){
      editFields();
      enableDisableDropdown();
      btnModSave.value = 'Guardar';
    }else if(previousProfile.UseType_id_user_type == 4){
      editFields();
      enableDisableDropdown();
      document.querySelector('#txtHeight').disabled = false;
      btnModSave.value = 'Guardar';
      if(previousProfile.User_type_id_user_type == 3){
        document.querySelector('#txtWeight').disabled = false;
        document.querySelector('#txtGrade').disabled = false;
      }
    }else{
      editFields();
      btnModSave.value = 'Guardar';
    }
  }else{
    var userInfo = [];
    var userId = document.querySelector('#userID').value;
    var userName = document.querySelector('#txtUserName').value;
    var lastName = document.querySelector('#txtLastName').value;
    var birthDate = document.querySelector('#birthDate').value;
    var age = document.querySelector('#txtAge').value;
    //var email = document.querySelector('#txtEmailUser').value;
    var gender = document.querySelector('#txtGender').value;
    var phone = document.querySelector('#txtPhone').value;
    var inputs = document.querySelectorAll('input:required');
    var alert = document.querySelector('#alert');
    if(previousProfile.UserType_id_user_type == 1 || previousProfile.UserType_id_user_type == 2){
      if(validateProfileModFields()){
        alert.classList.remove('error');
        userInfo.push(userId,
          userName,
          lastName,
          birthDate,
          age,
          gender,
          phone);
          modifyUserData(userInfo, id);
          SaveImage();
          document.querySelector('#userID').disabled = true;
          document.querySelector('#txtUserName').disabled = true;
          document.querySelector('#txtLastName').disabled = true;
          document.querySelector('#birthDate').disabled = true;
          document.querySelector('#txtPhone').disabled = true;
          document.querySelector('#txtAge').disabled = true;
          document.querySelector('#txtGender').disabled = true;
          btnModSave.value = 'Modificar';
        }else{
          for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value == ''){
              showError(inputs[i]);
            }
          }
          printMessageError();
        }

      }else if(previousProfile.UserType_id_user_type == 3){
        userInfo.push(userId,
          userName,
          lastName,
          birthDate,
          age,
          gender,
          phone);
          modifyUserData(userInfo, id);
          var professorInfo = [];
          var academyId = getAcademyId(document.querySelector('#dropDownAcademy').value);
          professorInfo.push(academyId, id);
          UpdateTeacher(professorInfo);
          document.querySelector('#userID').disabled = true;
          document.querySelector('#txtUserName').disabled = true;
          document.querySelector('#txtLastName').disabled = true;
          document.querySelector('#birthDate').disabled = true;
          document.querySelector('#txtAge').disabled = true;
          document.querySelector('#dropDownAcademy').disabled = true;
          document.querySelector('#txtGender').disabled = true;
          document.querySelector('#txtHeight').disabled = true;
          document.querySelector('#txtPhone').disabled = true;
          btnModSave.value = 'Modificar';
        }else if(previousProfile.UserType_id_user_type == 4){
          if(usertype.id_user_type == 3){
            previousProfile.weight = document.querySelector('#txtWeight').value;
            //previousProfile.= getGradeID(document.querySelector('#txtGrade'));
          }else if(usertype.id_user_type == 4){
            if(validateProfileModFields()){
              alert.classList.remove('error');
              var student = getStudentToModify(id);
              userInfo.push(userId,
                userName,
                lastName,
                birthDate,
                age,
                gender,
                phone);

                modifyUserData(userInfo, id);
                var studentInfo = [];
                var weight = document.querySelector('#txtWeight').value
                var height = document.querySelector('#txtHeight').value
                var wins = document.querySelector('#txtWins').value;
                var exhibitions = document.querySelector('#txtExhibitions').value;
                var events = document.querySelector('#txtEvents').value;
                var grade = document.querySelector('#txtGrade').value;
                var catWeight = document.querySelector('#txtCatWeight').value;
                var catAge = document.querySelector('#txtCatAge').value;
                var academyId = getAcademyId(document.querySelector('#dropDownAcademy').value);

                studentInfo.push(weight,
                  height,
                  wins,
                  exhibitions,
                  events,
                  student.Teacher_id_teacher,
                  academyId,
                  getGradeID(grade),
                  getUserWeightCate(weight).id_category_weight,
                  getCategoryAge(age).id_category_age);

                  modifyAthlete(studentInfo, id);
                  document.querySelector('#userID').disabled = true;
                  document.querySelector('#txtUserName').disabled = true;
                  document.querySelector('#txtLastName').disabled = true;
                  document.querySelector('#birthDate').disabled = true;
                  document.querySelector('#txtAge').disabled = true;
                  document.querySelector('#txtEmailUser').disabled = true;
                  document.querySelector('#dropDownAcademy').disabled = true;
                  document.querySelector('#txtGender').disabled = true;
                  document.querySelector('#txtHeight').disabled = true;
                  document.querySelector('#txtPhone').disabled = true;
                  btnModSave.value = 'Modificar';
                  if(usertype == 3){
                    document.querySelector('#txtWeight').disabled = true;
                    document.querySelector('#txtGrade').disabled = true;
                  }
                }else{
                  for(var i = 0; i < inputs.length; i++){
                    if(inputs[i].value == ''){
                      showError(inputs[i]);
                    }
                  }
                  printMessageError();
                }
              }
            }
          }

        }

        function editFields(){
          document.querySelector('#userID').disabled = false;
          document.querySelector('#txtUserName').disabled = false;
          document.querySelector('#txtLastName').disabled = false;
          document.querySelector('#birthDate').disabled = false;
          document.querySelector('#txtAge').disabled = false;
          document.querySelector('#txtPhone').disabled = false;
          document.querySelector('#txtGender').disabled = false;
        }

        //img handling
        function drawProfilePic(){
          var inputImg = document.querySelector('#profileImag eInput');
          var div = inputImg.parentElement;
          var name = document.querySelector('#userID').value;
          var pic = document.createElement('img');
          logo.style.width = '75px';
          logo.style.height = '55px';
          logo.src = '../../images/profile/' + getImgSrcPNG(name);
          div.appendChild(pic);
        }

        function getImgSrcPNG(sponsorId){
          var srcName = sponsorId + '.png';
          return srcName;
        }

        function getImgSrcJPG(sponsorId){
          var srcName = sponsorId + '.jpg';
          return srcName;
        }

        //error messages
        function showError(inputError){
          inputError.classList.add('errorInput');
        }



        //validation
        function validateProfileModFields(){
          var validated = true;
          var inputs = document.querySelectorAll('input:required');
          for(var i = 0; i < inputs.length; i++){
            if(validateText(inputs[i].value) == false){
              validated = false;
            }
          }
          return validated;
        }
        //dropdwon academias
        function drawAcademiesDropdown(){
          var academies = getAcademyDB();
          var divColLeft = document.querySelector('.column-right');
          var divAcademies = document.createElement('div');
          var labelSelect = document.createElement('label');
          var select = document.createElement('select');
          divAcademies.classList.add('group');
          select.id = 'dropDownAcademy';
          labelSelect.for = 'dropDownAcademy';
          labelSelect.innerHTML = 'Academia';
          for(var i = 0; i < academies.length; i++){
            var option = document.createElement('option');
            option.innerHTML = academies[i].name;
            option.name = academies[i].id_academy;
            select.appendChild(option);
          }
          divAcademies.appendChild(labelSelect);
          divAcademies.appendChild(select);
          divColLeft.appendChild(divAcademies);
          select.disabled = true;
        }

        function enableDisableDropdown(){
          var dropdown = document.querySelector('select');
          if(dropdown.disabled == true){
            dropdown.disabled = false;
          }else{
            dropdown.disabled = true;
          }
        }


function changePwd(){
  window.location.href = '../../views/users/change_password.php';
}
