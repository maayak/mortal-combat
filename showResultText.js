import createElement from './createElement.js';

const showResultText = (name) => {
  const $resultText = createElement('div', 'resultText');
  if (name) {
    $resultText.innerText = `${name} wins`;
  } else {
    $resultText.innerText = 'draw';
  }
  return $resultText;
}

export default showResultText;
