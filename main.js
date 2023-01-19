var ul        = document.querySelector( '#listTodos' )
var listTodos = Array.from( ul.children )
var input     = document.querySelector( '#userInput' )
var enterBtn  = document.querySelector( '#enter' )

function inputLength () {
  return input.value.length
}

function addToList () {
  var template      = document.querySelector( '#list-template' )
  var templateClone = template.content.cloneNode( true )
  var liTemplate    = templateClone.querySelector( '.todo' )
  var spanTemplate  = templateClone.querySelector( 'span' )

  var node = document.createTextNode( input.value )
  spanTemplate.appendChild( node )
  listTodos.push( liTemplate )
  ul.appendChild( liTemplate )
  input.value = ''
}

function addToListAfterClick () {
  if ( inputLength() > 0 ) {
    addToList()
  }
}

function addToListAfterKeypress ( e ) {
  if ( inputLength() > 0 && e.keyCode === 13 ) {
    addToList()
  }
}

function toggleClass (element) {
  element.classList.toggle( 'done' )
}

function deleteItem ( element ) {
  element.parentElement.remove()
}

function listenEvent ( e ) {
  if ( e.target.matches( '.todo' ) ) {
    toggleClass(e.target)
  } else if ( e.target.matches( '.deleteBtn' ) ) {
    deleteItem(e.target)
  }
}

ul.addEventListener( 'click', listenEvent )
enterBtn.addEventListener( 'click', addToListAfterClick )
input.addEventListener( 'keypress', addToListAfterKeypress )
