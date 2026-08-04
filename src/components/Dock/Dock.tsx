import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { DockContextType } from 'types';
import GitHubIcon from './icons/github';
import LinkedinIcon from './icons/linkedin';
import { MouseProvider } from '../context/MouseProvider';
import DockItem from './DockItem';
import menuData from './menuData';
import EmailIcon from './icons/email';

const DockContext = createContext<DockContextType | null>(null);

export const useDock = () => {
  return useContext(DockContext);
};

const Dock = () => {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    setWidth(ref?.current?.clientWidth);
  }, []);

  return (
    <MouseProvider>
      <footer className="fixed inset-x-0 bottom-6 z-40 flex w-full justify-center print:hidden">
        <DockContext.Provider value={{ hovered, width }}>
          <nav
            ref={ref}
            className="bg-grid dock-shell flex justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ul className="flex h-10 items-end justify-center space-x-2">
              {menuData.map((e, idx) => (
                <DockItem key={`dock-item-${idx}`} route={e.route} label={e.name}>
                  <e.Icon className="dock-icon" aria-hidden="true" />
                </DockItem>
              ))}
              <li className="self-center" aria-hidden="true">
                <hr className="!mx-1 block h-8 w-px border-none bg-[color:var(--site-border-strong)]" />
              </li>
              <DockItem>
                <a
                  className="dock-action"
                  aria-label="Star this project on GitHub"
                  href="https://github.com/aquanow-jeffen"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon className="dock-icon" aria-hidden="true" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="dock-action"
                  aria-label="View me on LinkedIn"
                  href="https://www.linkedin.com/in/jeffenc/"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >
                  <LinkedinIcon className="dock-icon" aria-hidden="true" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="dock-action"
                  aria-label="Send me an email"
                  href="mailto:chenjeffen@gmail.com"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >
                  <EmailIcon className="dock-icon" aria-hidden="true" />
                </a>
              </DockItem>
            </ul>
          </nav>
        </DockContext.Provider>
      </footer>
    </MouseProvider>
  );
};

export default Dock;
