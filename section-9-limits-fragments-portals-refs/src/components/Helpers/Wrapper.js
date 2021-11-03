// For dealing with "div soup"

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;

// In the real world, we won't even use this, we will probably use the react built in wrapper,
// <React.Fragment></React.Fragment>
