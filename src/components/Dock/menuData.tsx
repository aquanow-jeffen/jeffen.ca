import HomeIcon from './icons/home';
import WritingIcon from './icons/writing';
import ProjectIcon from './icons/project';
import PhotoIcon from './icons/photo';
import ResumeIcon from './icons/resume';
import { IconProps } from 'types';

interface Link {
  type: 'link';
  name: string;
  route: string;
  centerX: number;
  Icon: React.FC<IconProps>;
}

const menuData: Array<Link> = [
  {
    type: 'link',
    name: 'Home',
    route: '/',
    Icon: HomeIcon,
    centerX: 0,
  },
  {
    type: 'link',
    name: 'Writing',
    route: '/writing',
    Icon: WritingIcon,
    centerX: 0,
  },
  {
    type: 'link',
    name: 'Photos',
    route: '/photo',
    Icon: PhotoIcon,
    centerX: 0,
  },
  {
    type: 'link',
    name: 'Resume',
    route: '/resume',
    Icon: ResumeIcon,
    centerX: 0,
  },
];

export default menuData;
