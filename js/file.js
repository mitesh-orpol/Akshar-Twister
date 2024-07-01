


// header fix js

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.akshar-header');
  const scrollTrigger = window.innerHeight * 0.2;

  window.addEventListener('scroll', function() {
      if (window.scrollY > scrollTrigger) {
          header.classList.add('fixed-header');
      } else {
          header.classList.remove('fixed-header');
      }
  });
});




// {{-- data scroll + , % --}}

$(document).ready(function () {
  $(".numinate").each(function () {
    var $this = $(this);
    var to = $this.data("to");
    $this.text($this.data("from") + " +"); // Initialize with starting value and plus sign
    $({ Counter: $this.data("from") }).animate(
      { Counter: to },
      {
        duration: $this.data("interval") * 100,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter) + " +");
        },
        complete: function () {
          $this.text(to + " +"); // Ensure final value is accurate
        },
      }
    );
  });
});

$(document).ready(function () {
  $(".nate").each(function () {
    var $this = $(this);
    var to = $this.data("to");
    $this.text($this.data("from") + " %"); // Initialize with starting value and percentage sign
    $({ Counter: $this.data("from") }).animate(
      { Counter: to },
      {
        duration: $this.data("interval") * 500,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter) + " %");
        },
        complete: function () {
          $this.text(to + " %"); // Ensure final value is accurate
        },
      }
    );
  });
});


