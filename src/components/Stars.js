import React from 'react';
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs';
import styled from 'styled-components'
const Stars = ({stars,reviews}) => {

{/* <span>
{
stars>=1 ? <BsStarFill/> : stars>=0.5 ?<BsStarHalf/> :<BsStar/>
}
</span> */}

   
const tempStars=Array.from({length:5},(_,index)=>{
  //index 0-4
  const number=index+0.5;
  return<span key={index}>
  {
  stars>=index+1 ? <BsStarFill/> : stars>=number ?<BsStarHalf/> :<BsStar/>
  }
  </span>
                          
});

  return (
    <Wrapper>
      <div className='stars'>
        {tempStars} </div>
      <p className='reviews'>({reviews} Customer reviews)</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars