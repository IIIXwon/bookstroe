const React = require('react')
const {Link} = require('react-dom')

class Cart extends React.Component {
    render() {
        return (
            <div>
                {(Object.keys(this.props.route.cartItems).length === 0) ?
                <p>카드에 담은 상품이 없습니다.</p> : ''}
                <ul>
                    {Object.keys(this.props.route.cartItems).map((item, index, list) => {
                        return (
                            <li key={item}>
                                {this.props.route.products[item].title}
                                - {this.props.route.cartItems[item]}
                            </li>
                        )
                    })}
                </ul>
                <Link className="btn btn-primary" to="/checkout">결제하기</Link>
                <Link className="btn btn-info" to="/">홈</Link>
            </div>
        )
    }
}