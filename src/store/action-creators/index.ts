import * as ProductsActionCreators from './products.actions'
import * as ModalActionCreators from './modal.actions'
import * as CartActionCreators from './cart.actions'
import * as FavoritesActionCreators from './favorites.actions'


export default {
    ...ProductsActionCreators,
    ...ModalActionCreators,
    ...CartActionCreators,
    ...FavoritesActionCreators,
}