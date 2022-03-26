## Access at

`gaurav-me.github.io`

## Google Sheets link

`https://docs.google.com/spreadsheets/d/1ipwTjoQvUVB2t1yEkCvBJumCCDUn6K9o-Os0nu6BSvs/edit?resourcekey#gid=1898134481`

## Logged events and names

| No. | Location                            | Description                                                            | Event Name                |
| :-- | :---------------------------------- | :--------------------------------------------------------------------- | :------------------------ |
| 1   | body onload                         | start time (homepage)                                                  | startHomepage             |
| 2   | button onclick                      | click on go to cupcakes button(homepage)                               | clickedGoToBrowsingPage   |
| 3   | body onload                         | start time (browsing page)                                             | startBrowsing             |
| 4   | start scroll                        | user starts to scroll on browsing page                                 | startBrowsingScroll       |
| 5   | end scroll                          | user stops scrolling on browsing page                                  | endBrowsingScroll         |
| 6   | Chocolate peanut button onclick     | Click on Chocolate peanut cupcake Add To Cart Button                   | clickedChocolateAddToCart |
| 7   | Red velvet raspberry button onclick | Click on custom cupcake Add To Cart Button                             | clickedRedVelvetAddToCart |
| 8   | Custom cupcake button onclick       | Click on custom cupcake Add To Cart Button, also the journey end event | clickedCustomAddToCart    |


## IVs
- Sidebar homepage (floating / fixed)
- Category sidebar (not present / category options / sub-category options)
- Cupcakes per row (6/3)

## DVs to be logged
- Total time on homepage
- Total time browsing

## Combination mapping

| Cbtn No.   | Condition         | Homepage         | Cupcake page         |
| :--------- | :---------------- | :---------------- | :---------------- |
| 1          | No sidebar, 6 CPR, Fixed homepage sidebar | homepage1.html | combination1.html
| 2          | No sidebar, 3 CPR, Fixed homepage sidebar  | homepage1.html | combination2.html
| 3          | Sidebar, 6 CPR, Fixed homepage sidebar     | homepage1.html | combination3.html
| 4          | Sidebar, 3 CPR, Fixed homepage sidebar     | homepage1.html | combination4.html
| 5          | Sidebar + C, 6 CPR, Fixed homepage sidebar | homepage1.html | combination5.html
| 6          | Sidebar + C, 3 CPR, Fixed homepage sidebar | homepage1.html | combination6.html
| 7          | No sidebar, 6 CPR, Floating homepage sidebar | homepage2.html | combination1.html
| 8          | No sidebar, 3 CPR, Floating homepage sidebar  | homepage2.html | combination2.html
| 9          | Sidebar, 6 CPR, Floating homepage sidebar     | homepage2.html | combination3.html
| 10          | Sidebar, 3 CPR, Floating homepage sidebar     | homepage2.html | combination4.html
| 11          | Sidebar + C, 6 CPR, Floating homepage sidebar | homepage2.html | combination5.html
| 12          | Sidebar + C, 3 CPR, Floating homepage sidebar | homepage2.html | combination6.html

## Sample pathname

```
/cupcakes/combination6?unique_id=1234&trial_id=2&combination=6
```
Landing page: 
```
/homepage1.html?unique_id=1234&trial_id=4321&combination=6
```
