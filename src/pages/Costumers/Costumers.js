import React from "react";

import Search from "../../components/Search/Search";

import {
    Container,
    PageNameContainer,
    TitleContainer,
    Title,
    TitleStatus
} from "./Costumers.style";

const Costumers = () => {
    return (
        <Container>
            <PageNameContainer>
                <TitleContainer>
                    <Title>
                        All Costumers
                    </Title>
                    <TitleStatus>
                        Active Members
                    </TitleStatus>
                </TitleContainer>
                <Search />
            </PageNameContainer>
            {/* Table */}
        </Container>
    )
}

export default Costumers;