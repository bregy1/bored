import React from 'react'
import { K, O } from './utils'

interface Props { }

interface State {
    device_ready: boolean
    error: any
}

export default class App extends React.Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            device_ready: false,
            error: null
        }

        document.addEventListener('deviceready', this.on_device_ready.bind(this), false);
    }

    on_device_ready() {
        this.setState
    }

    componentWillMount() {
        document.addEventListener('deviceready', () => {
            this.setState({ device_ready: true })
        })
    }

    componentDidCatch() {
        this.setState({ error: "unkwnonw error occured." })
    }

    render() {
        if (!this.state.device_ready) {
            return K('h1', O, "Loading application")
        }
        else if (this.state.error) {
            return K('h1', O, this.state.error)
        }
        else {
            return K("h1", O, "Hello there...  :)")
        }
    }
}
