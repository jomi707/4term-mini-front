import ProfilePic from "./ProfilePic";
import HeaderSection from "./HeaderSection";
import { HeaderContainer } from "../../styles/UserPage/UserHeaderStyle";

function UserHeader() {
  return (
    <HeaderContainer>
      <ProfilePic />
      <HeaderSection />
    </HeaderContainer>
  );
}

export default UserHeader;
