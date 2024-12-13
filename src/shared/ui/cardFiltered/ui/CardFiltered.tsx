import { FC, PropsWithChildren} from "react";
import './CardFiltered.scss'

const CardFiltered: FC<PropsWithChildren> = ({children}) => {

  return (
    <div className='card'>
      <div className='card__container'>
        <div className='card__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
        {children}
      </div>
    </div>
  )
}

export default CardFiltered



