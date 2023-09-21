import React from "react";
import RouterScreen from "../RouterScreen";
import { withOrientationChange } from "react-device-detect";
import RotateModal from "../../components/RotateModal";

const App = (props) => {
  const { isPortrait } = props;
  return (
    <>
      <RouterScreen />
      <RotateModal isOpen={isPortrait} />
    </>
  );
};

export default withOrientationChange(App);
