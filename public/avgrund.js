var container = document.documentElement,
    popup = document.querySelector( '.avgrund-popup-animate' ),
    cover = document.querySelector( '.avgrund-cover' ),
    currentState = null;

    container.classList.add( 'avgrund-ready' );


function activate( state ) {


    popup.classList.remove( currentState );
    popup.classList.add( 'no-transition' );
    if(state)
        popup.classList.add( state );

    setTimeout( function() {
        popup.classList.remove( 'no-transition' );
        container.classList.add( 'avgrund-active' );
    }, 0 );

    currentState = state;

}

function deactivate() {


    container.classList.remove( 'avgrund-active' );
    popup.classList.remove( 'avgrund-popup-animate' );

}

function disableBlur() {

    document.documentElement.classList.add( 'no-blur' );

}

function show( selector ) {

    popup = document.querySelector( selector );
    popup.classList.add( 'avgrund-popup-animate' );
    activate();
    return this;

}

function hide() {

    deactivate();

}
