import { Helmet } from "react-helmet-async";

const Meta = ({
  title="Headphones - eCommerce MERN app",
  description="We offer the best offers on headphones in the market",
  keywords="headphones, buy headphones, best offer headphones",
}: {
  title?: string;
  description?: string;
  keywords?: string;
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};


export default Meta;
