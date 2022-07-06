export const PageStyles = {
  // Temp fonts
  fonts: {
    title: "Plus Jakarta Sans, sans-serif",
    main: "Plus Jakarta Sans, sans-serif",
    thai: "supermarket, sans-serif"
  },
  // Colors for layout
  colors: {
    primary1: "#F2F5F7",
    primary2: "#FFAA00",
    background1: "#1F1F1F",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
    hackerrank: "#22934b",
    leetcode: "#ad6800"
  },

  vars: {
    cubeSize: "40vh",
    colorFront: "#404040",
    colorBack: "#202020",
    colorTop: "#353535",
    colorRight: "#3d3d3d",
    colorBottom: "#252525",
    colorLeft: "#3d3d3d"
  }
}

// @ts-ignore
function createData(name, apiLink, method) {
  return {name, apiLink, method};
}

export const projects = [
  {
    title: 'CombatUtilities',
    description: "CombatUtilities",
    tags: ['Fabric', 'Minecraft', 'Java'],
    source: 'https://github.com/MyNameTsThad/CombatUtilities',
    live: '',
    id: 9
  },
  {
    title: 'thaddev.com',
    description: "thaddev.com",
    tags: ['Next.js', 'React.js', 'JavaScript'],
    source: 'https://github.com/MyNameTsThad/thaddev.com',
    live: 'https://thaddev.com',
    id: 8
  },
  {
    title: 'Some Discord Bot',
    description: "SomeDiscordBot",
    tags: ['JDA', 'Java'],
    source: 'https://github.com/MyNameTsThad/SomeDiscordBot',
    live: '',
    id: 0
  },
  {
    title: 'Project APIs',
    description: "ProjectAPIs",
    tags: ['Spring Boot', 'Java'],
    source: 'https://github.com/MyNameTsThad/project-apis',
    live: '',
    id: 1
  },
  {
    title: 'IoT Door Lock',
    description: "IoTDoorLock",
    tags: ['Blynk', 'Arduino', 'C++', 'C'],
    source: 'https://github.com/MyNameTsThad/PCCCHON_Project_IoTDoorLock-V2',
    live: '',
    id: 2
  },
  {
    title: 'Pydoku',
    description: "Pydoku",
    tags: ['Python'],
    source: 'https://github.com/MyNameTsThad/pydoku',
    live: '',
    id: 3
  },
  {
    title: 'Boosted Burgers App',
    description: "BoostedBurgersApp",
    tags: ['Android', 'Java'],
    source: 'https://github.com/MyNameTsThad/VERSOHACK2022-BoostedBurgersApp',
    live: '',
    id: 4
  },
  {
    title: 'Helpful Utils Bot',
    description: "HelpfulUtilsBot",
    tags: ['LINE', 'Java'],
    source: 'https://github.com/MyNameTsThad/HelpfulUtilsBot-LINE',
    live: '',
    id: 5
  },
  {
    title: 'Geometry Mix',
    description: "GeometryMix",
    tags: ['Unity', 'C#'],
    source: 'https://github.com/MyNameTsThad/GeometryMix',
    live: 'https://itch.io/jam/procjam/rate/1315310',
    id: 6
  },
  {
    title: 'Hytils',
    description: "Hytils",
    tags: ['Forge', 'Minecraft', 'Java'],
    source: 'https://github.com/MyNameTsThad/Hytils-1.8.9',
    live: '',
    id: 7
  },
  {
    title: 'Notes App',
    description: "NotesApp",
    tags: ['Android', 'Java'],
    source: 'https://github.com/MyNameTsThad/Hytils-1.8.9',
    live: '',
    id: 8
  },
  {
    title: 'SkyblockItems++',
    description: "SkyblockItems++",
    tags: ['Forge', 'Minecraft', 'Java'],
    source: 'https://github.com/MyNameTsThad/SkyblockItemsPlusPlus-1.16.5',
    live: '',
    id: 8
  },
  {
    title: 'Tree Game',
    description: "TreeGame",
    tags: ['Unity', 'C#'],
    source: 'https://github.com/MyNameTsThad/Tree-Game',
    live: 'https://play.google.com/store/apps/details?id=com.ThadDev.TreeGame',
    id: 9
  },
  {
    title: 'BattleParkour',
    description: "BattleParkour",
    tags: ['Unity', 'C#'],
    source: 'https://github.com/MyNameTsThad/BattleParkour_Project',
    live: 'https://play.google.com/store/apps/details?id=com.ThadCoder.BattleParkour',
    id: 9
  },
  {
    title: 'HealthMod',
    description: "HealthMod",
    tags: ['Forge', 'Minecraft', 'Java'],
    source: 'https://github.com/MyNameTsThad/HealthMod',
    live: '',
    id: 8
  },
];

export const TimeLineData = [
  {year: 2016, text: 'timeline-2016',},
  {year: 2019, text: 'timeline-2019',},
  {year: 2020, text: 'timeline-2020-1'},
  {year: 2020, text: 'timeline-2020-2'},
  {year: 2021, text: 'timeline-2021-1'},
  {year: 2021, text: 'timeline-2021-2'},
  {year: 2021, text: 'timeline-2021-3'},
  {year: 2021, text: 'timeline-2021-4'},
  {year: 2021, text: 'timeline-2021-5'},
  {year: 2022, text: 'timeline-2022'}
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
  createData('timer-listall', "/timer/getall", "GET"),
  createData('timer-gettimer', "/timer/get?id={id}", "GET"),
  createData('timer-addtimer', "/timer/new", "POST"),
  createData('timer-modifytimer', "/timer/set?id={id}", "PATCH"),
  createData('timer-deletetimer', "/timer/delete?id={id}", "DELETE"),
  createData('timer-deletetimers', "/timer/deleteall", "DELETE"),
];

export const timerInstanceAPIs = [
  createData('timerinstance-listall', "/timer/instances/getall", "GET"),
  createData('timerinstance-gettimerinstance', "/timer/instances/get?id={id}", "GET"),
  createData('timerinstance-getcontrolling', "/timer/instances/getcontrolling", "GET"),
  createData('timerinstance-newinstance', "/timer/instances/new?timerId={id}&isComputerControl={true,false}", "POST"),
  createData('timerinstance-start', "/timer/instances/start?id={id}", "PATCH"),
  createData('timerinstance-pause', "/timer/instances/pause?id={id}", "PATCH"),
  createData('timerinstance-computercontrol', "/timer/instances/computercontrol?id={id}&computerControl={true,false}", "PATCH"),
  createData('timerinstance-deleteone', "/timer/instances/delete?id={id}", "DELETE"),
  createData('timerinstance-deleteall', "/timer/instances/delete/all?authPassword={authPassword}", "DELETE"),
];

export const computerControl = [
  createData('computercontrol-ping', "/computercontrol/ping", "GET"),
  createData('computercontrol-getstack', "/computercontrol/getstack", "GET"),
  createData('computercontrol-addtostack', "/computercontrol/add", "POST"),
  createData('computercontrol-validate', "/computercontrol/auth?password={password}", "POST"),
  createData('computercontrol-clear', "/computercontrol/clearstack", "DELETE")
];

export const otherApis = [
  createData('other-linebot', "https://linebot.{domain}/callback", "POST"),
];
