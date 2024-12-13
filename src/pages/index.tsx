import 'normalize.css';
import React from "react";
import {createFileRoute} from "@tanstack/react-router";
import CardFiltered from "../shared/ui/cardFiltered/ui/CardFiltered.tsx";
import {Checkbox} from "../shared/ui/checkbox";


const PageComponent: React.FC = () => {

  return (
    <div  style={{
      display: 'flex',
      width: '100vw',
      margin: '40px'
    }}>
     <CardFiltered>
       <Checkbox checked={false} text='Все' onChange={() => console.log('Все')} />
       <Checkbox checked={false} text='Без пересадок' onChange={() => console.log('Без пересадок')} />
       <Checkbox checked={true} text='1 пересадка' onChange={() => console.log('1 пересадка')} />
       <Checkbox checked={false} text='2 пересадки' onChange={() => console.log('2 пересадки')} />
       <Checkbox checked={false} text='3 пересадки' onChange={() => console.log('3 пересадки')} />
     </CardFiltered>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: PageComponent,
});
