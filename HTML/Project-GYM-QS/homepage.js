weight = 0;
situation = 0;
musclegroup = 0;
arm = [0,0,0,0,0];
chestandabs = [0,0,0,0,0];
back = [0,0,0];
leg = [0,0,0,0,0];
totalsets = 0;


function displayRadioValue() {

    if (mg == 1) {
        document.getElementById("Arm").style.display = 'contents';
    } else {
        document.getElementById("Arm").style.display = 'none';
    }

    if (mg == 2) {
        document.getElementById("ChestAndAbs").style.display = 'contents';
    } else {
        document.getElementById("ChestAndAbs").style.display = 'none';
    }

    if (mg == 3) {
        document.getElementById("Back").style.display = 'contents';
    } else {
        document.getElementById("Back").style.display = 'none';
    }

    if (mg == 4) {
        document.getElementById("Leg").style.display = 'contents';
    } else {
        document.getElementById("Leg").style.display = 'none';
    }

    if (!radiovariable[0].checked && !radiovariable[1].checked && !radiovariable[2].checked && !radiovariable[3].checked) {
        document.getElementById("Message2Select").style.display = 'contents';
    } else {
        document.getElementById("Message2Select").style.display = 'none';
    }
}

function round5(weight) {
    return(Math.round(weight/5)*5);
}

function showchestworkout() {
    qsp();
    document.getElementById("selectmg").style.display = "none";
    document.getElementById("armsworkout").style.display = "none";
    document.getElementById("backworkout").style.display = "none";
    document.getElementById("legsworkout").style.display = "none";
    if (situation == 1){
        totalsets = 2;

        document.getElementById("chestworkoutsittingchestpress").textContent = ("Sitting Chest Press: 3 Sets 8 Reps at " + round5(chestandabs[0]*0.75) + " lbs");
        document.getElementById("chestworkoutupperpecfly").textContent = ("Upper Pec Fly: 4 Sets 8 Reps at " + round5(chestandabs[1]*0.7) + " lbs");
        document.getElementById("chestworkoutlowerpecfly").textContent = ("Lower Pec Fly: 4 Sets 8 Reps at " + round5(chestandabs[2]*0.7) + " lbs");
        document.getElementById("chestworkoutcenterpecfly").textContent = ("Center Pec Fly: 4 Sets 8 Reps at " + round5(chestandabs[3]*0.6) + " lbs");
        document.getElementById("chestworkoutcrunches").textContent = ("Crunches: 2 Sets of " + (chestandabs[4]/2 + " with 10 lbs"));
        document.getElementById("chestworkoutrussiantwist").textContent = ("Russian Twist: 2 Sets of 30 Seconds (NO STOPPING KEEP PACE) ");
        document.getElementById("chestworkoutlegraises").textContent = ("Leg Raises: 2 Sets of 15");

    } else if (situation == 2){
        totalsets = 3;

        document.getElementById("chestworkoutsittingchestpress").textContent = ("Sitting Chest Press: 3 Sets 8 Reps at " + round5(chestandabs[0]*0.5) + " lbs");
        document.getElementById("chestworkoutupperpecfly").textContent = ("Upper Pec Fly: 2 Sets 5 Reps at " + round5(chestandabs[1]*0.35) + " lbs");
        document.getElementById("chestworkoutlowerpecfly").textContent = ("Lower Pec Fly: 3 Sets 8 Reps at " + round5(chestandabs[2]*0.35) + " lbs");
        document.getElementById("chestworkoutcenterpecfly").textContent = ("Center Pec Fly: 4 Sets 8 Reps at " + round5(chestandabs[3]*0.35) + " lbs");
        document.getElementById("chestworkoutcrunches").textContent = ("Crunches: 4 Sets of " + (chestandabs[4]*0.4));
        document.getElementById("chestworkoutrussiantwist").textContent = ("Russian Twist: 1 Set of 90 Seconds (NO STOPPING KEEP PACE) ");
        document.getElementById("chestworkoutlegraises").textContent = ("Leg Raises: 3 Sets of 10");
    }
    document.getElementById("chestworkout").style.display = "block";
    document.getElementById("ch1").textContent = ("Chest and Abdomen Workout (x" + totalsets + ")");
}

function showbackworkout() {
    qsp();
    document.getElementById("selectmg").style.display = "none";
    document.getElementById("armsworkout").style.display = "none";
    document.getElementById("chestworkout").style.display = "none";
    document.getElementById("legsworkout").style.display = "none";
    if (situation == 1){
        totalsets = 2;

        document.getElementById("backworkoutseatedrow").textContent = ("Seated Row: 3 Sets 8 Reps at " + round5(back[0]*0.8) + " lbs");
        document.getElementById("backworkoutlatpulldown").textContent = ("Lat Pull Down: 2 Sets 5 Reps at " + round5(back[1]*0.875) + " lbs");
        document.getElementById("backworkoutsinglearmpull").textContent = ("Single Arm Pull Down: 3 Sets 8 Reps at " + round5(back[2]*0.8) + " lbs");
        document.getElementById("backworkoutpullups").textContent = ("Pullups: 4 Sets 8 Reps at " + round5(weight*0.4) + " lbs");

    } else if (situation == 2){
        totalsets = 4;

        document.getElementById("backworkoutseatedrow").textContent = ("Seated Row: 4 Sets 12 Reps at " + round5(back[0]*0.35) + " lbs");
        document.getElementById("backworkoutlatpulldown").textContent = ("Lat Pull Down: 4 Sets 15 Reps at " + round5(back[1]*0.4) + " lbs");
        document.getElementById("backworkoutsinglearmpull").textContent = ("Single Arm Pull Down: 5 Sets 10 Reps at " + round5(back[2]*0.3) + " lbs");
        document.getElementById("backworkoutpullups").textContent = ("Pullups: 4 Sets 12 Reps at " + round5(weight*0.75) + " lbs");
    }
    document.getElementById("backworkout").style.display = "block";
    document.getElementById("bh1").textContent = ("Back Workout (x" + totalsets + ")");
}

function showlegworkout() {
    qsp();
    document.getElementById("selectmg").style.display = "none";
    document.getElementById("armsworkout").style.display = "none";
    document.getElementById("backworkout").style.display = "none";
    document.getElementById("chestworkout").style.display = "none";
    if (situation == 1){
        totalsets = 2;

        document.getElementById("legworkoutlegpress").textContent = ("Leg Press: 3 Sets 8 Reps at " + round5(leg[0]*0.75) + " lbs");
        document.getElementById("legworkoutleglifts").textContent = ("Leg Lifts: 2 Sets 5 Reps at " + round5(leg[1]*0.7) + " lbs");
        document.getElementById("legworkoutlegpushdown").textContent = ("Leg Push Down: 3 Sets 8 Reps at " + round5(leg[2]*0.7) + " lbs");
        document.getElementById("legworkoutlegspread").textContent = ("Leg Spread: 4 Sets 8 Reps at " + round5(leg[3]*0.6) + " lbs");
        document.getElementById("legworkoutlegsqueeze").textContent = ("Leg Squeeze: 4 Sets 8 Reps at " + round5(leg[4]*0.6) + " lbs");

    } else if (situation == 2){
        totalsets = 4;

        document.getElementById("legworkoutlegpress").textContent = ("Leg Press: 4 Sets 12 Reps at " + round5(leg[0]*0.5) + " lbs");
        document.getElementById("legworkoutleglifts").textContent = ("Leg Lifts: 4 Sets 15 Reps at " + round5(leg[1]*0.4) + " lbs");
        document.getElementById("legworkoutlegpushdown").textContent = ("Leg Push Down: 5 Sets 10 Reps at " + round5(leg[2]*0.3) + " lbs");
        document.getElementById("legworkoutlegspread").textContent = ("Leg Spread: 4 Sets 12 Reps at " + round5(leg[3]*0.25) + " lbs");
        document.getElementById("legworkoutlegsqueeze").textContent = ("Leg Squeeze: 4 Sets 12 Reps at " + round5(leg[4]*0.25) + " lbs");
    }
    document.getElementById("legsworkout").style.display = "block";
    document.getElementById("lh1").textContent = ("Leg Workout (x" + totalsets + ")");
}

function qsp() {
    rawq = location.search;
    q = rawq.replace('?', '');
    var qs = q.split("-l");
    if (qs.length == 20){
        weight = qs[0];
        situation = qs[1];
        arm = [qs[2],qs[3],qs[4],qs[5],qs[6]];
        chestandabs = [qs[7],qs[8],qs[9],qs[10],qs[11]];
        back = [qs[12],qs[13],qs[14]];
        leg = [qs[15],qs[16],qs[17],qs[18],qs[19]];
    } else {
        alert("Invalid Link");
    }
}