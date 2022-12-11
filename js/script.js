const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click" , e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading File...";
    fetchFile(fileInput.value);
});

function fetchFile(url){
    //fetahing file and returning response a blod
    fetch(url).then(res => res.blob()).then(file => {
        //URL.createObjectURL create a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl; //passing url as a value
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);//adding <a> tag inside body
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download File";
    }).catch( () => {
        downloadBtn.innerText = "Download File";
        alert("Failed to download file");
    });
};

/**
 * blob => to return type(image) and size
 * 
 */