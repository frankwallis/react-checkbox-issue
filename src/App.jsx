import { useCallback, useState } from 'react'

import './App.css'

const inputs = [];
setInterval(() => {
  const count = inputs.filter(input => input.deref()).length;
  console.log('inputs', count);
}, 3000);

const divs = [];
setInterval(() => {
  const count = divs.filter(div => div.deref()).length;
  console.log('divs', count);
}, 3000);

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useCallback((node) => {
    if (node) {
      node.focus();
      node.blur();
      inputs.push(new WeakRef(node))
    }
  }, []);
  const divRef = useCallback((node) => {
    if (node) {
      node.focus();
      node.blur();
      divs.push(new WeakRef(node))
    }
  }, []);

  return (
    <div>
      {count % 2 === 0 ?
        <>
          <input ref={inputRef} type="checkbox" defaultChecked />
          <div ref={divRef} tabIndex={-1}>div</div>
        </> : null}
      <button onClick={() => setCount(count => count + 1)}>Next</button>
    </div>
  )
}

export default App
