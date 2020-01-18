# User Fluent
![Image for app](https://res.cloudinary.com/dmqtrnawm/image/upload/v1576203002/uf/uf-1_elx5re.png)

## Dont forget to precompile assets!!!!
- rake assets:precompile
- rake assets:precompile RAILS_ENV=production
## About
UserFluent is a UI/UX social media platform focused towards sharing interface designs and collaborating with others to improve the user experience of web applications.
## Specs
    

``` Ruby 2.6.1 ```

```Rails 5.2.3```

```Postgres db```

``React frontend``

```Devise for user accounts/authentication```

```Active_Admin for admin accounts```

## Setup


```
$ rvm 2.6.1
```
```
$ bundle install
```
```
$ npm install  or  yarn install
```
```
$ rails db:setup
```
```
$ rails db:migrate
```
```
In two separate terminals run:
        - $ rails s
        - $ ./bin/webpack-dev-server
```
```   
--> visit http://localhost:3000/
--> visit http://localhost:3000/admin   (for the admin pannel)
```

## Testing
```
$ rspec
```
## To-do

- Re-name react views dir to routes?
- Improve user profile
- Add Newsfeed to see followers activity...
- switch to imagekit.io from cloudinary?
- add input frontend verification to forms
- add devise login to react app
- Add ability to follow other users
- Make content viewable for non users
- Improve post tiles in indexes
 - Add comment count
 - Add functionality to ellipsis icon
  - Flag post, follow, etc...
  
- Add search links to lower nav bars for specific content filtering
- Add separate pages for content types
  
- Add design crit feature to posts
- Ability to rate various aspects of the post?
- Add analytics dashboard for users
- Add ability to fork posts and perform markups
 - bounding boxes with fabric.js
 - sticky notes