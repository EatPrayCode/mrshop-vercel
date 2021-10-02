import { Menu } from './menu.model'; 

export const menuItems = [ 
    new Menu (20, 'ADMIN_NAV.PRODUCTS', null, null, 'grid_on', null, true, 0),  
    new Menu (21, 'ADMIN_NAV.CATEGORIES', '/admin/products/categories', null, 'category', null, false, 20), 
    new Menu (22, 'ADMIN_NAV.PRODUCT_LIST', '/admin/products/product-list', null, 'list', null, false, 20), 
    new Menu (23, 'ADMIN_NAV.PRODUCT_DETAIL', '/admin/products/product-detail', null, 'remove_red_eye', null, false, 20),  
    new Menu (24, 'ADMIN_NAV.ADD_PRODUCT', '/admin/products/add-product', null, 'add_circle_outline', null, false, 20), 
    new Menu (30, 'ADMIN_NAV.SALES', null, null, 'monetization_on', null, true, 0), 
    new Menu (31, 'ADMIN_NAV.ORDERS', '/admin/sales/orders', null, 'list_alt', null, false, 30), 
    new Menu (32, 'ADMIN_NAV.TRANSACTIONS', '/admin/sales/transactions', null, 'local_atm', null, false, 30),  
    new Menu (40, 'ADMIN_NAV.USERS', '/admin/users', null, 'group_add', null, false, 0),   
    new Menu (50, 'ADMIN_NAV.CUSTOMERS', '/admin/customers', null, 'supervisor_account', null, false, 0),  
    new Menu (110, 'ADMIN_NAV.SUPPORT', '/admin/support', null, 'support', null, false, 0)
]