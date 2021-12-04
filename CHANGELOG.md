
## React

[0.0.5] - 2021-12-03 - Updated Property Card css

Updated CSS to accommodate for `hover`, `focus-within`, and `active` states

[0.0.4] - 2021-12-03 - Changes from Code Review

Updated markup for accessibility, added media query for mobile

[0.0.3] - 2021-12-03 - Created Staging Environment

Deployed to staging environment: [https://hello-ender.spwashi.com/?hello=ender](https://hello-ender.spwashi.com/?hello=ender)

[0.0.2] - 2021-12-03 - Completed Design from [`wireframe@v0.0.1`](https://github.com/spwashi/hello-ender-wireframe/releases/tag/v0.0.1)

A `PropertyCard` is not a button.

A `PropertyCard` has a button.

A `PropertyCard` has:
- a `Card header`
  - with:
    - a title
- a `Card body`
  - with:
    - an address
    - a base rent
      - rendered as a price
      - rounded to .00
    - square foot information
      - total square feet
      - ((price, per square foot), per month)
      - ((price, per square foot), per year)

[0.0.1] - 2021-12-03 - Functional Property-Activation Flow

`The application` fetches `Properties` upon first load.

`Properties` is the multiple of `Property`. 

Each `Property` is rendered as a `Card` by default. This is called a `PropertyCard`.

A `PropertyCard` is a button.