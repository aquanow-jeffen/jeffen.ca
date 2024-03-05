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
      <footer className="fixed inset-x-0 bottom-6 z-40 flex w-full justify-center print:hidden">
        <DockContext.Provider value={{ hovered, width }}>
          <nav
            ref={ref}
            className="bg-grid flex justify-center rounded-md p-4"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <ul className="flex h-10 items-end justify-center space-x-3">
              {menuData.map((e, idx) => (
                <DockItem key={`dock-item-${idx}`} route={e.route}>
                  <div onClick={() => router.push(e.route)}>
                    <e.Icon />
                  </div>
                </DockItem>
              ))}
              <li className="self-center" aria-hidden="true">
                <hr className="!mx-2 block h-12 w-px border-none bg-[hsl(0,0%,78%)]" />
              </li>
              <DockItem>
                <a
                  className="relative flex h-full w-full items-center justify-center"
                  aria-label="Star this project on GitHub"
                  href="https://github.com/aquanow-jeffen"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >
                  <GitHubIcon className="relative h-3/5 w-3/5" aria-hidden="true" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="relative flex h-full w-full items-center justify-center"
                  aria-label="View me on LinkedIn"
                  href="https://www.linkedin.com/in/jeffenc/"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >
                  <LinkedinIcon className="relative h-3/5 w-3/5" aria-hidden="true" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="relative flex h-full w-full items-center justify-center"
                  aria-label="View me on LinkedIn"
                  href="mailto:chenjeffen@gmail.com"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >
                  <EmailIcon className="relative h-3/5 w-3/5" aria-hidden="true" />
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
