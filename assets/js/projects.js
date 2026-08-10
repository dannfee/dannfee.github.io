/* ============================================================
   Projects data — EDIT THIS FILE to manage the Projects section.
   No build step needed; just refresh the page after saving.
   ============================================================

   ── Filters ────────────────────────────────────────────────
   PROJECT_FILTERS defines the filter buttons. Keep the first one
   ("all"). To add a category: add a { id, label } here, then use
   that `id` as a project's `cat`. Remove a filter by deleting its
   line (make sure no project still uses that `cat`).

   ── Projects ───────────────────────────────────────────────
   To ADD a project: copy a { ... } block, paste it, edit the fields.
   To REMOVE a project: delete its { ... } block.

     title  – project name (shown on hover)
     tag    – small label under the title
     cat    – must match a filter `id` (other than "all")
     image  – path to an image in assets/img/projects/ (e.g. .svg / .jpg)
     repo   – GitHub URL   ("#" = placeholder / hidden intent)
     url    – live site URL ("#" = placeholder)
   ============================================================ */

window.PROJECT_FILTERS = [
  { id: "all",   label: "All" },
  { id: "backend", label: "Backend" },
  { id: "webpage",   label: "Webpage" },
  { id: "webapp",   label: "Web App" },
  { id: "js", label: "JavaScript" },
];

window.PROJECTS = [
  {
    title: "Personal Page",
    tag: "Webpage",
    cat: "webpage",
    image: "assets/img/projects/personal-page.jpg",
    repo: "https://github.com/dannfee/dannfee.github.io",
    url: "https://dannfee.github.io/",
  },
  {
    title: "Bookshelf API",
    tag: "Backend",
    cat: "backend",
    image: "assets/img/projects/bookshelf-api.jpg",
    repo: "https://github.com/dannfee/bookshelf-api",
    url: "https://bookshelf-api-oyxn.onrender.com/docs",
  },
  {
    title: "To-Do App",
    tag: "Web App",
    cat: "webapp",
    image: "assets/img/projects/todoapp.jpg",
    repo: "https://github.com/dannfee/todoapp",
    url: "https://dannfee.github.io/todoapp/",
  },
  {
    title: "Weather App",
    tag: "Web App",
    cat: "webapp",
    image: "assets/img/projects/weather-app.jpg",
    repo: "https://github.com/dannfee/weather-app",
    url: "https://dannfee.github.io/weather-app/",
  },
  {
    title: "BattleShip game",
    tag: "Web App",
    cat: "webapp",
    image: "assets/img/projects/battleship.jpg",
    repo: "https://github.com/dannfee/battleship",
    url: "https://dannfee.github.io/battleship/",
  },
  {
    title: "Calculator",
    tag: "Web App",
    cat: "webapp",
    image: "assets/img/projects/calculator.jpg",
    repo: "https://github.com/dannfee/calculator",
    url: "https://dannfee.github.io/calculator/",
  },
  {
    title: "Rock-Paper-Scissors game",
    tag: "Web App",
    cat: "webapp",
    image: "assets/img/projects/rock-paper-scissors.jpg",
    repo: "https://github.com/dannfee/rock-paper-scissors",
    url: "https://dannfee.github.io/rock-paper-scissors/",
  },
  {
    title: "TicTacToe game",
    tag: "Web App",
    cat: "webapp",
    image: "assets/img/projects/tictactoe.jpg",
    repo: "https://github.com/dannfee/tic-tac-toe",
    url: "https://dannfee.github.io/tic-tac-toe/",
  },
  {
    title: "Knight Travails",
    tag: "JavaScript",
    cat: "js",
    image: "assets/img/projects/knight-travails.jpg",
    repo: "https://github.com/dannfee/knight-travails",
  },
  {
    title: "Binary Tree",
    tag: "JavaScript",
    cat: "js",
    image: "assets/img/projects/binarytree.jpg",
    repo: "https://github.com/dannfee/binarytree",
  },
  {
    title: "Hashmap",
    tag: "JavaScript",
    cat: "js",
    image: "assets/img/projects/hashmap.jpg",
    repo: "https://github.com/dannfee/hashmap",
  },
  {
    title: "Linked List",
    tag: "JavaScript",
    cat: "js",
    image: "assets/img/projects/linkedlist.jpg",
    repo: "https://github.com/dannfee/linked-list",
  },
];
