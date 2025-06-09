function finishhomework(task1) {
    console.log("finish your homework ")
    task1();
}

function watchtv(step2) {
    console.log("watch tv if you like after finishing your homework");
    step2();
}

function eatdinner(step3) {
    console.log("eatdinner after watchig movie on tv or eat while you watch")
    step3();

}

function gotobed() {
    console.log("after dinner walk for a while and go to bed early ")

}

finishhomework(function () {
    watchtv(function () {
        eatdinner(function () {
            gotobed();
        });

    });
});