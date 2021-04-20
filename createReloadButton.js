import { $arenas } from './globalConstants.js';
import createElement from './createElement.js';

function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  const $reloadButton = createElement('button', 'button');

  $reloadButton.innerText = 'restart';

  $arenas.appendChild($reloadWrap);
  $reloadWrap.appendChild($reloadButton);

  $reloadButton.addEventListener('click', () => {
    window.location.reload();
  });
}
export default createReloadButton;
