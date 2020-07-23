import React from "react";
import PropTypes from "prop-types";
import "./hamburger-menu.css";
import styled from "styled-components";
import logo from "./../../assets/svg/real-logo.svg";

/* App.jsx */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        // background: "#02364D",
        background: "#f2f2f2",
        width: "100%",
        color: "white",
        fontFamily: "Segoe UI",
      },
      logo: {
        margin: "0 auto",
        position: "relative",
        left: "-1rem",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease",
      },
    };
    // const menu = ["Share", "Legal", "About", "Notification", "Logout"];
    const menu = ["About", "FAQ", "Blog"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });

    return (
      <div>
        <div style={styles.container}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
          <div style={styles.logo}>
            <img src={logo} alt="" />
          </div>
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        {/* <div style={styles.body}>
          <Footer name="Menu" />
        </div> */}
      </div>
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay,
      },
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "#02364D",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2,

        marginTop: "4.5rem",
      },
      menuList: {
        paddingTop: "3rem",
      },
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "#02364D",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "inherit",
        width: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px",
        position: "relative",
        left: "20px",
        marginTop: "20px",
        marginBottom: "20px",
      },
      line: {
        height: "6px",
        width: "40px",
        background: "#000",
        // background: this.state.color,
        transition: "all 0.2s ease",
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: this.state.open ? "-9px" : "5px",
        position: "relative",
        left: this.state.open ? "3px" : "",
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: this.state.open ? "25px" : "5px",
      },
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

/* Footer.jsx */
function Footer(props) {
  const styles = {
    footer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: props.color,
    },
    line: {
      height: "1px",
      width: "90%",
      background: props.color,
    },
    text: {
      padding: "0.5rem",
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.line}></div>
      <div style={styles.text}>{props.title} &copy;</div>
    </div>
  );
}

Footer.defaultProps = {
  color: "#02364D",
  title: "hello world!",
};

Footer.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

/* Main.jsx */
class HamburgerMenu extends React.Component {
  render() {
    const styles = {
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // height: "100vh",
      },
    };

    return (
      <HamburgerMenuWrapper>
        <div style={styles.main}>
          <App />
        </div>
      </HamburgerMenuWrapper>
    );
  }
}

const HamburgerMenuWrapper = styled.div`
  @media (min-width: 705.1px) {
    display: none;
  }
`;

export default HamburgerMenu;
