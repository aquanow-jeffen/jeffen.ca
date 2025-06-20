import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { DockContextType } from 'types';
import GitHubIcon from './icons/github';
import LinkedinIcon from './icons/linkedin';
import { MouseProvider } from '../context/MouseProvider';
import DockItem from './DockItem';
import menuData from './menuData';
import { useRouter } from 'next/navigation';
import EmailIcon from './icons/email';

const DockContext = createContext<DockContextType | null>(null);

export const useDock = () => {
  return useContext(DockContext);
};

const Dock = () => {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    setWidth(ref?.current?.clientWidth);
  }, []);

  return (
    <MouseProvider>
      <footer className="fixed inset-x-0 bottom-3 sm:bottom-6 z-40 flex w-full justify-center print:hidden px-4 sm:px-0">
        <DockContext.Provider value={{ hovered, width }}>
          <nav
            ref={ref}
            className="bg-grid flex justify-center rounded-md p-3 sm:p-4 w-full sm:w-auto max-w-sm sm:max-w-none"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <ul className="flex h-10 sm:h-10 items-end justify-center space-x-2 sm:space-x-3 w-full sm:w-auto">
              {menuData.map((e, idx) => (
                <DockItem key={`dock-item-${idx}`} route={e.route}>
                  <div onClick={() => router.push(e.route)}>
                    <e.Icon />
                  </div>
                </DockItem>
              ))}
              <li className="self-center" aria-hidden="true">
                <hr
                  className="!mx-3 block h-12 w-px border-none"
                  style={{ backgroundColor: 'rgba(100, 116, 139, 0.3)' }}
                />
              </li>
              <DockItem>
                <div
                  className="relative flex h-full w-full items-center justify-center cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/aquanow-jeffen", "_blank", "noopener,noreferrer");
                  }}
                  aria-label="Star this project on GitHub"
                >
                  <GitHubIcon className="relative h-3/5 w-3/5" aria-hidden="true" />
                </div>
              </DockItem>
              <DockItem>
                <div
                  className="relative flex h-full w-full items-center justify-center cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.linkedin.com/in/jeffenc/", "_blank", "noopener,noreferrer");
                  }}
                  aria-label="View me on LinkedIn"
                >
                  <LinkedinIcon className="relative h-3/5 w-3/5" aria-hidden="true" />
                </div>
              </DockItem>
              <DockItem>
                <div
                  className="relative flex h-full w-full items-center justify-center cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:jeffen@jeffen.me";
                  }}
                  aria-label="Send me an email"
                >
                  <EmailIcon className="relative h-3/5 w-3/5" aria-hidden="true" />
                </div>
              </DockItem>
            </ul>
          </nav>
        </DockContext.Provider>
      </footer>
    </MouseProvider>
  );
};

export default Dock;
