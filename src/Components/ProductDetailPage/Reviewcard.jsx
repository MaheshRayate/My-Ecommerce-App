import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Reviewcard = ({ user, rating, comment }) => {
  return (
    <article className="border border-gray-200 my-2 px-5 mx-2">
      <h1 className="font-nata-sans font-semibold">
        {user?.firstName} {user?.lastName}
      </h1>
      <div>
        <Rating name="read-only" value={rating} readOnly />
      </div>
      <p className="">{comment}</p>
    </article>
  );
};

export default Reviewcard;
