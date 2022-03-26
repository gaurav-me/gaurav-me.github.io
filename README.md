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

## Combination mapping

| Argmnt No. | Condition         |
| :--------- | :---------------- |
| 1          | No sidebar, 6 CPR, Fixed homepage sidebar |
| 2          | No sidebar, 3 CPR, Fixed homepage sidebar  |
| 3          | Sidebar, 6 CPR, Fixed homepage sidebar     |
| 4          | Sidebar, 3 CPR, Fixed homepage sidebar     |
| 5          | Sidebar + C, 6 CPR, Fixed homepage sidebar |
| 6          | Sidebar + C, 3 CPR, Fixed homepage sidebar |
| 7          | No sidebar, 6 CPR, Floating homepage sidebar |
| 8          | No sidebar, 3 CPR, Floating homepage sidebar  |
| 9          | Sidebar, 6 CPR, Floating homepage sidebar     |
| 10          | Sidebar, 3 CPR, Floating homepage sidebar     |
| 11          | Sidebar + C, 6 CPR, Floating homepage sidebar |
| 12          | Sidebar + C, 3 CPR, Floating homepage sidebar |

## Sample pathname

```
/cupcakes/combination6?uid=1234&trial_id=4321&combination=6
```
Landing page: 
```
/homepage1.html?uid=1234&trial_id=4321&combination=6
```
