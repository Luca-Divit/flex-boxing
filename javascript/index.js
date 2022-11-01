const panels = document.querySelectorAll('.panel');

panels.forEach(
  panel => panel.addEventListener(
    'click', e => {
      const a = e.currentTarget;
      a.classList.toggle('open');
      // panels.filter(b => b !== a);
      panels.forEach(b => {
        if(b !== a) {
          b.classList.remove('open');
        }
      })
    }
  )
  )

// panels.forEach(
//   panel => panel.addEventListener(
//     'transitionend', e => {
//       if(e.propertyName === 'flex-grow') {
//         console.log(Object.values(e.target.classList).includes('open'));
//         panels.forEach( panel => {
//           if(panel !== e.target) {
//             panel.classList.remove('open');
//           }
//         })
//       }
//     }
//   )
//   )
