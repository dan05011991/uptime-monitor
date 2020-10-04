# Testing best practices

## Keep all global variables in a single separate file
Global variables should be kept in a single separate file and quantity kept to as little as possible.

## Break tests appropriately with `describe` and `it`
Use `describe` and `it` correctly to break tests down into suites. Avoid using multiple `describe` statements in individual files unless `it` statements are kept to a minimal. Avoid using nested `describe` statements. 

## Testing categories
- Render
- Interaction
- Lifecycle Method Calls

## Avoid having dependencies between tests
Be careful not to fall into the track of using `before` and `after` functions to clear dependencies between tests, the dependencies are the issue.



