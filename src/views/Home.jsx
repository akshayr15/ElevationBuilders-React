import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setConfig } from "../store/config";
import Slider from "../components/Home/slider";
import Content from "../components/Home/content";
import Project from "../components/Home/project";
import Contentmain from "../components/Home/contentmain";
import ContactUs from "../components/Home/contactus";
import Testimonial from "../components/Home/testimonial";
import { Button } from "antd";

function HomePage(props) {
  const { test, setConfigs } = props;

  const handleTest = () => {
    setConfigs({ test: "I am not  a test11111" });
  };
  return (
    <>
      <Slider />
      <Content />
      <Project />
      <Contentmain />
      <ContactUs />
      <Testimonial />
    </>
  );
}

const mapStateToProps = (state) => ({
  test: state.config.test,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setConfigs: bindActionCreators(setConfig, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
