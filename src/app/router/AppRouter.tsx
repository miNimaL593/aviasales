import { createRouter, RouterProvider } from '@tanstack/react-router';



import { routeTree } from './routeTree.gen.ts';
import {FC} from "react";

const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


const AppRouter: FC = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default AppRouter;
