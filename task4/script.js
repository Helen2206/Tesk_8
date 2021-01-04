const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click' , function() {
   
   let answer = prompt('Вы хотите перейти?');
  
    this.textContent = answer;
    this.preventDefault();

})