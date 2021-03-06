﻿import * as React from 'react';

export const MenuNav =
    <ul className="menulnks">
        <li><a className="menulnk" data-menu="bp">Baked Pastas</a></li>
        <li><a className="menulnk" data-menu="kp">Kid Pleasers</a></li>
        <li><a className="menulnk" data-menu="cass">Casseroles</a></li>
        <li><a className="menulnk" data-menu="ch">Chilies</a></li>
        <li><a className="menulnk" data-menu="rsb">Roasts, Stews and Braises</a></li>
        <li><a className="menulnk" data-menu="ml">Meatloaves</a></li>
        <li><a className="menulnk" data-menu="sp">Home Made Sauce with Boxed Pasta</a></li>
        <li><a className="menulnk" data-menu="enc">Enchiladas</a></li>
        <li><a className="menulnk" data-menu="sm">Sandwich Makers</a></li>
        <li><a className="menulnk" data-menu="soups">Soup</a></li>
        <li><a className="menulnk" data-menu="fss">Family Side Salads</a></li>
        <li><a className="menulnk" data-menu="sc">Seasonal Cobblers</a></li>
    </ul>

export const MenuContents =
    <div>
        <div className="menu" id="bp">
            <div className="summary">Lasagnas, stuffed shells and mac and cheese are delivered in an 8 x 10 pan.</div>
            <ul>
                <li>Beef and Italian Sausage Lasagna or Stuffed Shells</li>
                <li>Turkey Meatball Lasagna or Stuffed Shells</li>
                <li>Primavera Lasagna or Stuffed Shells</li>
                <li>Butternut Squash Lasagna or Stuffed Shells</li>
                <li>Chicken Meatball Florentine Lasagna or Stuffed Shells</li>
                <li>Spinach and Artichoke Lasagna or Stuffed Shells</li>
                <li>Seafood Lasagna or Stuffed Shells</li>
                <li>Three Mushroom Lasagna or Stuffed Shells</li>
                <li>Beef Mexican Lasagna</li>
                <li>Pulled Pork Mexican Lasagna</li>
                <li>Southern Style Mac & Cheese</li>
                <li>Chicken and Broccoli Mac & Cheese</li>
                <li>Ham, Pea and Gruyere Mac & Cheese</li>
                <li>French Onion Soup Mac &Cheese with Gruyere</li>
                <li>French Tomato Soup Mac & Cheese with Gruyere</li>
                <li>BLT Mac & Cheese with Organic Bacon, Cherry Tomatoes and Arugula</li>
                <li>Goat Cheese and Arugula Mac & Cheese</li>
                <li>Jalapeño and Hot Pepper Cheese Mac & Cheese with Bacon</li>
                <li>Butternut Squash Mac & Cheese</li>
                <li>Roasted Cauliflower, Parsnip and Ham Mac & Cheese</li>
                <li>Baked Ziti</li>
            </ul>
        </div>
        <div className="menu" id="kp">
            <ul>
                <li>
                    Healthy Baked Chicken Tenders (Marinated in Dijon and Yogurt
                    and Coated in Whole Wheat Bread Crumbs) with Green beans or Broccoli
                </li>
                <li>
                    Healthy Baked Haddock Fish Sticks with Greek Yogurt Tarter
                    Sauce with Green Beans or Broccoli
                </li>
            </ul>
        </div>
        <div className="menu" id="cass">
            <div className="summary">Served in 8 x 10 foil pans</div>
            <ul>
                <li>Chicken Parmesan over Penne – Veal is an additional $25</li>
                <li>Chicken Piccata over Penne – Veal is additional $25</li>
                <li>Chicken Marsala over Penne - Veal is additional $25</li>
                <li>Chicken and Rice with Carrots, Peas, Celery and Parsnips</li>
                <li>Chicken Pot Pie</li>
                <li>Chicken and Dumplings</li>
                <li>Irish Lamb Shepherd’s Pie with Guinness, Peas, Carrots and Pearl Onions (or Beef or Turkey if you prefer.) topped with Mashed Idaho Potatoes</li>
                <li>Thanksgiving Shepherd’s Pie with Turkey, Green Beans, and Onions topped with Mashed Sweet Potatoes</li>
                <li>Lamb Mousaka</li>
                <li>Jambalaya with shredded Chicken, Andouille and Shrimp</li>
                <li>Salmon and Scalloped Potato Casserole</li>
                <li>Twice Baked Potato Casserole with Bacon</li>
                <li>Spinach, Artichoke and Mushroom Casserole</li>
                <li>Cowboy Chicken Casserole</li>
            </ul>
        </div>
        <div className="menu" id="ch">
            <div className="summary">
                Chilies are served one of three ways with sour cream and green onions on the side
                (please indicate if you like beans or no beans and heat level).
            </div>
            <div className="summary" style={{ marginLeft: "5px" }}>
                <ol style={{ listStyleType: "decimal" }}>
                    <li>Casserole style with Corn Bread and Cheese Baked on top</li>
                    <li>Casserole Style with Macaroni or rice on the bottom with cheese on top</li>
                    <li>Separate</li>
                </ol>
            </div>
            <ul>
                <li>Beef Chili</li>
                <li>Turkey Chili</li>
                <li>White Chicken Chili</li>
                <li>Three Bean Chili</li>
                <li>Cincinnati Chili</li>
                <li>Texas Chili</li>
                <li>Italian Sausage Chili</li>
                <li>Chicken, Black Bean and Butternut Squash Chili</li>
                <li>Vegetarian Wheat Berry Chili</li>
            </ul>
        </div>
        <div className="menu" id="rsb">
            <div className="summary">Served in freezer gallon bags or 8 cup containers</div>
            <ul>
                <li>Beef Bourguignon with Rice Pilaf</li>
                <li>Chicken Cacciatore with Penne</li>
                <li>Coq au Vin with Rice Pilaf</li>
                <li>Irish Guinness Beef Stew with Root Vegetables and Potatoes</li>
                <li>Beef Osso Bucco with Saffron Risotto – Veal is an additional $25</li>
                <li>Lemon Thyme Roasted Chicken and Roasted Potatoes, Carrots and Celery</li>
                <li>Beef Chuck Roast with Roasted Root vegetables</li>
                <li>Pork Roast with Apples and Onions (Sauerkraut as well if desired)</li>
                <li>Roast Turkey Breast with Potato Choice, Stuffing and Green Bean Casserole</li>
                <li>Pork Roast Mushroom Marsala Sauce with Roasted Potatoes</li>
                <li>Stuffed Pork Loin with Leeks and Prunes with Roasted Potatoes</li>
                <li>Vegetarian Ratatouille with Rotini</li>
                <li>Vegetarian Caponata with Olives with Rotini</li>
                <li>Beef Stroganoff with Bag of Egg Noddles to boil night of service</li>
                <li>Chicken with Green Curry with Red Bell Peppers</li>
                <li>Chicken with Yellow Curry with Potatoes</li>
                <li>Lemon Chicken</li>
                <li>40 Clove Garlic Chicken</li>
                <li>Chicken Chasseur – Mushrooms, Tomato Sauce and Tarragon</li>
                <li>Moroccan Chicken with Lemon and Green Olives</li>
            </ul>
        </div>
        <div className="menu" id="ml">
            <div className="summary">
                Can be served shepherd’s pie style with mashed Idaho or sweet potatoes on top in 8 x 10 pan or the loaf and the
                potato in two separate containers.  Unless mentioned otherwise, the meatloaves are beef, pork and veal.
            </div>
            <ul>
                <li>Traditional Meatloaf with Gravy with Potato Choice</li>
                <li>Italian Meatloaf with Tomato Sauce with Potato Choice</li>
                <li>Turkey Florentine Meatloaf with Tomato Sauce with Potato Choice</li>
                <li>Turkey and Roasted Pepper Meatloaf with Gouda Cheese Sauce with Potato Choice</li>
                <li>Thanksgiving Turkey Meatloaf with Sage and Cornbread and Gravy with Potato Choice</li>
                <li>Bacon Cheeseburger Meatloaf with Cheddar Cheese Sauce, Bacon and Caramelized Shallots with Potato Choice</li>
                <li>Rosemary Meatloaf with Gorgonzola Filling and Dijon Sauce with Potato Choice</li>
                <li>Meatloaf Roulade with Provolone, Spinach and Prosciutto with Tomato Sauce with Potato Choice</li>
                <li>Vegetarian Lentil Loaf with Roasted Pepper Sauce with Potato Choice</li>
                <li>BBQ Meatloaf with Cheddar Cheese Sauce and Applewood Smoked Bacon with Potato Choice</li>
                <li>Meatloaf Stuffed Peppers with Tomato Sauce with Potato Choice</li>
                <li>Alpine Swiss Meatloaf with Swiss Cheese Sauce and Sautéed Baby Portabellas with Potato Choice</li>
                <li>Meatloaf Bourguignon with Caramelized Pearl Onions, Bacon and Sautéed Mushrooms and Bordelaise Sauce with Potato Choice</li>
            </ul>
        </div>
        <div className="menu" id="sp">
            <div className="summary">Feel free to request beef, pork and veal, or turkey Meatballs at no extra charge.</div>
            <ul>
                <li>Pomodoro</li>
                <li>Alfredo Cream Sauce</li>
                <li>Seafood Cream Sauce</li>
                <li>Bolognese</li>
                <li>Basil Pesto</li>
                <li>Arugula Pesto</li>
                <li>Gorgonzola Walnut Cream Sauce</li>
                <li>Vodka Tomato Cream Sauce</li>
                <li>Mushroom Ragu</li>
                <li>Marinara</li>
            </ul>
        </div>
        <div className="menu" id="enc">
            <div className="summary">
                Can also be tacos, just ask for the meat and tortillas to be kept separate.  Enchiladas are in an 8 x 10 foil pan. Taco
                filler in 8 cup container. All are served with rice, beans and a salsa choice. Please indicate heat level.
            </div>
            <ul>
                <li>Pulled Chuck Roast</li>
                <li>Pork Carnitas – Pulled Pork Butt</li>
                <li>Ground Beef</li>
                <li>Shrimp</li>
                <li>Tilapia</li>
                <li>Pulled Chicken</li>
            </ul>
            <div>
                Salsa Choices – Tomato, Roasted Tomato and Pepper, Peach, and Tropical
            </div>
        </div>
        <div className="menu" id="sm">
            <div className="summary">All brought with an 8 pack of rolls.</div>
            <ul>
                <li>North Carolina Pulled Pork with Cole Slaw</li>
                <li>Italian Style Porkette with Provolone</li>
                <li>Pulled BBQ Chicken</li>
                <li>Chicago Style Italian Beef</li>
                <li>Philadelphia Style Beef with Peppers, Onions and Provolone</li>
                <li>Sloppy Joe</li>
                <li>Italian Sausage and Peppers</li>
                <li>Meatballs and Provolone</li>
            </ul>
        </div>
        <div className="menu" id="soups">
            <ul>
                <li>Italian Wedding Soup</li>
                <li>Baked Potato Soup</li>
                <li>Split Pea</li>
                <li>Ham and Bean</li>
                <li>Broccoli Cheddar</li>
                <li>Potato Leek</li>
                <li>Carrot and Ginger</li>
                <li>Wisconsin Cheddar and Beer</li>
                <li>Tomato and Fennel</li>
                <li>Cold Cucumber</li>
                <li>Vegetarian Minestrone</li>
                <li>Italian Sausage Minestrone Soup</li>
                <li>French Onion</li>
                <li>Cream of Tomato</li>
                <li>Chicken and Dumpling</li>
                <li>Chicken and Noodle</li>
                <li>Roasted Turkey Noodle</li>
                <li>Black Bean</li>
                <li>Corn Chowder</li>
                <li>Mixed Vegetable</li>
                <li>Beef, Vegetable and Barley</li>
                <li>Mexican Chicken and Corn Soup</li>
                <li>Chestnut Soup</li>
                <li>Chicken and Corn Chowder</li>
                <li>Pumpkin</li>
                <li>Butternut Squash</li>
                <li>Escarole and Bean</li>
                <li>Cream of Mushroom</li>
                <li>French Vegetable Pistou</li>
                <li>French Lentil Vegetarian Soup</li>
                <li>French Lentil, Sausage and Kale Soup</li>
                <li>Kale and Potato Soup</li>
                <li>North African Chick Pea and Kale Soup</li>
            </ul>
        </div>
        <div className="menu" id="fss">
            <div className="summary">Consume within a few days.</div>
            <ul>
                <li>Mixed Greens with Grapes, Persian Cucumbers and Cranberry Walnut Gorgonzola Dressing</li>
                <li>Grilled Fig,  Prosciutto and Mozzarella over Baby Greens with Reduced balsamic and Olive Oil – Available in Summer Only</li>
                <li>Grilled Peach, Blue Cheese, Prosciutto over baby Greens with Reduced balsamic and Olive Oil</li>
                <li>Middle Eastern salad with chickpea, tomato and cucumber with hummus dressing</li>
                <li>Romaine with shredded Carrots, Sliced Peppers, Mandarin Oranges, Slivered Almonds and Asian Peanut Dressing</li>
                <li>Tomato, Watermelon and Feta over Arugula with Lemon Curd Dressing</li>
                <li>Raw Kale Salad with Walnuts, Pecorino and Lemon Juice</li>
                <li>Greek Salad with Tomatoes, Olives, and Feta over Romaine with Red Wine Vinaigrette</li>
                <li>Strawberry, Kiwi, Walnut and Goat Cheese salad with Raspberry Vinaigrette</li>
                <li>Cold Cucumber Dill Salad with Creamy Dressing</li>
                <li>Roasted Baby Beets and Arugula with Lemon Gorgonzola Vinaigrette</li>
                <li>Spring Baby Greens with Heirloom Baby Tomatoes with Basil Infused Oil Vinaigrette and Mozzarella Pearls</li>
                <li>Cesar salad</li>
                <li>Raw Beet Slaw with Walnuts</li>
                <li>Raw vegetable crudités with ranch dip – can be made with yogurt or traditional with buttermilk and sour cream</li>
                <li>Green Fruit Salad with Honeydew, kiwi, and green grapes</li>
                <li>Mixed greens with Grape tomatoes, cucumber, shredded carrots with Balsamic Dressing</li>
                <li>3 Bean Salad in Red Wine Vinaigrette</li>
                <li>Black Eyed Pea Salad with Bacon Dressing</li>
                <li>Spinach, Egg, Mushroom and Bacon Salad with Hot Bacon Dijon Dressing</li>
                <li>Coleslaw</li>
                <li>Potato Salad</li>
                <li>Sweet Potato, Parsnip, Apple and Raisin Salad</li>
                <li>Carrot and Raisin Salad with Almonds</li>
                <li>Waldorf salad – Apples, aisins, celery and walnuts</li>
                <li>Macaroni Salad</li>
                <li>Italian Antipasti Salad</li>
                <li>Italian Pasta salad</li>
                <li>Jicama, Bell Pepper and Napa cabbage Slaw</li>
                <li>Asian Slaw</li>
            </ul>
        </div>
        <div className="menu" id="sc">
            <ul>
                <li>
                    <div className="header">Spring/Summer</div>
                    <ul>
                        <li>Fresh Berry Cobbler</li>
                        <li>Cherry Clafoutis</li>
                        <li>Peach Cobbler</li>
                        <li>Nectarine Cobbler</li>
                    </ul>
                </li>
                <li>
                    <div className="header">Fall/Winter</div>
                    <ul>
                        <li>Apple Cobbler</li>
                        <li>Pear Cobbler</li>
                        <li>Butternut Squash Cobbler</li>
                        <li>Acorn Squash Cobbler</li>
                        <li>Pumpkin Cobbler</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>