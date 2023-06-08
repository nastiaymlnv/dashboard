import React from 'react';

import DashboardLogo from "../../assets/img/logo.png";
import ArrowMore from "../../assets/right-arrow.svg";
import DashboardIcon from "../../assets/dashboard-icon.svg";
import ProductIcon from "../../assets/product-icon.svg";
import CustomersIcon from "../../assets/customers-icon.svg";
import IncomeIcon from "../../assets/income-icon.svg";
import PromoteIcon from "../../assets/promote-icon.svg";
import HelpIcon from "../../assets/help-icon.svg";
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
        categoryIcon: DashboardIcon
    },
    {
        categoryName: 'Product',
        categoryIcon: ProductIcon
    },
    {
        categoryName: 'Customers',
        categoryIcon: CustomersIcon
    },
    {
        categoryName: 'Income',
        categoryIcon: IncomeIcon
    },
    {
        categoryName: 'Promote',
        categoryIcon: PromoteIcon
    },
    {
        categoryName: 'Help',
        categoryIcon: HelpIcon
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
                                <MenuCategoryIcon src={item.categoryIcon} />
                                {item.categoryName}
                                {/* fix arrow color change */}
                                {/* <Arrow src={ArrowMore}></Arrow> */}
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