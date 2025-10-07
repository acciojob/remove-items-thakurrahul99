//your JS code here. If required.
 window.onload = function () {
    const select = document.getElementById('colorSelect');
    const button = document.querySelector('input[type="button"][value="Select and Remove"]');

    button.onclick = function () {
      const selectedIndex = select.selectedIndex;
      if (selectedIndex !== -1) {
        select.remove(selectedIndex);
      }
    };
  };