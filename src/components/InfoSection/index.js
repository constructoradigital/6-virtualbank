import React, { useState } from 'react'
import { Button } from 'react-scroll'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrapp, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

export const InfoSection = () => {
    
    
    
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>TopLine</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button to="home" />
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapp>
                                <Img/>
                            </ImgWrapp>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
