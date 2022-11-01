const panels = document.querySelectorAll('.panel');
console.log(panels);

// panels.addEventListener('click', e => {
//   console.log(e);
// })

panels.forEach(
  panel => panel.addEventListener(
    'click', e => {
      console.log(e.currentTarget.classList.toggle('open'))
    }
  )
  )
