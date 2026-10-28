const friendInput = document.getElementById('friendInput');
const addFriendBtn = document.getElementById('addFriendBtn');
const friendsList = document.getElementById('friendsList');
const friendSelect = document.getElementById('friendSelect');
const wordInput = document.getElementById('wordInput');
const sendWordBtn = document.getElementById('sendWordBtn');
const wordHistory = document.getElementById('wordHistory');

const defaultFriends = ['Ayşe', 'Mehmet', 'Elif'];

defaultFriends.forEach((friend) => {
  const option = document.createElement('option');
  option.textContent = friend;
  friendSelect.appendChild(option);
});

addFriendBtn.addEventListener('click', () => {
  const value = friendInput.value.trim();
  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;
  friendsList.appendChild(li);

  const option = document.createElement('option');
  option.textContent = value;
  friendSelect.appendChild(option);

  friendInput.value = '';
});

sendWordBtn.addEventListener('click', () => {
  const word = wordInput.value.trim();
  const selectedFriend = friendSelect.value;

  if (!word) {
    alert('Lütfen bir kelime yazın.');
    return;
  }

  const item = document.createElement('div');
  item.className = 'history-item';

  const original = document.createElement('strong');
  original.textContent = word;

  const arrow = document.createElement('span');
  arrow.textContent = '→';

  const translated = document.createElement('span');
  translated.textContent = translateWord(word);

  const small = document.createElement('small');
  small.textContent = selectedFriend;

  item.appendChild(original);
  item.appendChild(arrow);
  item.appendChild(translated);
  item.appendChild(small);

  wordHistory.prepend(item);
  wordInput.value = '';
  alert(`${word} kelimesi ${selectedFriend} arkadaşına gönderildi.`);
});

function translateWord(word) {
  const map = {
    hello: 'merhaba',
    friend: 'arkadaş',
    book: 'kitap',
    goodbye: 'hoşça kal',
    water: 'su',
    house: 'ev',
  };

  return map[word.toLowerCase()] || 'çeviri';
}
