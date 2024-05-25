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
    // Check if the 'reviewsCompleted' item exists in localStorage
    if (localStorage.getItem('reviewsCompleted')) {
      // If it exists, get the current value, increment it by 1, and store it back in localStorage
      let reviewsCompleted = parseInt(localStorage.getItem('reviewsCompleted'));
      reviewsCompleted += 1;
      localStorage.setItem('reviewsCompleted', reviewsCompleted);
    } else {
      // If it doesn't exist, set it to 1
      localStorage.setItem('reviewsCompleted', 1);
    }
  
    // Display the number of reviews completed
    console.log('Number of reviews completed: ' + localStorage.getItem('reviewsCompleted'));
  };
  