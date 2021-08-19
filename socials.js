let choices = {
    element: "#granim-canvas",
    states: {
        "default-state": {
           gradients: [
               ["#5f2c82","#49a09d"],
               ["#4b6cb7","#182848"],
               ["#085078", "#85D8CE"],
           ],
           transitionSpeed: 3000, 
           loop: true,
        }
    }
};

let granimInstance = new Granim(choices);




let database = firebase.database().ref()

let facebook = database.child("Facebook");
let twitter = database.child("twitter");
let instagram = database.child("instagram");
let linkedin = database.child("linkedin");
let youtube = database.child("youtube");
let snapchat = database.child("snapchat");

let facebookUser = document.querySelector("#facebook_user");
let instagramUser = document.querySelector("#insta_users");
let twitterUser = document.querySelector("#Twitter_users");
let linkedinUser = document.querySelector("#linkedin_users");
let snapchatUser = document.querySelector("#Snap_users");
let youtubeUser = document.querySelector("#YT_users");




function FirebaseFB(formObj) {

    event.preventDefault(); //stop refreshing

    let sendFB = formObj.facebook.value;

    facebook.push(sendFB);

    return sendFB;
}

function FirebaseTW(formObj) {

    event.preventDefault(); //stop refreshing

    let sendTW = formObj.twitter.value;

    twitter.push(sendTW);

    return sendTW;
}

function FirebaseLD(formObj) {

    event.preventDefault(); //stop refreshing

    let sendLD = formObj.linkedin.value;

    linkedin.push(sendLD);

    return sendLD;
}

function FirebaseYT(formObj) {
   event.preventDefault(); //stop refreshing

    let sendYT = formObj.youtube.value;

    youtube.push(sendYT);
    
    return sendYT;
}

function FirebaseIG(formObj) {

    event.preventDefault(); //stop refreshing

    let sendIG = formObj.instagram.value;

    instagram.push(sendIG);

    return sendIG;
}

function FirebaseSC(formObj) {

    event.preventDefault(); //stop refreshing

    let sendSC = formObj.snapchat.value;

    snapchat.push(sendSC);

    return sendSC;
}


facebook.on("child_added", function (childData) {
    let loadUser = document.createElement("p");
    loadUser.innerHTML = childData.val() + ","

    facebookUser.appendChild(loadUser);

})

instagram.on("child_added", function (childData) {
    let loadUser = document.createElement("p");
    loadUser.innerHTML = childData.val() + ","

    instagramUser.appendChild(loadUser);

})

twitter.on("child_added", function (childData) {
    let loadUser = document.createElement("p");
    loadUser.innerHTML = childData.val() + ","

    twitterUser.appendChild(loadUser);
})

linkedin.on("child_added", function (childData) {
    let loadUser = document.createElement("p");
    loadUser.innerHTML = childData.val() + ","

    linkedinUser.appendChild(loadUser);
})

youtube.on("child_added", function (childData) {
    let loadUser = document.createElement("p");
    loadUser.innerHTML = childData.val() + ","

    youtubeUser.appendChild(loadUser);
})

snapchat.on("child_added", function (childData) {
    let loadUser = document.createElement("p");
    loadUser.innerHTML = childData.val() + ","

    snapchatUser.appendChild(loadUser);
})


  