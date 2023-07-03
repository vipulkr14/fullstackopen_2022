```console
$ npm test -- tests/dummy.test.js

> bloglist@1.0.0 test
> jest --verbose tests/dummy.test.js

 PASS  tests/dummy.test.js
  √ dummy returns one (1 ms)
                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                     
Tests:       1 passed, 1 total                                                                                                                     
Snapshots:   0 total
Time:        0.381 s, estimated 2 s
Ran all test suites matching /tests\\dummy.test.js/i.


$ npm test -- tests/favourite_blog.test.js  

> bloglist@1.0.0 test
> jest --verbose tests/favourite_blog.test.js

 PASS  tests/favourite_blog.test.js
  favorite blog
    √ when list has no blogs, equals to null (2 ms)                                                                                                
    √ when list has one blog, equals to that blog (1 ms)                                                                                           
    √ when list has many blogs, equals to the most liked blog                                                                                      
                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                     
Tests:       3 passed, 3 total                                                                                                                     
Snapshots:   0 total
Time:        0.378 s, estimated 2 s
Ran all test suites matching /tests\\favourite_blog.test.js/i.



$ npm test -- tests/most_blogs.test.js       

> bloglist@1.0.0 test
> jest --verbose tests/most_blogs.test.js

 PASS  tests/most_blogs.test.js
  most blogs
    √ when list has many blogs, equals to Robert C. Martin (3 ms)                                                                                  
                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                     
Tests:       1 passed, 1 total                                                                                                                     
Snapshots:   0 total
Time:        0.372 s, estimated 2 s
Ran all test suites matching /tests\\most_blogs.test.js/i.
  
$ npm test -- tests/total_likes.test.js 

> bloglist@1.0.0 test
> jest --verbose tests/total_likes.test.js

 PASS  tests/total_likes.test.js
  total likes
    √ when list has no blogs, equals 0 (2 ms)                                                                                                      
    √ when list has only one blog, equals the likes of that (1 ms)                                                                                 
    √ when list has many blogs, equals the sum of them all                                                                                         
                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                     
Tests:       3 passed, 3 total                                                                                                                     
Snapshots:   0 total
Time:        0.399 s, estimated 2 s
Ran all test suites matching /tests\\total_likes.test.js/i.                                                                                                                                          
$ npm test -- tests/most_likes.test.js   

> bloglist@1.0.0 test
> jest --verbose tests/most_likes.test.js

 PASS  tests/most_likes.test.js
  most likes
    √ when list has many blogs, equals to Edsger W. Dijkstra (3 ms)                                                                                
                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                     
Tests:       1 passed, 1 total                                                                                                                     
Snapshots:   0 total
Time:        0.379 s, estimated 2 s
Ran all test suites matching /tests\\most_likes.test.js/i.

$ npm test -- tests/user_api.test.js    

> bloglist@1.0.0 test
> jest --verbose tests/user_api.test.js

 PASS  tests/user_api.test.js
  when there is initially one user saved
    √ user is returned (579 ms)                                                                                                                    
    √ creating a new user succeeds (281 ms)
    √ creation fails if username is missing (143 ms)                                                                                               
    √ creation fails if password is missing (128 ms)                                                                                               
    √ creation fails if username is shorter than 3 characters (136 ms)                                                                             
    √ creation fails if password is shorter than 3 characters (132 ms)                                                                             
                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                     
Tests:       6 passed, 6 total                                                                                                                     
Snapshots:   0 total
Time:        2.847 s, estimated 3 s
Ran all test suites matching /tests\\user_api.test.js/i.

$ npm test -- tests/blog_api.test.js  

> bloglist@1.0.0 test
> jest --verbose tests/blog_api.test.js

 PASS  tests/blog_api.test.js
  when there is initially some blogs saved
    √ blogs are returned as json (544 ms)                                                                                                          
    √ blogs have id property named id instead of _id (94 ms)                                                                                       
  addition of a new blog                                                                                                                           
    √ a valid blog can be added by authorized user (162 ms)                                                                                        
    √ likes property defaults to 0 if missing (145 ms)
    √ backend responds with status 400 if title and url are missing (102 ms)                                                                       
  deletion of a blog                                                                                                                               
    √ succeeds with status code 204 if id is valid (346 ms)                                                                                        
    √ fails with status code 401 if user is not authorized (328 ms)                                                                                
  updating a blog                                                                                                                                  
    √ succeeds with status 200 if id is valid (113 ms)                                                                                             
                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                     
Tests:       8 passed, 8 total                                                                                                                     
Snapshots:   0 total
Time:        3.536 s, estimated 4 s
Ran all test suites matching /tests\\blog_api.test.js/i.

```
