# README

## Build out your project step by step

    -  Display list from fetched data
    -  Populate dropdown options from fetched data
    -  Apply search criteria to fetched data

### TO DO

Display list of 100 Beanies on page load

Populate astroSign or Theme dropdown from supabase data

Search Beanies by an attribute shows filtered list

## HTML

-   Section (search)
    -   \<h2> Search Beanie Babies by AstroSign
    -   form
        -   label (beanies)
        -   select (astroSign)
        -   button (submit)
-   List (beanies)

## STATE

-   beanie array
-   astrosign array

## EVENTS

-   display on page load
    -   display cards
    -   populate dropdown
-   eventlistener input ('change')

## FUNCTIONS

-   fetch-utils.js
    -   getAllBeanies();
    -   getAllAstro();
    -   getBeanieByAstro();
-   render.js
    -   renderBeanies();
    -   renderAstro();
-   app.js
    -   displayBeanies();
    -   displayAstros();
    -   findBeaniesBy(astros);
