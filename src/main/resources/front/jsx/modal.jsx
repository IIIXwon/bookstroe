const React = require('react')
const { Link } = require('react-router')

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.style = {
            position: 'fixed',
            top: '20%',
            right: '20%',
            bottom: '20%',
            left: '20%',
            width: 450,
            height: 400,
            padding: 20,
            bowShadow: '0px 0px 150px 130px rgba(0,0,0,0.5)',
            overflow: 'auto',
            background: '#fff'
        }
    }
    render() {
        return (
            <div style={this.style}>
                <p><Link to={this.props.returnTo}>뒤로 가기</Link></p>
                {this.props.children}
            </div>
        )
    }
}

module.exports = Modal