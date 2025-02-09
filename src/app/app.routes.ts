import { Routes} from '@angular/router';
import { MarketComponent } from './market/market.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDescribtionComponent } from './product-describtion/product-describtion.component';

export const routes: Routes = [
    
    { path: '',
      component: MarketComponent,
      title: 'Market'
    
    },

    { path: 'products',
      component: MarketComponent,
      title: 'Market'
    
    },

    
    { path: 'product/:id',
      component: ProductDescribtionComponent,
      title: 'product'
    }, 


    { path: 'register',
    component: RegisterComponent ,
    title: 'Register'
    },


    { path: 'login',
        component: LoginComponent,
        title: 'Login'
    },


    { path: 'cart',
        component: CartComponent,
        title: 'Cart'

    },


    {
      path: '**',
      component: NotFoundComponent,
      title: 'Not Found'
    }
        




];
