import { SVGProps } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiAmazon, SiVercel
} from 'react-icons/si';

const iconMap = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Git': SiGit,
  'Docker': SiDocker,
  'AWS': SiAmazon,
  'Vercel': SiVercel,
};

interface TechIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof iconMap;
}

export function TechIcon({ name, className = "w-5 h-5", ...props }: TechIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} {...props} />;
} 