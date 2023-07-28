import { InfinitySpin } from 'react-loader-spinner';
import {LoaderSection} from './Loader.styled'

export const Loader = () => {
  return (
    <LoaderSection>
      <InfinitySpin
        width='200'
        color="#774868"
      />
    </LoaderSection>)
}

