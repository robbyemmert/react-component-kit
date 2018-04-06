import * as React from 'react';

export interface AppProps {
    
}
export const App: React.SFC<AppProps> = (props) => {
    return (
        <div className={'test-app'}>
            Hello Jack
        </div>
    )
}

App.defaultProps = {

}
