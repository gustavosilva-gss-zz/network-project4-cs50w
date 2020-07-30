# **Network**
## Project 3 - CS50W Submission

### **New Post**
On the "All Posts" page, users who are logged in will see a form at the top for the submission of a new post. There they can fill the content of the post and click "Publish". Then a `POST` request will be made to the route `/new` and the page will be refreshed, with the new post included.

### **All Posts**
The default route shows a page with all posts from all users. Each post includes: 
* Username of the poster
* Post's content
* Post's timestamp
* Number of likes the post has
    * Users who are logged in can like or unlike the posts

### **Profile Page**
By clicking on the username displayed on a post card, users will be taken to the route `/u/USERNAME` where it will be shown:
* Number of followers the user has
* Number of people that the user follows
* All posts of that user
* A "Follow" or "Unfollow" button
    * Must be logged in for the button to appear
    * Won't appear if the user is viewing their own page

### **Following**
By clicking on the "Following" button on the navigation bar, users will be taken to the route `/following` (ony if they are logged in). If the user follows anyone, the page will show the posts made by those the user follows.


### **Pagination**
Every page that includes posts will have, at the bottom, some buttons for navigation. The pages that display posts will always only show 10 posts per page. Then, at the bottom, the user can switch between pages of posts.

### **Edit Post**
Every post made by the logged user will show an "Edit" button. When clicked, a `PUT` request will be made to the route `/edit`, the content of the post will transform into a `textarea` and the user will be able to edit their post. On submission of the edit, the content will go back into a text. The page won't be reloaded, but the user will be able to see the new content.

### **“Like” and “Unlike”**
Under every post a heart character will show up by the side of the likes counter. If the user is logged in, they can click the button, a `PUT` request will be made to the route `/like` and the counter and button will behave accordingly:
* If the post was already liked, it will be unliked and the heart character will change from filled to empty
* If the post wasn't liked yet, it will be liked and the heart character will change from empty to filled

### **External Links**
**Video Demonstration**: https://youtu.be/_AHZ9J96kmI

**Try the project here**: https://network-project4-cs50w.herokuapp.com/