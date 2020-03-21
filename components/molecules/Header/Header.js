
import withStyles from "../../hoc/withStyles";
import HeaderStyles from "./Header.style";
import BodyCopy from "../../atoms/BodyCopy/BodyCopy";
import LABELS from "../../../constants/labels";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import Button from '../../atoms/Button/Button';
const Header = props => {
  const { className, title, description, backButton } = props;
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <nav>
        {backButton && (
          <Button  type="button" onClick={() => Router.back()} ariaLabel={LABELS.MORE} className="back-button"> &#x2b05; </Button>
        )}
        <Link href="/">
          <a>
            <BodyCopy component="span" className="main-title">
              {LABELS.HACKER_NEXT}
            </BodyCopy>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default withStyles(Header, HeaderStyles);
