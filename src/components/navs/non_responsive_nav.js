import React, { useEffect, useState } from "react";
import * as styles from "../../../styles/layout-style/header.module.css";
import { Link, navigate } from "gatsby";
const InvisibleStaticDiv = () => {
  return <div style={{ minHeight: 140, width: "100%" }}></div>;
};
const None_Responsive_Nav = ({ subMenu }) => (
  <div className={styles.Non_Responsive_Nav}>
    <header className={styles.main_wrapper}>
      <div className={styles.contact_buttons}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginRight: 20 }}
          >
            <i
              style={{ color: "#FFFFFF", marginRight: 7 }}
              className="fas fa-phone-alt"
            ></i>
            <span style={{ color: "#FFFFFF" }}>+44 7778029423</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              style={{ color: "#FFFFFF", marginRight: 7 }}
              className="far fa-envelope"
            ></i>
            <span style={{ color: "#FFFFFF" }}>
              admission@richmondcollege.co.uk
            </span>
          </div>
        </div>

        <div className={styles.contact_buttons_item} style={{ padding: 0 }}>
          <Link
            to="/contact-us"
            className={styles.linkHref}
            style={{ padding: "3px", color: "white" }}
          >
            <span style={{ marginRight: 6, fontSize: "10px" }}>Contact Us</span>
            <i style={{ fontSize: "10px" }} class="fas fa-paper-plane"></i>
          </Link>
        </div>
      </div>

      <div className={styles.logo_links}>
        <div
          style={{
            position: "relative",
            paddingBottom: 10,
          }}
        >
          <img
            className={styles.header_company_logo}
            onClick={() => {
              navigate("/");
            }}
            src="/Frame 1 (9).png"
            style={{
              marginRight: 50,
              width: "22rem",
              background: "#FBFBFB",
            }}
          ></img>
          {/* <span
            style={{
              alignSelf: "end",
              position: "absolute",
              left: 80,
              bottom: 8,
              fontSize: 15,
              color: "#191970",
              //   fontWeight: 600,
            }}
          >
            Advanced Education
          </span> */}
        </div>{" "}
        <ul className={styles.links}>
          {subMenu.map((item) => {
            return !item.props ? (
              <li style={{ padding: "0 0 5px 0" }}>
                {item.static ? (
                  <Link
                    to={item.link}
                    className={styles.linkHref}
                    style={{
                      background: "#FBC933",
                      marginLeft: 25,
                      padding: "8px 15px",
                    }}
                  >
                    <span>{item.type}</span>{" "}
                  </Link>
                ) : (
                  <Link to={item.link} className={styles.linkHref}>
                    <span>{item.type}</span>{" "}
                  </Link>
                )}
              </li>
            ) : (
              <li style={{ padding: "0 0 5px 0" }}>
                <Link className={styles.linkHref}>
                  <span>{item.type}</span> <i class="fas fa-caret-down"></i>
                </Link>

                <ul className={styles.subLinks}>
                  {item.props.map((subItem) => {
                    return (
                      <li>
                        <Link
                          className={styles.sublinkHref}
                          to={"/" + subItem.link}
                        >
                          {subItem.title}
                          <i class="fas fa-chevron-right"></i>{" "}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
    <InvisibleStaticDiv />
  </div>
);

export default None_Responsive_Nav;
