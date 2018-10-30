### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create indivdiual items

do this by creating an array to store the added items on local storage. Also create individual divs for each list item

- [ ] delete individual items

iterate through local storage array to delete items and delete item div

- [ ] edit individual items

iterate through local storage array to edit item div

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Spin
(to be filled out by you)

add hover over GUI changes so that each item is highlighted when mouseover

i'd like to have animations for when an item is removed from the list... most likely using Jquery ui.

wed: work on implementation of basic improvements/start to research jquery ui
thurs: work on implementation of hover feature and begin animation feature
fri: complete animation feature if needed and tighten up any other ui/behavioral fixes.