import React, {Component    } from 'react'

class ComponentFakeBooks extends Component {
    render (){
        const { showApi,showFake } = this.props
        return (
            <div className="bs-fake">
                {showApi.slice(0, showFake).map((item) => 
                    <div key={item} className="block block--loading"></div>
                )}
            </div>
        )
    }
}

export default ComponentFakeBooks