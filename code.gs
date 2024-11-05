function getImgURL(path) {
  let arrpath = path.split("/");
  let foldername = arrpath[0];
  let filename = arrpath[1];
  let fileId = DriveApp.getFoldersByName(foldername).next().getFilesByName(filename).next().getId();
  let fileURL = "https://lh3.googleusercontent.com/d/" + fileId;
  // let fileURL = 'https://drive.usercontent.google.com/download?id=' + fileId;
  // let fileURL = 'https://drive.google.com/uc?id=' + fileId;
  return fileURL;
}

function lineNoti(msg, img) {
  let token = "<< LINE NOTIFY TOKEN >>";

  let formData = {
    'message': msg,
    'imageThumbnail': img,
    'imageFullsize': img
  };

  let options = {
    "method": "post",
    "payload": formData,
    "headers": { "Authorization": "Bearer " + token }
  }

  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

function alert(content, before, after) {
  let bfURL = getImgURL(before);
  let atURL = getImgURL(after);
  //Logger.log(bfURL);
  //Logger.log(atURL);
  lineNoti(content, bfURL);
  lineNoti("หลังจากแก้ไข", atURL);
}
