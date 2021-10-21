/\*

    GET       /                                    -- index главная страница

    GET       /categories                          -- render all categories
    POST      /categories                          -- create new category

    GET       /categories/:categoryId              -- render category by ID
    PUT       /categories/:categoryId              -- edit category by ID
    DELETE    /categories/:categoryId              -- delete category by ID

    GET       /categories/:categoryId/animals      -- render all animals by category ID
    POST      /categories/:categoryId/animals      -- create new animal

    GET       /categories/:categoryId/animals/:animalId   -- render animal by ID
    PUT       /categories/:categoryId/animals/:animalId   -- edit animal by ID
    DELETE    /categories/:categoryId/animals/:animalId   -- delete animal by ID

    GET       /about                    -- render about page
    GET       /about/contacts           -- render contacts page


    GET       /admins           -- render list admins page
    POST      /admins           -- create admin

    GET       /admins/:adminId   -- render adminInfo by ID
    PUT       /admins/:adminId   -- edit adminInfo by ID
    DELETE    /admins/:adminId   -- delete adminInfo by ID

    GET       /login
    POST      /login

    GET       /logout

    ---------------------------------------------------------------
    GET       /news                          -- render all news
    POST      /news                          -- create new news

    GET       /news/:newsId              -- render news by ID
    PUT       /news/:newsId              -- edit news by ID
    DELETE    /news/:newsId              -- delete news by ID

\*/
