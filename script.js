// Challenge 1
window.onload = function () {
    var userElement = document.getElementById('user');
    function printName() {
      var yourName = 'om';
      userElement.innerHTML = yourName;
    }
    printName();
  };
  
  // Challenge 2
  var btnClick = document.getElementById('btn-click');
  btnClick.addEventListener('click', function () {
    btnClick.style.backgroundColor = 'yellow';
  });
  
  // Challenge 3
  var buildButton = document.getElementById('build-button');
  var statementDiv = document.getElementById('statement');
  
  function makeSentence() {
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adverb = document.getElementById('adverb').value;
    var sentence = noun + ' ' + verb + ' ' + adverb;
    statementDiv.textContent = sentence;
  }
  
  buildButton.addEventListener('click', makeSentence);
  
  // Challenge 4.1
  var grandparentDiv = document.getElementById('grandparent');
  var parentDiv = document.getElementById('parent');
  var childDiv = document.getElementById('child');
  
  childDiv.addEventListener('click', function () {
    console.log('Child clicked');
  });
  parentDiv.addEventListener('click', function () {
    console.log('Parent clicked');
  });
  grandparentDiv.addEventListener('click', function () {
    console.log('Grandparent clicked');
  });
  
  // Challenge 4.2
  grandparentDiv.addEventListener(
    'click',
    function () {
      console.log('Grandparent clicked');
    },
    true
  );
  parentDiv.addEventListener(
    'click',
    function () {
      console.log('Parent clicked');
    },
    true
  );
  childDiv.addEventListener(
    'click',
    function () {
      console.log('Child clicked');
    },
    true
  );
  
  // Challenge 5
  var categoryUl = document.getElementById('category');
  categoryUl.addEventListener('click', function (event) {
    if (event.target.id === 'blazers') {
      console.log('blazers');
    }
  });
  