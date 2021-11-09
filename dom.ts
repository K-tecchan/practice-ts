const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log('someelement', someElement.value);

const someElement2 = document.querySelector('.foo');
someElement2.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log('event', target.value);
});
