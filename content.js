// function purge() {
    // alert("You're on Reddit. Get off Reddit");

    //Removing 'Drafts' Interface
    try {
        //$('i').hide().css("visibility", "hidden");
        //$('.DraftEditor-root').hide().css("contenteditable", "false");
        // $('div[id^="vote-arrows"]').css("visibility", "hidden");
        $('div[class ="_3KgrO85L1p9wQbgwG27q4y"]').css("visibility", "hidden"); //Gets rid of bar underneath Comments. 
        
        console.log($("i"));
    } catch(err) {
        console.log("ERROR BLOCKING CONTENT: " + err);
    }
// }
