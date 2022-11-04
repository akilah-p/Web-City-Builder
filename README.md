![](./assets/City%20Builder%20Wireframe.png)

HTML
Slice 1 - Location
section for dropdowns
div
label
select - option for each img with value img
counter div

Slice 2 - Architecture
duplicate above for Architecture

Slice 3 - Known For
duplicate above for Known For

Slice 4 - City Slogans
label
input for phrases
add button
ul for list display

STATE

-   location changes (counter) = slice 1
-   Architecture changes (counter) = slice 2
-   Known For changes (counter) = slice 3
-   City Slogan Array = slice 4

EVENTS

Slice 1

-   Location select (on change)
    -   user selection used for img display
    -   increment counter
    -   update view (display state change)

Slice 2

-   Architecture Select (on change)
    -   Same as Location

Slice 3

-   Known For Select (on change)
    -   Same as Location

Slice 4

-   'Add' Button (on click)
    -   push user's into city slogans to display in state
    -   display all phrases
    -   reset the input value
