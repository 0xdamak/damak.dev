import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollRotate } from "react-scroll-rotate";
import * as icons from "../../public/svg/icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavLink from "./nav-link/nav-link";
import ThemeToggle from "../ui/toggle-button/theme-toggle";
// import ProfileIcon from "../../public/svg/profile-icon";
// import Logo from "../../public/svg/logo";
// import TerminalIcon from "../../public/svg/terminal-icon";
// import WorkIcon from "../../public/svg/work-icon";
// import ProjectIcon from "../../public/svg/project-icon";
// import MailIcon from "../../public/svg/mail-icon";
import classes from "./navigation.module.scss";

export default function Navigation() {
  const { width } = useWindowDimensions();

  const links = [
    {
      href: "/#about",
      icon: <icons.Profile />,
      text: width > 480 ? "about" : null,
    },
    {
      href: "/#arsenal",
      icon: <icons.Terminal />,
      text: width > 480 ? "arsenal" : null,
    },
    {
      href: "/#experience",
      icon: <icons.Work />,

      text: width > 480 ? "experience" : null,
    },
    // {
    //   href: "/#playground",
    //   icon: <ProjectIcon />,
    //   text: width > 480 ? "playground" : null,
    // },
    {
      href: "/#contact",
      icon: <icons.Mail />,
      text: width > 480 ? "contact" : null,
    },
  ];

  return (
    <>
      {width > 480 && (
        <>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
            }}
            className={classes.nav}
          >
            <motion.div
              initial={{ scale: 0, translateX: "-50%" }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className={classes.logo}
            >
              <ScrollRotate method="perc">
                <Link href="/">
                  <a>
                    <icons.Logo width="30px" fill="#ffffff" />
                  </a>
                </Link>
              </ScrollRotate>
            </motion.div>
            <ul>
              {links.map((link, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <NavLink href={link.href}>
                      {link.icon}
                      {link.text}
                    </NavLink>
                  </motion.div>
                );
              })}
            </ul>
            <ThemeToggle style={{ position: "relative", bottom: "4rem" }} />
          </motion.nav>
        </>
      )}

      {width <= 480 && (
        <>
          <motion.nav
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.4,
            }}
            className={classes["mobile-nav"]}
          >
            <motion.div
              initial={{ scale: 0, translateX: "-50%" }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className={classes.logo}
            >
              <ScrollRotate method="perc">
                <Link href="/">
                  <a>
                    <icons.Logo width="20px" fill="#ffffff" />
                  </a>
                </Link>
              </ScrollRotate>
            </motion.div>
            <ThemeToggle
              style={{
                position: "fixed",
                top: "3rem",
                right: "2rem",
              }}
            />
            <ul>
              {links.map((link, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <NavLink href={link.href}>
                      {link.icon}
                      {link.text}
                    </NavLink>
                  </motion.div>
                );
              })}
            </ul>
          </motion.nav>
        </>
      )}
    </>
  );
}
