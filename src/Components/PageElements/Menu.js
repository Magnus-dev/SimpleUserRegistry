import React, {Component} from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        var home = "/";
        var addUser = "add";
        var active = { color: '#F0F',
        fontWeight: 'bold'}
        return(
            <header>
                <div>
                    <NavLink to={ home }
                        activeStyle={ active }
                        exact={ true }>SmoelenBoek
                    </NavLink>
                </div>
                <div>
                    <NavLink to={ addUser }
                        activeStyle={ active }
                        exact={ true }>Toevoegen
                    </NavLink>
                </div>
            </header>
        );
        }
}