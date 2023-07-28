
import {ButtonWrap, ButtonBtn} from './Button.styled'
export const Button = ({ onClick }) => {
  return (
    <ButtonWrap>
      <ButtonBtn type='button' onClick={onClick}>Load more</ButtonBtn>
    </ButtonWrap>
  )
}
