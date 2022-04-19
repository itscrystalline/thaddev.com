function createData(name, apiLink, method) {
  return {name, apiLink, method};
}

export const projects = [
  {
    title: 'thaddev.com',
    description: "This very website. It's a single page application built with React.js/Next.js and hosted on Raspberry Pi with the help of ngrok and Cloudflare.",
    tags: ['Next.js', 'React.js', 'JavaScript'],
    source: 'https://github.com/MyNameTsThad/thaddev.com',
    live: 'https://thaddev.com',
    id: 8
  },
  {
    title: 'Some Discord Bot',
    description: "A multi-purpose discord bot that can be used for moderation, fun, and more, for my friend's discord server. Built with Java using the JDA library.",
    tags: ['JDA', 'Java'],
    source: 'https://github.com/MyNameTsThad/SomeDiscordBot',
    live: '',
    id: 0
  },
  {
    title: 'Project APIs',
    description: "Web server that also hosts an API for my personal projects. Built with Java and Spring Boot.",
    tags: ['Spring Boot', 'Java'],
    source: 'https://github.com/MyNameTsThad/project-apis',
    live: '',
    id: 1
  },
  {
    title: 'IoT Door Lock',
    description: "A smart door lock that can be controlled both on-the-spot and remotely via the Blynk platform. Built using the NodeMCU ESP8266 with Arduino and the Blynk platform library.",
    tags: ['Blynk', 'Arduino', 'C++', 'C'],
    source: 'https://github.com/MyNameTsThad/PCCCHON_Project_IoTDoorLock-V2',
    live: '',
    id: 2
  },
  {
    title: 'Pydoku',
    description: "A text-based version of the classic puzzle game Sudoku made in Vanilla Python.",
    tags: ['Python'],
    source: 'https://github.com/MyNameTsThad/pydoku',
    live: '',
    id: 3
  },
  {
    title: 'Boosted Burgers App',
    description: "An mock android app for the VERSO HACK 2022 hackathon. Built using Java.",
    tags: ['Android', 'Java'],
    source: 'https://github.com/MyNameTsThad/VERSOHACK2022-BoostedBurgersApp',
    live: '',
    id: 4
  },
  {
    title: 'Helpful Utils Bot',
    description: "A LINE bot that can be used for various things. Built using Java and the LINE library.",
    tags: ['LINE', 'Java'],
    source: 'https://github.com/MyNameTsThad/HelpfulUtilsBot-LINE',
    live: '',
    id: 5
  },
  {
    title: 'Geometry Mix',
    description: "A Simple game where you combine similar shapes and avoid other shapes. Built using Unity and C#. Made for the ProcJam Game Jam on itch.io.",
    tags: ['Unity', 'C#'],
    source: 'https://github.com/MyNameTsThad/GeometryMix',
    live: 'https://itch.io/jam/procjam/rate/1315310',
    id: 6
  },
  {
    title: 'Hytils',
    description: "A Minecraft mod that adds features to minigames on the Hypixel Network. Built using Java and Forge.",
    tags: ['Forge', 'Minecraft', 'Java'],
    source: 'https://github.com/MyNameTsThad/Hytils-1.8.9',
    live: '',
    id: 7
  },
  {
    title: 'Notes App',
    description: "An android app for taking short, simple, text notes, simple as that. Built using Java.",
    tags: ['Android', 'Java'],
    source: 'https://github.com/MyNameTsThad/Hytils-1.8.9',
    live: '',
    id: 8
  },
  {
    title: 'SkyblockItems++',
    description: "A Minecraft mod that adds game mechanics and features from the Hypixel game mode 'Skyblock' as a Forge mod. Built using Java and Forge.",
    tags: ['Forge', 'Minecraft', 'Java'],
    source: 'https://github.com/MyNameTsThad/SkyblockItemsPlusPlus-1.16.5',
    live: '',
    id: 8
  },
  {
    title: 'Tree Game',
    description: "A simple game where you chop down a set amount of trees with apples in the given time. Currently live on the Google Play Store. Build using Unity and C#.",
    tags: ['Unity', 'C#'],
    source: 'https://github.com/MyNameTsThad/Tree-Game',
    live: 'https://play.google.com/store/apps/details?id=com.ThadDev.TreeGame',
    id: 9
  },
  {
    title: 'BattleParkour',
    description: "My first Unity game. Reach the end of the level while facing enemies. Currently live on the Google Play Store.",
    tags: ['Unity', 'C#'],
    source: '',
    live: 'https://play.google.com/store/apps/details?id=com.ThadCoder.BattleParkour',
    id: 9
  },
  {
    title: 'HealthMod',
    description: "A simple mod for Minecraft version 1.8.9 that warns you whenever you're health is low. Built using Java and Forge.",
    tags: ['Forge', 'Minecraft', 'Java'],
    source: 'https://github.com/MyNameTsThad/HealthMod',
    live: '',
    id: 8
  },
];

export const TimeLineData = [
  {year: 2016, text: 'Started my programming journey',},
  {year: 2019, text: 'Started making Unity Games',},
  {year: 2020, text: 'Released my first Game "BattleParkour"'},
  {year: 2020, text: 'Joined My first competition "Thailand Topcoder" by GetLinks.'},
  {year: 2021, text: 'Created and Released my Second Game "Tree Game"'},
  {year: 2021, text: 'Started doing HackerRank to improve my skills'},
  {year: 2021, text: 'Participated in a itch.io Game Jam called "ProcJam" and released the game "Geometry Mix"'},
  {year: 2021, text: 'Participated in a contest called "TOCPC"'},
  {year: 2021, text: 'Started doing LeetCode'},
  {year: 2022, text: 'Participated in VERSO HACK 2022'}
];

export const Links = [
  {name: 'Github', link: 'https://github.com/MyNameTsThad'},
  {name: 'Hackerrank', link: 'https://www.hackerrank.com/ThadDev'},
  {name: 'LeetCode', link: 'https://leetcode.com/ThadDev'},
  {name: 'itch.io', link: 'https://mynametsthad.itch.io'},
  {name: 'Google Play', link: 'https://play.google.com/store/apps/developer?id=ThadDev'},
  {name: 'Facebook', link: 'https://www.facebook.com/thad.gaming.37'},
  {name: 'Email', link: 'mailto:real.thad.choyrum@gmail.com'}
];

export const timerAPIs = [
  createData('List all Timers', "/timer/getall", "GET"),
  createData('Get a specified Timer {id: ID of the timer}', "/timer/get?id={id}", "GET"),
  createData('Add a timer {json: lengthTime: Time in milliseconds the timer will last}', "/timer/new", "POST"),
  createData('Modify a Timer {id: ID of the timer to change, json: lengthTime: Time in milliseconds the new timer will last}', "/timer/set?id={id}", "PATCH"),
  createData('Delete a Timer {id: ID of the timer to delete}', "/timer/delete?id={id}", "DELETE"),
  createData('Delete ALL Timers', "/timer/deleteall", "DELETE"),
];

export const timerInstanceAPIs = [
  createData('List all Timer Instances', "/timer/instances/getall", "GET"),
  createData('Get a specified Timer Instance {id: ID of the timer instance}', "/timer/instances/get?id={id}", "GET"),
  createData('Get the current CONTROLLING Timer Instance', "/timer/instances/getcontrolling", "GET"),
  createData('Create a new Timer Instance {timerId: The ID of the parent Timer, isComputerControl: If the Timer Instance is controlling}', "/timer/instances/new?timerId={id}&isComputerControl={true,false}", "POST"),
  createData('Start a Timer Instance {id: ID of the timer instance to start}', "/timer/instances/start?id={id}", "PATCH"),
  createData('Pauses a Timer Instance {id: ID of the timer instance to pause}', "/timer/instances/pause?id={id}", "PATCH"),
  createData('Changes the controlling state of a Timer Instance {id: ID of the timer instance to pause, computerControl: the new controlling state}', "/timer/instances/computercontrol?id={id}&computerControl={true,false}", "PATCH"),
  createData('Delete a Timer Instance {id: ID of the timer instance to delete}', "/timer/instances/delete?id={id}", "DELETE"),
  createData('Delete ALL Timers {authPassword: The authentication password}', "/timer/instances/delete/all?authPassword={authPassword}", "DELETE"),
];

export const computerControl = [
  createData('Pings the server for the current status', "/computercontrol/ping", "GET"),
  createData('Get current Command stack', "/computercontrol/getstack", "GET"),
  createData('Request the server to add a Command to the stack {json: execCommand: The command that is going to be added}', "/computercontrol/add", "POST"),
  createData('Request the server to validate the Computer Control Password {password: the computer control password}', "/computercontrol/auth?password={password}", "POST"),
  createData('Clears the Command stack', "/computercontrol/clearstack", "DELETE")
];

export const otherApis = [
  createData('Get Cloudflare worker Main URL', "/cf-ngrok/get1", "GET"),
  createData('Get Cloudflare worker LINE URL', "/cf-ngrok/get2", "GET"),
  createData('Get Cloudflare worker Site URL', "/cf-ngrok/get3", "GET"),
  createData('Set Cloudflare worker Main URL', "[REDACTED]", "POST"),
  createData('Set Cloudflare worker LINE URL', "[REDACTED]", "POST"),
  createData('Set Cloudflare worker Site URL', "[REDACTED]", "POST"),
  createData('LINE Bot Callback', "https://linebot.{domain}/callback", "POST"),
];