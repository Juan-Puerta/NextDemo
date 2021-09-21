import { useRouter } from "next/router";
import axios from "axios";
import Container from "../../components/Container";

const userProfile = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={user.first_name + " " + user.last_name}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

userProfile.getInitialProps = async (ctx) => {
  const response = await axios.get(
    `https://reqres.in/api/users/${ctx.query.id}`
  );
  //const res = await response.json();
  console.log(response.data.data);
  return { user: response.data.data };
};

export default userProfile;
