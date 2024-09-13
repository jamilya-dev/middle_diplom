const calc = () => {
  const calcContainer = document.getElementById('calc');
  const calcType = document.getElementById('calc-type');
  const calcTypeMaterial = document.getElementById('calc-type-material');
  const calcSquare = document.getElementById('calc-input');
  const calcTotal = document.getElementById('calc-total');

  const calcCount = () => {
    const calcTypeValue = calcType.options[calcType.selectedIndex].value;
    const calcTypeMaterialValue = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue;

    if (calcType.value && calcSquare.value && calcTypeMaterial.value) {
      totalValue = +calcTypeValue * +calcTypeMaterialValue * +calcSquareValue;
    } else {
      totalValue = 0;
    }

    calcTotal.value = Math.floor(totalValue);
  };

  calcContainer.addEventListener('input', (e) => {
    if (e.target === calcSquare) {
      calcSquare.value = calcSquare.value.replace(/[^\d]/, '');
    }
    calcCount();
  });
};
export default calc;
