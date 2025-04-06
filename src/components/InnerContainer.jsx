import styles from "./stylesheets/innercontainer.module.css";
export const InnerContainer = ({ children }) => {
  return <div className={`col ${styles.inner} `}>{children}</div>;
};
