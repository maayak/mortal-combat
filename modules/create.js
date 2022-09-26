import { $arenas, CLASSLIST } from './globalConstants.js';

class Create {
  createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
      $tag.classList.add(className);
    };
    return $tag;
  };
  
  createPlayer = ({ player, hp, name, img }) => {
    const $player = this.createElement('div', `player${player}`);
    const $progressbar = this.createElement('div', CLASSLIST.PROGRESSBAR);
    const $character = this.createElement('div', CLASSLIST.CHARACTER);
    const $life = this.createElement('div', CLASSLIST.LIFE);
    const $name = this.createElement('div', CLASSLIST.NAME);
    const $img = this.createElement('img', CLASSLIST.IMG);
  
    $life.style.width = `${hp}%`;
    $name.innerText = name;
    $img.src = img;
  
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
  
    $character.appendChild($img);
  
    $player.appendChild($progressbar);
    $player.appendChild($character);
  
    return $player;
  };
  
  createReloadButton = () => {
    const $reloadWrap = this.createElement('div', CLASSLIST.RELOADWRAP);
    const $reloadButton = this.createElement('button', CLASSLIST.RELOADBUTTON);
  
    $reloadButton.innerText = 'restart';
  
    $arenas.appendChild($reloadWrap);
    $reloadWrap.appendChild($reloadButton);
  
    $reloadButton.addEventListener('click', () => {
      window.location.reload();
    });
  };
};
  
  export default Create;