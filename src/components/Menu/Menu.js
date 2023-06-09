import React from 'react';

import DashboardLogo from "../../assets/img/logo.png";
import {ReactComponent as ArrowMore} from "../../assets/right-arrow.svg";
import {ReactComponent as DashboardIcon} from "../../assets/dashboard-icon.svg";
import {ReactComponent as ProductIcon} from "../../assets/product-icon.svg";
import {ReactComponent as CustomersIcon} from "../../assets/customers-icon.svg";
import {ReactComponent as IncomeIcon} from "../../assets/income-icon.svg";
import {ReactComponent as PromoteIcon} from "../../assets/promote-icon.svg";
import {ReactComponent as HelpIcon} from "../../assets/help-icon.svg";
import Avatar from "../../assets/img/userpic.png";

import {
    MenuContainer,
    LogoContainer,
    Logo,
    Version,
    MenuList,
    MenuListItem,
    MenuCategoryIcon,
    Arrow,
    MenuUserContainer,
    UserAvatar,
    UserInfo,
    UserName,
    UserPosition
} from "./Menu.style";

const version = "v.01";
const menuListItems = [
    {
        categoryName: 'Dashboard',
        categoryIcon: <DashboardIcon />
    },
    {
        categoryName: 'Product',
        categoryIcon: <ProductIcon />
    },
    {
        categoryName: 'Customers',
        categoryIcon: <CustomersIcon />
    },
    {
        categoryName: 'Income',
        categoryIcon: <IncomeIcon />
    },
    {
        categoryName: 'Promote',
        categoryIcon: <PromoteIcon />
    },
    {
        categoryName: 'Help',
        categoryIcon: <HelpIcon />
    }
];

const Menu = () => {
    return (
        <MenuContainer>
            <LogoContainer>
                <Logo src={DashboardLogo} alt="Dashboard logo" />
                <Version>
                    {version}
                </Version>
            </LogoContainer>
            <MenuList>
                {
                    menuListItems.map(item => {
                        return (
                            <MenuListItem>
                                <MenuCategoryIcon>
                                    {item.categoryIcon}
                                </MenuCategoryIcon>
                                    {item.categoryName}
                                <Arrow>
                                    <ArrowMore />
                                </Arrow>
                            </MenuListItem>
                        )
                    })
                }
            </MenuList>
            <MenuUserContainer>
                <UserAvatar src={Avatar} alt="User avatar" />
                <UserInfo>
                    <UserName>
                        Evano
                    </UserName>
                    <UserPosition>
                        Project Manager
                    </UserPosition>
                </UserInfo>
            </MenuUserContainer>
        </MenuContainer>
    )
}

export default Menu;