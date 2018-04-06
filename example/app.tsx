import * as React from 'react';
import { HelloWorld } from 'react-component-kit'

export interface AppProps {
    
}
export const App: React.SFC<AppProps> = (props) => {
    return (
        <div className={'test-app'}>
            <h3>Here is a demo of your component:</h3>
            <HelloWorld />
        </div>
    )
}

App.defaultProps = {

}
