// Site settings.
window.SITE = {
  title: "Recipes",
  homepage: "" // e.g. "https://your-academic-site.example" — adds a link back in the footer
};

// ---------------------------------------------------------------------------
// RECIPES
// Each recipe is one object. Copy the template below, fill it in, save, reload.
//
// {
//   id: "lemon-cheesecake",                // unique, lowercase, no spaces; the link is #lemon-cheesecake
//   title: "Lemon cheesecake",
//   category: "Cakes",                     // the menu is grouped by this
//   image: "images/lemon-cheesecake.jpg",  // optional photo next to the name in the menu
//   source: { name: "Sally's Baking Addiction", url: "https://..." }, // optional; shown as "Source: …" under the steps (name optional)
//   ingredients: [
//     "# Base",                                          // a line starting with # is a group heading
//     { amount: 200, unit: "g", name: "digestive biscuits" },
//     { amount: 2, name: "eggs", note: "room temperature" }, // no unit → counted item
//     { amount: 5, unit: "ml", name: "vanilla extract" },
//     { name: "salt", note: "a pinch" }                  // no amount
//   ],
//   steps: [
//     "Crush the *digestive biscuits*.",                // *word* is shown in bold (use it for ingredients)
//     "# Filling",                                       // group heading inside the steps
//     "Beat the *eggs* with the *vanilla*.",
//     "Bake at {180 °C} for {25 minutes}."           // {text} is shown in red (oven temperature and time)
//   ]
// },
// ---------------------------------------------------------------------------

window.RECIPES = [

  // ----------------------------- Cookies -----------------------------

  {
    id: "red-currant-oat-cookies",
    title: "Red currant and oat cookies",
    category: "Cookies",
    image: "images/red-currant-oat-cookies.jpg",
    source: { name: "Meike Peters", url: "https://www.meikepeters.com/blog/cakey-red-currant-and-oat-cookies" },
    ingredients: [
      { amount: 200, unit: "g", name: "plain flour" },
      { amount: 150, unit: "g", name: "rolled oats" },
      { amount: 6, unit: "g", name: "salt" },
      { amount: 3, unit: "g", name: "baking soda" },
      { amount: 3, unit: "g", name: "baking powder" },
      { amount: 170, unit: "g", name: "butter", note: "soft" },
      { amount: 200, unit: "g", name: "granulated sugar" },
      { amount: 100, unit: "g", name: "ripe banana", note: "mashed (about 1)" },
      { amount: 1, name: "egg" },
      { name: "vanilla seeds", note: "a pinch, scraped from the pod" },
      { amount: 200, unit: "g", name: "red currants", note: "ripe but not soft" }
    ],
    steps: [
      "Mix the *flour*, *oats*, *salt*, *baking soda* and *baking powder*.",
      "Beat the *butter* and *sugar* until fluffy. Add the *banana*, *egg* and *vanilla* and beat until combined.",
      "Stir the dry mixture into the wet one until a lumpy dough forms.",
      "Fold in the *red currants* with 4–5 strokes only, keeping a small handful back.",
      "Drop spoonfuls of dough onto a tray, flatten slightly with a fork and press the reserved currants on top.",
      "Bake at {180 °C fan} for about {13 minutes}, until golden. They stay soft."
    ]
  },

  {
    id: "chocolate-crinkles",
    title: "Razpokančki",
    category: "Cookies",
    image: "images/chocolate-crinkles.jpg",
    source: { name: "Leaneen", url: "https://leaneen.com/2021/10/24/cokoladni-razpokancki/" },
    ingredients: [
      "# Dough",
      { amount: 220, unit: "g", name: "dark chocolate" },
      { amount: 120, unit: "g", name: "butter" },
      { amount: 120, unit: "g", name: "oil" },
      { amount: 4, name: "large eggs" },
      { amount: 200, unit: "g", name: "granulated sugar" },
      { amount: 200, unit: "g", name: "powdered sugar" },
      { amount: 5, unit: "ml", name: "vanilla paste" },
      { amount: 350, unit: "g", name: "plain flour" },
      { amount: 50, unit: "g", name: "cocoa powder" },
      { amount: 7, unit: "g", name: "baking powder" },
      { amount: 3, unit: "g", name: "salt" },
      "# Coating",
      { amount: 80, unit: "g", name: "powdered sugar" }
    ],
    steps: [
      "Melt the *chocolate*, *butter* and *oil* over a water bath, stirring often. Cool to lukewarm.",
      "Whisk the *eggs* with the *granulated sugar*, *powdered sugar* and *vanilla paste* for 8–10 minutes, until foamy.",
      "Fold in the cooled chocolate mixture.",
      "Mix the *flour*, *cocoa*, *baking powder* and *salt*, and fold into the batter until even.",
      "Cover and chill for about 3 hours or overnight, until firm.",
      "Take the dough out a little at a time so it stays cold. Roll 18 g balls and coat them well in *powdered sugar*.",
      "Bake at {180 °C} for about {10 minutes} for soft centres, or {12–14 minutes} for crisper cookies. They firm up as they cool."
    ]
  },

  {
    id: "raffaello-cookies",
    title: "Raffaello cookies",
    category: "Cookies",
    image: "images/raffaello-cookies.jpg",
    source: { name: "Leaneen", url: "https://leaneen.com/2023/12/05/raffaello-piskoti/" },
    ingredients: [
      "# Dough",
      { amount: 200, unit: "g", name: "butter", note: "soft" },
      { amount: 80, unit: "g", name: "powdered sugar" },
      { amount: 5, unit: "ml", name: "vanilla paste" },
      { amount: 2, name: "egg yolks" },
      { amount: 250, unit: "g", name: "plain flour" },
      { amount: 40, unit: "g", name: "finely ground almonds" },
      { amount: 40, unit: "g", name: "coarse desiccated coconut" },
      "# Filling",
      { amount: 200, unit: "g", name: "white coconut spread", note: "1 jar" }
    ],
    steps: [
      "Beat the *butter* and *powdered sugar* until smooth and glossy.",
      "Beat in the *vanilla paste* and *egg yolks*.",
      "Add the *flour* mixed with the *almonds* and *coconut*, and mix on low speed until the dough is even.",
      "Wrap and chill for at least 5 hours, preferably overnight.",
      "Roll the dough out and cut out cookies. Cut a small window out of half of them.",
      "Bake at {180 °C} ({160 °C fan}) for about {12 minutes}, a little longer with fan.",
      "When cool, spread the whole cookies with *coconut spread* and top each with a window cookie."
    ]
  },

  {
    id: "brownie-cookies",
    title: "Brownie cookies",
    category: "Cookies",
    image: "images/brownie-cookies.jpg",
    source: { name: "Leaneen", url: "https://leaneen.com/2022/10/04/brownie-piskoti/" },
    ingredients: [
      { amount: 80, unit: "g", name: "butter" },
      { amount: 350, unit: "g", name: "dark chocolate" },
      { amount: 3, name: "large eggs" },
      { amount: 150, unit: "g", name: "granulated sugar" },
      { amount: 130, unit: "g", name: "light muscovado sugar" },
      { amount: 5, unit: "ml", name: "vanilla paste" },
      { amount: 150, unit: "g", name: "plain flour" },
      { amount: 15, unit: "g", name: "cocoa powder" },
      { amount: 6, unit: "g", name: "baking powder" },
      { name: "salt", note: "a pinch" }
    ],
    steps: [
      "Melt the *butter* and *chocolate* over a water bath, stirring until smooth. Cool to lukewarm.",
      "Beat the *eggs*, both *sugars* and the *vanilla paste* on the highest speed for 5–7 minutes, until lighter.",
      "On low speed, add the melted chocolate and mix for about 1 minute.",
      "Sift in the *flour*, *cocoa*, *baking powder* and *salt*, and beat for 30 seconds.",
      "Scoop portions with an ice-cream scoop onto trays, well apart.",
      "Bake at {170 °C} for about {14 minutes}, until the tops are shiny and cracked and the insides still slightly soft."
    ]
  },

  // ------------------------------ Bars -------------------------------

  {
    id: "brownies",
    title: "Brownies",
    category: "Bars",
    image: "images/brownies.jpg",
    source: { name: "Preppy Kitchen", url: "https://preppykitchen.com/brownie-recipe/" },
    ingredients: [
      { amount: 170, unit: "g", name: "unsalted butter" },
      { amount: 300, unit: "g", name: "granulated sugar" },
      { amount: 150, unit: "g", name: "brown sugar" },
      { amount: 60, unit: "g", name: "cocoa powder", note: "unsweetened" },
      { amount: 5, unit: "g", name: "coffee" },
      { amount: 3, name: "large eggs", note: "room temperature" },
      { amount: 15, unit: "ml", name: "vanilla extract" },
      { amount: 6, unit: "g", name: "salt" },
      { amount: 150, unit: "g", name: "plain flour" },
      { amount: 270, unit: "g", name: "cut chocolate (45% cacao)" }
    ],
    steps: [
      "Melt the *butter*. Add both *sugars* and the *cocoa* and whisk hard for a few minutes, then stir in the *coffee*.",
      "Whisk in the *eggs*, *vanilla* and *salt*.",
      "Fold in the *flour* and *chocolate* until just combined, and spread in the tin.",
      "Bake at {175 °C} for {35–40 minutes} for fudgy brownies, or up to {55 minutes} for cakey ones.",
      "Cool completely before cutting."
    ]
  },

  {
    id: "blueberry-pie-bars",
    title: "Blueberry pie crumble",
    category: "Bars",
    image: "images/blueberry-pie-bars.jpg",
    source: { name: "Sally's Baking Addiction", url: "https://sallysbakingaddiction.com/blueberry-pie-bars/" },
    ingredients: [
      "# Crust and topping",
      { amount: 188, unit: "g", name: "plain flour" },
      { amount: 85, unit: "g", name: "rolled oats", note: "plus 10 g for the topping" },
      { amount: 100, unit: "g", name: "brown sugar" },
      { amount: 4, unit: "g", name: "baking powder" },
      { amount: 2, unit: "g", name: "lemon zest" },
      { amount: 1, unit: "g", name: "ground cinnamon" },
      { amount: 2, unit: "g", name: "salt" },
      { amount: 142, unit: "g", name: "unsalted butter", note: "melted" },
      "# Filling",
      { amount: 640, unit: "g", name: "fresh blueberries" },
      { amount: 100, unit: "g", name: "granulated sugar" },
      { amount: 15, unit: "g", name: "cornstarch" },
      { amount: 15, unit: "ml", name: "lemon juice" },
      { amount: 4, unit: "g", name: "lemon zest" }
    ],
    steps: [
      "Mix the *flour*, 85 g *oats*, *brown sugar*, *baking powder*, 2 g *lemon zest*, *cinnamon* and *salt*. Stir in the melted *butter* until it looks like damp sand.",
      "Press two thirds of it into the tin and bake at {175 °C} for {10 minutes}.",
      "In a saucepan over medium heat, cook the *blueberries*, *sugar*, *cornstarch* and *lemon juice* for 2–3 minutes, stirring, until the sugar and cornstarch dissolve. Take off the heat and stir in 4 g *lemon zest*.",
      "Pour the filling over the warm crust. Stir the remaining 10 g *oats* into the leftover crumbs and scatter over the top, pressing lightly.",
      "Bake at {175 °C} for {45–55 minutes}, until lightly browned and bubbling at the edges.",
      "Cool completely before cutting (for neat squares, bake them the day before)."
    ]
  },

  {
    id: "cherry-pie-crumb-bars",
    title: "Cherry pie crumble",
    category: "Bars",
    image: "images/cherry-pie-crumb-bars.jpg",
    source: { name: "Crunchy Creamy Sweet", url: "https://www.crunchycreamysweet.com/cherry-pie-crumb-bars-recipe/" },
    ingredients: [
      "# Crumb",
      { amount: 113, unit: "g", name: "unsalted butter", note: "melted and cooled" },
      { amount: 100, unit: "g", name: "granulated sugar" },
      { amount: 180, unit: "g", name: "plain flour" },
      { amount: 3, unit: "g", name: "baking soda" },
      { amount: 2, unit: "g", name: "baking powder" },
      { amount: 2, unit: "g", name: "salt" },
      { amount: 4, unit: "g", name: "granulated sugar", note: "for sprinkling" },
      "# Filling",
      { amount: 300, unit: "g", name: "fresh cherries", note: "pitted and halved" },
      { amount: 7, unit: "g", name: "cornstarch" },
      { amount: 15, unit: "ml", name: "lemon juice" }
    ],
    steps: [
      "Stir the *cherries* with the *cornstarch* and *lemon juice*.",
      "Stir the melted *butter* and *sugar*. Add the *flour*, *baking soda*, *baking powder* and *salt* and mix with a fork into crumbs.",
      "Set aside about a third of the crumbs and press the rest into the tin.",
      "Spread the cherries over the base, scatter the reserved crumbs on top and sprinkle with 4 g *sugar*.",
      "Bake at {190 °C} for {23–25 minutes}, until golden. Cool completely before cutting."
    ]
  },

  // ----------------------------- Pastry ------------------------------

  {
    id: "djedovi-brkovi",
    title: "Dedkovi brklji",
    category: "Pastry",
    image: "images/djedovi-brkovi.jpg",
    source: { name: "Coolinarika", url: "https://www.coolinarika.com/recepti/djedovi-brkovi-aa7bdcaa-6433-11eb-af9c-0242ac1200aa" },
    ingredients: [
      "# Dough",
      { amount: 3, name: "egg yolks" },
      { amount: 400, unit: "g", name: "plain flour" },
      { amount: 170, unit: "g", name: "butter" },
      { amount: 80, unit: "g", name: "powdered sugar" },
      { amount: 6, unit: "g", name: "baking powder" },
      { amount: 105, unit: "ml", name: "milk" },
      "# Filling",
      { amount: 375, unit: "g", name: "apricot jam" },
      { amount: 3, name: "egg whites" },
      { amount: 1, unit: "g", name: "salt" },
      { amount: 100, unit: "g", name: "sugar" },
      { amount: 150, unit: "g", name: "walnuts" }
    ],
    steps: [
      "Knead the *egg yolks*, *flour*, *butter*, *powdered sugar*, *baking powder* and *milk* into a smooth dough. Rest for 30–60 minutes.",
      "Divide into three and roll each piece into a rectangle. Spread with *apricot jam*, then roll up from both long sides towards the middle, leaving a gap in the centre.",
      "Bake at {180 °C} for {10 minutes}.",
      "Meanwhile, add the *salt* to the *egg whites* and whisk to stiff peaks, add the *sugar* and whisk further, then fold in the *walnuts*.",
      "Fill the gaps down the middle with the meringue.",
      "Bake for another {25 minutes}, until light golden.",
      "Best sliced the next day."
    ]
  },

  // ---------------------------- Desserts -----------------------------

  {
    id: "tiramisu",
    title: "Tiramisu",
    category: "Desserts",
    image: "images/tiramisu.jpg",
    source: { name: "Bake with Zoha", url: "https://bakewithzoha.com/best-classic-italian-tiramisu/" },
    ingredients: [
      "# Mascarpone cream",
      { amount: 450, unit: "g", name: "mascarpone", note: "cold" },
      { amount: 4, name: "egg yolks" },
      { amount: 133, unit: "g", name: "caster sugar" },
      { amount: 5, unit: "ml", name: "vanilla" },
      { amount: 1, unit: "g", name: "salt" },
      { amount: 360, unit: "g", name: "whipping cream", note: "cold" },
      "# Assembly",
      { amount: 30, name: "ladyfingers", note: "30–36" },
      { amount: 360, unit: "ml", name: "strong black coffee", note: "room temperature" },
      { amount: 10, unit: "g", name: "cocoa powder" }
    ],
    steps: [
      "Whisk the *mascarpone* on medium speed for 30–60 seconds, until creamy.",
      "Whisk the *egg yolks* and *sugar* in a bowl over simmering water on medium-high for 2 minutes, until light and fluffy. Take off the heat.",
      "Add the yolk mixture, *salt* and *vanilla* to the mascarpone and whisk just until combined.",
      "Whip the cold *cream* to medium-stiff peaks and fold it into the mascarpone in 2–3 additions.",
      "Dip each *ladyfinger* quickly in the *coffee* on both sides and lay them in a dish.",
      "Spread over half the cream, add a second layer of dipped ladyfingers and finish with the rest of the cream.",
      "Cover and chill for at least 6 hours, ideally overnight.",
      "Sift *cocoa* over the top just before serving."
    ]
  }
];
