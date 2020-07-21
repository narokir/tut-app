import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import NavMenu from "./NavMenu";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="bg-black fixed top-0 left-0 w-full h-full z-50 bg-transparency"
              onClick={() => setShowMenu(false)}
            />
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="h-full top-0 w-4/5 left-0 bg-white fixed z-50 shadow p-4">
              <NavMenu closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Nav;
