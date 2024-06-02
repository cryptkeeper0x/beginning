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








      
      
  

      

  