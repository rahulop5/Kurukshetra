//import command from '../../config.json' assert {type: 'json'};

const helpObj = {
  "commands": [
    [
    "'register'",
    "If new",
    ],
    [
      "'login'",
      "If already registered"
    ],
    [
      "'logout'",
      ":("
    ],
    [
      "'verify'",
      "Use the token sent in mail to verify"
    ],
    [

      "",
      ""
    ],
    [
      "",
      "---[Teams]--"
    ],
    [
      "'team'",
      "View your team"
    ],
    [
      "'create-team'",
      "Create a new team"
    ],
    [
      "'join-team'",
      "Join an existing team"
    ],
    [

      "",
      ""
    ],
    [
      "",
      "---[NEXUS]--"
    ],
    [
      "'rules'",
      "Temporal laws that bind the Fragment Seekers"
    ],
    [
      "'lore'",
      "Unravel the legend of the Fractured Future"
    ],
    [
      "'challenge'",
      "Face the Guardians and prove your worth"
    ],
    [
      "'submit'",
      "Unlock the temporal node with your findings"
    ],
    [
      "'leaderboard'",
      "Behold the ranks of Temporal Champions"
    ],
    [
      "'records'",
      "Review your journey through the temporal nodes"
    ],
    [

      "",
      ""
    ],
    [
      "'send-mail'",
      "Resend verification mail"
    ],
    

    [
      "'me'",
      "See you details"
    ]
  ],
}

// const socials = {
//   "commands": [
    
//     [
//       "",
//       ""
//     ],
//     [
//       "",
//       "---[Socials]--"
//     ],
//     [
//       "'s/github'",
//       "Stalk me on GitHub (follow plz)"
//     ],
//     ["'s/linkedin'",
//       "Let's connect on Linkedin"
//     ],
//     ["'s/discord'",
//       "I am a pro-g(r)amer"
//     ],
//     ["'s/instagram'",
//       "Folow me on Instagram"
//     ],
//     ["'s/gcloud'",
//       "Felxin my google cloud skills"
//     ],
//     ["'s/gdeveloper'",
//       "Got to get my eyes on that google-dev profile"
//     ],
//     ["'s/unity'",
//       "Unity plz fix your servers(hire me to do that)"
//     ],
//     ["'s/email'",
//       "Mail me your deepest fears"
//     ],
//     ["'sudo'",
//       "???"
//     ],
//     ["'hackme'",
//       "??hacker"
//     ]
//   ],
// }

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(1);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    
    string += SPACE.repeat(20 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  // const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>";
  //   string += ele[0];
  //   string += "</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);

  // command.projects.webdev.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.flutterdev.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.vrdev.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.cybersec.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.robotics.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })

  // socials.commands.forEach((ele) => {
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>";
  //   string += ele[0];
  //   string += "</span>";
    
  //   string += SPACE.repeat(20 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
