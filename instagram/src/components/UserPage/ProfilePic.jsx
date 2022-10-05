import {
  PictureBox,
  ProfilePicture,
} from "../../styles/UserPage/ProfilePicStyle";

function ProfilePic({ profileImg }) {
  return (
    <PictureBox>
      {/* 사진 박스 */}
      <ProfilePicture src={profileImg} />
    </PictureBox>
  );
}

export default ProfilePic;
