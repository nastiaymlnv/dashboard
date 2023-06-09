import styled, {css} from "styled-components";

const FontProp = css`
    font-family: 'Poppins';
    font-weight: 500;
    letter-spacing: -0.01em;
`;

export const MenuContainer = styled.article`
    height: 100vh;
    padding: 36px 28px 76px;
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const LogoContainer = styled.section`
    display: flex;
    align-items: end;
`;

export const Logo = styled.img`

`;

export const Version = styled.p`
    ${FontProp};
    margin-left: 4px;
    margin-bottom: 7px;
    font-size: 10px;

    color: #838383;
`;

export const MenuList = styled.ul`

`;

export const MenuCategoryIcon = styled.div`
    margin-right: 14px;
    display: flex;
    align-items: center;
`;

export const Arrow = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
`;

export const MenuListItem = styled.li`
    ${FontProp};
    font-size: 14px;
    line-height: 21px;
    color: #9197B3;
    padding: 11px 8px 11px 11px;
    transition: all 0.1s;
    display: flex;
    align-items: center;
    position: relative;

    &:hover{
        cursor: pointer;
        background-color: #5932EA;
        border-radius: 8px;
        color: #FFFFFF;
        stroke: white;
    }

    &:hover ${MenuCategoryIcon} {
        & path{
            stroke: white;
            /* fill: white; */
        }
    }

    &:hover ${Arrow} {
        & path{
            stroke: white;
        }
    }
`;

export const MenuUserContainer = styled.article`
    display: flex;
    align-items: center;
`;

export const UserAvatar = styled.img`

`;

export const UserInfo = styled.div`
    margin-left: 12px;
`;

export const UserName = styled.p`
    ${FontProp};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #000000;
`;

export const UserPosition = styled.p`
    ${FontProp};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #757575;
`;
