import { Code, Lock, Zap, Server, Clock } from '@geist-ui/react-icons';
import Shield from '@/components/Shield';
import { NavBarProps } from 'types/interfaces';

const features: NavBarProps[] = [
  {
    feature:
      "Password protect any website only with a single line of code. That's it, really!!",
    children: <Code />,
  },
  {
    feature:
      'No database, backend or server side code is required. Everything is taken care by RobustaCrypt',
    children: <Server />,
  },
  {
    feature:
      'From signup to password protecting your site, it takes only 3 minutes!',
    children: <Clock />,
  },
  {
    feature:
      'The quickest way to set up password login page, hosted on RobustaCrypt',
    children: <Shield />,
  },
  {
    feature:
      'RobustaCrypt is framework agnostic. It works with the framework of your choice',
    children: <Zap />,
  },
  {
    feature:
      'RobustaCrypt hashes and encrypts data multiple times so that your data stays highly secure',
    children: <Lock />,
  },
];

export default features;
