import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a
                    href={"/admin/dashboard"}
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                    href={"/admin/dashboard"}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                    href={"/admin/dashboard"}
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Designed by{" "}
            <a
                href={"/admin/dashboard"}
            >
              LOCFUHO
            </a>
            . Coded by{" "}
            <a
                href={"/admin/dashboard"}
            >
              FIXBUG
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
