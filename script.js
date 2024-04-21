//your code here!
function createListItem() {
  let li = document.createElement('li');
  li.textContent = 'New Item';
  return li;
}
let list = document.getElementById('infi-list'); // replace 'your-list-id' with the id of your list

for(let i = 0; i < 10; i++) {
  list.appendChild(createListItem());
}
window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // user has scrolled to bottom of the page, so add more items
    for(let i = 0; i < 2; i++) {
      list.appendChild(createListItem());
    }
  }
});