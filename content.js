alert("You're on Reddit. Get off Reddit");

//Removing 'Drafts' Interface
try {
    let style = document.createElement('style');
    style.innerHTML = `
    ._1r4smTyOEZFO91uFIdWW6T.aUM8DQ_Nz5wL0EJc_wte6 {
    display: none;
    }
    ._3KgrO85L1p9wQbgwG27q4y {
        visibility: hidden;
    };`
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(style);

} catch(err) {
    console.log("ERROR BLOCKING CONTENT: " + err);
}
