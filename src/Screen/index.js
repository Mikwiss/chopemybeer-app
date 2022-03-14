import { string, node, boolean } from "prop-types";
import { Title, Subtitle } from "./styles";

export default function Screen({ title, navigation, isHome = false }) {
  return (
    <>
      <Title>Chope my beer</Title>
      <Subtitle isHome={isHome}>{title}</Subtitle>
      <nav>{navigation}</nav>
    </>
  );
}

Screen.propTypes = {
  title: string.isRequired,
  navigation: node,
  isHome: boolean,
};
