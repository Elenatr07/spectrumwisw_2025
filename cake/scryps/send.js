
//добавление загруженных файлов 

var dt = new DataTransfer();
    
$('.input-file input[type=file]').on('change', function(){
    let $files_list = $(this).closest('.input-file').next();
    $files_list.empty();

    for(var i = 0; i < this.files.length; i++){
        let new_file_input = '<div class="input-file-list-item">' +
            '<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
            '<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
            '</div>';
        $files_list.append(new_file_input);
        dt.items.add(this.files.item(i));
    };
    this.files = dt.files;
});

//удаление загруженных файлов

function removeFilesItem(target){
    let name = $(target).prev().text();
    let input = $(target).closest('.input-file-row').find('input[type=file]');	
    $(target).closest('.input-file-list-item').remove();	
    for(let i = 0; i < dt.items.length; i++){
        if(name === dt.items[i].getAsFile().name){
            dt.items.remove(i);
        }
    }
    input[0].files = dt.files;  
}

// актифация формы отправки

document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;

  evt.preventDefault();
  http.open("POST", "send.php", true);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      document.getElementById("iddiv").style.display = 'block';
      iddiv.innerHTML="Thank you! We will contact you to discuss your order";
      if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поле сообщения, если в ответе первым словом будет имя отправителя
     f.messageFF.removeAttribute('value');
        f.messageFF.value='';
      } 
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  http.send(new FormData(f));
}, false);

//очистка формы
function clearform() {
	document.getElementById("nameFF").value = ""; //don't forget to set the textbox id
	document.getElementById("contactFF").value = "";
  document.getElementById("messageFF").value = "";
  document.getElementById("fileFF").value = "";
  document.getElementById("textFF").value = "";

  document.getElementById("iddiv").style.display = 'none';
  let myblock = document.getElementById("file_list");
  while(myblock.firstChild) {
    myblock.removeChild(myblock.firstChild);
  }
  
}

//проверка размера и типа файла

var _validFilejpeg = [".jpeg", ".jpg", ".bmp", ".pdf"];

function validateForSize(oInput, minSize, maxSizejpeg) {
    //if there is a need of specifying any other type, just add that particular type in var  _validFilejpeg
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFilejpeg.length; j++) {
                var sCurExtension = _validFilejpeg[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length)
                    .toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }

            if (!blnValid) {
                alert("Sorry, this file is invalid, allowed extension is: " + _validFilejpeg.join(", "));
                oInput.value = "";
                return false;
            }
        }
    }

    fileSizeValidatejpeg(oInput, minSize, maxSizejpeg);
}

function fileSizeValidatejpeg(fdata, minSize, maxSizejpeg) {
    if (fdata.files && fdata.files[0]) {
        var fsize = fdata.files[0].size /1024; //The files property of an input element returns a FileList. fdata is an input element,fdata.files[0] returns a File object at the index 0.
        //alert(fsize)
        if (fsize > maxSizejpeg || fsize < minSize) {
            alert('This file size is: ' + fsize.toFixed(2) +
                "KB. Files should be in " + (minSize) + " to " + (maxSizejpeg) + " KB ");
            fdata.value = ""; //so that the file name is not displayed on the side of the choose file button
            return false;
        } else {
            console.log("");
        }
    }
}