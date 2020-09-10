import React, { Component } from 'react';
import FullPageContainer from 'pages/components/FullPageContainer';
import { Link } from 'react-router-dom';

class Game extends Component {

    render() { 
        return ( 
            <FullPageContainer className="flex justify-center align-items-center">
                <div>
                    <span>
                        Pagina juego
                    </span>
                    <Link to="/">
                        Volver
                    </Link>
                </div>
            </FullPageContainer>
        );
    }
}
 
export default Game;