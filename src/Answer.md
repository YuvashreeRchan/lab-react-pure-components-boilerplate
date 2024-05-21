
1. **Simple Component**
   Every time the state is updated (even if the new state is the same as the previous state), the component re-renders.This can lead to unnecessary renders.
   This approach can be time-consuming because it always produces a new render, even if the state or props haven't changed.
3. **Pure Component**
   It implements a shallow comparison of the component's current props and state with the previous ones before deciding to re-render.
   If the state or props have not changed, the component will not re-render it reuses the previous render output instead of creating a new one.
   This significantly improves the performance by avoiding unnecessary renders.

### Conclusion:  A Pure Component optimizes performance by reusing previous renders when possible.
