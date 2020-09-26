import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Image } from "grommet";
import "./index.scss";

const ProductBasicDetails = ({ productId }) => {
  return (
    <Box fill overflow={{ horizontal: 'hidden' }}>
      <Box
        fill
        direction="row"
        flex
        background={"#fff"}

      >
        <Box width="medium" align="start" gap="medium" margin="small">
          <div className="product-img-wrapper">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70"
              alt="product image"
              fit="contain"
              className="product-img img-responsive"
            />
          </div>
        </Box>
        <Box flex align="start" margin="small">
          <div className="product-info">
            <h6 className="font-weight-light">APPLE</h6>
            <Heading level={2}>
              Smartphone iPhone SE 64GB
          </Heading>
            <p>Product ID: {productId}</p>
            <h4 className="price">$ 429.990</h4>
            <h5 className="bold">Un Iphone increíble. Por menos</h5>
            <p>El iPone SE llegó con todo:el chip más potente en el tamaño más popular, a un precio muy conveniente. Justo lo que estabas esperando</p>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

ProductBasicDetails.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductBasicDetails;
