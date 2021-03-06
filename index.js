function submitForm(){
    $("#js-shopping-list-form").submit(e => {
        e.preventDefault()
        const input = $("#shopping-list-entry");
        const item = input.val();
        input.val("");
        const listItem = `
        <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `
      $(".shopping-list").append(listItem);
    })
}

function setUpEventHandlers(){
  $("ul").on("click", ".shopping-item-delete", function() {
  $(this).closest('li').remove();
  });
  
  
  $("ul").on("click", ".shopping-item-toggle", function() {
    $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
  });
    submitForm();
}

$(setUpEventHandlers);

