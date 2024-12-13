import 'normalize.css';
import React from "react";
import {createFileRoute} from "@tanstack/react-router";


const PageComponent: React.FC = () => {

  return (
    <>

    </>
  )
}

export const Route = createFileRoute('/')({
  component: PageComponent,
});
