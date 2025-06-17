# React Checkbox Issue

This repo demonstrates how React maintains references to `input` elements which have been detached from the DOM, preventing them from being garbage collected.

Steps to reproduce:
```
git clone git@github.com:frankwallis/react-checkbox-issue.git
cd react-checkbox-issue
npm i
npm run dev
```

- Open browser at http://localhost:5173/
- Disable React Dev Tools
- Observe reference counts in the console
- Click "Next" button
- Force a garbage collection from the "Memory" tab of Chrome Dev Tools
- Observe the reference counts in the console

**Expected:** Both `input` and `div` have no references.

**Actual:** `div` has no references, but `input` has one reference.

By taking a heap snapshot in the memory tab it can be seen that the detached `input` is being referenced from React DOM `trackValueOnNode` function.
