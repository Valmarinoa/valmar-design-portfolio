'use client';

import { socialItems } from '@/data/projects';
import { useTheme } from './providers/theme-context';
import LogoSvg from './svg/LogoSvg'

export default function MobileFooter() {
  const { theme } = useTheme();
  
  return (
    <div className={`md:hidden w-full flex flex-col items-center justify-center h-56 p-3 mt-20 ${theme.nav} z-9999`}> 
      <ul
        className="sm-socials-list list-none m-0 p-0 flex items-center gap-2 justify-evenly w-full"
        aria-label="Social media links"
      >
        {socialItems.map((s, i) => (
          <li key={s.label + i} className="sm-socials-item">
            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`sm-socials-link text-sm ${theme.nav || ''} no-underline relative`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <LogoSvg className={`h-full w-full ${theme.nav || ''} z-9999`} />
      <div className='flex w-full justify-center z-9999'>
        <p className={`text-sm ${theme.nav}`}>© 2026</p>
       
    </div>
      
    </div>
  )
}