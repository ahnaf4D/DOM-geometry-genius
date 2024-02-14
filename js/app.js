const listContainer = document.getElementById('list-container');
function triangleCalculation() {
    const base = getInputValue('base-value');
    const height = getInputValue('height-value');
    const areaCalculation = 0.5 * base * height;
    const showInUi = createElementAndSetValue('Triangle', areaCalculation);
    return showInUi;
}
function rectangleCalculation() {
    const width = getInputValue('width-value');
    const length = getInputValue('length-value');
    const areaCalculation = width * length;
    const showInUi = createElementAndSetValue('Rectangle', areaCalculation);
    return showInUi;
}
function parallelogramCalculation() {
    const base = getInputValue('base-value-parallelogram');
    const height = getInputValue('height-value-parallelogram');
    const areaCalculation = base * height;
    const showInUi = createElementAndSetValue('Parallelogram', areaCalculation);
    return showInUi;
}
function rhombusCalculation() {
    const base = getInputValue('base-value-rhombus');
    const height = getInputValue('height-value-rhombus');
    const areaCalculation = 0.5 * base * height;
    const showInUi = createElementAndSetValue('Rhombus', areaCalculation);
    return showInUi;
}
function pentagonCalculation() {
    const p = getInputValue('p-value-pentagon');
    const b = getInputValue('b-value-pentagon');
    const areaCalculation = 0.5 * p * b;
    const showInUi = createElementAndSetValue('Pentagon', areaCalculation);
    return showInUi;
}
function ellipseCalculation() {
    const a = getInputValue('a-value-ellipse');
    const b = getInputValue('b-value-ellipse');
    const areaCalculation = 3.14 * a * b;
    const showInUi = createElementAndSetValue('Ellipse', areaCalculation);
    return showInUi;
}

function getInputValue(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.value;
    const elementValue = parseFloat(elementText);
    return elementValue;
}
function createElementAndSetValue(liContent, value) {
    const createLi = document.createElement('li');
    createLi.innerText = `${liContent} : ${value} cm²`;
    createLi.classList.add('text-xl', 'font-medium');
    const addToParent = listContainer.appendChild(createLi);
    return addToParent;
}