# Live Version 
https://book-hunter-google-books-api.netlify.app/

# Image of application
![alt text](https://github.com/jedhabush/Google-Books-API-Book-Hunter/blob/main/bookAPI.png)

# Google-Books-API-Book-Hunter
This project was different. It was finally the time to play around with APIs. Although I had some prior experience with manipulating APIs requests, it was the first time implementing that using reactJs. I like to add my personal touch to every project I do from selecting my favourite colours to designing the user interface. The idea behind the project was to extract as much information as possible from the API. I managed to retrieve books, images, links, dates, titles and books preview.

## Features and Remarks
A website page that allows users to search for books.
It includes the following:
 - Header section introducing the page.
 - Form containing a text input and a submit / search button.
 - A grid of books.

Additional features 
 - A feedback to the user appears when no book results can be found for the query.
 - A modal appears with more book information, when a user clicks a book in the grid.
 - Back to top button to scroll back to the top of the page, makes it convenient to the user to navigate the site. 

## Challenges
- Google book API is loaded with data, the challange was to retrieve the right information. the method Map() was my hero that aided me to get the correct information
- Book description length. I had to find a way to crop the book description in a way that makes sense to the user by making sure that the description is not too long so it does not ruin the site style but short and comprehensible to the user. Stack overflow was my assistant to accomplish this task. In fact, stack overflow has been my assistant since day one. The solution was to user Map() and the magic method SubString() to define the retrieved string length.

## Future Improvements
- Enhance user interface and colours 
- Enhance device responsiveness
- Allow books to be added as favourite
- Allow logins for user personal customizations






------------
Available Scripts
In the project directory, you can run:

# ```npm start```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# ```npm test```
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

# ```npm run build```
Builds the app for production to the ```build``` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

# ```npm run eject```
Note: this is a one-way operation. Once you ```eject```, you can’t go back!

If you aren’t satisfied with the ```build``` tool and configuration choices, you can ```eject``` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies ```(webpack, Babel, ESLint, etc)``` right into your project so you have full control over them. All of the commands except ```eject``` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use ```eject```. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
