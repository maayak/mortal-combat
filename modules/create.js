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
    const $progressbar = this.createElement('div', 'progressbar');
    const $character = this.createElement('div', 'character');
    const $life = this.createElement('div', 'life');
    const $name = this.createElement('div', 'name');
    const $img = this.createElement('img');
  
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
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
  
    $reloadButton.innerText = 'restart';
  
    $arenas.appendChild($reloadWrap);
    $reloadWrap.appendChild($reloadButton);
  
    $reloadButton.addEventListener('click', () => {
      window.location.reload();
    });
  };
};
  
  export default Create;