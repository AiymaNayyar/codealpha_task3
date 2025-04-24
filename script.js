let input = document.getElementById('input_');

function append(val) {
  input.value += val;
}

function clear() {
  input.value = '';
}

function del() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
    input.value = eval(input.value);
    
  
}
