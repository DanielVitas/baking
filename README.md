# Recipe site

Two files do everything:

- `index.html` — the site (layout, search, scaling). You normally never edit it.
- `recipes.js` — your recipes and the site title. This is the only file you edit.

Open `index.html` directly in a browser to preview; no server or build step is needed.

## Adding a recipe

1. Open `recipes.js`.
2. Copy the template from the comment at the top, paste it inside `window.RECIPES = [ ... ]`, and fill it in.
3. Put a comma between recipes: `{ ... }, { ... }`.
4. Save and reload the page.

If the page shows "No recipes yet" after an edit, there is a syntax error in `recipes.js` (usually a missing comma or quote). Open the browser console (F12) to see the line number.

In steps, wrap ingredient names in asterisks to show them in bold: `"Beat the *butter* and *sugar*."`
Wrap oven temperatures and baking times in curly braces to show them in red: `"Bake at {180 °C} for {25 minutes}."`

Each recipe gets its own link: `.../index.html#<id>`, e.g. `#brownies`.

## What the page shows

- Menu: all recipes in alphabetical order, as a grid of photos with the name under each. (`category` is kept in the data but not shown for now.)
- Recipe page: a small photo beside the name, Ingredients (in two columns when the list has "# " groups, e.g. crust and filling), Steps, and "Source: …" linking to the original recipe (set `source: { name, url }`; without a name the site's domain is shown).
- Photos: put them in an `images/` folder next to `index.html` and set `image: "images/name.jpg"` on the recipe. Both the menu and the recipe page crop them to 4:3, so shots with the food centred work best. Without a photo the menu shows a plain tile with the first letter of the name.
- Follows the system light/dark setting.

## Putting it online

Upload the folder (`index.html`, `recipes.js` and `images/`) anywhere that serves static files:

- **Next to your academic homepage:** put it in a subfolder, e.g. `yoursite/recipes/`, and link to `/recipes/`.
- **GitHub Pages:** create a repository, add both files, enable Pages under Settings → Pages (branch `main`, folder `/`).
- **Netlify Drop:** drag the folder onto app.netlify.com/drop.

To update, edit `recipes.js` and upload it again.
