function calculateWaterUnits(heights) {
  const n = heights.length;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = n - 1;
  let waterUnits = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        waterUnits += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        waterUnits += rightMax - heights[right];
      }
      right--;
    }
  }

  return waterUnits;
}

const heights = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
const waterUnits = calculateWaterUnits(heights);
console.log(`Units of water stored: ${waterUnits}`);

const inputArrayText = document.getElementById('inputArray');
inputArrayText.textContent = `Input Array: [${heights.join(', ')}]`;

const waterStoredText = document.getElementById('waterStored');
waterStoredText.textContent = `Total amount of water stored: ${waterUnits} units`;

const waterBlocksTable = document.getElementById('waterBlocks');

const maxBlockHeight = Math.max(...heights);
const tableHeight = maxBlockHeight + 1;

for (let i = 0; i < tableHeight; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < heights.length; j++) {
    const cell = document.createElement('td');

    if (heights[j] >= maxBlockHeight - i) {
      cell.style.backgroundColor = '#f1c40f';
    }

    row.appendChild(cell);
  }

  waterBlocksTable.appendChild(row);
}
