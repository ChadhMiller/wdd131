const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      avgeragerating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


  window.onload = function() {
  
    if (localStorage.getItem('reviewsCompleted')) {
      let reviewsCompleted = parseInt(localStorage.getItem('reviewsCompleted'));
      reviewsCompleted += 1;
      localStorage.setItem('reviewsCompleted', reviewsCompleted);
    } else {
      localStorage.setItem('reviewsCompleted', 1);
    }
  
    console.log('Number of reviews completed: ' + localStorage.getItem('reviewsCompleted'));
  
    var select = document.getElementById('productName');
  
    for(var i = 0; i < products.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = products[i].name;
      opt.value = products[i].id;
      select.appendChild(opt);
    }
  };
  