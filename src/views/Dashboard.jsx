import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setConfig } from "../store/config";
import List from "../components/dashboard/List";
import Form from "../components/dashboard/form";
import FormList from "../components/dashboard/BannerList";
function DashboardPage(props) {
  return (
    <>
      <List />
      <FormList />
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
