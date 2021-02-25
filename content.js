// function purge() {
    // alert("You're on Reddit. Get off Reddit");

    //Removing 'Drafts' Interface
    try {
        $("i").replaceWith( " " );
        console.log($("i:contains(icon icon-upvote)"));
    } catch(err) {
        console.log("ERROR BLOCKING CONTENT: " + err);
    }
// }
