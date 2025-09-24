import "./UserInfo.scss";
const UserInfo = (props) => {
  let { name } = props;

  return (
    <a href="https://gdalex.netlify.app/">
      <div className="user-info">
        <div className="user-info-avatar" />
        <div className="user-info-details"></div>
      </div>
    </a>
  );
};

export default UserInfo;
