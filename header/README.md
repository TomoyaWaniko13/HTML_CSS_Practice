The hamburger icon in your HTML and CSS code works due to the combination of CSS styling and the structure you have set up. Here's a breakdown of how it functions:

HTML Structure:

The checkbox input (<input type="checkbox" id="check">) and the label (<label for="check" class="check-btn">) are key components. The label is associated with the checkbox through the for attribute, which matches the id of the checkbox.
The hamburger icon is placed inside this label and is represented by a font-awesome icon (<i class="fa-solid fa-burger"></i>).
CSS Styling:

The .check-btn class, which styles the label containing the hamburger icon, is initially set to display: none;. This means it won't show up in larger screens.
In your media query @media(max-width: 858px), the .check-btn class is set to display: block;, making the hamburger icon visible on smaller screens.
The nav ul is initially positioned off-screen (left: -100%;). When the checkbox is checked (#check:checked ~ ul), the ul element is set to left: 0;, bringing it into view. This is a CSS trick that uses the adjacent sibling combinator (~) to change the style of the ul when the checkbox is checked.
Interaction:

When the hamburger icon (the label for the checkbox) is clicked, it toggles the state of the associated checkbox.
Since the visibility and positioning of the navigation ul are tied to whether the checkbox is checked or not, clicking the hamburger icon effectively shows or hides the navigation menu on smaller screens.
In summary, the hamburger icon works as a toggle for the navigation menu in mobile view. The checkbox acts as a hidden toggle switch, which, when its state is changed by clicking the associated label (hamburger icon), triggers the CSS to show or hide the menu.
