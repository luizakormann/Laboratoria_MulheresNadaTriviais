document.querySelectorAll('input[type="radio"]').forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
      const selectedValue = radioButton.value;
      alert("Você selecionou a opção: " + selectedValue);
    });
  });
  
  
  