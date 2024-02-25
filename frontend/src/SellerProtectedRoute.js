//import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ isSeller,children }) => {
  //const { loading, isAuthenticated } = useSelector((state) => state.user);
    if (!isSeller) {
      return <Navigate to={`/`} replace />;
    }
    return children;
  }


export default SellerProtectedRoute;