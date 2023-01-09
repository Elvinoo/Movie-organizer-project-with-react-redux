React project – Movie organizer with the class components and redux
I got incomplete project and the task was to complete it. Of course it has positive and negative sides. For example, the css part was complete and I did non loose to much time on it. So all the page and components structure were ready but I had to complete the functionality. So I started with hangling the search input on main page that did not change its value on change. Then, based on the value got from search input I added fetch request to the OMDB API in order to get the movie list. But after that I had to show in the UI the gotten movie list. 
As there were several components that should send or get data from one-another, I decided to use redux in order to have a global store and it facilitated a lot the completion of the project. 
In brief, I have divided the project in several steps:
1) Create store,reducer and actions with redux.
2) Get the search value from main input and make request to the api
3) Send the movies gotten from API to the store
4) In another component get the data from store and show it in UI adding there an "Add to List" button with the help of which add movies from the list to the favorite list.
5) So clicking the "Add to List" button send the data to the store and in aside page get some details of the list item and "X" button in order to remove item from that page and from store(using of course filter)
6)  Then clicking the save button, as it mentioned in the task, change the button display property to non and show the link to another page. The list page is made with sending(POST) the data to another api given in the task.
7)  Clicking the link that opens another page  in a target blank I got the movies from the API where I posted data. Each movie title is a link to the imdb page of that film.
Doing all the steps mentioned above, I could solve the taks and successfully completed the project.  


## How to run

```
npm install
npm start
```
