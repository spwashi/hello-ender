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