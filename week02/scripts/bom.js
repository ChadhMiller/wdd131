const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');// I need to fill in the blank
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);

//add chapter button
button.addEventListener('click', function() {
    if (input.value.trim() !== ''){
        return input.value.focus();
    }
    // else{
    //     return input.value.focus();
    // }
});

deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
    input.value = '';
    input.focus();
});