// JavaScript Document
$(document).ready(function(){

    //AJAX service request to get the main text data from the json data store
    $.getJSON('./model/data.json', function(jsonObj) {
       console.log(jsonObj);
       //Get the home page main text data
       $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
       $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
       $('#description_home').html('<p class="main-text">' + jsonObj.pageTextData[0].description + '</p>');
       
        //Get the home page left column text data
       $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
       $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
       $('#description_left').html('<p class="main-text">' + jsonObj.pageTextData[1].description + '</p>');	
       
       //Get the home page centre column text data
       $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
       $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
       $('#description_centre').html('<p class="main-text">' + jsonObj.pageTextData[2].description + '</p>');	
       
       //Get the home page right column text data
       $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
       $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
       $('#description_right').html('<p class="main-text">' + jsonObj.pageTextData[3].description + '</p>');

       //Get the home page right column text data
       $('#title_rightS').html('<h2>' + jsonObj.pageTextData[4].title + '</h2>');
       $('#subTitle_rightS').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
       $('#description_rightS').html('<p class="main-text">' + jsonObj.pageTextData[4].description + '</p>');				
     
       //Get the coke main text data
       $('#x3dModelTitle_coke').html('<h2>' + jsonObj.pageTextData[5].x3dModelTitle + '</h2>');
       $('#x3dCreationMethod_coke').html('<p class="main-text">' + jsonObj.pageTextData[5].x3dCreationMethod + '</p>');
       $('#title_coke').html('<h2>' + jsonObj.pageTextData[5].title + '</h2>');
       $('#subTitle_coke').html('<h3>' + jsonObj.pageTextData[5].subTitle + '</h3>');
       $('#description_coke').html('<p class="main-text">' + jsonObj.pageTextData[5].description + '</p>');

       //Get the oasis main text data
       $('#x3dModelTitle_oasis').html('<h2>' + jsonObj.pageTextData[6].x3dModelTitle + '<h2>');
       $('#x3dCreationMethod_oasis').html('<p class="main-text">' + jsonObj.pageTextData[6].x3dCreationMethod + '</p>');
       $('#title_oasis').html('<h2>' + jsonObj.pageTextData[6].title + '</h2>');
       $('#subTitle_oasis').html('<h3>' + jsonObj.pageTextData[6].subTitle + '</h3>');
       $('#description_oasis').html('<p class="main-text">' + jsonObj.pageTextData[6].description + '</p>');		

       //Get the pepper main text data
       $('#x3dModelTitle_pepper').html('<h2>' + jsonObj.pageTextData[7].x3dModelTitle + '</h2>');
       $('#x3dCreationMethod_pepper').html('<p class="main-text">' + jsonObj.pageTextData[7].x3dCreationMethod + '</p>');
        $('#title_pepper').html('<h2>' + jsonObj.pageTextData[7].title + '</h2>');
       $('#subTitle_pepper').html('<h3>' + jsonObj.pageTextData[7].subTitle + '</h3>');
       $('#description_pepper').html('<p class="main-text">' + jsonObj.pageTextData[7].description + '</p>');

       //Get the sprite main text data
       $('#x3dModelTitle_sprite').html('<h2>' + jsonObj.pageTextData[8].x3dModelTitle + '<h2>');
       $('#x3dCreationMethod_sprite').html('<p>' + jsonObj.pageTextData[8].x3dCreationMethod + '</p>');
       $('#title_sprite').html('<h2>' + jsonObj.pageTextData[8].title + '</h2>');
       $('#subTitle_sprite').html('<h3>' + jsonObj.pageTextData[8].subTitle + '</h3>');
       $('#description_sprite').html('<p>' + jsonObj.pageTextData[8].description + '</p>');
       
       //Get the gallery contents data
       $('.title_gallery').html('<h2>' + jsonObj.pageTextData[9].galleryTitle + '<h2>');
       $('.description_gallery').html('<p class="main-text">' + jsonObj.pageTextData[9].galleryDescription + '</p>');

       //Get camera contents data
       $('.x3dCameraTitle').html('<h2>' + jsonObj.pageTextData[10].CameraTitle + '</h2>');
       $('.x3dCameraSubtitle').html('<p class="main-text">' + jsonObj.pageTextData[10].CameraSubtitle + '</p>');

    });
});