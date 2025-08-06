import { Fragment, useContext, useEffect, useState } from 'react';
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
    SimpleSpinner,
    Spinner
} from "./navigation.styles";

import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { CategoriesContext } from "../../contexts/categories.context";

import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import Footer from '../footer/footer.component';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    const { categoriesMap } = useContext(CategoriesContext);

    const [loading, setLoading] = useState(true);
     useEffect(() => {
        const categories = Object.keys(categoriesMap).length;
        if (categories) {    
            setLoading(false);
        }
    }, [categoriesMap]);

    // console.log('currentUser', currentUser);

    // not needed as we are using auth listener to set current user
    // const signOutHandler = async () => {
    //     await signOutUser();
    //     setCurrentUser(null);
    // }
    
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/ecom">
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/ecom/shop">
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/ecom/auth">
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {
                    isCartOpen && <CartDropdown />
                }
            </NavigationContainer>
            {loading ? (
                <SimpleSpinner style={{ height: '100px' }}>
                    <Spinner></Spinner>
                </SimpleSpinner>
            ) : (
                <Outlet />
            )}
            <Footer />
        </Fragment>
    )
}

export default Navigation;