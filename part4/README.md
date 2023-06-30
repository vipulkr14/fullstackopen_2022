```console
$ npm test

> blogapp@1.0.0 test
> jest --verbose

 PASS  tests/dummy.test.js
  √ dummy returns one (1 ms)

 PASS  tests/favoriteBlog.test.js
  favorite blog
    √ when list has no blogs, equals to null (1 ms)
    √ when list has one blog, equals to that blog
    √ when list has many blogs, equals to the most liked blog

 PASS  tests/mostBlogs.test.js
  most blogs
    √ when list has many blogs, equals to Robert C. Martin (1 ms)                                                                                                        
                                                                                                                                                                         
 PASS  tests/totalLikes.test.js                                                                                                                                          
  total likes
    √ when list has no blogs, equals 0 (1 ms)                                                                                                                            
    √ when list has only one blog, equals the likes of that                                                                                                              
    √ when list has many blogs, equals the sum of them all                                                                                                               
                                                                                                                                                                         
Test Suites: 4 passed, 4 total                                                                                                                                           
Tests:       8 passed, 8 total                                                                                                                                           
 PASS  tests/mostBlogs.test.js
  most blogs
    √ when list has many blogs, equals to Robert C. Martin (2 ms)

 PASS  tests/totalLikes.test.js
  total likes
    √ when list has no blogs, equals 0 (1 ms)
    √ when list has only one blog, equals the likes of that (1 ms)
    √ when list has many blogs, equals the sum of them all

 PASS  tests/favoriteBlog.test.js
  favorite blog
    √ when list has no blogs, equals to null (1 ms)
    √ when list has one blog, equals to that blog (1 ms)
    √ when list has many blogs, equals to the most liked blog

 PASS  tests/mostLikes.test.js
  most likes
    √ when list has many blogs, equals to Edsger W. Dijkstra (2 ms)

Test Suites: 5 passed, 5 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.726 s, estimated 1 s
Ran all test suites.
```
