const enter = "Please enter 1 or 2 for your answer";
const gameOver = "Congrats You Win!";
const start = `Welcome to the 6th day text adventure game. Click 'OK' to start the game.`;
const q1 = `You awake, and blink your eyes. Today is the big day: Trump at the capitol. The day he talks yet again about how he didn't lose. Should you...
1. Put your MAGA flag on your truck, tune in some vitriolic right wing radio broadcast, and white knuckle drive to the capitol.
OR
2. Realize a sore loser and a con man when you see one, and stay at home.
${enter}`;
const gameOver1 = `You stay at home and start reading Meditations by Marcus Aurelius and are on your way to becoming a person in charge of their emotions. ${gameOver}`;
const q2 = `You arrive with several other Cosplaytriots. Tension hangs in the air as the 10,000 cockroaches in a human skin suit and his cadre of goblins take the stage. They tell you to march on the Capitol; to fight; to have trial by combat! Should you...
1. Drape yourself in a flag of your choice (bonus points if it is the flag of an enemy of this country) and march on the capitol.
OR
2. Snap back to reality and realize you are in danger, and go home.
${enter}`;
const gameOver2 = `You make your way back home, and avoid having the shame of an attempted coup weigh on you and your family for the rest of your days. ${gameOver}`;
const q3 = `You march up to the security barricades at the capitol and are greeted by a few security guards who say with all the energy of Willy Wonka telling the fat kid not to drink from the chocolate river: "No, stop, don't"! Should you...
1. Respect the boundry, realize what is happening, and stop return home.
OR
2. Belt out a quick "Still your president", jump the barricade and make your way to the capitol.
${enter}`;
const gameOver3 = `On the way home the thought hits you that it isn't the end of the world, Biden is just a standard issue president, and now you have more time to focus on watching red necks make 500 left turns. ${gameOver}`;
const q4 = `While on the steps of the Capitol, the police have the doors barricaded, some of your fellow red hats have begun to attack them, and one has erected a gallows. Should you...
1. Hide your "Blue Lives Matter" button as you begin to wail on heavily outnumbered Capitol police and began a hearty chant of "Hang Mike Pence".
OR
2. Recognize that these are other human beings with a job to do, repect that, and go home.
${enter}`;
const gameOver4 = `You get home and watch the news and don't have to worry about facial recognition software discovering you attacking someone. ${gameOver}`;
const q5 = `You broke through the Capitol police, have marched into the chambers, and see the senate floor. Should you...
1. Realize the magnitude of what you have done, and leave without further making a mockery of yourself,
OR
2. Put on your viking helmet, steal the podium, put your face in front of every camera you can, and pretend like you won something.
${enter}`;
const gameOver5 = `You realized that democracy is the cornerstone of our republic, and without it and the respect for law we are all just a heartbeat away from becoming an episode of The Walking Dead with less charm and decency. ${gameOver}`;
const win = `You forgot the face of your father, have dishonored yourself and your entire family, participated in an attempted coup because a reality TV show host convinced you the sky was falling, and all you have to show for it is sleepless nights as you await the inevitable knock from the FBI. YOU LOSE!!!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the number the user enters
let userInput = prompt(q1);

if (userInput == 1) {
    userInput = prompt(q2);
    if (userInput == 1) {
        userInput = prompt(q3);
        if (userInput == 2) {
            userInput = prompt(q4);
            if (userInput == 1) {
                userInput = prompt(q5);
                if (userInput == 2) {
                    alert(win);
                } else {
                    alert(gameOver5);
                }
            } else {
                alert(gameOver4)
            }
        } else {
            alert(gameOver3);
        }
    } else {
        alert(gameOver2);
    }
} else {
    alert(gameOver1);
}