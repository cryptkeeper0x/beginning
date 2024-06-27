var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/arbuzik.jpg") {
    myImage.setAttribute("src", "images/arbuz2.jpg");
  } else {
    myImage.setAttribute("src", "images/arbuzik.jpg");
  }
};
      document.addEventListener('DOMContentLoaded', (event) => {
          const text = document.getElementById('text');
          const button = document.getElementById('myButton');
          const originalHTML = text.innerHTML;
          const newHTML = '<strong>Watermelon</strong> is an annual herbaceous plant.'
          +'It was recognized as a berry and rightly so: it has a skin (watermelon rind), juicy pulp and many seeds inside.' 
          +'Although it also fits the description of a fruit - it is, after all, a plant that bears fruit after its flowers bloom.';
          let isOriginal = true;

          button.addEventListener('click', () => {
              if (isOriginal) {
                  text.innerHTML = newHTML;
              } else {
                  text.innerHTML = originalHTML;
              }
              isOriginal = !isOriginal;
          });
      });
      document.addEventListener('DOMContentLoaded', (event) => {
        const text = document.getElementById('text2');
        const button = document.getElementById('myButton');
        const originalHTML = text.innerHTML;
        const newHTML = '<strong>Useful properties of watermelon</strong>'
        let isOriginal = true;

        button.addEventListener('click', () => {
            if (isOriginal) {
                text.innerHTML = newHTML;
            } else {
                text.innerHTML = originalHTML;
            }
            isOriginal = !isOriginal;
        });
    });
    document.addEventListener('DOMContentLoaded', (event) => {
      const text = document.getElementById('text3');
      const button = document.getElementById('myButton');
      const originalHTML = text.innerHTML;
      const newHTML = 'No less popular is melon, which also has a large amount of substances and vitamins necessary for the human body.'
      +' Watermelon and melon are tasty, sweet and healthy fruits that not only give pleasure, but are also endowed with a natural composition of healing elements necessary for the human body.' 
      +' Thanks to their regular use, you can improve your health and strengthen your weakened immune system.';
      let isOriginal = true;

      button.addEventListener('click', () => {
          if (isOriginal) {
              text.innerHTML = newHTML;
          } else {
              text.innerHTML = originalHTML;
          }
          isOriginal = !isOriginal;
      });
  });
  document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.getElementById('text4');
    const button = document.getElementById('myButton');
    const originalHTML = text.innerHTML;
    const newHTML = 'Read the <a href= "https://medicin.cap.ru/news/2017/08/17/arbuz-poljza-i-vred-dlya-zdorovjya">Beneficial and harmful properties of watermelon</a> to better understand this issue and understand whether this berry is suitable for achieving your goals.';
    let isOriginal = true;

    button.addEventListener('click', () => {
        if (isOriginal) {
            text.innerHTML = newHTML;
        } else {
            text.innerHTML = originalHTML;
        }
        isOriginal = !isOriginal;
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const text = document.getElementById('item1');
  const button = document.getElementById('myButton');
  const originalHTML = text.innerHTML;
  const newHTML = 'High vitamin A content improves vision, skin and hair condition';
  let isOriginal = true;

  button.addEventListener('click', () => {
      if (isOriginal) {
          text.innerHTML = newHTML;
      } else {
          text.innerHTML = originalHTML;
      }
      isOriginal = !isOriginal;
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const text = document.getElementById('item2');
  const button = document.getElementById('myButton');
  const originalHTML = text.innerHTML;
  const newHTML = 'The abundance of carbohydrates (fiber) normalizes digestion and promotes weight loss';
  let isOriginal = true;

  button.addEventListener('click', () => {
      if (isOriginal) {
          text.innerHTML = newHTML;
      } else {
          text.innerHTML = originalHTML;
      }
      isOriginal = !isOriginal;
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const text = document.getElementById('item3');
  const button = document.getElementById('myButton');
  const originalHTML = text.innerHTML;
  const newHTML = 'Watermelon quenches thirst and hunger';
  let isOriginal = true;

  button.addEventListener('click', () => {
      if (isOriginal) {
          text.innerHTML = newHTML;
      } else {
          text.innerHTML = originalHTML;
      }
      isOriginal = !isOriginal;
  });
});
function changeTextStyle() {
    var textElement = document.getElementById('text4');
    var currentColor = textElement.style.color;
    if (currentColor === 'orange'){
        textElement.style.color = '';
        textElement.style.fontSize = '';
        textElement.style.fontWeight = '';
    } else {
    textElement.style.color = 'orange';
    textElement.style.fontSize = '24px';
    textElement.style.fontWeight = 'bold';
}}
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('Button2').addEventListener('click', changeTextStyle);
});
function changeTextStyle2() {
    var textElement = document.getElementById('text');
    var currentColor = textElement.style.color;
    if (currentColor === 'white'){
        textElement.style.color = '';
        textElement.style.fontSize = '';
        textElement.style.fontWeight = '';
    } else {
    textElement.style.color = 'white';
    textElement.style.fontSize = '28px';
    textElement.style.fontWeight = 'bold';  
}}
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('Button2').addEventListener('click', changeTextStyle2);
});
function changeTextStyle3() {
    var textElement = document.getElementById('text3');
    var currentColor = textElement.style.color;
    if (currentColor === 'yellow'){
        textElement.style.color = '';
        textElement.style.fontSize = '';
        textElement.style.fontWeight = '';
    } else {
    textElement.style.color = 'yellow';
    textElement.style.fontSize = '24px';
    textElement.style.fontWeight = 'bold';  
}}
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('Button2').addEventListener('click', changeTextStyle3);
});
function changeTextStyle4() {
    var item1 = document.getElementById('item1');
    var currentColor1 = window.getComputedStyle(item1).color;
    if (currentColor1 === 'rgb(255, 20, 147)') {
        item1.style.color = '';
        item1.style.fontSize = '';
        item1.style.fontWeight = '';
    } else {
        item1.style.color = 'DeepPink';
        item1.style.fontSize = '24px';
        item1.style.fontWeight = 'bold';
    }

    var item2 = document.getElementById('item2');
    var currentColor2 = window.getComputedStyle(item2).color;
    if (currentColor2 === 'rgb(255, 0, 255)') {
        item2.style.color = '';
        item2.style.fontSize = '';
        item2.style.fontWeight = '';
    } else {
        item2.style.color = 'Fuchsia';
        item2.style.fontSize = '24px';
        item2.style.fontWeight = 'bold';
    }

    var item3 = document.getElementById('item3');
    var currentColor3 = window.getComputedStyle(item3).color;
    if (currentColor3 === 'rgb(0, 255, 255)') {
        item3.style.color = '';
        item3.style.fontSize = '';
        item3.style.fontWeight = '';
    } else {
        item3.style.color = 'Aqua';
        item3.style.fontSize = '24px';
        item3.style.fontWeight = 'bold';
    }

    var text2 = document.getElementById('text2');
    var currentColor4 = window.getComputedStyle(text2).color;
    if (currentColor4 === 'rgb(0, 255, 0)') {
        text2.style.color = '';
        text2.style.fontSize = '';
        text2.style.fontWeight = '';
    } else {
        text2.style.color = 'Lime';
        text2.style.fontSize = '24px';
        text2.style.fontWeight = 'bold';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Button2').addEventListener('click', changeTextStyle4);
});
document.addEventListener('DOMContentLoaded', function() {
        var textElement = document.getElementById('text');
        var initialDisplayStyle = getComputedStyle(textElement).display;

        document.getElementById('Button3').addEventListener('click', function() {
          if (textElement.style.display === 'none')
            {textElement.style.display = initialDisplayStyle;
                } else {
                    textElement.style.display = 'none';
                }
        });
});

class FibonacciGenerator {
    constructor() {
        this.a = 0;
        this.b = 1;
        this.index = 0;
    }

    *generator() {
        while (true) {
            yield this.a;
            [this.a, this.b] = [this.b, this.a + this.b];
            this.index++;
        }
    }
}

const fibonacci = new FibonacciGenerator();
const gen = fibonacci.generator();

function addRow(index, value) {
    const tableBody = document.getElementById('fibonacсi').querySelector('tbody');
    const row = document.createElement('tr');
    const indexCell = document.createElement('td');
    const valueCell = document.createElement('td');

    indexCell.textContent = index;
    valueCell.textContent = value;

    row.appendChild(indexCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
}

document.getElementById('generate').addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        const { value } = gen.next();
        addRow(fibonacci.index, value);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const apiUrl = 'https://cat-fact.herokuapp.com/facts/random';

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            dataContainer.textContent = 'Error: ' + error.message;
        }
    };

    const displayData = (data) => {
        dataContainer.innerHTML = '';
        const itemElement = document.createElement('div');
        itemElement.textContent = `Fact: ${data.text}`;
        itemElement.classList.add('fact-text');
        dataContainer.appendChild(itemElement);
    };

    fetchData();
});
























      
      
  

      

  