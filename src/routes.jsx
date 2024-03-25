import { Home, OurOffer, SummerCamp, OurExperts, Contact } from '@/pages';

export const routes = [
  {
    name: 'home',
    path: '/home',
    element: <Home />,
  },
  {
    name: 'Our Offers',
    path: '/our-offers',
    element: <OurOffer />,
  },
  {
    name: 'Summer Camp 2024',
    path: '/summer-camp',
    element: <SummerCamp />,
  },
  {
    name: 'Our Experts',
    path: '/our-eperts',
    element: <OurExperts />,
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
  },
];

export default routes;
