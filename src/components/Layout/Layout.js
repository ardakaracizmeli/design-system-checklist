import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ tCore, children }) => {
  const { pathname } = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Header tCore={tCore} />
      <TransitionGroup>
        {mounted && (
          <CSSTransition
            key={pathname}
            timeout={{ enter: 600, exit: 0 }}
            classNames="fade"
          >
            <div>
              {children}
              {pathname !== "/contact" &&
                pathname !== "/share" &&
                pathname !== "/export/[id]" && <Footer tCore={tCore} />}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default Layout;
