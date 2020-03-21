import withStyles from "../../hoc/withStyles";
import FooterStyles from "./Footer.style";
import BodyCopy from "../../atoms/BodyCopy/BodyCopy";
import LABELS from "../../../constants/labels";
import Link from "next/link";

const Footer = ({ className, page }) => {
  return (
    <div className={className}>
      <footer>
        {page && (
          <Link href={`/?page=${page + 1}`}>
            <BodyCopy component="span" className="nav-item">
              <a>
                {LABELS.NEXT_PAGE} ({page + 1})
              </a>
            </BodyCopy>
          </Link>
        )}
      </footer>
    </div>
  );
};

export default withStyles(Footer, FooterStyles);
