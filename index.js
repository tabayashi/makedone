export const makedone = (done, times = 2) => {
  let called = 0;
  return _ => (++called == times) && done();
};

export default makedone;
