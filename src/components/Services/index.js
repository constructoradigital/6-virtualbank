import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon4 from '../../images/svg-4.svg'
import Icon5 from '../../images/svg-5.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

export const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon5}/>
                        <ServicesH2>Premium benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}
