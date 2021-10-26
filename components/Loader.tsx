import Spin from "antd/lib/spin";

const Loader = () => {
  return (
    <Spin tip="Loading...">
      <div style={{ width: "100%", height: "100vh" }}></div>
    </Spin>
  );
};

export default Loader;