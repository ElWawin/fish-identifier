function identifyFish() {
  const fileInput = document.getElementById('fishImage');
  if (!fileInput.files.length) {
    alert("Por favor sube una imagen.");
    return;
  }

  const result = document.getElementById('result');
  
  // Simulación de identificación
  result.innerHTML = `
    <p><strong>Nombre del pez:</strong> Pez Payaso</p>
    <p><strong>Estadísticas:</strong> Tamaño promedio: 11 cm, Hábitat: Arrecifes de coral.</p>
  `;
}
