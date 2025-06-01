function generateMatrix(id, rows, cols, isResult = false) {
  const matrixDiv = document.getElementById(id);
  matrixDiv.innerHTML = ""; 

  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("matrix-row");

    for (let j = 0; j < cols; j++) {
      const input = document.createElement("input");
      input.type = "number";
      input.id = `${id}_${i}${j}`;
      input.value = 0;
      input.min = 0;
      input.readOnly = isResult; 
      rowDiv.appendChild(input);
    }
    matrixDiv.appendChild(rowDiv);
  }
}

function generateBothMatrices() {
  const rows = parseInt(document.getElementById("rows").value) || 1;
  const cols = parseInt(document.getElementById("cols").value) || 1;

  generateMatrix("matrixA", rows, cols, false);
  generateMatrix("matrixB", rows, cols, false);
  generateMatrix("matrixC", rows, cols, true); // matriks hasil readonly
}

function sumMatrices() {
  const rows = parseInt(document.getElementById("rows").value) || 0;
  const cols = parseInt(document.getElementById("cols").value) || 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const aVal = parseInt(document.getElementById(`matrixA_${i}${j}`).value) || 0;
      const bVal = parseInt(document.getElementById(`matrixB_${i}${j}`).value) || 0;
      const cInput = document.getElementById(`matrixC_${i}${j}`);

      cInput.value = aVal + bVal;
    }
  }
}

function multiplyMatrices() {
  const rows = parseInt(document.getElementById("rows").value) || 0;
  const cols = parseInt(document.getElementById("cols").value) || 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const aVal = parseInt(document.getElementById(`matrixA_${i}${j}`).value) || 0;
      const bVal = parseInt(document.getElementById(`matrixB_${i}${j}`).value) || 0;
      const cInput = document.getElementById(`matrixC_${i}${j}`);

      cInput.value = aVal * bVal;
    }
  }
}

function resetAll() {
  // Reset input matriks A dan B jadi 0
  const rows = parseInt(document.getElementById("rows").value) || 0;
  const cols = parseInt(document.getElementById("cols").value) || 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      document.getElementById(`matrixA_${i}${j}`).value = 0;
      document.getElementById(`matrixB_${i}${j}`).value = 0;
      document.getElementById(`matrixC_${i}${j}`).value = 0;
    }
  }
}

document.getElementById("generateBtn").addEventListener("click", generateBothMatrices);
document.getElementById("sumBtn").addEventListener("click", sumMatrices);
document.getElementById("multiplyBtn").addEventListener("click", multiplyMatrices);
document.getElementById("resetBtn").addEventListener("click", resetAll);

generateBothMatrices();
