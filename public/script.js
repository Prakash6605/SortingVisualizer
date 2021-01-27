// lets understand call backs
// start_download -> compress -> upload;

function start_downloading(url,downloaded){
    console.log(" download started :) ");

    setTimeout(function(){
        console.log(" Downlaoding in progress .......");
        downloaded("file.mp4");
    },1000)
}
function start_compressing(file,compressed){
      
    console.log(" compression started ");
    setTimeout(function(){
      console.log(" compression in progress.........");
      compressed("file.zip");
    },2000)
}

function start_uploading(file,uploaded){
    console.log(" uploading started ");
    setTimeout(function(){
        console.log(" uplaoding in progress .........");
        uploaded();
    },400)
}



// start_downloading("https://google.com/file.mp4",function downloaded(downloaded_file){

//     console.log(" download completed ");

//     start_compressing(downloaded_file,function compressed(compressed_file){

//         console.log(" compression completed ");

//         start_uploading(compressed_file,function uploaded(){
            
//             console.log(" file successfully uploaded ");

//         })
//     })

// })


// now using async and await function
