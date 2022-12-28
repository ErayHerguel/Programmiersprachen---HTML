const puzzleContainer = document.querySelector("#puzzle-container");
let puzzle = [];
let size = 4;

generatePuzzle();
randomizePuzzle();
renderPuzzle();
handleInput();

function getRow(pos)
{
    return Math.ceil(pos / size);
}

function getCol(pos)
{
    const col = pos % 4;
    if(col === 0)
    {
        return size;
    }
    return col;
}

/* generates Tiles */
function generatePuzzle()
{
    for(let i = 1; i <= size * size; i++)
    {
        puzzle.push
        ({
            value: i,
            position: i,
            x: (getCol(i) - 1) * 150,
            y: (getRow(i) - 1) * 150,
            disabled: false,
        })
    }
}

function renderPuzzle()
{
    puzzleContainer.innerHTML = '';
    for (let puzzleItem of puzzle) 
    {
        if (puzzleItem.disabled) continue;
        puzzleContainer.innerHTML += 
        `
        <div class="puzzle-item" style="left: ${puzzleItem.x}px; top: ${puzzleItem.y}px;">
            ${puzzleItem.value}
        </div>
        `
    }
}

function randomizePuzzle()
{
    const randomValues = getRandomValues();
    console.log(randomValues);
    let i = 0;
    for (let puzzleItem of puzzle) 
    {
        puzzleItem.value = randomValues[i];
        i++;
    }

    const puzzleWithValueOf16 = puzzle.find(item => item. value === size * size);
    puzzleWithValueOf16.disabled = true;
    console.log(puzzle);
}

function getRandomValues()
{
    const values = [];
    for (let i = 0; i <= size * size; i++) 
    {
        values.push(i);
    }
    const randomValues = values.sort(() => Math.random() - 0.5);
    return randomValues;
}

function handleInput()
{
    document.addEventListener('click', handleClick);
}

function getEmptyTile()
{
    return puzzle.find(item => item.disabled);
}

const falseValue = values.find(value => value === true);

console.log(falseValue); // false
